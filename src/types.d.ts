export type MeleeData = { range: number; duration: number };
export type RangeData = { speed: number; gravity: number };

declare global {
	interface _G {
		"combat-warriors"?: true;
	}
}

export type Node = { next?: Node; item: Destructible };
export type Destructible = (() => unknown) | RBXScriptConnection | thread | { destroy(): void } | { Destroy(): void };
