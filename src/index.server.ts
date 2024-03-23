import { Players, ReplicatedStorage, RunService, UserInputService, Workspace } from "@rbxts/services";
import type * as Linoria from "@script-ts/linorialib";
import { Elements, Library } from "@script-ts/linorialib/out/library";
import { Destructible, MeleeData, Node, RangeData } from "types";

if (_G["combat-warriors"]) throw "This program is already running!";
else _G["combat-warriors"] = true;

/************************************************************
 * CONFIGURATIONS
 * Description: User-defined settings and configurations
 * Last updated: Mar. 22, 2024
 ************************************************************/
const MeleeData = new Map<string, MeleeData>();
{
	/************************************************************
	 * Section: HEAVY MELEE
	 * Description: Melee weapons that are slower but deal more damage.
	 * Last Updated: Mar. 22, 2024
	 ************************************************************/
	// Bo Staff
	MeleeData.set("weapon22", {
		name: "Bo Staff",
		range: 13.65,
		duration: 0.05,
		cooldown: 1.4,
	});
	// Shovel
	MeleeData.set("weapon23", {
		name: "Shovel",
		range: 13.8,
		duration: 0.05,
		cooldown: 1.8,
	});
	// Golf Club
	MeleeData.set("weapon24", {
		name: "Golf Club",
		range: 13.65,
		duration: 0.05,
		cooldown: 1.72,
	});
	// Fire Axe
	MeleeData.set("weapon25", {
		name: "Fire Axe",
		range: 12.35,
		duration: 0.05,
		cooldown: 1.4,
	});
	// Spear
	MeleeData.set("weapon46", {
		name: "Spear",
		range: 14.05,
		duration: 0.05,
		cooldown: 1.82,
	});
	// Longsword
	MeleeData.set("weapon26", {
		name: "Longsword",
		range: 13.85,
		duration: 0.05,
		cooldown: 1.7,
	});
	// War Axe
	MeleeData.set("weapon27", {
		name: "War Axe",
		range: 12.65,
		duration: 0.05,
		cooldown: 1.64,
	});
	// Greataxe
	MeleeData.set("weapon28", {
		name: "Greataxe",
		range: 12.7,
		duration: 0.05,
		cooldown: 1.66,
	});
	// Flamberge
	MeleeData.set("weapon29", {
		name: "Flamberge",
		range: 13.9,
		duration: 0.05,
		cooldown: 1.64,
	});
	// Bardiche
	MeleeData.set("weapon30", {
		name: "Bardiche",
		range: 12.4,
		duration: 0.05,
		cooldown: 1.73,
	});
	// Brute Mace
	MeleeData.set("weapon31", {
		name: "Brute Mace",
		range: 12.55,
		duration: 0.05,
		cooldown: 1.76,
	});
	// Riot Shield
	MeleeData.set("weapon63", {
		name: "Riot Shield",
		range: 12.9,
		duration: 0.05,
		cooldown: 1.75,
	});
	// Battle Axe
	MeleeData.set("weapon32", {
		name: "Battle Axe",
		range: 12.75,
		duration: 0.05,
		cooldown: 1.7,
	});
	// Greatsword
	MeleeData.set("weapon33", {
		name: "Greatsword",
		range: 14.0,
		duration: 0.05,
		cooldown: 1.68,
	});
	// Trident
	MeleeData.set("weapon34", {
		name: "Trident",
		range: 14.35,
		duration: 0.05,
		cooldown: 1.85,
	});
	// Polehammer
	MeleeData.set("weapon47", {
		name: "Polehammer",
		range: 12.9,
		duration: 0.05,
		cooldown: 1.6,
	});
	// Palm Axe
	MeleeData.set("weapon61", {
		name: "Palm Axe",
		range: 12.9,
		duration: 0.05,
		cooldown: 1.67,
	});
	// Kanabo
	MeleeData.set("weapon35", {
		name: "Kanabo",
		range: 13.75,
		duration: 0.05,
		cooldown: 1.75,
	});
	// Curved Greatsword
	MeleeData.set("weapon55", {
		name: "Curved Greatsword",
		range: 14.25,
		duration: 0.05,
		cooldown: 1.62,
	});
	// War Hammer
	MeleeData.set("weapon36", {
		name: "War Hammer",
		range: 12.8,
		duration: 0.05,
		cooldown: 1.8,
	});
	// Halberd
	MeleeData.set("weapon37", {
		name: "Halberd",
		range: 12.65,
		duration: 0.05,
		cooldown: 1.63,
	});
	// Naginata
	MeleeData.set("weapon38", {
		name: "Naginata",
		range: 15.05,
		duration: 0.05,
		cooldown: 1.76,
	});
	// Zweihander
	MeleeData.set("weapon39", {
		name: "Zweihander",
		range: 15.0,
		duration: 0.05,
		cooldown: 1.86,
	});
	// Heavy Scythe
	MeleeData.set("weapon54", {
		name: "Heavy Scythe",
		range: 13.6,
		duration: 0.05,
		cooldown: 1.9,
	});
	// Odachi
	MeleeData.set("weapon40", {
		name: "Odachi",
		range: 14.5,
		duration: 0.05,
		cooldown: 1.8,
	});
	// Dual Naginata
	MeleeData.set("weapon57", {
		name: "Dual Naginata",
		range: 16.55,
		duration: 0.1,
		cooldown: 1.85,
	});
	// Colossal Greatsword
	MeleeData.set("weapon41", {
		name: "Colossal Greatsword",
		range: 14.6,
		duration: 0.1,
		cooldown: 1.9,
	});
	// Glaive
	MeleeData.set("weapon49", {
		name: "Glaive",
		range: 14.3,
		duration: 0.1,
		cooldown: 1.8,
	});
	// Yoru
	MeleeData.set("weapon62", {
		name: "Yoru",
		range: 14.75,
		duration: 0.1,
		cooldown: 2.4,
	});
	// Dragon Slayer (Old)
	MeleeData.set("weapon100", {
		name: "Dragon Slayer (Old)",
		range: 14.75,
		duration: 0.1,
		cooldown: 2.25,
	});
	// Dragon Slayer
	MeleeData.set("weapon42", {
		name: "Dragon Slayer",
		range: 14.75,
		duration: 0.1,
		cooldown: 2.25,
	});
	// CTF Flag
	MeleeData.set("weapon75", {
		name: "CTF Flag",
		range: 14.5,
		duration: 0.05,
		cooldown: 1.5,
	});

	/************************************************************
	 * Section: LIGHT MELEE
	 * Description: Melee weapons that are faster but deal less damage.
	 * Last Updated: Mar. 22, 2024
	 ************************************************************/
	// Baton
	MeleeData.set("weapon1", {
		name: "Baton",
		range: 12.3,
		duration: 0.05,
		cooldown: 0.56,
	});
	// Hammer
	MeleeData.set("weapon59", {
		name: "Hammer",
		range: 12.1,
		duration: 0.05,
		cooldown: 0.57,
	});
	// Crowbar
	MeleeData.set("weapon2", {
		name: "Crowbar",
		range: 12.9,
		duration: 0.05,
		cooldown: 0.6,
	});
	// Bat
	MeleeData.set("weapon51", {
		name: "Bat",
		range: 12.8,
		duration: 0.05,
		cooldown: 0.55,
	});
	// Sickle
	MeleeData.set("weapon3", {
		name: "Sickle",
		range: 12.0,
		duration: 0.05,
		cooldown: 0.48,
	});
	// Lance
	MeleeData.set("weapon4", {
		name: "Lance",
		range: 15.65,
		duration: 0.05,
		cooldown: 0.633,
	});
	// Club
	MeleeData.set("weapon52", {
		name: "Club",
		range: 12.8,
		duration: 0.05,
		cooldown: 0.65,
	});
	// Scimitar
	MeleeData.set("weapon50", {
		name: "Scimitar",
		range: 13.05,
		duration: 0.05,
		cooldown: 0.61,
	});
	// Macuahuitl
	MeleeData.set("weapon5", {
		name: "Macuahuitl",
		range: 12.65,
		duration: 0.05,
		cooldown: 0.58,
	});
	// Khopesh
	MeleeData.set("weapon6", {
		name: "Khopesh",
		range: 12.8,
		duration: 0.05,
		cooldown: 0.52,
	});
	// Mace
	MeleeData.set("weapon7", {
		name: "Mace",
		range: 12.25,
		duration: 0.05,
		cooldown: 0.56,
	});
	// Cutlass
	MeleeData.set("weapon8", {
		name: "Cutlass",
		range: 12.6,
		duration: 0.05,
		cooldown: 0.58,
	});
	// Dual Hook Swords
	MeleeData.set("weapon9", {
		name: "Dual Hook Swords",
		range: 13.1,
		duration: 0.05,
		cooldown: 0.55,
	});
	// Iron Sword
	MeleeData.set("weapon45", {
		name: "Iron Sword",
		range: 12.65,
		duration: 0.05,
		cooldown: 0.61,
	});
	// Dual Hatchets
	MeleeData.set("weapon10", {
		name: "Dual Hatchets",
		range: 12.15,
		duration: 0.05,
		cooldown: 0.533,
	});
	// Rapier
	MeleeData.set("weapon11", {
		name: "Rapier",
		range: 15.9,
		duration: 0.05,
		cooldown: 0.625,
	});
	// Dual Machetes
	MeleeData.set("weapon12", {
		name: "Dual Machetes",
		range: 12.2,
		duration: 0.05,
		cooldown: 0.566,
	});
	// Steel Sword
	MeleeData.set("weapon13", {
		name: "Steel Sword",
		range: 12.65,
		duration: 0.05,
		cooldown: 0.625,
	});
	// Dual Daggers
	MeleeData.set("weapon14", {
		name: "Dual Daggers",
		range: 12.2,
		duration: 0.05,
		cooldown: 0.51,
	});
	// Sabre
	MeleeData.set("weapon60", {
		name: "Sabre",
		range: 12.8,
		duration: 0.05,
		cooldown: 0.566,
	});
	// Nunchucks
	MeleeData.set("weapon56", {
		name: "Nunchucks",
		range: 12.0,
		duration: 0.05,
		cooldown: 0.52,
	});
	// Dual Cleavers
	MeleeData.set("weapon16", {
		name: "Dual Cleavers",
		range: 12.0,
		duration: 0.05,
		cooldown: 0.55,
	});
	// Metal Bat
	MeleeData.set("weapon17", {
		name: "Metal Bat",
		range: 13.05,
		duration: 0.05,
		cooldown: 0.6,
	});
	// Kusarigama
	MeleeData.set("weapon64", {
		name: "Kusarigama",
		range: 11.75,
		duration: 0.05,
		cooldown: 0.52,
	});
	// Scythe
	MeleeData.set("weapon15", {
		name: "Scythe",
		range: 12.6,
		duration: 0.05,
		cooldown: 0.6,
	});
	// Dual Hammers
	MeleeData.set("weapon18", {
		name: "Dual Hammers",
		range: 12.05,
		duration: 0.05,
		cooldown: 0.58,
	});
	// Liuyedao
	MeleeData.set("weapon19", {
		name: "Liuyedao",
		range: 12.85,
		duration: 0.05,
		cooldown: 0.57,
	});
	// Flail
	MeleeData.set("weapon77", {
		name: "Flail",
		range: 11.75,
		duration: 0.05,
		cooldown: 0.56,
	});
	// Dual Tomahawks
	MeleeData.set("weapon20", {
		name: "Dual Tomahawks",
		range: 12.15,
		duration: 0.05,
		cooldown: 0.55,
	});
	// Shikomizue
	MeleeData.set("weapon48", {
		name: "Shikomizue",
		range: 13.15,
		duration: 0.05,
		cooldown: 0.54,
	});
	// Leviathan Axe
	MeleeData.set("weapon78", {
		name: "Leviathan Axe",
		range: 12.8,
		duration: 0.05,
		cooldown: 0.6,
	});
	// Katana
	MeleeData.set("weapon21", {
		name: "Katana",
		range: 13.15,
		duration: 0.05,
		cooldown: 0.59,
	});
	// Dual Katanas
	MeleeData.set("weapon65", {
		name: "Dual Katanas",
		range: 13.2,
		duration: 0.05,
		cooldown: 0.6,
	});
	// Triple Katanas
	MeleeData.set("weapon66", {
		name: "Triple Katanas",
		range: 13.2,
		duration: 0.05,
		cooldown: 0.6,
	});
	// Chainsaw
	MeleeData.set("weapon58", {
		name: "Chainsaw",
		range: 11.45,
		duration: 0.5,
		cooldown: 1.1,
	});
	// Fists
	MeleeData.set("weapon71", {
		name: "Fists",
		range: 11.35,
		duration: 0.03,
		cooldown: 0.53,
	});
	// Dual Claws
	MeleeData.set("weapon72", {
		name: "Dual Claws",
		range: 11.5,
		duration: 0.05,
		cooldown: 0.53,
	});
}

