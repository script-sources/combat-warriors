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
--[[
	*
	 * Rounds a number to the nearest multiple of another number.
	 * round(531.1111, 5) => 530
	 
]]
local round = function(num, to)
	return math.round(num / to) * to
end
local formatRound = function(num, decimals)
	return string.format("%." .. tostring(decimals) .. "f", num)
end
local heavy = {}
local light = {}
for i, v in pairs(WeaponMetadata) do
	if v.class == "lightMelee" then
		local _arg0 = { i, v }
		table.insert(light, _arg0)
	elseif v.class == "heavyMelee" then
		local _arg0 = { i, v }
		table.insert(heavy, _arg0)
	end
end
table.sort(heavy, function(a, b)
	return (a[2].order) < (b[2].order)
end)
table.sort(light, function(a, b)
	return (a[2].order) < (b[2].order)
end)
local heavyStr = ""
local lightStr = ""
local getMeleeHeaderStr = function(label, desc)
	local str = "/" .. string.rep("*", 60) .. "\n"
	str ..= " * Section: " .. string.upper(label) .. "\n"
	str ..= " * Description: " .. desc .. "\n"
	str ..= " * Last Updated: " .. DateTime.now():FormatLocalTime("MMM. D, YYYY", "en-us") .. "\n"
	str ..= " " .. string.rep("*", 60) .. "/" .. "\n"
	return str
end
local getMeleeDataStr = function(name, metadata)
	if name == "weapon70" then
		return ""
	end
	local displayName
	if name == "weapon62" then
		displayName = "Yoru"
	else
		displayName = metadata.displayName
	end
	local tool = metadata.tool
	local range = 2.5
	local _exp = tool.Hitboxes:GetChildren()
	-- ▼ ReadonlyArray.forEach ▼
	local _callback = function(hitbox)
		if hitbox:IsA("Part") then
			if hitbox.Name == "FullBodyHitbox" then
				return nil
			end
			local size = hitbox.Size.Magnitude + 2.5
			if size > range then
				range = size
			end
		end
	end
	for _k, _v in _exp do
		_callback(_v, _k - 1, _exp)
	end
	-- ▲ ReadonlyArray.forEach ▲
	range = round(range, 0.05)
	local duration = 0.05
	local slashes = metadata.slashMetadata
	if slashes ~= nil then
		-- ▼ ReadonlyArray.forEach ▼
		local _callback_1 = function(slash)
			if slash.duration == nil then
				return nil
			end
			local dur = math.max((slash.duration - 0.05) / 2, duration)
			if dur > duration then
				duration = dur
			end
		end
		for _k, _v in slashes do
			_callback_1(_v, _k - 1, slashes)
		end
		-- ▲ ReadonlyArray.forEach ▲
		duration = round(duration, 0.01)
	else
		print("No slash metadata for " .. displayName .. " (" .. name .. ")")
		return ""
	end
	local str = ""
	str ..= "// " .. displayName .. "\n"
	str ..= 'MeleeData.set("' .. name .. '", {\n'
	str ..= '\tname: "' .. displayName .. '",\n'
	str ..= "\trange: " .. formatRound(range, 2) .. ",\n"
	str ..= "\tduration: " .. formatRound(duration, 2) .. ",\n"
	str ..= "\tcooldown: " .. formatRound(metadata.cooldown, 3) .. ",\n"
	str ..= "});"
	return str
end
heavyStr ..= getMeleeHeaderStr("Heavy Melee", "Melee weapons that are slower but deal more damage.")
lightStr ..= getMeleeHeaderStr("Light Melee", "Melee weapons that are faster but deal less damage.")
-- ▼ ReadonlyArray.forEach ▼
local _callback = function(v)
	local _binding = v
	local name = _binding[1]
	local metadata = _binding[2]
	heavyStr ..= getMeleeDataStr(name, metadata) .. "\n"
end
for _k, _v in heavy do
	_callback(_v, _k - 1, heavy)
end
-- ▲ ReadonlyArray.forEach ▲
-- ▼ ReadonlyArray.forEach ▼
local _callback_1 = function(v)
	local _binding = v
	local name = _binding[1]
	local metadata = _binding[2]
	lightStr ..= getMeleeDataStr(name, metadata) .. "\n"
end
for _k, _v in light do
	_callback_1(_v, _k - 1, light)
end
-- ▲ ReadonlyArray.forEach ▲
setclipboard(heavyStr .. string.rep("\n", 2) .. lightStr)
print("Copied to clipboard!")
return nil
