import { ReplicatedStorage } from "@rbxts/services";

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

interface WeaponMetadata {
	[key: string]: Map<string, unknown>;
}

print("Starting...");

const WeaponMetadata = req<WeaponMetadata>("WeaponMetadata");

/**
 * Rounds a number to the nearest multiple of another number.
 * round(531.1111, 5) => 530
 */
const round = (num: number, to: number): number => {
	return math.round(num / to) * to;
};

const formatRound = (num: number, decimals: number): string => {
	return string.format("%." + tostring(decimals) + "f", num);
};

const heavy = new Array<[string, Map<string, unknown>]>();
const light = new Array<[string, Map<string, unknown>]>();
for (const [i, v] of pairs(WeaponMetadata)) {
	if (v.get("class") === "lightMelee") {
		light.push([i as string, v]);
	} else if (v.get("class") === "heavyMelee") {
		heavy.push([i as string, v]);
	}
}

heavy.sort((a, b) => (a[1].get("order") as number) < (b[1].get("order") as number));
light.sort((a, b) => (a[1].get("order") as number) < (b[1].get("order") as number));

let heavyStr = "";
let lightStr = "";

const getMeleeHeaderStr = (label: string, desc: string) => {
	let str = "/" + "*".rep(60) + "\n";
	str += " * Section: " + label.upper() + "\n";
	str += " * Description: " + desc + "\n";
	str += " * Last Updated: " + DateTime.now().FormatLocalTime("MMM. D, YYYY", "en-us") + "\n";
	str += " " + "*".rep(60) + "/" + "\n";
	return str;
};
const getMeleeDataStr = (name: string, metadata: Map<string, unknown>) => {
	if (name === "weapon70") return "";

	let displayName: string;
	if (name === "weapon62") displayName = "Yoru";
	else displayName = metadata.get("displayName") as string;

	const tool = metadata.get("tool") as Tool & {
		Hitboxes: Folder;
	};
	let range: number = 2.5;
	tool.Hitboxes.GetChildren().forEach((hitbox) => {
		if (hitbox.IsA("Part")) {
			if (hitbox.Name === "FullBodyHitbox") return;
			const size = hitbox.Size.Magnitude + 2.5;
			if (size > range) {
				range = size;
			}
		}
	});
	range = round(range, 0.05);

	let duration = 0.05;
	const slashes = metadata.get("slashMetadata") as Array<{ duration?: number }> | undefined;
	if (slashes !== undefined) {
		slashes.forEach((slash) => {
			if (slash.duration === undefined) return;
			const dur = math.max((slash.duration - 0.05) / 2, duration);
			if (dur > duration) duration = dur;
		});
		duration = round(duration, 0.01);
	} else {
		print("No slash metadata for " + displayName + " (" + name + ")");
		return "";
	}

	let str = "";
	str += "// " + displayName + "\n";
	str += 'MeleeData.set("' + name + '", {\n';
	str += '\tname: "' + displayName + '",\n';
	str += "\trange: " + formatRound(range, 2) + ",\n";
	str += "\tduration: " + formatRound(duration, 2) + ",\n";
	str += "\tcooldown: " + formatRound(metadata.get("cooldown") as number, 3) + ",\n";
	str += "});";
	return str;
};

heavyStr += getMeleeHeaderStr("Heavy Melee", "Melee weapons that are slower but deal more damage.");
lightStr += getMeleeHeaderStr("Light Melee", "Melee weapons that are faster but deal less damage.");

heavy.forEach((v) => {
	const [name, metadata] = v;
	heavyStr += getMeleeDataStr(name, metadata) + "\n";
});
light.forEach((v) => {
	const [name, metadata] = v;
	lightStr += getMeleeDataStr(name, metadata) + "\n";
});
setclipboard(heavyStr + "\n".rep(2) + lightStr);
print("Copied to clipboard!");