const RangeData = new Map<string, RangeData>();
{
	// Throwable Kunai
	RangeData.set("utility9", {
		name: "Throwable Kunai",
		speed: 200.0,
		gravity: -10.0,
	});
	// Longbow
	RangeData.set("weapon43", {
		name: "Longbow",
		speed: 200.0,
		gravity: -10.0,
	});
	// Crossbow
	RangeData.set("weapon44", {
		name: "Crossbow",
		speed: 235.0,
		gravity: -5.0,
	});
	// Heavy Bow
	RangeData.set("weapon53", {
		name: "Heavy Bow",
		speed: 400.0,
		gravity: -10.0,
	});
}

const Keycodes = new Map<Enum.KeyCode, number>();
{
	Keycodes.set(Enum.KeyCode.A, 0x41);
	Keycodes.set(Enum.KeyCode.B, 0x42);
	Keycodes.set(Enum.KeyCode.C, 0x43);
	Keycodes.set(Enum.KeyCode.D, 0x44);
	Keycodes.set(Enum.KeyCode.E, 0x45);
	Keycodes.set(Enum.KeyCode.F, 0x46);
	Keycodes.set(Enum.KeyCode.G, 0x47);
	Keycodes.set(Enum.KeyCode.H, 0x48);
	Keycodes.set(Enum.KeyCode.I, 0x49);
	Keycodes.set(Enum.KeyCode.J, 0x4a);
	Keycodes.set(Enum.KeyCode.K, 0x4b);
	Keycodes.set(Enum.KeyCode.L, 0x4c);
	Keycodes.set(Enum.KeyCode.M, 0x4d);
	Keycodes.set(Enum.KeyCode.N, 0x4e);
	Keycodes.set(Enum.KeyCode.O, 0x4f);
	Keycodes.set(Enum.KeyCode.P, 0x50);
	Keycodes.set(Enum.KeyCode.Q, 0x51);
	Keycodes.set(Enum.KeyCode.R, 0x52);
	Keycodes.set(Enum.KeyCode.S, 0x53);
	Keycodes.set(Enum.KeyCode.T, 0x54);
	Keycodes.set(Enum.KeyCode.U, 0x55);
	Keycodes.set(Enum.KeyCode.V, 0x56);
	Keycodes.set(Enum.KeyCode.W, 0x57);
	Keycodes.set(Enum.KeyCode.X, 0x58);
	Keycodes.set(Enum.KeyCode.Y, 0x59);
	Keycodes.set(Enum.KeyCode.Z, 0x5a);
}

