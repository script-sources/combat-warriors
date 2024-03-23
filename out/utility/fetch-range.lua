-- Compiled with roblox-ts v2.3.0
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local req = (function()
	local Nevermore = require(ReplicatedStorage:WaitForChild("Framework"):WaitForChild("Nevermore"))
	local _require = rawget(Nevermore, "_require")
	local modules = debug.getupvalue(_require, 2)
	local _arg0 = type(modules) == "table"
	assert(_arg0)
	return function(moduleName)
		local module
		while module == nil do
			local _moduleName = moduleName
			local object = modules[_moduleName]
			if typeof(object) == "Instance" and object:IsA("ModuleScript") then
				module = object
			end
			task.wait()
		end
		setthreadidentity(2)
		local result = getrenv().require(module)
		setthreadidentity(7)
		return result
	end
end)()
print("Starting...")
local WeaponMetadata = req("WeaponMetadata")
local UtilityMetadata = req("UtilityMetadata")
local formatRound = function(num, decimals)
	return string.format("%." .. tostring(decimals) .. "f", num)
end
local bows = { "utility9", "weapon43", "weapon44", "weapon53" }
local str = ""
-- ▼ ReadonlyArray.forEach ▼
local _callback = function(id)
	local metadata = WeaponMetadata[id]
	local displayName = metadata.displayName
	local speed = metadata.speed
	local acceleration = metadata.gravity
	str ..= "// " .. displayName .. "\n"
	str ..= 'RangeData.set("' .. id .. '", {\n'
	str ..= '\tname: "' .. displayName .. '",\n'
	str ..= "\tspeed: " .. formatRound(speed, 1) .. ",\n"
	str ..= "\tgravity: " .. formatRound(acceleration.Y, 1) .. ",\n"
	str ..= "});\n"
end
for _k, _v in bows do
	_callback(_v, _k - 1, bows)
end
-- ▲ ReadonlyArray.forEach ▲
print(str)
setclipboard(str)
return nil
