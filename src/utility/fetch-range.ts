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
interface UtilityMetadata {
	[key: string]: Map<string, unknown>;
}

print("Starting...");
const WeaponMetadata = req<WeaponMetadata>("WeaponMetadata");
const UtilityMetadata = req<UtilityMetadata>("UtilityMetadata");

const formatRound = (num: number, decimals: number): string => {
	return string.format("%." + tostring(decimals) + "f", num);
};

const bows: string[] = ["utility9", "weapon43", "weapon44", "weapon53"];

let str = "";
bows.forEach((id) => {
	const metadata = WeaponMetadata[id];
	const displayName = metadata.get("displayName") as string;
	const speed = metadata.get("speed") as number;
	const acceleration = metadata.get("gravity") as Vector3;

	str += "// " + displayName + "\n";
	str += 'RangeData.set("' + id + '", {\n';
	str += '\tname: "' + displayName + '",\n';
	str += "\tspeed: " + formatRound(speed, 1) + ",\n";
	str += "\tgravity: " + formatRound(acceleration.Y, 1) + ",\n";
	str += "});\n";
});
print(str);
setclipboard(str);