declare const Toggles: Toggles;
declare const Options: Options;

/************************************************************
 * DETECTION HOOKS
 * Description: Hooks to hide this program
 * Last updated: Mar. 22, 2024
 ************************************************************/
{
	const [min, max] = [30e3, 40e3];
	const [sum, diff] = [min + max, max - min];
	const getMemory = () => {
		const t = math.floor(os.clock() * 10);
		const p = t - (t % 10);
		const isR = new Random(p).NextInteger(0, 1) === 1;
		if (isR) {
			return new Random(t).NextInteger(min, max);
		} else {
			return math.floor((math.sin(t) * diff + sum) / 2);
		}
	};

	hookfunction<typeof gcinfo>(gcinfo, () => {
		return getMemory();
	});
	const collect: typeof collectgarbage = hookfunction<typeof collectgarbage>(collectgarbage, (t: "count") => {
		if (t === "count") return getMemory();
		return collect(t);
	});
}

/************************************************************
 * VARIABLES
 * Description: Variables referenced globally in the script
 * Last updated: Mar. 22, 2024
 ************************************************************/
const LocalPlayer = Players.LocalPlayer;
let Camera = Workspace.CurrentCamera!;

enum Disposition {
	Ally,
	Enemy,
}

let rangeData: RangeData | undefined;

/************************************************************
 * UTILITIES
 * Description: Helper functions and classes
 * Last updated: Mar. 22, 2024
 ************************************************************/
