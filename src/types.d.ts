export type MeleeData = {
	name: string;
	range: number;
	duration: number;
	cooldown: number;
};
export type RangeData = { name: string; speed: number; gravity: number };

declare global {
	interface _G {
		"combat-warriors"?: true;
	}
}

export type Node = { next?: Node; item: Destructible };
export type Destructible = (() => unknown) | RBXScriptConnection | thread | { destroy(): void } | { Destroy(): void };
