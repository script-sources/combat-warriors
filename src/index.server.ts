import { Players, ReplicatedStorage } from "@rbxts/services";
import type * as Linoria from "@script-ts/linorialib";
import { Library } from "@script-ts/linorialib/out/library";
import { Destructible, MeleeData, Node, RangeData } from "types";

if (_G["combat-warriors"]) throw "This program is already running!";
else _G["combat-warriors"] = true;

/************************************************************
 * CONFIGURATIONS
 * Description: User-defined settings and configurations
 * Last updated: Feb. 14, 2024
 ************************************************************/
const MeleeData = new Map<string, MeleeData>([["Bo Staff", { range: 14, duration: 0.25 }]]);
const RangeData = new Map<string, RangeData>([["Crossbow", { speed: 100, gravity: 0.5 }]]);

/************************************************************
 * VARIABLES
 * Description: Variables referenced globally in the script
 * Last updated: Feb. 14, 2024
 ************************************************************/
const LocalPlayer = Players.LocalPlayer;

/************************************************************
 * UTILITIES
 * Description: Helper functions and classes
 * Last updated: Feb. 14, 2024
 ************************************************************/
const repo = "https://raw.githubusercontent.com/scripts-ts/LinoriaLib/main/out/";
const {
	Builder,
	Window,
	Page,
	Groupbox,
	Tabbox,
	Tab,
	DependencyBox,
	Label,
	Toggle,
	Slider,
	Dropdown,
	MultiDropdown,
	Divider,
	Spacer,
	KeyPicker,
	ColorPicker,
} = loadstring(game.HttpGet(repo + "init.lua"))() as typeof Linoria;
const library = loadstring(game.HttpGet(repo + "library.lua"))() as Library;
const savemanager = loadstring(game.HttpGet(repo + "addons/savemanager.lua"))();
const thememanager = loadstring(game.HttpGet(repo + "addons/thememanager.lua"))();

class Bin {
	private head: Node | undefined;
	private tail: Node | undefined;

	/**
	 * Adds an item into the Bin. This can be a:
	 * - `() => unknown`
	 * - RBXScriptConnection
	 * - thread
	 * - Object with `.destroy()` or `.Destroy()`
	 */
	public add<T extends Destructible>(item: T): T {
		const node: Node = { item };
		this.head ??= node;
		if (this.tail) this.tail.next = node;
		this.tail = node;
		return item;
	}

	/**
	 * Adds multiple items into the Bin. This can be a:
	 * - `() => unknown`
	 * - RBXScriptConnection
	 * - thread
	 * - Object with `.destroy()` or `.Destroy()`
	 */
	public batch<T extends Destructible[]>(...args: T): T {
		for (const item of args) {
			const node: Node = { item };
			this.head ??= node;
			if (this.tail) this.tail.next = node;
			this.tail = node;
		}
		return args;
	}

	/**
	 * Destroys all items currently in the Bin:
	 * - Functions will be called
	 * - RBXScriptConnections will be disconnected
	 * - threads will be `task.cancel()`-ed
	 * - Objects will be `.destroy()`-ed
	 */
	public destroy(): void {
		while (this.head) {
			const item = this.head.item;
			if (typeIs(item, "function")) {
				item();
			} else if (typeIs(item, "RBXScriptConnection")) {
				item.Disconnect();
			} else if (typeIs(item, "thread")) {
				task.cancel(item);
			} else if ("destroy" in item) {
				item.destroy();
			} else if ("Destroy" in item) {
				item.Destroy();
			}
			this.head = this.head.next;
		}
	}

	/**
	 * Checks whether the Bin is empty.
	 */
	public isEmpty(): boolean {
		return this.head === undefined;
	}
}

