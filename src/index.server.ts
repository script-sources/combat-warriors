import { Players } from "@rbxts/services";
import type * as Linoria from "@script-ts/linorialib";
import { Library } from "@script-ts/linorialib/out/library";
import { Destructible, Node } from "types";

if (_G["combat-warriors"]) throw "This program is already running!";
else _G["combat-warriors"] = true;

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
	Divider,
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
							new Toggle()
								.index("gameplay.auto_parry.enabled")
								.title("Enabled")
								.tooltip("Automatically parry attacks")
								.default(false)
								.extensions([
									new KeyPicker()
										.index("gameplay.auto_parry.key")
										.title("Auto Parry")
										.bind("V")
										.mode("Hold"),
								]),

							new DependencyBox()
								.dependsOn("gameplay.auto_parry.enabled", true)
								.elements([
									new Toggle()
										.index("gameplay.auto_parry.predict_enabled")
										.title("Predict")
										.tooltip("Predicts the enemy's velocity, so you can parry in advance.")
										.default(false),
									new DependencyBox()
										.dependsOn("gameplay.auto_parry.predict_enabled", true)
										.elements([
											new Slider()
												.index("gameplay.auto_parry.predict_time")
												.title("Amount")
												.suffix(" ms")
												.round(0)
												.limits(10, 400)
												.default(10)
												.compact(true)
												.hideMax(true),
										]),
									new Toggle()
										.index("gameplay.auto_parry.debug")
										.title("Debugger")
										.tooltip("Enable debug notifications for Auto Parry")
										.default(true),
								]),
						]),
					])
					.right([]),
				new Page()
					.title("Target")
					.left([
						new Groupbox()
							.title("Filters")
							.elements([
								new MultiDropdown()
									.index("target.filter.players")
									.title("Players")
									.tooltip("The list of players to whitelist/blacklist")
									.canNull(true)
									.specialType("Player"),
								new Dropdown<"Ally" | "Enemy">()
									.index("target.filter.players_type")
									.title("Player disposition")
									.tooltip("Sets the selected players as allies or enemies")
									.options(["Ally", "Enemy"])
									.default("Enemy"),

								new Divider(),

								new Toggle()
									.index("target.filter.team_filter")
									.title("Team filter?")
									.tooltip("Enables team checking for the filter")
									.default(false),
								new DependencyBox()
									.dependsOn("target.filter.team_filter", true)
									.elements([
										new MultiDropdown()
											.index("target.filter.teams")
											.title("Teams")
											.tooltip("The list of teams to whitelist/blacklist")
											.canNull(true)
											.specialType("Team"),
										new Dropdown<"Ally" | "Enemy">()
											.index("target.filter.teams_type")
											.title("Team disposition")
											.tooltip("Sets the selected teams as allies or enemies")
											.options(["Ally", "Enemy"])
											.default("Enemy"),

										new Dropdown<"All" | "Any">(),
									]),
							]),
					])
					.right([]),
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

export = "Initialized Successfully";
