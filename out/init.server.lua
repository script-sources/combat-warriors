-- Compiled with roblox-ts v2.3.0
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local UserInputService = game:GetService("UserInputService")
local Workspace = game:GetService("Workspace")
if _G["combat-warriors"] then
	error("This program is already running!")
else
	_G["combat-warriors"] = true
end
--[[
	***********************************************************
	 * CONFIGURATIONS
	 * Description: User-defined settings and configurations
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
local MeleeData = {}
do
	--[[
		***********************************************************
		     * Section: HEAVY MELEE
		     * Description: Melee weapons that are slower but deal more damage.
		     * Last Updated: Mar. 22, 2024
		     ***********************************************************
	]]
	-- Bo Staff
	MeleeData.weapon22 = {
		name = "Bo Staff",
		range = 13.65,
		duration = 0.05,
		cooldown = 1.4,
	}
	-- Shovel
	MeleeData.weapon23 = {
		name = "Shovel",
		range = 13.8,
		duration = 0.05,
		cooldown = 1.8,
	}
	-- Golf Club
	MeleeData.weapon24 = {
		name = "Golf Club",
		range = 13.65,
		duration = 0.05,
		cooldown = 1.72,
	}
	-- Fire Axe
	MeleeData.weapon25 = {
		name = "Fire Axe",
		range = 12.35,
		duration = 0.05,
		cooldown = 1.4,
	}
	-- Spear
	MeleeData.weapon46 = {
		name = "Spear",
		range = 14.05,
		duration = 0.05,
		cooldown = 1.82,
	}
	-- Longsword
	MeleeData.weapon26 = {
		name = "Longsword",
		range = 13.85,
		duration = 0.05,
		cooldown = 1.7,
	}
	-- War Axe
	MeleeData.weapon27 = {
		name = "War Axe",
		range = 12.65,
		duration = 0.05,
		cooldown = 1.64,
	}
	-- Greataxe
	MeleeData.weapon28 = {
		name = "Greataxe",
		range = 12.7,
		duration = 0.05,
		cooldown = 1.66,
	}
	-- Flamberge
	MeleeData.weapon29 = {
		name = "Flamberge",
		range = 13.9,
		duration = 0.05,
		cooldown = 1.64,
	}
	-- Bardiche
	MeleeData.weapon30 = {
		name = "Bardiche",
		range = 12.4,
		duration = 0.05,
		cooldown = 1.73,
	}
	-- Brute Mace
	MeleeData.weapon31 = {
		name = "Brute Mace",
		range = 12.55,
		duration = 0.05,
		cooldown = 1.76,
	}
	-- Riot Shield
	MeleeData.weapon63 = {
		name = "Riot Shield",
		range = 12.9,
		duration = 0.05,
		cooldown = 1.75,
	}
	-- Battle Axe
	MeleeData.weapon32 = {
		name = "Battle Axe",
		range = 12.75,
		duration = 0.05,
		cooldown = 1.7,
	}
	-- Greatsword
	MeleeData.weapon33 = {
		name = "Greatsword",
		range = 14.0,
		duration = 0.05,
		cooldown = 1.68,
	}
	-- Trident
	MeleeData.weapon34 = {
		name = "Trident",
		range = 14.35,
		duration = 0.05,
		cooldown = 1.85,
	}
	-- Polehammer
	MeleeData.weapon47 = {
		name = "Polehammer",
		range = 12.9,
		duration = 0.05,
		cooldown = 1.6,
	}
	-- Palm Axe
	MeleeData.weapon61 = {
		name = "Palm Axe",
		range = 12.9,
		duration = 0.05,
		cooldown = 1.67,
	}
	-- Kanabo
	MeleeData.weapon35 = {
		name = "Kanabo",
		range = 13.75,
		duration = 0.05,
		cooldown = 1.75,
	}
	-- Curved Greatsword
	MeleeData.weapon55 = {
		name = "Curved Greatsword",
		range = 14.25,
		duration = 0.05,
		cooldown = 1.62,
	}
	-- War Hammer
	MeleeData.weapon36 = {
		name = "War Hammer",
		range = 12.8,
		duration = 0.05,
		cooldown = 1.8,
	}
	-- Halberd
	MeleeData.weapon37 = {
		name = "Halberd",
		range = 12.65,
		duration = 0.05,
		cooldown = 1.63,
	}
	-- Naginata
	MeleeData.weapon38 = {
		name = "Naginata",
		range = 15.05,
		duration = 0.05,
		cooldown = 1.76,
	}
	-- Zweihander
	MeleeData.weapon39 = {
		name = "Zweihander",
		range = 15.0,
		duration = 0.05,
		cooldown = 1.86,
	}
	-- Heavy Scythe
	MeleeData.weapon54 = {
		name = "Heavy Scythe",
		range = 13.6,
		duration = 0.05,
		cooldown = 1.9,
	}
	-- Odachi
	MeleeData.weapon40 = {
		name = "Odachi",
		range = 14.5,
		duration = 0.05,
		cooldown = 1.8,
	}
	-- Dual Naginata
	MeleeData.weapon57 = {
		name = "Dual Naginata",
		range = 16.55,
		duration = 0.1,
		cooldown = 1.85,
	}
	-- Colossal Greatsword
	MeleeData.weapon41 = {
		name = "Colossal Greatsword",
		range = 14.6,
		duration = 0.1,
		cooldown = 1.9,
	}
	-- Glaive
	MeleeData.weapon49 = {
		name = "Glaive",
		range = 14.3,
		duration = 0.1,
		cooldown = 1.8,
	}
	-- Yoru
	MeleeData.weapon62 = {
		name = "Yoru",
		range = 14.75,
		duration = 0.1,
		cooldown = 2.4,
	}
	-- Dragon Slayer (Old)
	MeleeData.weapon100 = {
		name = "Dragon Slayer (Old)",
		range = 14.75,
		duration = 0.1,
		cooldown = 2.25,
	}
	-- Dragon Slayer
	MeleeData.weapon42 = {
		name = "Dragon Slayer",
		range = 14.75,
		duration = 0.1,
		cooldown = 2.25,
	}
	-- CTF Flag
	MeleeData.weapon75 = {
		name = "CTF Flag",
		range = 14.5,
		duration = 0.05,
		cooldown = 1.5,
	}
	--[[
		***********************************************************
		     * Section: LIGHT MELEE
		     * Description: Melee weapons that are faster but deal less damage.
		     * Last Updated: Mar. 22, 2024
		     ***********************************************************
	]]
	-- Baton
	MeleeData.weapon1 = {
		name = "Baton",
		range = 12.3,
		duration = 0.05,
		cooldown = 0.56,
	}
	-- Hammer
	MeleeData.weapon59 = {
		name = "Hammer",
		range = 12.1,
		duration = 0.05,
		cooldown = 0.57,
	}
	-- Crowbar
	MeleeData.weapon2 = {
		name = "Crowbar",
		range = 12.9,
		duration = 0.05,
		cooldown = 0.6,
	}
	-- Bat
	MeleeData.weapon51 = {
		name = "Bat",
		range = 12.8,
		duration = 0.05,
		cooldown = 0.55,
	}
	-- Sickle
	MeleeData.weapon3 = {
		name = "Sickle",
		range = 12.0,
		duration = 0.05,
		cooldown = 0.48,
	}
	-- Lance
	MeleeData.weapon4 = {
		name = "Lance",
		range = 15.65,
		duration = 0.05,
		cooldown = 0.633,
	}
	-- Club
	MeleeData.weapon52 = {
		name = "Club",
		range = 12.8,
		duration = 0.05,
		cooldown = 0.65,
	}
	-- Scimitar
	MeleeData.weapon50 = {
		name = "Scimitar",
		range = 13.05,
		duration = 0.05,
		cooldown = 0.61,
	}
	-- Macuahuitl
	MeleeData.weapon5 = {
		name = "Macuahuitl",
		range = 12.65,
		duration = 0.05,
		cooldown = 0.58,
	}
	-- Khopesh
	MeleeData.weapon6 = {
		name = "Khopesh",
		range = 12.8,
		duration = 0.05,
		cooldown = 0.52,
	}
	-- Mace
	MeleeData.weapon7 = {
		name = "Mace",
		range = 12.25,
		duration = 0.05,
		cooldown = 0.56,
	}
	-- Cutlass
	MeleeData.weapon8 = {
		name = "Cutlass",
		range = 12.6,
		duration = 0.05,
		cooldown = 0.58,
	}
	-- Dual Hook Swords
	MeleeData.weapon9 = {
		name = "Dual Hook Swords",
		range = 13.1,
		duration = 0.05,
		cooldown = 0.55,
	}
	-- Iron Sword
	MeleeData.weapon45 = {
		name = "Iron Sword",
		range = 12.65,
		duration = 0.05,
		cooldown = 0.61,
	}
	-- Dual Hatchets
	MeleeData.weapon10 = {
		name = "Dual Hatchets",
		range = 12.15,
		duration = 0.05,
		cooldown = 0.533,
	}
	-- Rapier
	MeleeData.weapon11 = {
		name = "Rapier",
		range = 15.9,
		duration = 0.05,
		cooldown = 0.625,
	}
	-- Dual Machetes
	MeleeData.weapon12 = {
		name = "Dual Machetes",
		range = 12.2,
		duration = 0.05,
		cooldown = 0.566,
	}
	-- Steel Sword
	MeleeData.weapon13 = {
		name = "Steel Sword",
		range = 12.65,
		duration = 0.05,
		cooldown = 0.625,
	}
	-- Dual Daggers
	MeleeData.weapon14 = {
		name = "Dual Daggers",
		range = 12.2,
		duration = 0.05,
		cooldown = 0.51,
	}
	-- Sabre
	MeleeData.weapon60 = {
		name = "Sabre",
		range = 12.8,
		duration = 0.05,
		cooldown = 0.566,
	}
	-- Nunchucks
	MeleeData.weapon56 = {
		name = "Nunchucks",
		range = 12.0,
		duration = 0.05,
		cooldown = 0.52,
	}
	-- Dual Cleavers
	MeleeData.weapon16 = {
		name = "Dual Cleavers",
		range = 12.0,
		duration = 0.05,
		cooldown = 0.55,
	}
	-- Metal Bat
	MeleeData.weapon17 = {
		name = "Metal Bat",
		range = 13.05,
		duration = 0.05,
		cooldown = 0.6,
	}
	-- Kusarigama
	MeleeData.weapon64 = {
		name = "Kusarigama",
		range = 11.75,
		duration = 0.05,
		cooldown = 0.52,
	}
	-- Scythe
	MeleeData.weapon15 = {
		name = "Scythe",
		range = 12.6,
		duration = 0.05,
		cooldown = 0.6,
	}
	-- Dual Hammers
	MeleeData.weapon18 = {
		name = "Dual Hammers",
		range = 12.05,
		duration = 0.05,
		cooldown = 0.58,
	}
	-- Liuyedao
	MeleeData.weapon19 = {
		name = "Liuyedao",
		range = 12.85,
		duration = 0.05,
		cooldown = 0.57,
	}
	-- Flail
	MeleeData.weapon77 = {
		name = "Flail",
		range = 11.75,
		duration = 0.05,
		cooldown = 0.56,
	}
	-- Dual Tomahawks
	MeleeData.weapon20 = {
		name = "Dual Tomahawks",
		range = 12.15,
		duration = 0.05,
		cooldown = 0.55,
	}
	-- Shikomizue
	MeleeData.weapon48 = {
		name = "Shikomizue",
		range = 13.15,
		duration = 0.05,
		cooldown = 0.54,
	}
	-- Leviathan Axe
	MeleeData.weapon78 = {
		name = "Leviathan Axe",
		range = 12.8,
		duration = 0.05,
		cooldown = 0.6,
	}
	-- Katana
	MeleeData.weapon21 = {
		name = "Katana",
		range = 13.15,
		duration = 0.05,
		cooldown = 0.59,
	}
	-- Dual Katanas
	MeleeData.weapon65 = {
		name = "Dual Katanas",
		range = 13.2,
		duration = 0.05,
		cooldown = 0.6,
	}
	-- Triple Katanas
	MeleeData.weapon66 = {
		name = "Triple Katanas",
		range = 13.2,
		duration = 0.05,
		cooldown = 0.6,
	}
	-- Chainsaw
	MeleeData.weapon58 = {
		name = "Chainsaw",
		range = 11.45,
		duration = 0.5,
		cooldown = 1.1,
	}
	-- Fists
	MeleeData.weapon71 = {
		name = "Fists",
		range = 11.35,
		duration = 0.03,
		cooldown = 0.53,
	}
	-- Dual Claws
	MeleeData.weapon72 = {
		name = "Dual Claws",
		range = 11.5,
		duration = 0.05,
		cooldown = 0.53,
	}
end
local RangeData = {}
do
	-- Throwable Kunai
	RangeData.utility9 = {
		name = "Throwable Kunai",
		speed = 200.0,
		gravity = -10.0,
	}
	-- Longbow
	RangeData.weapon43 = {
		name = "Longbow",
		speed = 200.0,
		gravity = -10.0,
	}
	-- Crossbow
	RangeData.weapon44 = {
		name = "Crossbow",
		speed = 235.0,
		gravity = -5.0,
	}
	-- Heavy Bow
	RangeData.weapon53 = {
		name = "Heavy Bow",
		speed = 400.0,
		gravity = -10.0,
	}
end
local Keycodes = {}
do
	local _a = Enum.KeyCode.A
	Keycodes[_a] = 0x41
	local _b = Enum.KeyCode.B
	Keycodes[_b] = 0x42
	local _c = Enum.KeyCode.C
	Keycodes[_c] = 0x43
	local _d = Enum.KeyCode.D
	Keycodes[_d] = 0x44
	local _e = Enum.KeyCode.E
	Keycodes[_e] = 0x45
	local _f = Enum.KeyCode.F
	Keycodes[_f] = 0x46
	local _g = Enum.KeyCode.G
	Keycodes[_g] = 0x47
	local _h = Enum.KeyCode.H
	Keycodes[_h] = 0x48
	local _i = Enum.KeyCode.I
	Keycodes[_i] = 0x49
	local _j = Enum.KeyCode.J
	Keycodes[_j] = 0x4a
	local _k = Enum.KeyCode.K
	Keycodes[_k] = 0x4b
	local _l = Enum.KeyCode.L
	Keycodes[_l] = 0x4c
	local _m = Enum.KeyCode.M
	Keycodes[_m] = 0x4d
	local _n = Enum.KeyCode.N
	Keycodes[_n] = 0x4e
	local _o = Enum.KeyCode.O
	Keycodes[_o] = 0x4f
	local _p = Enum.KeyCode.P
	Keycodes[_p] = 0x50
	local _q = Enum.KeyCode.Q
	Keycodes[_q] = 0x51
	local _r = Enum.KeyCode.R
	Keycodes[_r] = 0x52
	local _s = Enum.KeyCode.S
	Keycodes[_s] = 0x53
	local _t = Enum.KeyCode.T
	Keycodes[_t] = 0x54
	local _u = Enum.KeyCode.U
	Keycodes[_u] = 0x55
	local _v = Enum.KeyCode.V
	Keycodes[_v] = 0x56
	local _w = Enum.KeyCode.W
	Keycodes[_w] = 0x57
	local _x = Enum.KeyCode.X
	Keycodes[_x] = 0x58
	local _y = Enum.KeyCode.Y
	Keycodes[_y] = 0x59
	local _z = Enum.KeyCode.Z
	Keycodes[_z] = 0x5a
end
--[[
	***********************************************************
	 * DETECTION HOOKS
	 * Description: Hooks to hide this program
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
do
	local min, max = 30e3, 40e3
	local sum, diff = min + max, max - min
	local getMemory = function()
		local t = math.floor(os.clock() * 10)
		local p = t - (t % 10)
		local isR = Random.new(p):NextInteger(0, 1) == 1
		if isR then
			return Random.new(t):NextInteger(min, max)
		else
			return math.floor((math.sin(t) * diff + sum) / 2)
		end
	end
	hookfunction(gcinfo, function()
		return getMemory()
	end)
	local collect
	collect = hookfunction(collectgarbage, function(t)
		if t == "count" then
			return getMemory()
		end
		return collect(t)
	end)
end
--[[
	***********************************************************
	 * VARIABLES
	 * Description: Variables referenced globally in the script
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
local LocalPlayer = Players.LocalPlayer
local Camera = Workspace.CurrentCamera
local Disposition
do
	local _inverse = {}
	Disposition = setmetatable({}, {
		__index = _inverse,
	})
	Disposition.Ally = 0
	_inverse[0] = "Ally"
	Disposition.Enemy = 1
	_inverse[1] = "Enemy"
end
local rangeData
--[[
	***********************************************************
	 * UTILITIES
	 * Description: Helper functions and classes
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
local repo = "https://raw.githubusercontent.com/scripts-ts/LinoriaLib/main/out/"
local _binding = loadstring(game:HttpGet(repo .. "init.lua"))()
local Builder = _binding.Builder
local Window = _binding.Window
local Page = _binding.Page
local ThemeSection = _binding.ThemeSection
local ConfigSection = _binding.ConfigSection
local Groupbox = _binding.Groupbox
local Tabbox = _binding.Tabbox
local Tab = _binding.Tab
local DependencyBox = _binding.DependencyBox
local Label = _binding.Label
local Toggle = _binding.Toggle
local Slider = _binding.Slider
local Dropdown = _binding.Dropdown
local MultiDropdown = _binding.MultiDropdown
local Divider = _binding.Divider
local Spacer = _binding.Spacer
local KeyPicker = _binding.KeyPicker
local ColorPicker = _binding.ColorPicker
local library = loadstring(game:HttpGet(repo .. "library.lua"))()
local savemanager = loadstring(game:HttpGet(repo .. "addons/savemanager.lua"))()
local thememanager = loadstring(game:HttpGet(repo .. "addons/thememanager.lua"))()
local Bin
do
	Bin = setmetatable({}, {
		__tostring = function()
			return "Bin"
		end,
	})
	Bin.__index = Bin
	function Bin.new(...)
		local self = setmetatable({}, Bin)
		return self:constructor(...) or self
	end
	function Bin:constructor()
	end
	function Bin:add(item)
		local node = {
			item = item,
		}
		if self.head == nil then
			self.head = node
		end
		if self.tail then
			self.tail.next = node
		end
		self.tail = node
		return item
	end
	function Bin:batch(...)
		local args = { ... }
		for _, item in args do
			local node = {
				item = item,
			}
			if self.head == nil then
				self.head = node
			end
			if self.tail then
				self.tail.next = node
			end
			self.tail = node
		end
		return args
	end
	function Bin:destroy()
		while self.head do
			local item = self.head.item
			if type(item) == "function" then
				item()
			elseif typeof(item) == "RBXScriptConnection" then
				item:Disconnect()
			elseif type(item) == "thread" then
				task.cancel(item)
			elseif item.destroy ~= nil then
				item:destroy()
			elseif item.Destroy ~= nil then
				item:Destroy()
			end
			self.head = self.head.next
		end
	end
	function Bin:isEmpty()
		return self.head == nil
	end
end
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
local DashHandler = req("DashHandlerClient")
local MeleeWeaponClient = req("MeleeWeaponClient")
local RaycastUtilClient = req("RaycastUtilClient")
local StaminaHandler = req("DefaultStaminaHandlerClient")
local function simulateKeycode(key)
	local _key = key
	local code = Keycodes[_key]
	keypress(code)
	task.delay(0.07, function()
		return keyrelease(code)
	end)
end
--[[
	***********************************************************
	 * COMPONENTS
	 * Description: Classes for specific entities/objects
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
local BaseComponent
do
	BaseComponent = setmetatable({}, {
		__tostring = function()
			return "BaseComponent"
		end,
	})
	BaseComponent.__index = BaseComponent
	function BaseComponent.new(...)
		local self = setmetatable({}, BaseComponent)
		return self:constructor(...) or self
	end
	function BaseComponent:constructor(instance)
		self.instance = instance
		self.bin = Bin.new()
	end
	function BaseComponent:destroy()
		self.bin:destroy()
	end
end
local HumanoidComponent
do
	local super = BaseComponent
	HumanoidComponent = setmetatable({}, {
		__tostring = function()
			return "HumanoidComponent"
		end,
		__index = super,
	})
	HumanoidComponent.__index = HumanoidComponent
	function HumanoidComponent.new(...)
		local self = setmetatable({}, HumanoidComponent)
		return self:constructor(...) or self
	end
	function HumanoidComponent:constructor(instance)
		super.constructor(self, instance)
		local name = instance.Name
		local root = instance:WaitForChild("HumanoidRootPart")
		if not root then
			error(`[HumanoidComponent]: '{name}' does not have a HumanoidRootPart`)
		end
		local head = instance:WaitForChild("Head")
		if not head then
			error(`[CharacterComponent]: '{name}' does not have an Head`)
		end
		local torso = instance:WaitForChild("Torso")
		if not torso then
			error(`[CharacterComponent]: '{name}' does not have an Torso`)
		end
		local humanoid = instance:WaitForChild("Humanoid")
		if not humanoid then
			error(`[HumanoidComponent]: '{name}' does not have a Humanoid`)
		end
		self.root = root
		self.head = head
		self.torso = torso
		self.humanoid = humanoid
		local _binding_1 = self
		local bin = _binding_1.bin
		bin:batch(humanoid.Died:Connect(function()
			return self:destroy()
		end), instance.AncestryChanged:Connect(function(_, parent)
			return parent == nil and self:destroy()
		end))
	end
end
local CharacterComponent
do
	local super = HumanoidComponent
	CharacterComponent = setmetatable({}, {
		__tostring = function()
			return "CharacterComponent"
		end,
		__index = super,
	})
	CharacterComponent.__index = CharacterComponent
	function CharacterComponent.new(...)
		local self = setmetatable({}, CharacterComponent)
		return self:constructor(...) or self
	end
	function CharacterComponent:constructor(player, instance)
		super.constructor(self, instance)
		local id = player.Name .. " @" .. player.DisplayName
		local tools = {}
		local backpack = player:WaitForChild("Backpack")
		if not backpack then
			error(`[CharacterComponent]: '{id}' does not have a Backpack`)
		end
		self.id = id
		self.player = player
		self.tools = tools
		self.equipped = nil
		self.backpack = backpack
		self.parrying = false
		local _binding_1 = self
		local bin = _binding_1.bin
		local torso = _binding_1.torso
		bin:batch(backpack.ChildAdded:Connect(function(child)
			return self:_onBackpackChild(child)
		end), instance.ChildAdded:Connect(function(child)
			return self:_onCharacterChild(child)
		end), torso.ChildAdded:Connect(function(child)
			if child:IsA("Sound") and child.Name == "DashSound" then
				self:onDash()
			end
		end))
	end
	function CharacterComponent:isParrying()
		return self.parrying
	end
	function CharacterComponent:onTool(tool)
	end
	function CharacterComponent:onMeleeTool(tool, data)
		local toolBin = Bin.new()
		local _tools = self.tools
		local _tool = tool
		_tools[_tool] = true
		local clock = os.clock
		local debounce = clock()
		local hitboxes = {}
		local onChild = function(hitbox)
			if hitbox:IsA("Folder") and hitbox.Name == "Hitboxes" then
				local _hitbox = hitbox
				if hitboxes[_hitbox] ~= nil then
					return nil
				end
				local _hitbox_1 = hitbox
				hitboxes[_hitbox_1] = true
				toolBin:add(hitbox.DescendantAdded:Connect(function(instance)
					if instance:IsA("Sound") then
						local t = clock()
						if t > debounce then
							self:onSwing(data)
						end
						debounce = t + 0.05
					end
				end))
			end
		end
		for _, hitbox in tool:GetChildren() do
			task.defer(onChild, hitbox)
		end
		toolBin:batch(tool.ChildAdded:Connect(onChild), tool.Destroying:Connect(function()
			return toolBin:destroy()
		end), tool.AncestryChanged:Connect(function(_, parent)
			return parent == nil and toolBin:destroy()
		end))
	end
	function CharacterComponent:onRangedTool(tool, data)
	end
	function CharacterComponent:onEquip()
	end
	function CharacterComponent:onSwing(data)
	end
	function CharacterComponent:onParryBegan()
	end
	function CharacterComponent:onParryEnded()
	end
	function CharacterComponent:onDash()
	end
	function CharacterComponent:_onBackpackChild(tool)
		if not tool:IsA("Tool") then
			return nil
		end
		local tools = self.tools
		local _tool = tool
		if tools[_tool] ~= nil then
			return nil
		end
		local _tool_1 = tool
		tools[_tool_1] = true
		local id = tool:GetAttribute("ItemId")
		task.defer(function()
			return self:onTool(tool)
		end)
		if id ~= nil then
			local melee = MeleeData[id]
			if melee then
				task.defer(function()
					return self:onMeleeTool(tool, melee)
				end)
			else
				local ranged = RangeData[id]
				if ranged then
					task.defer(function()
						return self:onRangedTool(tool, ranged)
					end)
				end
			end
		end
		local _binding_1 = self
		local backpack = _binding_1.backpack
		local bin = _binding_1.bin
		local instance = _binding_1.instance
		local previous = backpack
		bin:add(tool.AncestryChanged:Connect(function()
			local parent = tool.Parent
			if parent ~= previous then
				if parent == backpack then
					if self.equipped == tool then
						self.equipped = nil
					end
				elseif parent == instance then
					self.equipped = tool
				end
				previous = parent
				self:onEquip()
			end
		end))
	end
	function CharacterComponent:_onCharacterChild(shield)
		local id = shield:GetAttribute("ParryShieldId")
		if id == nil then
			return nil
		end
		self.bin:add(shield:GetAttributeChangedSignal("Toggle"):Connect(function()
			local toggled = shield:GetAttribute("Toggle")
			self.parrying = toggled
			if toggled then
				self:onParryBegan()
			else
				self:onParryEnded()
			end
		end))
	end
end
local AgentController, ParryController
local EntityComponent
do
	local super = CharacterComponent
	EntityComponent = setmetatable({}, {
		__tostring = function()
			return "EntityComponent"
		end,
		__index = super,
	})
	EntityComponent.__index = EntityComponent
	function EntityComponent.new(...)
		local self = setmetatable({}, EntityComponent)
		return self:constructor(...) or self
	end
	function EntityComponent:constructor(player, instance)
		super.constructor(self, player.instance, instance)
		local quad = Drawing.new("Quad")
		local disposition = player:getDisposition()
		self.quad = quad
		self.disposition = disposition
		self:setDisposition(disposition)
		self:updateQuad()
		local _instances = EntityComponent.instances
		local _instance = instance
		local _self = self
		_instances[_instance] = _self
		self.bin:batch(function()
			local _instances_1 = EntityComponent.instances
			local _instance_1 = instance
			-- ▼ Map.delete ▼
			local _valueExisted = _instances_1[_instance_1] ~= nil
			_instances_1[_instance_1] = nil
			-- ▲ Map.delete ▲
			return _valueExisted
		end, function()
			return self.quad:Remove()
		end)
	end
	function EntityComponent:getDisposition()
		return self.disposition
	end
	function EntityComponent:setDisposition(disposition)
		self.disposition = disposition
		if disposition == Disposition.Ally then
			local _allies = EntityComponent.allies
			local _instance = self.instance
			local _self = self
			_allies[_instance] = _self
			local _enemies = EntityComponent.enemies
			local _instance_1 = self.instance
			_enemies[_instance_1] = nil
		else
			local _enemies = EntityComponent.enemies
			local _instance = self.instance
			local _self = self
			_enemies[_instance] = _self
			local _allies = EntityComponent.allies
			local _instance_1 = self.instance
			_allies[_instance_1] = nil
		end
		self:updateQuad()
	end
	function EntityComponent:onSwing(data)
		if self:getDisposition() == Disposition.Ally then
			return nil
		end
		local root = self.root
		local pos = root.Position
		local aPos = AgentController.getPosition()
		local distXZ = math.sqrt((pos.X - aPos.X) ^ 2 + (pos.Z - aPos.Z) ^ 2)
		local distY = math.abs(pos.Y - aPos.Y)
		local range = data.range + Options["gameplay.auto_parry.threshold"].Value
		-- Already in range
		if distXZ < range and distY < 20 then
			ParryController.parry()
			return nil
		end
		-- Cannot enter range
		if distXZ > 50 or distY > 50 then
			return nil
		end
		-- Wait until in range or too far
		local clock = os.clock
		local stop = clock() + data.duration
		local c
		c = self.bin:add(RunService.RenderStepped:Connect(function()
			local t = clock()
			if t >= stop then
				c:Disconnect()
			end
			local aPos = AgentController.getPosition()
			local distXZ = math.sqrt((pos.X - aPos.X) ^ 2 + (pos.Z - aPos.Z) ^ 2)
			local distY = math.abs(pos.Y - aPos.Y)
			if distXZ < range and distY < 20 then
				ParryController.parry()
				c:Disconnect()
			end
		end))
	end
	function EntityComponent:updateQuad()
		local _result = self.connection
		if _result ~= nil then
			_result:Disconnect()
		end
		local _binding_1 = self
		local quad = _binding_1.quad
		local disposition = _binding_1.disposition
		local enabled = Toggles["visuals.player_esp.enabled"].Value
		local isDispositionVisible = if disposition == Disposition.Ally then Toggles["visuals.player_esp.ally_enabled"].Value else Toggles["visuals.player_esp.enemy_enabled"].Value
		if not enabled or not isDispositionVisible then
			quad.Visible = false
			return nil
		end
		local _binding_2 = self
		local bin = _binding_2.bin
		local root = _binding_2.root
		local color = if disposition == Disposition.Ally then Options["visuals.player_esp.ally_color"] else Options["visuals.player_esp.enemy_color"]
		quad.Color = color.Value
		quad.Transparency = 1 - color.Transparency
		quad.Thickness = 2
		local xBound = 2
		local yBound = 3
		local TL = Vector3.new(-xBound, yBound, 0)
		local TR = Vector3.new(xBound, yBound, 0)
		local BR = Vector3.new(xBound, -yBound, 0)
		local BL = Vector3.new(-xBound, -yBound, 0)
		self.connection = bin:add(RunService.RenderStepped:Connect(function()
			local pos = root.CFrame
			local TL2D = Camera:WorldToViewportPoint(pos * TL)
			if TL2D.Z < 0 then
				quad.Visible = false
				return quad.Visible
			end
			local TR2D = Camera:WorldToViewportPoint(pos * TR)
			if TR2D.Z < 0 then
				quad.Visible = false
				return quad.Visible
			end
			local BR2D = Camera:WorldToViewportPoint(pos * BR)
			if BR2D.Z < 0 then
				quad.Visible = false
				return quad.Visible
			end
			local BL2D = Camera:WorldToViewportPoint(pos * BL)
			if BL2D.Z < 0 then
				quad.Visible = false
				return quad.Visible
			end
			quad.Visible = true
			quad.PointA = Vector2.new(TL2D.X, TL2D.Y)
			quad.PointB = Vector2.new(TR2D.X, TR2D.Y)
			quad.PointC = Vector2.new(BR2D.X, BR2D.Y)
			quad.PointD = Vector2.new(BL2D.X, BL2D.Y)
		end))
	end
	EntityComponent.instances = {}
	EntityComponent.allies = {}
	EntityComponent.enemies = {}
end
local AgentComponent
do
	local super = CharacterComponent
	AgentComponent = setmetatable({}, {
		__tostring = function()
			return "AgentComponent"
		end,
		__index = super,
	})
	AgentComponent.__index = AgentComponent
	function AgentComponent.new(...)
		local self = setmetatable({}, AgentComponent)
		return self:constructor(...) or self
	end
	function AgentComponent:constructor(instance)
		super.constructor(self, LocalPlayer, instance)
	end
	function AgentComponent:onDash()
		super.onDash(self)
		if Toggles["gameplay.movement.roll_animation"].Value then
			task.delay(0.05, simulateKeycode, Enum.KeyCode.Q)
		end
	end
	function AgentComponent:onEquip()
		local tool = self.equipped
		if tool then
			local id = tool:GetAttribute("ItemId")
			if id ~= nil then
				local ranged = RangeData[id]
				if ranged then
					rangeData = ranged
				else
					rangeData = nil
				end
			else
				rangeData = nil
			end
		else
			rangeData = nil
		end
	end
end
local PlayerComponent
do
	local super = BaseComponent
	PlayerComponent = setmetatable({}, {
		__tostring = function()
			return "PlayerComponent"
		end,
		__index = super,
	})
	PlayerComponent.__index = PlayerComponent
	function PlayerComponent.new(...)
		local self = setmetatable({}, PlayerComponent)
		return self:constructor(...) or self
	end
	function PlayerComponent:constructor(player)
		super.constructor(self, player)
		self.disposition = Disposition.Enemy
		self.id = player.Name .. " @" .. player.DisplayName
		-- Initialize
		self:updateDisposition()
		local _instances = PlayerComponent.instances
		local _player = player
		local _self = self
		_instances[_player] = _self
		local char = player.Character
		if char then
			task.defer(function()
				return self:onCharacter(char)
			end)
		end
		local _binding_1 = self
		local bin = _binding_1.bin
		bin:batch(player.CharacterAdded:Connect(function(character)
			return self:onCharacter(character)
		end), player.CharacterRemoving:Connect(function()
			local _result = self.character
			if _result ~= nil then
				_result = _result:destroy()
			end
			return _result
		end), Players.PlayerRemoving:Connect(function(plr)
			return plr == player and self:destroy()
		end))
		bin:batch(player:GetPropertyChangedSignal("Team"):Connect(function()
			return self:updateDisposition()
		end), player:GetPropertyChangedSignal("Neutral"):Connect(function()
			return self:updateDisposition()
		end))
		bin:add(function()
			local _instances_1 = PlayerComponent.instances
			local _player_1 = player
			-- ▼ Map.delete ▼
			local _valueExisted = _instances_1[_player_1] ~= nil
			_instances_1[_player_1] = nil
			-- ▲ Map.delete ▲
			return _valueExisted
		end)
	end
	function PlayerComponent:getDisposition()
		return self.disposition
	end
	function PlayerComponent:setDisposition(disposition)
		self.disposition = disposition
		if disposition == Disposition.Ally then
			local _allies = PlayerComponent.allies
			local _instance = self.instance
			local _self = self
			_allies[_instance] = _self
			local _enemies = PlayerComponent.enemies
			local _instance_1 = self.instance
			_enemies[_instance_1] = nil
		else
			local _enemies = PlayerComponent.enemies
			local _instance = self.instance
			local _self = self
			_enemies[_instance] = _self
			local _allies = PlayerComponent.allies
			local _instance_1 = self.instance
			_allies[_instance_1] = nil
		end
		local _result = self.character
		if _result ~= nil then
			_result:setDisposition(disposition)
		end
	end
	function PlayerComponent:updateDisposition()
		local disposition = self:getUserDisposition()
		if Toggles["targeting.designate.team_filter"].Value then
			local team = self:getTeamDisposition()
			if team ~= disposition then
				local resolve = Options["targeting.designate.resolve"].Value
				if resolve == "Resolve as Ally" then
					disposition = Disposition.Ally
				else
					disposition = Disposition.Enemy
				end
			end
		end
		self:setDisposition(disposition)
	end
	function PlayerComponent:getUserDisposition()
		local id = self.id
		local designation = Options["targeting.designate.players_type"].Value
		local isSelected = Options["targeting.designate.players"].Value[id] ~= nil
		local disposition
		if designation == "Ally" then
			disposition = if isSelected then Disposition.Ally else Disposition.Enemy
		else
			disposition = if isSelected then Disposition.Enemy else Disposition.Ally
		end
		return disposition
	end
	function PlayerComponent:getTeamDisposition()
		local instance = self.instance
		local team = instance.Team
		local isSelected = false
		-- Has Team
		if team ~= nil and not instance.Neutral then
			local list = Options["targeting.designate.teams"].Value
			local _arg0 = `{team.Name} ({team.TeamColor.Name})`
			isSelected = list[_arg0] ~= nil
		elseif Toggles["targeting.designate.include_neutral"].Value then
			isSelected = true
		end
		local teamType = Options["targeting.designate.teams_type"].Value
		local disposition
		if teamType == "Ally" then
			disposition = if isSelected then Disposition.Ally else Disposition.Enemy
		else
			disposition = if isSelected then Disposition.Enemy else Disposition.Ally
		end
		return disposition
	end
	function PlayerComponent:onCharacter(character)
		self.character = EntityComponent.new(self, character)
	end
	PlayerComponent.instances = {}
	PlayerComponent.allies = {}
	PlayerComponent.enemies = {}
end
--[[
	***********************************************************
	 * CONTROLLERS
	 * Description: Singletons that are used once
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
AgentController = {}
do
	local _container = AgentController
	local _root
	local _humanoid
	local onAgent = function(char)
		local _result = AgentController.agent
		if _result ~= nil then
			_result:destroy()
		end
		local agent = AgentComponent.new(char)
		AgentController.agent = agent
		AgentController.instance = agent.instance
		_root = agent.root
		_humanoid = agent.humanoid
	end
	local function getPosition()
		return _root.Position
	end
	_container.getPosition = getPosition
	local function __init()
		LocalPlayer.CharacterAdded:Connect(function(character)
			return onAgent(character)
		end)
		local character = LocalPlayer.Character
		if character then
			onAgent(character)
		end
	end
	_container.__init = __init
end
local PlayerController = {}
do
	local _container = PlayerController
	local onPlayer = function(player)
		return PlayerComponent.new(player)
	end
	local function __init()
		for _, player in Players:GetPlayers() do
			local _1 = player ~= LocalPlayer and onPlayer(player)
		end
		Players.PlayerAdded:Connect(onPlayer)
	end
	_container.__init = __init
end
ParryController = {}
do
	local _container = ParryController
	local enabled = false
	local keybind
	local alerts
	local function parry()
		if enabled and keybind:GetState() then
			local agent = AgentController.agent
			if not agent:isParrying() then
				simulateKeycode(Enum.KeyCode.F)
				if alerts.Value then
					library:Notify("Parried!")
				end
			else
				if alerts.Value then
					library:Notify("Parry requested but can't find Agent")
				end
			end
		end
	end
	_container.parry = parry
	local function __init()
		Toggles["gameplay.auto_parry.enabled"]:OnChanged(function(value)
			enabled = value
		end)
		alerts = Toggles["gameplay.auto_parry.debug"]
		keybind = Options["gameplay.auto_parry.key"]
	end
	_container.__init = __init
end
local HitboxController = {}
do
	local _container = HitboxController
	local Container = Workspace:WaitForChild("PlayerCharacters", 5)
	if not Container then
		error("[HitboxController]: PlayerCharacters folder not found")
	end
	local _antiParry
	local _ignoreAllies
	local function __init()
		_antiParry = Toggles["gameplay.hitbox.anti_parry"]
		_ignoreAllies = Toggles["gameplay.hitbox.ignore_allies"]
		local onSlashRayHit = MeleeWeaponClient.onSlashRayHit
		local old
		old = hookfunction(onSlashRayHit, function(_self, hitbox, instance, rayResult, ...)
			local args = { ... }
			local _result = hitbox.Parent
			if _result ~= nil then
				_result = _result.Parent
				if _result ~= nil then
					_result = _result.Name
				end
			end
			if _result == "Stomp" then
				return old(_self, hitbox, instance, rayResult, unpack(args))
			end
			local hit = rayResult.Instance
			if hit:IsDescendantOf(Container) then
				local entity
				local parent = hit.Parent
				repeat
					do
						entity = parent
						parent = parent.Parent
					end
				until not (parent ~= Container)
				local _instances = EntityComponent.instances
				local _entity = entity
				local component = _instances[_entity]
				if component then
					if component:isParrying() and _antiParry.Value then
						return nil
					end
				end
			end
			return old(_self, hitbox, instance, rayResult, unpack(args))
		end)
	end
	_container.__init = __init
end
local StaminaController = {}
do
	local _container = StaminaController
	local function __init()
		local c
		Toggles["gameplay.movement.infinite_stamina"]:OnChanged(function(value)
			if value then
				c = RunService.RenderStepped:Connect(function()
					local handler = StaminaHandler:getDefaultStamina()
					local min = handler._maxStamina / 4
					if handler._stamina < min then
						handler:setStamina(min)
					end
				end)
			else
				local _result = c
				if _result ~= nil then
					_result:Disconnect()
				end
			end
		end)
	end
	_container.__init = __init
end
local TargetingController = {}
do
	local _container = TargetingController
	local rayParams
	local filters
	local mode
	local radius
	local updateDispositions = function()
		local _exp = PlayerComponent.instances
		-- ▼ ReadonlyMap.forEach ▼
		local _callback = function(component)
			return component:updateDisposition()
		end
		for _k, _v in _exp do
			_callback(_v, _k, _exp)
		end
		-- ▲ ReadonlyMap.forEach ▲
	end
	local function isTargetValid(component)
		if filters.Enemies ~= nil and component:getDisposition() == Disposition.Ally then
			return false
		end
		local viewportPoint = Camera:WorldToViewportPoint(component.root.Position)
		if viewportPoint.Z < 0 then
			return false
		end
		if filters["In Radius"] ~= nil then
			local mousePosition = UserInputService:GetMouseLocation()
			local distance = (Vector2.new(viewportPoint.X, viewportPoint.Y) - mousePosition).Magnitude
			if distance > radius then
				return false
			end
		end
		return true
	end
	_container.isTargetValid = isTargetValid
	local function getTarget()
		local list = if filters.Enemies ~= nil then EntityComponent.enemies else EntityComponent.instances
		local filterRadius = filters["In Radius"] ~= nil
		local filterVisible = filters.Visible ~= nil
		local filterObstructed = filters["Not Obstructed"] ~= nil
		local mousePosition = UserInputService:GetMouseLocation()
		local best
		local weight = -math.huge
		-- ▼ ReadonlyMap.forEach ▼
		local _callback = function(component)
			local aInstance = AgentController.instance
			local instance = component.instance
			local position = component.root.Position
			local aPos = AgentController.getPosition()
			local viewportPoint = Camera:WorldToViewportPoint(position)
			-- Filter: In View (Always)
			if viewportPoint.Z < 0 then
				return nil
			end
			-- Filter: Visible to Camera
			if filterVisible then
				local parts = Camera:GetPartsObscuringTarget({ position }, { aInstance, instance })
				if #parts > 0 then
					return nil
				end
			end
			-- Filter: Obstructed from Agent
			if filterObstructed then
				rayParams.FilterDescendantsInstances = { aInstance, instance }
				local result = Workspace:Raycast(aPos, position - aPos, rayParams)
				if result then
					return nil
				end
			end
			local distance = 0
			if filterRadius then
				distance = (Vector2.new(viewportPoint.X, viewportPoint.Y) - mousePosition).Magnitude
				if filterRadius and distance > radius then
					return nil
				end
			end
			if mode == "Closest to Cursor" then
				if not filterRadius then
					distance = (Vector2.new(viewportPoint.X, viewportPoint.Y) - mousePosition).Magnitude
				end
				local prio = 1e3 - distance
				if prio > weight then
					best = component
					weight = prio
					return nil
				end
			elseif mode == "Closest to Player" then
				local aPos = AgentController.getPosition()
				local distance = (position - aPos).Magnitude
				local prio = 1e5 - distance
				if prio > weight then
					best = component
					weight = prio
					return nil
				end
			elseif mode == "Highest HP" then
				local humanoid = component.humanoid
				local health = humanoid.Health
				if health > weight then
					best = component
					weight = health
					return nil
				end
			elseif mode == "Lowest HP" then
				local humanoid = component.humanoid
				local health = humanoid.Health
				if health < weight then
					best = component
					weight = health
					return nil
				end
			end
		end
		for _k, _v in list do
			_callback(_v, _k, list)
		end
		-- ▲ ReadonlyMap.forEach ▲
		return best
	end
	_container.getTarget = getTarget
	local function __init()
		filters = Options["targeting.selector.filters"].Value
		mode = Options["targeting.selector.mode"].Value
		radius = Options["targeting.selector.fov_radius"].Value
		Options["targeting.selector.filters"]:OnChanged(function(value)
			filters = value
		end)
		Options["targeting.selector.mode"]:OnChanged(function(value)
			mode = value
		end)
		Options["targeting.selector.fov_radius"]:OnChanged(function(value)
			radius = value
		end)
		Toggles["targeting.designate.team_filter"]:OnChanged(updateDispositions)
		Toggles["targeting.designate.include_neutral"]:OnChanged(updateDispositions)
		Options["targeting.designate.players"]:OnChanged(updateDispositions)
		Options["targeting.designate.players_type"]:OnChanged(updateDispositions)
		Options["targeting.designate.teams"]:OnChanged(updateDispositions)
		Options["targeting.designate.teams_type"]:OnChanged(updateDispositions)
		Options["targeting.designate.resolve"]:OnChanged(updateDispositions)
		rayParams = RaycastParams.new()
		rayParams.FilterType = Enum.RaycastFilterType.Exclude
		rayParams.IgnoreWater = true
	end
	_container.__init = __init
end
local RangedController = {}
do
	local _container = RangedController
	local part
	local sensitivity
	local need_target
	local silent_enabled
	local _keybind
	local flat = Vector3.new(1, 0, 1)
	local predict = function(target)
		if target then
			local _result = rangeData
			if _result ~= nil then
				_result = _result.speed
			end
			local _condition = _result
			if _condition == nil then
				_condition = 1e3
			end
			local _result_1 = rangeData
			if _result_1 ~= nil then
				_result_1 = _result_1.gravity
			end
			local _condition_1 = _result_1
			if _condition_1 == nil then
				_condition_1 = 0
			end
			local speed, gravity = _condition, _condition_1
			local hit = target[part]
			local position = hit.Position
			local aPosition = AgentController.getPosition()
			local travelTime = ((position - aPosition) * flat).Magnitude / speed
			local dip = (gravity * travelTime ^ 2) / 2
			local _vector3 = Vector3.new(0, dip, 0)
			return position - _vector3
		end
		return Vector3.new()
	end
	local getTarget = function()
		return TargetingController.getTarget()
	end
	local onRender = function()
		if _keybind:GetState() then
			local target = getTarget()
			if target then
				local mousePosition = UserInputService:GetMouseLocation()
				local viewportPoint = Camera:WorldToViewportPoint(predict(target))
				mousemoverel((viewportPoint.X - mousePosition.X) * sensitivity, (viewportPoint.Y - mousePosition.Y) * sensitivity)
			end
		end
	end
	local function __init()
		_keybind = Options["gameplay.ranged.keybind"]
		local aimConnection
		local aimbot = Toggles["gameplay.ranged.aimbot"]
		local silent = Toggles["gameplay.ranged.silent"]
		aimbot:OnChanged(function(value)
			need_target = value or silent.Value
			if value then
				aimConnection = RunService.RenderStepped:Connect(function()
					return onRender()
				end)
			else
				local _result = aimConnection
				if _result ~= nil then
					_result:Disconnect()
				end
			end
		end)
		silent:OnChanged(function(value)
			silent_enabled = value
			need_target = value or aimbot.Value
		end)
		Options["gameplay.ranged.target"]:OnChanged(function(value)
			part = if value == "Head" then "head" else "torso"
		end)
		Options["gameplay.ranged.aimbot.sensitivity"]:OnChanged(function(value)
			sensitivity = value / 100
		end)
		local enabled = function()
			return silent_enabled and _keybind:GetState()
		end
		local getMouseHitPosition = RaycastUtilClient.getMouseHitPosition
		local old
		old = hookfunction(getMouseHitPosition, function(...)
			local args = { ... }
			if enabled() then
				local target = getTarget()
				if target then
					return target[part], predict(target)
				end
			end
			return old(unpack(args))
		end)
	end
	_container.__init = __init
end
local VisualsController = {}
do
	local _container = VisualsController
	local circle = Drawing.new("Circle")
	circle.Filled = false
	circle.NumSides = 15
	circle.Thickness = 1
	circle.Visible = false
	local updateEntityVisuals = function()
		local _exp = EntityComponent.instances
		-- ▼ ReadonlyMap.forEach ▼
		local _callback = function(component)
			return component:updateQuad()
		end
		for _k, _v in _exp do
			_callback(_v, _k, _exp)
		end
		-- ▲ ReadonlyMap.forEach ▲
	end
	local function __init()
		Toggles["visuals.player_esp.enabled"]:OnChanged(updateEntityVisuals)
		Toggles["visuals.player_esp.ally_enabled"]:OnChanged(updateEntityVisuals)
		Toggles["visuals.player_esp.enemy_enabled"]:OnChanged(updateEntityVisuals)
		Options["visuals.player_esp.ally_color"]:OnChanged(updateEntityVisuals)
		Options["visuals.player_esp.enemy_color"]:OnChanged(updateEntityVisuals)
		local _circle = false
		Toggles["visuals.misc.circle"]:OnChanged(function(value)
			circle.Visible = value
			_circle = value
		end)
		local _color = Options["visuals.misc.circle_color"]
		_color:OnChanged(function()
			circle.Color = _color.Value
			circle.Transparency = 1 - _color.Transparency
		end)
		RunService.RenderStepped:Connect(function()
			if _circle then
				local radius = Options["targeting.selector.fov_radius"].Value
				local mousePosition = UserInputService:GetMouseLocation()
				circle.Radius = radius
				circle.Position = Vector2.new(mousePosition.X, mousePosition.Y)
			end
		end)
	end
	_container.__init = __init
end
local CameraController = {}
do
	local _container = CameraController
	local function __init()
		Camera = Workspace.CurrentCamera
		Workspace:GetPropertyChangedSignal("CurrentCamera"):Connect(function()
			Camera = Workspace.CurrentCamera or Camera
		end)
	end
	_container.__init = __init
end
--[[
	***********************************************************
	 * INTERFACE
	 * Description: User interface instantiation
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
Builder.new():root("muffet_hub", "combat_warriors"):library(library):withSaveManager(savemanager):withThemeManager(thememanager):windows({ Window.new():title("Muffet Hub | Combat Warriors"):centered(true):autoShow(true):withFadeTime(0):pages({ Page.new():title("Gameplay"):left({ Groupbox.new():title("Auto Parry"):elements({ Toggle.new("gameplay.auto_parry.enabled"):title("Enabled"):tooltip("Automatically parry attacks"):default(false):extensions({ KeyPicker.new("gameplay.auto_parry.key"):title("Auto Parry"):bind("V"):mode("Hold") }), DependencyBox.new():dependsOn("gameplay.auto_parry.enabled", true):elements({ Slider.new("gameplay.auto_parry.threshold"):title("Distance Threshold"):suffix(" studs"):round(0):limits(0, 50):default(1):hideMax(true), Toggle.new("gameplay.auto_parry.debug"):title("Debugger"):tooltip("Enable debug notifications for Auto Parry"):default(true) }) }), Groupbox.new():title("Hitbox Modifications"):elements({ Toggle.new("gameplay.hitbox.anti_parry"):title("Anti-Parry"):tooltip("Hitbox ignores parries"):default(false), Toggle.new("gameplay.hitbox.ignore_allies"):title("Ignore Allies"):tooltip("Hitbox ignores allies"):default(false) }), Groupbox.new():title("Movement Modifications"):elements({ Toggle.new("gameplay.movement.infinite_stamina"):title("Infinite Stamina"):tooltip("Disables stamina consumption"):default(false), Toggle.new("gameplay.movement.roll_animation"):title("Roll Cancel"):tooltip("Presses Q when rolling to override the animation"):default(true) }) }):right({ Groupbox.new():title("Ranged Aim"):elements({ Dropdown.new("gameplay.ranged.target"):title("Target"):tooltip("The part of the body to aim at"):options({ "Head", "Torso" }):default("Head"), Toggle.new("gameplay.ranged.silent"):title("Silent"):tooltip("Shoots at the target without aiming"):default(false), Toggle.new("gameplay.ranged.aimbot"):title("Aimbot"):tooltip("Moves mouse towards the target"):default(false):extensions({ KeyPicker.new("gameplay.ranged.keybind"):title("Aimbot"):bind("MB2"):mode("Hold") }), DependencyBox.new():dependsOn("gameplay.ranged.aimbot", true):elements({ Slider.new("gameplay.ranged.aimbot.sensitivity"):title("Sensitivity"):suffix("%"):round(0):limits(1, 100):default(50):compact(true):hideMax(true) }) }) }), Page.new():title("Targeting"):left({ Groupbox.new():title("Selector"):elements({ MultiDropdown.new("targeting.selector.filters"):title("Filters"):tooltip("Only targets that meet these conditions will be considered"):options({ "Enemies", "In Radius", "Visible", "Not Obstructed" }):default({ "Enemies", "In Radius" }), Dropdown.new("targeting.selector.mode"):title("Priority"):tooltip("Prioritizes certain targets over others"):options({ "Closest to Cursor", "Closest to Player", "Lowest HP", "Highest HP" }):default("Closest to Player"), Slider.new("targeting.selector.fov_radius"):title("FOV Radius"):round(0):limits(10, 500):default(100):hideMax(true):suffix("px") }) }):right({ Groupbox.new():title("Designate"):elements({ MultiDropdown.new("targeting.designate.players"):title("Player List"):tooltip("The list of players to whitelist/blacklist"):canNull(true):specialType("Player"), Dropdown.new("targeting.designate.players_type"):title("Disposition"):tooltip("Sets the selected players as allies or enemies"):options({ "Ally", "Enemy" }):default("Ally"), Spacer.new(8), Toggle.new("targeting.designate.team_filter"):title("Filter teams?"):tooltip("Enables team checking for the filter"):default(false), DependencyBox.new():dependsOn("targeting.designate.team_filter", true):elements({ MultiDropdown.new("targeting.designate.teams"):title("Team List"):tooltip("The list of teams to whitelist/blacklist"):canNull(true):specialType("Team"), Toggle.new("targeting.designate.include_neutral"):title("Include Neutral"):tooltip("Includes neutral teams in the list"):default(false), Dropdown.new("targeting.designate.teams_type"):title("Disposition"):tooltip("Sets the selected teams as allies or enemies"):options({ "Ally", "Enemy" }):default("Ally"), Dropdown.new("targeting.designate.resolve"):title("Resolve Method"):tooltip("Sets how the filter will resolve conflicts in disposition."):options({ "Resolve as Ally", "Resolve as Enemy" }):default("Resolve as Ally") }) }) }), Page.new():title("Visuals"):left({ Groupbox.new():title("Player ESP"):elements({ Toggle.new("visuals.player_esp.enabled"):title("Enabled"):tooltip("Draws ESP on players"):default(true), DependencyBox.new():dependsOn("visuals.player_esp.enabled", true):elements({ Toggle.new("visuals.player_esp.ally_enabled"):title("Ally ESP"):tooltip("Draws ESP on allies"):default(true):extensions({ ColorPicker.new("visuals.player_esp.ally_color"):title("Ally Color"):transparency(0):default(Color3.fromRGB(0, 255, 0)) }), Toggle.new("visuals.player_esp.enemy_enabled"):title("Enemy ESP"):tooltip("Draws ESP on enemies"):default(true):extensions({ ColorPicker.new("visuals.player_esp.enemy_color"):title("Enemy Color"):transparency(0):default(Color3.fromRGB(255, 0, 0)) }) }) }) }):right({ Groupbox.new():title("Miscellaneous"):elements({ Toggle.new("visuals.misc.circle"):title("Show FOV Circle"):tooltip("Draws a circle around the cursor"):default(true):extensions({ ColorPicker.new("visuals.misc.circle_color"):title("Circle Color"):transparency(0.5):default(Color3.fromRGB(255, 255, 255)) }) }) }), Page.new():title("Settings"):left({ ThemeSection.new() }):right({ ConfigSection.new() }) }) }):renderUI()
--[[
	***********************************************************
	 * INITIALIZATION
	 * Description: Initializes and starts the runtime
	 * Last updated: Mar. 22, 2024
	 ***********************************************************
]]
AgentController.__init()
PlayerController.__init()
ParryController.__init()
HitboxController.__init()
StaminaController.__init()
TargetingController.__init()
RangedController.__init()
VisualsController.__init()
CameraController.__init()
return "Initialized Successfully"