declare const debug: ExecutorDebug;
const req = (() => {
	const Nevermore = require(ReplicatedStorage.WaitForChild("Framework").WaitForChild("Nevermore") as ModuleScript);
	const _require = rawget(Nevermore, "_require") as (...args: unknown[]) => unknown;
	const modules = debug.getupvalue(_require, 2) as Map<string, unknown>;
	assert(type(modules) === "table");
	assert(getmetatable(modules) !== undefined);

	return <T>(moduleName: string): T => {
		let module: ModuleScript | undefined;
		while (module === undefined) {
			const object = modules.get(moduleName);
			if (typeIs(object, "Instance") && object.IsA("ModuleScript")) module = object;
			task.wait();
		}
		setthreadidentity(2);
		const result = getrenv().require(module);
		setthreadidentity(7);
		return result as T;
	};
})();

interface StaminaHandler {
	getDefaultStamina(): {
		getMaxStamina(): number;
		setStamina(value: number): void;
	};
}
interface WeaponMetadata {
	[key: string]: unknown;
}

const StaminaHandler = req<StaminaHandler>("DefaultStaminaHandlerClient");
const WeaponMetadata = req<WeaponMetadata>("WeaponMetadata");

/************************************************************
 * COMPONENTS
 * Description: Classes for specific entities/objects
 * Last updated: Feb. 14, 2024
 ************************************************************/
class BaseComponent<T extends Instance> {
	protected bin = new Bin();

	constructor(protected readonly instance: T) {}

	/**
	 * Terminates the component and all functionality.
	 */
	public destroy(): void {
		this.bin.destroy();
	}
}

class HumanoidComponent extends BaseComponent<Model> {
	public readonly root: BasePart;
	public readonly humanoid: Humanoid;

	constructor(instance: Model) {
		super(instance);
		const name = instance.Name;
		const root = instance.WaitForChild("HumanoidRootPart") as BasePart | undefined;
		if (!root) throw `[HumanoidComponent]: '${name}' does not have a HumanoidRootPart`;
		const humanoid = instance.WaitForChild("Humanoid") as Humanoid | undefined;
		if (!humanoid) throw `[HumanoidComponent]: '${name}' does not have a Humanoid`;

		this.root = root;
		this.humanoid = humanoid;

		const { bin } = this;
		bin.batch(
			humanoid.Died.Connect(() => this.destroy()),
			instance.AncestryChanged.Connect((_, parent) => parent === undefined && this.destroy()),
		);
	}
}

class CharacterComponent extends HumanoidComponent {
	public readonly id: string;
	public readonly player: Player;

	protected tools: Set<Tool>;
	protected equipped: Tool | undefined;
	protected backpack: Backpack;

	constructor(player: Player, instance: Model) {
		super(instance);

		const id = player.Name + " @" + player.DisplayName;
		const tools = new Set<Tool>();
		const backpack = player.WaitForChild("Backpack") as Backpack | undefined;
		if (!backpack) throw `[CharacterComponent]: '${id}' does not have a Backpack`;

		this.id = id;
		this.player = player;

		this.tools = tools;
		this.equipped = undefined;
		this.backpack = backpack;

		const { bin } = this;
		bin.add(backpack.ChildAdded.Connect((child) => this._onBackpackChild(child)));
	}

	/**
	 * Called when a tool is added to the character's backpack.
	 */
	protected onTool(tool: Tool) {}

	/**
	 * Called when a Melee is added to the character's backpack.
	 */
	protected onMelee(tool: Tool) {}

	/**
	 * Called when a Ranged is added to the character's backpack.
	 */
	protected onRanged(tool: Tool) {}

	/**
	 * Called when a tool is equipped.
	 */
	protected onEquip() {}