const repo = "https://raw.githubusercontent.com/scripts-ts/LinoriaLib/main/out/";
const {
	Builder,
	Window,
	Page,
	ThemeSection,
	ConfigSection,
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

interface DashHandler {
	dashEffect: (character: Model, ...args: unknown[]) => void;
}

interface MeleeWeaponClient {
	onSlashRayHit: (
		_self: MeleeWeaponClient,
		hitbox: Instance,
		instance: Instance,
		rayResult: RaycastResult,
		...args: unknown[]
	) => void;
}

interface RaycastUtilClient {
	getMouseHitPosition: (...args: unknown[]) => LuaTuple<[BasePart, Vector3]>;
}

interface StaminaHandler {
	getDefaultStamina(): {
		_stamina: number;
		_maxStamina: number;
		setStamina(value: number): void;
	};
}

const DashHandler = req<DashHandler>("DashHandlerClient");
const MeleeWeaponClient = req<MeleeWeaponClient>("MeleeWeaponClient");
const RaycastUtilClient = req<RaycastUtilClient>("RaycastUtilClient");
const StaminaHandler = req<StaminaHandler>("DefaultStaminaHandlerClient");

function simulateKeycode(key: Enum.KeyCode) {
	const code = Keycodes.get(key)!;
	keypress(code);
	task.delay(0.07, () => keyrelease(code));
}

/************************************************************
 * COMPONENTS
 * Description: Classes for specific entities/objects
 * Last updated: Mar. 22, 2024
 ************************************************************/
class BaseComponent<T extends Instance> {
	protected bin = new Bin();

	constructor(public readonly instance: T) {}

	/**
	 * Terminates the component and all functionality.
	 */
	public destroy(): void {
		this.bin.destroy();
	}
}

class HumanoidComponent extends BaseComponent<Model> {
	public readonly root: BasePart;
	public readonly head: BasePart;
	public readonly torso: BasePart;
	public readonly humanoid: Humanoid;

	constructor(instance: Model) {
		super(instance);
		const name = instance.Name;
		const root = instance.WaitForChild("HumanoidRootPart") as BasePart | undefined;
		if (!root) throw `[HumanoidComponent]: '${name}' does not have a HumanoidRootPart`;
		const head = instance.WaitForChild("Head") as BasePart | undefined;
		if (!head) throw `[CharacterComponent]: '${name}' does not have an Head`;
		const torso = instance.WaitForChild("Torso") as BasePart | undefined;
		if (!torso) throw `[CharacterComponent]: '${name}' does not have an Torso`;
		const humanoid = instance.WaitForChild("Humanoid") as Humanoid | undefined;
		if (!humanoid) throw `[HumanoidComponent]: '${name}' does not have a Humanoid`;

		this.root = root;
		this.head = head;
		this.torso = torso;
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
	protected parrying: boolean;

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
		this.parrying = false;

		const { bin, torso } = this;
		bin.batch(
			backpack.ChildAdded.Connect((child) => this._onBackpackChild(child)),
			instance.ChildAdded.Connect((child) => this._onCharacterChild(child)),
			torso.ChildAdded.Connect((child) => {
				if (child.IsA("Sound") && child.Name === "DashSound") this.onDash();
			}),
		);
	}

	public isParrying(): boolean {
		return this.parrying;
	}

	/**
	 * Called when a tool is added to the character's backpack.
	 */
	protected onTool(tool: Tool) {}

	/**
	 * Called when a Melee is added to the character's backpack.
	 */
	protected onMeleeTool(tool: Tool, data: MeleeData) {
		const toolBin = new Bin();
		this.tools.add(tool);

		const clock = os.clock;
		let debounce = clock();
		const hitboxes = new Set<Instance>();
		const onChild = (hitbox: Instance) => {
			if (hitbox.IsA("Folder") && hitbox.Name === "Hitboxes") {
				if (hitboxes.has(hitbox)) return;
				hitboxes.add(hitbox);
				toolBin.add(
					hitbox.DescendantAdded.Connect((instance) => {
						if (instance.IsA("Sound")) {
							const t = clock();
							if (t > debounce) this.onSwing(data);
							debounce = t + 0.05;
						}
					}),
				);
			}
		};

		for (const hitbox of tool.GetChildren()) task.defer(onChild, hitbox);
		toolBin.batch(
			tool.ChildAdded.Connect(onChild),
			tool.Destroying.Connect(() => toolBin.destroy()),
			tool.AncestryChanged.Connect((_, parent) => parent === undefined && toolBin.destroy()),
		);
	}

	/**
	 * Called when a Ranged is added to the character's backpack.
	 */
	protected onRangedTool(tool: Tool, data: RangeData) {}

	/**
	 * Called when a tool is equipped.
	 */
	protected onEquip() {}

	/**
	 * Called when the character swings a melee weapon.
	 */
	protected onSwing(data: MeleeData) {}

	/**
	 * Called when the character parries.
	 */
	protected onParryBegan() {}

	/**
	 * Called when the character parries.
	 */
	protected onParryEnded() {}

	/**
	 * Called when the character dashes.
	 */
	protected onDash() {}

	/**
	 * Handles the addition of a possible tool to the character's backpack.
	 */
	private _onBackpackChild(tool: Instance): void {
		if (!tool.IsA("Tool")) return;

		const tools = this.tools;
		if (tools.has(tool)) return;
		tools.add(tool);

		const id = tool.GetAttribute("ItemId") as string | undefined;
		task.defer(() => this.onTool(tool));
		if (id !== undefined) {
			const melee = MeleeData.get(id);
			if (melee) {
				task.defer(() => this.onMeleeTool(tool, melee));
			} else {
				const ranged = RangeData.get(id);
				if (ranged) task.defer(() => this.onRangedTool(tool, ranged));
			}
		}

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

	/**
	 * Handles the addition of a possible parry shield to the character
	 */
	private _onCharacterChild(shield: Instance): void {
		const id = shield.GetAttribute("ParryShieldId") as number | undefined;
		if (id === undefined) return;
		this.bin.add(
			shield.GetAttributeChangedSignal("Toggle").Connect(() => {
				const toggled = shield.GetAttribute("Toggle") as boolean;
				this.parrying = toggled;
				if (toggled) this.onParryBegan();
				else this.onParryEnded();
			}),
		);
	}
}

class EntityComponent extends CharacterComponent {
	public static readonly instances = new Map<Model, EntityComponent>();
	public static readonly allies = new Map<Model, EntityComponent>();
	public static readonly enemies = new Map<Model, EntityComponent>();

	protected disposition: Disposition;

	protected quad: Quad;
	protected connection?: RBXScriptConnection;

	constructor(player: PlayerComponent, instance: Model) {
		super(player.instance, instance);

		const quad = new Drawing("Quad");
		const disposition = player.getDisposition();

		this.quad = quad;
		this.disposition = disposition;

		this.setDisposition(disposition);
		this.updateQuad();

		EntityComponent.instances.set(instance, this);
		this.bin.batch(
			() => EntityComponent.instances.delete(instance),
			() => this.quad.Remove(),
		);
	}

	public getDisposition(): Disposition {
		return this.disposition;
	}

	public setDisposition(disposition: Disposition): void {
		this.disposition = disposition;
		if (disposition === Disposition.Ally) {
			EntityComponent.allies.set(this.instance, this);
			EntityComponent.enemies.delete(this.instance);
		} else {
			EntityComponent.enemies.set(this.instance, this);
			EntityComponent.allies.delete(this.instance);
		}
		this.updateQuad();
	}

	protected onSwing(data: MeleeData): void {
		if (this.getDisposition() === Disposition.Ally) return;

		const root = this.root;
		const pos = root.Position;
		const aPos = AgentController.getPosition();
		const distXZ = math.sqrt((pos.X - aPos.X) ** 2 + (pos.Z - aPos.Z) ** 2);
		const distY = math.abs(pos.Y - aPos.Y);
		const range = data.range + Options["gameplay.auto_parry.threshold"].Value;

		// Already in range
		if (distXZ < range && distY < 20) {
			ParryController.parry();
			return;
		}

		// Cannot enter range
		if (distXZ > 50 || distY > 50) return;

		// Wait until in range or too far
		const clock = os.clock;
		const stop = clock() + data.duration;
		const c = this.bin.add(
			RunService.RenderStepped.Connect(() => {
				const t = clock();
				if (t >= stop) c.Disconnect();
				const aPos = AgentController.getPosition();
				const distXZ = math.sqrt((pos.X - aPos.X) ** 2 + (pos.Z - aPos.Z) ** 2);
				const distY = math.abs(pos.Y - aPos.Y);
				if (distXZ < range && distY < 20) {
					ParryController.parry();
					c.Disconnect();
				}
			}),
		);
	}

	/** @hidden */
	public updateQuad(): void {
		this.connection?.Disconnect();

		const { quad, disposition } = this;
		const enabled = Toggles["visuals.player_esp.enabled"].Value;
		const isDispositionVisible =
			disposition === Disposition.Ally
				? Toggles["visuals.player_esp.ally_enabled"].Value
				: Toggles["visuals.player_esp.enemy_enabled"].Value;
		if (!enabled || !isDispositionVisible) {
			quad.Visible = false;
			return;
		}

		const { bin, root } = this;
		const color =
			disposition === Disposition.Ally
				? Options["visuals.player_esp.ally_color"]
				: Options["visuals.player_esp.enemy_color"];
		quad.Color = color.Value;
		quad.Transparency = 1 - color.Transparency;
		quad.Thickness = 2;

		const xBound = 2;
		const yBound = 3;

		const TL = new Vector3(-xBound, yBound, 0);
		const TR = new Vector3(xBound, yBound, 0);
		const BR = new Vector3(xBound, -yBound, 0);
		const BL = new Vector3(-xBound, -yBound, 0);
		this.connection = bin.add(
			RunService.RenderStepped.Connect(() => {
				const pos = root.CFrame;
				const [TL2D] = Camera.WorldToViewportPoint(pos.mul(TL));
				if (TL2D.Z < 0) return (quad.Visible = false);
				const [TR2D] = Camera.WorldToViewportPoint(pos.mul(TR));
				if (TR2D.Z < 0) return (quad.Visible = false);
				const [BR2D] = Camera.WorldToViewportPoint(pos.mul(BR));
				if (BR2D.Z < 0) return (quad.Visible = false);
				const [BL2D] = Camera.WorldToViewportPoint(pos.mul(BL));
				if (BL2D.Z < 0) return (quad.Visible = false);
				quad.Visible = true;
				quad.PointA = new Vector2(TL2D.X, TL2D.Y);
				quad.PointB = new Vector2(TR2D.X, TR2D.Y);
				quad.PointC = new Vector2(BR2D.X, BR2D.Y);
				quad.PointD = new Vector2(BL2D.X, BL2D.Y);
			}),
		);
	}
}

class AgentComponent extends CharacterComponent {
	constructor(instance: Model) {
		super(LocalPlayer, instance);
	}

	protected onDash(): void {
		super.onDash();
		if (Toggles["gameplay.movement.roll_animation"].Value) {
			task.delay(0.05, simulateKeycode, Enum.KeyCode.Q);
		}
	}

	protected onEquip(): void {
		const tool = this.equipped;
		if (tool) {
			const id = tool.GetAttribute("ItemId") as string | undefined;
			if (id !== undefined) {
				const ranged = RangeData.get(id);
				if (ranged) {
					rangeData = ranged;
				} else rangeData = undefined;
			} else rangeData = undefined;
		} else rangeData = undefined;
	}
}

class PlayerComponent extends BaseComponent<Player> {
	public static readonly instances = new Map<Player, PlayerComponent>();
	public static readonly allies = new Map<Player, PlayerComponent>();
	public static readonly enemies = new Map<Player, PlayerComponent>();

	public readonly id: string;
	public character?: EntityComponent;
	protected disposition: Disposition = Disposition.Enemy;

	constructor(player: Player) {
		super(player);
		this.id = player.Name + " @" + player.DisplayName;

		// Initialize
		this.updateDisposition();
		PlayerComponent.instances.set(player, this);
		const char = player.Character;
		if (char) task.defer(() => this.onCharacter(char));

		const { bin } = this;
		bin.batch(
			player.CharacterAdded.Connect((character) => this.onCharacter(character)),
			player.CharacterRemoving.Connect(() => this.character?.destroy()),
			Players.PlayerRemoving.Connect((plr) => plr === player && this.destroy()),
		);
		bin.batch(
			player.GetPropertyChangedSignal("Team").Connect(() => this.updateDisposition()),
			player.GetPropertyChangedSignal("Neutral").Connect(() => this.updateDisposition()),
		);
		bin.add(() => PlayerComponent.instances.delete(player));
	}

	public getDisposition(): Disposition {
		return this.disposition;
	}

	public setDisposition(disposition: Disposition): void {
		this.disposition = disposition;
		if (disposition === Disposition.Ally) {
			PlayerComponent.allies.set(this.instance, this);
			PlayerComponent.enemies.delete(this.instance);
		} else {
			PlayerComponent.enemies.set(this.instance, this);
			PlayerComponent.allies.delete(this.instance);
		}
		this.character?.setDisposition(disposition);
	}

	/** @hidden */
	public updateDisposition(): void {
		let disposition = this.getUserDisposition();
		if (Toggles["targeting.designate.team_filter"].Value) {
			const team = this.getTeamDisposition();
			if (team !== disposition) {
				const resolve = Options["targeting.designate.resolve"].Value;
				if (resolve === "Resolve as Ally") disposition = Disposition.Ally;
				else disposition = Disposition.Enemy;
			}
		}
		this.setDisposition(disposition);
	}

	private getUserDisposition() {
		const id = this.id;
		const designation = Options["targeting.designate.players_type"].Value;
		const isSelected = Options["targeting.designate.players"].Value.has(id);
		let disposition: Disposition;
		if (designation === "Ally") {
			disposition = isSelected ? Disposition.Ally : Disposition.Enemy;
		} else {
			disposition = isSelected ? Disposition.Enemy : Disposition.Ally;
		}
		return disposition;
	}

	private getTeamDisposition() {
		const instance = this.instance;
		const team = instance.Team;

		let isSelected = false;

		// Has Team
		if (team !== undefined && !instance.Neutral) {
			const list = Options["targeting.designate.teams"].Value;
			isSelected = list.has(`${team.Name} (${team.TeamColor.Name})`);
		}
		// Neutral
		else if (Toggles["targeting.designate.include_neutral"].Value) {
			isSelected = true;
		}

		const teamType = Options["targeting.designate.teams_type"].Value;
		let disposition: Disposition;
		if (teamType === "Ally") {
			disposition = isSelected ? Disposition.Ally : Disposition.Enemy;
		} else {
			disposition = isSelected ? Disposition.Enemy : Disposition.Ally;
		}
		return disposition;
	}

	protected onCharacter(character: Model) {
		this.character = new EntityComponent(this, character);
	}
}

/************************************************************
 * CONTROLLERS
 * Description: Singletons that are used once
 * Last updated: Mar. 22, 2024
 ************************************************************/
namespace AgentController {
	export let agent: AgentComponent;
	export let instance: Model;
	let _root: BasePart;
	let _humanoid: Humanoid;

	const onAgent = (char: Model) => {
		AgentController.agent?.destroy();
		const agent = new AgentComponent(char);
		AgentController.agent = agent;
		AgentController.instance = agent.instance;
		_root = agent.root;
		_humanoid = agent.humanoid;
	};

	export function getPosition() {
		return _root.Position;
	}

	export function __init() {
		LocalPlayer.CharacterAdded.Connect((character) => onAgent(character));
		const character = LocalPlayer.Character;
		if (character) onAgent(character);
	}
}

namespace PlayerController {
	const onPlayer = (player: Player) => new PlayerComponent(player);

	export function __init() {
		for (const player of Players.GetPlayers()) player !== LocalPlayer && onPlayer(player);
		Players.PlayerAdded.Connect(onPlayer);
	}
}

namespace ParryController {
	let enabled = false;
	let keybind: Elements.KeyPicker;
	let alerts: Elements.Toggle;

	export function parry() {
		if (enabled && keybind.GetState()) {
			const agent = AgentController.agent;
			if (!agent.isParrying()) {
				simulateKeycode(Enum.KeyCode.F);
				if (alerts.Value) library.Notify("Parried!");
			} else {
				if (alerts.Value) library.Notify("Parry requested but can't find Agent");
			}
		}
	}

	export function __init() {
		Toggles["gameplay.auto_parry.enabled"].OnChanged((value) => {
			enabled = value;
		});
		alerts = Toggles["gameplay.auto_parry.debug"];
		keybind = Options["gameplay.auto_parry.key"];
	}
}

namespace HitboxController {
	const Container = Workspace.WaitForChild("PlayerCharacters", 5) as Folder;
	if (!Container) throw "[HitboxController]: PlayerCharacters folder not found";

	let _antiParry: Elements.Toggle;
	let _ignoreAllies: Elements.Toggle;

	export function __init() {
		_antiParry = Toggles["gameplay.hitbox.anti_parry"];
		_ignoreAllies = Toggles["gameplay.hitbox.ignore_allies"];

		const onSlashRayHit = MeleeWeaponClient.onSlashRayHit;
		const old: typeof onSlashRayHit = hookfunction(onSlashRayHit, (_self, hitbox, instance, rayResult, ...args) => {
			if (hitbox.Parent?.Parent?.Name === "Stomp") return old(_self, hitbox, instance, rayResult, ...args);

			const hit = rayResult.Instance;
			if (hit.IsDescendantOf(Container)) {
				let entity: Instance;
				let parent = hit.Parent!;
				do {
					entity = parent;
					parent = parent.Parent!;
				} while (parent !== Container);
				const component = EntityComponent.instances.get(entity as Model);
				if (component) {
					if (component.isParrying() && _antiParry.Value) return;
				}
			}

			return old(_self, hitbox, instance, rayResult, ...args);
		});
	}
}

namespace StaminaController {
	export function __init() {
		let c: RBXScriptConnection | undefined;
		Toggles["gameplay.movement.infinite_stamina"].OnChanged((value) => {
			if (value) {
				c = RunService.RenderStepped.Connect(() => {
					const handler = StaminaHandler.getDefaultStamina();
					const min = handler._maxStamina / 4;
					if (handler._stamina < min) handler.setStamina(min);
				});
			} else c?.Disconnect();
		});
	}
}

namespace TargetingController {
	let rayParams: RaycastParams;

	let filters: (typeof Options)["targeting.selector.filters"]["Value"];
	let mode: (typeof Options)["targeting.selector.mode"]["Value"];
	let radius: number;

	const updateDispositions = () => {
		PlayerComponent.instances.forEach((component) => component.updateDisposition());
	};

	export function isTargetValid(component: EntityComponent) {
		if (filters.has("Enemies") && component.getDisposition() === Disposition.Ally) return false;

		const [viewportPoint] = Camera.WorldToViewportPoint(component.root.Position);
		if (viewportPoint.Z < 0) return false;
		if (filters.has("In Radius")) {
			const mousePosition = UserInputService.GetMouseLocation();
			const distance = new Vector2(viewportPoint.X, viewportPoint.Y).sub(mousePosition).Magnitude;
			if (distance > radius) return false;
		}

		return true;
	}

	export function getTarget() {
		const list = filters.has("Enemies") ? EntityComponent.enemies : EntityComponent.instances;

		const filterRadius = filters.has("In Radius");
		const filterVisible = filters.has("Visible");
		const filterObstructed = filters.has("Not Obstructed");

		const mousePosition = UserInputService.GetMouseLocation();

		let best: EntityComponent | undefined;
		let weight = -math.huge;
		list.forEach((component) => {
			const aInstance = AgentController.instance;
			const instance = component.instance;
			const position = component.root.Position;
			const aPos = AgentController.getPosition();
			const [viewportPoint] = Camera.WorldToViewportPoint(position);

			// Filter: In View (Always)
			if (viewportPoint.Z < 0) return;

			// Filter: Visible to Camera
			if (filterVisible) {
				const parts = Camera.GetPartsObscuringTarget([position], [aInstance, instance]);
				if (parts.size() > 0) return;
			}

			// Filter: Obstructed from Agent
			if (filterObstructed) {
				rayParams.FilterDescendantsInstances = [aInstance, instance];
				const result = Workspace.Raycast(aPos, position.sub(aPos), rayParams);
				if (result) return;
			}

			let distance: number = 0;
			if (filterRadius) {
				distance = new Vector2(viewportPoint.X, viewportPoint.Y).sub(mousePosition).Magnitude;
				if (filterRadius && distance > radius) return;
			}

			if (mode === "Closest to Cursor") {
				if (!filterRadius)
					distance = new Vector2(viewportPoint.X, viewportPoint.Y).sub(mousePosition).Magnitude;
				const prio = 1e3 - distance;
				if (prio > weight) {
					best = component;
					weight = prio;
					return;
				}
			} else if (mode === "Closest to Player") {
				const aPos = AgentController.getPosition();
				const distance = position.sub(aPos).Magnitude;
				const prio = 1e5 - distance;
				if (prio > weight) {
					best = component;
					weight = prio;
					return;
				}
			} else if (mode === "Highest HP") {
				const humanoid = component.humanoid;
				const health = humanoid.Health;
				if (health > weight) {
					best = component;
					weight = health;
					return;
				}
			} else if (mode === "Lowest HP") {
				const humanoid = component.humanoid;
				const health = humanoid.Health;
				if (health < weight) {
					best = component;
					weight = health;
					return;
				}
			}
		});

		return best;
	}

	export function __init() {
		filters = Options["targeting.selector.filters"].Value;
		mode = Options["targeting.selector.mode"].Value;
		radius = Options["targeting.selector.fov_radius"].Value;

		Options["targeting.selector.filters"].OnChanged((value) => {
			filters = value;
		});
		Options["targeting.selector.mode"].OnChanged((value) => {
			mode = value;
		});
		Options["targeting.selector.fov_radius"].OnChanged((value) => {
			radius = value;
		});

		Toggles["targeting.designate.team_filter"].OnChanged(updateDispositions);
		Toggles["targeting.designate.include_neutral"].OnChanged(updateDispositions);
		Options["targeting.designate.players"].OnChanged(updateDispositions);
		Options["targeting.designate.players_type"].OnChanged(updateDispositions);
		Options["targeting.designate.teams"].OnChanged(updateDispositions);
		Options["targeting.designate.teams_type"].OnChanged(updateDispositions);
		Options["targeting.designate.resolve"].OnChanged(updateDispositions);

		rayParams = new RaycastParams();
		rayParams.FilterType = Enum.RaycastFilterType.Exclude;
		rayParams.IgnoreWater = true;
	}
}

namespace RangedController {
	let part: "head" | "torso";
	let sensitivity: number;
	let need_target: boolean;
	let silent_enabled: boolean;

	let _keybind: Elements.KeyPicker;

	const flat = new Vector3(1, 0, 1);

	const predict = (target: EntityComponent) => {
		if (target) {
			const [speed, gravity] = [rangeData?.speed ?? 1e3, rangeData?.gravity ?? 0];
			const hit = target[part];
			const position = hit.Position;
			const aPosition = AgentController.getPosition();
			const travelTime = position.sub(aPosition).mul(flat).Magnitude / speed;
			const dip = (gravity * travelTime ** 2) / 2;
			return position.sub(new Vector3(0, dip, 0));
		}
		return new Vector3();
	};

	const getTarget = () => TargetingController.getTarget();

	const onRender = () => {
		if (_keybind.GetState()) {
			const target = getTarget();
			if (target) {
				const mousePosition = UserInputService.GetMouseLocation();
				const [viewportPoint] = Camera.WorldToViewportPoint(predict(target));
				mousemoverel(
					(viewportPoint.X - mousePosition.X) * sensitivity,
					(viewportPoint.Y - mousePosition.Y) * sensitivity,
				);
			}
		}
	};

	export function __init() {
		_keybind = Options["gameplay.ranged.keybind"];

		let aimConnection: RBXScriptConnection | undefined;

		const aimbot = Toggles["gameplay.ranged.aimbot"];
		const silent = Toggles["gameplay.ranged.silent"];
		aimbot.OnChanged((value) => {
			need_target = value || silent.Value;
			if (value) aimConnection = RunService.RenderStepped.Connect(() => onRender());
			else aimConnection?.Disconnect();
		});
		silent.OnChanged((value) => {
			silent_enabled = value;
			need_target = value || aimbot.Value;
		});

		Options["gameplay.ranged.target"].OnChanged((value) => {
			part = value === "Head" ? "head" : "torso";
		});
		Options["gameplay.ranged.aimbot.sensitivity"].OnChanged((value) => {
			sensitivity = value / 100;
		});

		const enabled = () => silent_enabled && _keybind.GetState();

		const getMouseHitPosition = RaycastUtilClient.getMouseHitPosition;
		const old: typeof getMouseHitPosition = hookfunction(getMouseHitPosition, (...args) => {
			if (enabled()) {
				const target = getTarget();
				if (target) {
					return $tuple(target[part], predict(target));
				}
			}
			return old(...args);
		});
	}
}

namespace VisualsController {
	const circle = new Drawing("Circle");
	circle.Filled = false;
	circle.NumSides = 15;
	circle.Thickness = 1;
	circle.Visible = false;

	const updateEntityVisuals = () => {
		EntityComponent.instances.forEach((component) => component.updateQuad());
	};

	export function __init() {
		Toggles["visuals.player_esp.enabled"].OnChanged(updateEntityVisuals);
		Toggles["visuals.player_esp.ally_enabled"].OnChanged(updateEntityVisuals);
		Toggles["visuals.player_esp.enemy_enabled"].OnChanged(updateEntityVisuals);
		Options["visuals.player_esp.ally_color"].OnChanged(updateEntityVisuals);
		Options["visuals.player_esp.enemy_color"].OnChanged(updateEntityVisuals);

		let _circle = false;
		Toggles["visuals.misc.circle"].OnChanged((value) => {
			circle.Visible = value;
			_circle = value;
		});

		const _color = Options["visuals.misc.circle_color"];
		_color.OnChanged(() => {
			circle.Color = _color.Value;
			circle.Transparency = 1 - _color.Transparency;
		});

		RunService.RenderStepped.Connect(() => {
			if (_circle) {
				const radius = Options["targeting.selector.fov_radius"].Value;
				const mousePosition = UserInputService.GetMouseLocation();
				circle.Radius = radius;
				circle.Position = new Vector2(mousePosition.X, mousePosition.Y);
			}
		});
	}
}

namespace CameraController {
	export function __init() {
		Camera = Workspace.CurrentCamera!;
		Workspace.GetPropertyChangedSignal("CurrentCamera").Connect(() => {
			Camera = Workspace.CurrentCamera ?? Camera;
		});
	}
}

/************************************************************
 * INTERFACE
 * Description: User interface instantiation
 * Last updated: Mar. 22, 2024
 ************************************************************/
new Builder()
	.root("muffet_hub", "combat_warriors")
	.library(library)
	.withSaveManager(savemanager)
	.withThemeManager(thememanager)
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
									new Slider("gameplay.auto_parry.threshold")
										.title("Distance Threshold")
										.suffix(" studs")
										.round(0)
										.limits(0, 50)
										.default(1)
										.hideMax(true),
									new Toggle("gameplay.auto_parry.debug")
										.title("Debugger")
										.tooltip("Enable debug notifications for Auto Parry")
										.default(true),
								]),
						]),
						new Groupbox()
							.title("Hitbox Modifications")
							.elements([
								new Toggle("gameplay.hitbox.anti_parry")
									.title("Anti-Parry")
									.tooltip("Hitbox ignores parries")
									.default(false),
								new Toggle("gameplay.hitbox.ignore_allies")
									.title("Ignore Allies")
									.tooltip("Hitbox ignores allies")
									.default(false),
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
						new Groupbox().title("Ranged Aim").elements([
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
								.default(false)
								.extensions([
									new KeyPicker("gameplay.ranged.keybind").title("Aimbot").bind("MB2").mode("Hold"),
								]),
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
								new MultiDropdown<"Enemies" | "In Radius" | "Visible" | "Not Obstructed">(
									"targeting.selector.filters",
								)
									.title("Filters")
									.tooltip("Only targets that meet these conditions will be considered")
									.options(["Enemies", "In Radius", "Visible", "Not Obstructed"])
									.default(["Enemies", "In Radius"]),
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
									.default("Ally"),

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
										new Toggle("targeting.designate.include_neutral")
											.title("Include Neutral")
											.tooltip("Includes neutral teams in the list")
											.default(false),
										new Dropdown<"Ally" | "Enemy">("targeting.designate.teams_type")
											.title("Disposition")
											.tooltip("Sets the selected teams as allies or enemies")
											.options(["Ally", "Enemy"])
											.default("Ally"),
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
				new Page()
					.title("Visuals")
					.left([
						new Groupbox().title("Player ESP").elements([
							new Toggle("visuals.player_esp.enabled")
								.title("Enabled")
								.tooltip("Draws ESP on players")
								.default(true),
							new DependencyBox().dependsOn("visuals.player_esp.enabled", true).elements([
								new Toggle("visuals.player_esp.ally_enabled")
									.title("Ally ESP")
									.tooltip("Draws ESP on allies")
									.default(true)
									.extensions([
										new ColorPicker("visuals.player_esp.ally_color")
											.title("Ally Color")
											.transparency(0)
											.default(Color3.fromRGB(0, 255, 0)),
									]),
								new Toggle("visuals.player_esp.enemy_enabled")
									.title("Enemy ESP")
									.tooltip("Draws ESP on enemies")
									.default(true)
									.extensions([
										new ColorPicker("visuals.player_esp.enemy_color")
											.title("Enemy Color")
											.transparency(0)
											.default(Color3.fromRGB(255, 0, 0)),
									]),
							]),
						]),
					])
					.right([
						new Groupbox().title("Miscellaneous").elements([
							new Toggle("visuals.misc.circle")
								.title("Show FOV Circle")
								.tooltip("Draws a circle around the cursor")
								.default(true)
								.extensions([
									new ColorPicker("visuals.misc.circle_color")
										.title("Circle Color")
										.transparency(0.5)
										.default(Color3.fromRGB(255, 255, 255)),
								]),
						]),
					]),
				new Page().title("Settings").left([new ThemeSection()]).right([new ConfigSection()]),
			]),
	])
	.renderUI();

