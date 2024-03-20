import { Players } from "@rbxts/services";
import type * as Linoria from "@script-ts/linorialib";
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
const {
	load,
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
} = loadstring(
	game.HttpGet("https://raw.githubusercontent.com/scripts-ts/LinoriaLib/main/out/init.lua"),
)() as typeof Linoria;
const [library, savemanager, thememanager] = load();

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
	.setSaveManager(savemanager)
	.setThemeManager(thememanager)
	.windows([
		new Window()
			.title("Muffet Hub | Combat Warriors")
			.centered(true)
			.autoShow(true)
			.withFadeTime(0)
			.pages([
				new Page()
					.title("Legit")
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
									new Toggle().index("legit.auto_parry.alerts").title("Alerts").default(true),
									new Slider()
										.index("legit.auto_parry.predict")
										.title("Predict")
										.suffix(" ms")
										.compact(true)
										.hideMax(true)
										.limits(10, 1000)
										.default(10),
								]),
						]),
					])
					.right([]),
				new Page().title("Visuals").left([]).right([]),
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