	/**
	 * Handles the addition of a tool to the character's backpack.
	 */
	private _onBackpackChild(tool: Instance): void {
		if (!tool.IsA("Tool")) return;

		const tools = this.tools;
		if (tools.has(tool)) return;
		tools.add(tool);

		const id = tool.GetAttribute("ItemId");
		print(id);
		task.defer(() => this.onTool(tool));

		const { backpack, bin, instance } = this;
		let previous: Instance | undefined = backpack;
		bin.add(
			tool.AncestryChanged.Connect(() => {
				const parent = tool.Parent;
				if (parent !== previous) {
					if (parent === backpack) {
						if (this.equipped === tool) this.equipped = undefined;
					} else if (parent === instance) {
						this.equipped = tool;
					}
					previous = parent;
					this.onEquip();
				}
			}),
		);
	}
}

class EntityComponent extends CharacterComponent {
	constructor(player: Player, instance: Model) {
		super(player, instance);
	}

	protected onTool(tool: Tool): void {
		super.onTool(tool);
	}
}

class PlayerComponent extends BaseComponent<Player> {
	public readonly id: string;
	public character?: EntityComponent;

	constructor(player: Player) {
		super(player);
		this.id = player.Name + " @" + player.DisplayName;

		const char = player.Character;
		if (char) this.onCharacter(char);

		const { bin } = this;
		bin.batch(
			player.CharacterAdded.Connect((character) => this.onCharacter(character)),
			player.CharacterRemoving.Connect(() => this.character?.destroy()),
			Players.PlayerRemoving.Connect((plr) => plr === player && this.destroy()),
		);
	}

	protected onCharacter(character: Model) {
		this.character = new EntityComponent(this.instance, character);
	}
}

/************************************************************
 * CONTROLLERS
 * Description: Singletons that are used once
 * Last updated: Feb. 14, 2024
 ************************************************************/

namespace PlayerController {
	const onPlayer = (player: Player) => new PlayerComponent(player);

	export function __init() {
		// for (const player of Players.GetPlayers()) onPlayer(player);
		// Players.PlayerAdded.Connect(onPlayer);
		new PlayerComponent(LocalPlayer);
	}
}

/************************************************************
 * INTERFACE
 * Description: User interface instantiation
 * Last updated: Feb. 14, 2024
 ************************************************************/