interface Toggles {
	"gameplay.auto_parry.enabled": Elements.Toggle;
	"gameplay.auto_parry.debug": Elements.Toggle;
	"gameplay.hitbox.anti_parry": Elements.Toggle;
	"gameplay.hitbox.ignore_allies": Elements.Toggle;
	"gameplay.movement.infinite_stamina": Elements.Toggle;
	"gameplay.movement.roll_animation": Elements.Toggle;
	"gameplay.ranged.silent": Elements.Toggle;
	"gameplay.ranged.aimbot": Elements.Toggle;
	"targeting.designate.team_filter": Elements.Toggle;
	"targeting.designate.include_neutral": Elements.Toggle;
	"visuals.player_esp.enabled": Elements.Toggle;
	"visuals.player_esp.ally_enabled": Elements.Toggle;
	"visuals.player_esp.enemy_enabled": Elements.Toggle;
	"visuals.misc.circle": Elements.Toggle;
}
interface Options {
	"gameplay.auto_parry.key": Elements.KeyPicker;
	"gameplay.auto_parry.threshold": Elements.Slider;
	"gameplay.ranged.keybind": Elements.KeyPicker;
	"gameplay.ranged.target": Elements.Dropdown<"Head" | "Torso", false>;
	"gameplay.ranged.aimbot.sensitivity": Elements.Slider;
	"targeting.selector.filters": Elements.Dropdown<"Enemies" | "In Radius" | "Visible" | "Not Obstructed", true>;
	"targeting.selector.mode": Elements.Dropdown<
		"Closest to Cursor" | "Closest to Player" | "Lowest HP" | "Highest HP",
		false
	>;
	"targeting.selector.fov_radius": Elements.Slider;
	"targeting.designate.players": Elements.Dropdown<string, true>;
	"targeting.designate.players_type": Elements.Dropdown<"Ally" | "Enemy", false>;
	"targeting.designate.team_filter": Elements.Toggle;
	"targeting.designate.teams": Elements.Dropdown<string, true>;
	"targeting.designate.teams_type": Elements.Dropdown<"Ally" | "Enemy", false>;
	"targeting.designate.resolve": Elements.Dropdown<"Resolve as Ally" | "Resolve as Enemy", false>;
	"visuals.player_esp.ally_color": Elements.ColorPicker;
	"visuals.player_esp.enemy_color": Elements.ColorPicker;
	"visuals.misc.circle_color": Elements.ColorPicker;
}

/************************************************************
 * INITIALIZATION
 * Description: Initializes and starts the runtime
 * Last updated: Mar. 22, 2024
 ************************************************************/
AgentController.__init();
PlayerController.__init();
ParryController.__init();
HitboxController.__init();
StaminaController.__init();
TargetingController.__init();
RangedController.__init();
VisualsController.__init();
CameraController.__init();

export = "Initialized Successfully";
