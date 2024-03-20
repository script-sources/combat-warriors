import { Players } from "@rbxts/services";
import type * as Linoria from "@script-ts/linorialib";
import { Library } from "@script-ts/linorialib/out/library";
import { Destructible, Node } from "types";

if (_G["program id"]) throw "This program is already running!";
_G["program id"] = true;

/************************************************************
 * CONFIGURATIONS
 * Description: User-defined settings and configurations
 * Last updated: Feb. 14, 2024
 ************************************************************/

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
	Toggle,
	Slider,
	Dropdown,
	MultiDropdown,
	KeyPicker,
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

/************************************************************
 * CONTROLLERS
 * Description: Singletons that are used once
 * Last updated: Feb. 14, 2024
 ************************************************************/

/************************************************************
 * INTERFACE
 * Description: User interface instantiation
 * Last updated: Feb. 14, 2024
 ************************************************************/
new Builder()
	.setLibrary(library)
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
							new Toggle()
								.index("legit.auto_parry.enabled")
								.title("Enabled")
								.tooltip("Automatically parry attacks")
								.default(false)
								.extensions([
									new KeyPicker()
										.index("legit.auto_parry.key")
										.title("Auto Parry")
										.bind("V")
										.mode("Hold"),
								]),

							new DependencyBox()
								.dependsOn("legit.auto_parry.enabled", true)
								.elements([
									new Toggle()
										.index("legit.auto_parry.alerts")
										.title("Debug Mode")
										.tooltip("Auto Parry sends debug notifications")
										.default(true),
									new Slider()
										.index("legit.auto_parry.predict")
										.title("Predict")
										.suffix(" ms")
										.round(0)
										.limits(10, 1000)
										.default(10)
										.compact(true)
										.hideMax(true),
								]),
						]),
						new Groupbox()
							.title("Hitbox Filter")
							.elements([
								new MultiDropdown()
									.index("legit.hitboxes.players")
									.title("Players")
									.tooltip("The list of players to whitelist/blacklist")
									.canNull(true)
									.specialType("Player"),
								new Toggle()
									.index("legit.hitboxes.whitelist")
									.title("Whitelist?")
									.tooltip("If enabled, only the selected players will be targeted")
									.default(false),
								new Slider()
									.index("legit.hitboxes.probability")
									.title("Chance")
									.suffix("%")
									.round(0)
									.limits(0, 100)
									.default(50)
									.hideMax(true)
									.compact(true),
							]),
					])
					.right([]),
				new Page().title("Settings").left([]).right([]),
			]),
	])
	.renderUI();

/************************************************************
 * INITIALIZATION
 * Description: Initializes and starts the runtime
 * Last updated: Feb. 14, 2024
 ************************************************************/

export = "Initialized Successfully";