new Builder()
	.library(library)
	.windows([
		new Window()
			.title("Muffet Hub | Combat Warriors")
			.centered(true)
			.autoShow(true)
			.withFadeTime(0)
			.pages([
				new Page()
					.title("Gameplay")
					.left([
						new Groupbox().title("Auto Parry").elements([
							new Toggle("gameplay.auto_parry.enabled")
								.title("Enabled")
								.tooltip("Automatically parry attacks")
								.default(false)
								.extensions([
									new KeyPicker("gameplay.auto_parry.key").title("Auto Parry").bind("V").mode("Hold"),
								]),

							new DependencyBox()
								.dependsOn("gameplay.auto_parry.enabled", true)
								.elements([
									new Toggle("gameplay.auto_parry.predict_enabled")
										.title("Predict")
										.tooltip("Predicts the enemy's velocity, so you can parry in advance.")
										.default(false),
									new DependencyBox()
										.dependsOn("gameplay.auto_parry.predict_enabled", true)
										.elements([
											new Slider("gameplay.auto_parry.predict_time")
												.title("Amount")
												.suffix(" ms")
												.round(0)
												.limits(10, 400)
												.default(10)
												.compact(true)
												.hideMax(true),
										]),
									new Toggle("gameplay.auto_parry.debug")
										.title("Debugger")
										.tooltip("Enable debug notifications for Auto Parry")
										.default(true),
								]),
						]),
						new Groupbox()
							.title("Movement Modifications")
							.elements([
								new Toggle("gameplay.movement.infinite_stamina")
									.title("Infinite Stamina")
									.tooltip("Disables stamina consumption")
									.default(false),
								new Toggle("gameplay.movement.roll_animation")
									.title("Roll Cancel")
									.tooltip("Presses Q when rolling to override the animation")
									.default(true),
							]),
					])
					.right([
						new Groupbox()
							.title("Ranged Aim")
							.elements([
								new Dropdown<"Head" | "Torso">("gameplay.ranged.target")
									.title("Target")
									.tooltip("The part of the body to aim at")
									.options(["Head", "Torso"])
									.default("Head"),
								new Toggle("gameplay.ranged.silent")
									.title("Silent")
									.tooltip("Shoots at the target without aiming")
									.default(false),
								new Toggle("gameplay.ranged.aimbot")
									.title("Aimbot")
									.tooltip("Moves mouse towards the target")
									.default(false),
								new DependencyBox()
									.dependsOn("gameplay.ranged.aimbot", true)
									.elements([
										new Slider("gameplay.ranged.aimbot.sensitivity")
											.title("Sensitivity")
											.suffix("%")
											.round(0)
											.limits(1, 100)
											.default(50)
											.compact(true)
											.hideMax(true),
									]),
							]),
					]),
				new Page()
					.title("Targeting")
					.left([
						new Groupbox()
							.title("Selector")
							.elements([
								new MultiDropdown<"Enemies" | "Alive" | "In Radius" | "Visible" | "Not Obstructed">(
									"targeting.selector.filters",
								)
									.title("Filters")
									.tooltip("Only targets that meet these conditions will be considered")
									.options(["Enemies", "Alive", "In Radius", "Visible", "Not Obstructed"])
									.default(["Enemies", "Alive", "In Radius"]),
								new Dropdown<"Closest to Cursor" | "Closest to Player" | "Lowest HP" | "Highest HP">(
									"targeting.selector.mode",
								)
									.title("Priority")
									.tooltip("Prioritizes certain targets over others")
									.options(["Closest to Cursor", "Closest to Player", "Lowest HP", "Highest HP"])
									.default("Closest to Player"),
								new Slider("targeting.selector.fov_radius")
									.title("FOV Radius")
									.round(0)
									.limits(10, 500)
									.default(100)
									.hideMax(true)
									.suffix("px"),
							]),
					])
					.right([
						new Groupbox()
							.title("Designate")
							.elements([
								new MultiDropdown("targeting.designate.players")
									.title("Player List")
									.tooltip("The list of players to whitelist/blacklist")
									.canNull(true)
									.specialType("Player"),
								new Dropdown<"Ally" | "Enemy">("targeting.designate.players_type")
									.title("Disposition")
									.tooltip("Sets the selected players as allies or enemies")
									.options(["Ally", "Enemy"])
									.default("Enemy"),

								new Spacer(8),

								new Toggle("targeting.designate.team_filter")
									.title("Filter teams?")
									.tooltip("Enables team checking for the filter")
									.default(false),
								new DependencyBox()
									.dependsOn("targeting.designate.team_filter", true)
									.elements([
										new MultiDropdown("targeting.designate.teams")
											.title("Team List")
											.tooltip("The list of teams to whitelist/blacklist")
											.canNull(true)
											.specialType("Team"),
										new Dropdown<"Ally" | "Enemy">("targeting.designate.teams_type")
											.title("Disposition")
											.tooltip("Sets the selected teams as allies or enemies")
											.options(["Ally", "Enemy"])
											.default("Enemy"),
										new Dropdown<"Resolve as Ally" | "Resolve as Enemy">(
											"targeting.designate.resolve",
										)
											.title("Resolve Method")
											.tooltip("Sets how the filter will resolve conflicts in disposition.")
											.options(["Resolve as Ally", "Resolve as Enemy"])
											.default("Resolve as Ally"),
									]),
							]),
					]),
				new Page().title("Settings").left([]).right([]),
			]),
	])
	.renderUI();

interface Toggles {}
interface Options {}

declare const Toggles: Toggles;
declare const Options: Options;

/************************************************************
 * INITIALIZATION
 * Description: Initializes and starts the runtime
 * Last updated: Feb. 14, 2024
 ************************************************************/
PlayerController.__init();

export = "Initialized Successfully";
