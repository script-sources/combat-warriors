-- Compiled with roblox-ts v2.3.0
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
if _G["combat-warriors"] then
	error("This program is already running!")
else
	_G["combat-warriors"] = true
end
--[[
	***********************************************************
	 * CONFIGURATIONS
	 * Description: User-defined settings and configurations
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
local MeleeData = {
	["Bo Staff"] = {
		range = 14,
		duration = 0.25,
	},
}
local RangeData = {
	Crossbow = {
		speed = 100,
		gravity = 0.5,
	},
}
--[[
	***********************************************************
	 * VARIABLES
	 * Description: Variables referenced globally in the script
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
local LocalPlayer = Players.LocalPlayer
--[[
	***********************************************************
	 * UTILITIES
	 * Description: Helper functions and classes
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
local repo = "https://raw.githubusercontent.com/scripts-ts/LinoriaLib/main/out/"
local _binding = loadstring(game:HttpGet(repo .. "init.lua"))()
local Builder = _binding.Builder
local Window = _binding.Window
local Page = _binding.Page
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
	local _arg0_1 = getmetatable(modules) ~= nil
	assert(_arg0_1)
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
local StaminaHandler = req("DefaultStaminaHandlerClient")
local WeaponMetadata = req("WeaponMetadata")
--[[
	***********************************************************
	 * COMPONENTS
	 * Description: Classes for specific entities/objects
	 * Last updated: Feb. 14, 2024
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
		local humanoid = instance:WaitForChild("Humanoid")
		if not humanoid then
			error(`[HumanoidComponent]: '{name}' does not have a Humanoid`)
		end
		self.root = root
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
		local parries = {}
		local backpack = player:WaitForChild("Backpack")
		if not backpack then
			error(`[CharacterComponent]: '{id}' does not have a Backpack`)
		end
		self.id = id
		self.player = player
		self.tools = tools
		self.equipped = nil
		self.backpack = backpack
		self.parries = parries
		local _binding_1 = self
		local bin = _binding_1.bin
		bin:add(backpack.ChildAdded:Connect(function(child)
			return self:_onBackpackChild(child)
		end))
	end
	function CharacterComponent:onTool(tool)
	end
	function CharacterComponent:onMelee(tool)
	end
	function CharacterComponent:onRanged(tool)
	end
	function CharacterComponent:onEquip()
	end
	function CharacterComponent:onSwing()
	end
	function CharacterComponent:onParry()
		local _binding_1 = self
		local parries = _binding_1.parries
		local t = os.clock()
		parries[t] = true
		task.delay(0.4, function()
			-- ▼ Set.delete ▼
			local _valueExisted = parries[t] ~= nil
			parries[t] = nil
			-- ▲ Set.delete ▲
			return _valueExisted
		end)
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
		print(id)
		task.defer(function()
			return self:onTool(tool)
		end)
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
end
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
		super.constructor(self, player, instance)
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
		self.id = player.Name .. " @" .. player.DisplayName
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
	end
	function PlayerComponent:onCharacter(character)
		self.character = EntityComponent.new(self.instance, character)
	end
end
--[[
	***********************************************************
	 * CONTROLLERS
	 * Description: Singletons that are used once
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
local PlayerController = {}
do
	local _container = PlayerController
	local onPlayer = function(player)
		return PlayerComponent.new(player)
	end
	local function __init()
		-- for (const player of Players.GetPlayers()) onPlayer(player);
		-- Players.PlayerAdded.Connect(onPlayer);
		PlayerComponent.new(LocalPlayer)
	end
	_container.__init = __init
end
--[[
	***********************************************************
	 * INTERFACE
	 * Description: User interface instantiation
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
Builder.new():library(library):windows({ Window.new():title("Muffet Hub | Combat Warriors"):centered(true):autoShow(true):withFadeTime(0):pages({ Page.new():title("Gameplay"):left({ Groupbox.new():title("Auto Parry"):elements({ Toggle.new("gameplay.auto_parry.enabled"):title("Enabled"):tooltip("Automatically parry attacks"):default(false):extensions({ KeyPicker.new("gameplay.auto_parry.key"):title("Auto Parry"):bind("V"):mode("Hold") }), DependencyBox.new():dependsOn("gameplay.auto_parry.enabled", true):elements({ Toggle.new("gameplay.auto_parry.predict_enabled"):title("Predict"):tooltip("Predicts the enemy's velocity, so you can parry in advance."):default(false), DependencyBox.new():dependsOn("gameplay.auto_parry.predict_enabled", true):elements({ Slider.new("gameplay.auto_parry.predict_time"):title("Amount"):suffix(" ms"):round(0):limits(10, 400):default(10):compact(true):hideMax(true) }), Toggle.new("gameplay.auto_parry.debug"):title("Debugger"):tooltip("Enable debug notifications for Auto Parry"):default(true) }) }), Groupbox.new():title("Movement Modifications"):elements({ Toggle.new("gameplay.movement.infinite_stamina"):title("Infinite Stamina"):tooltip("Disables stamina consumption"):default(false), Toggle.new("gameplay.movement.roll_animation"):title("Roll Cancel"):tooltip("Presses Q when rolling to override the animation"):default(true) }) }):right({ Groupbox.new():title("Ranged Aim"):elements({ Dropdown.new("gameplay.ranged.target"):title("Target"):tooltip("The part of the body to aim at"):options({ "Head", "Torso" }):default("Head"), Toggle.new("gameplay.ranged.silent"):title("Silent"):tooltip("Shoots at the target without aiming"):default(false), Toggle.new("gameplay.ranged.aimbot"):title("Aimbot"):tooltip("Moves mouse towards the target"):default(false), DependencyBox.new():dependsOn("gameplay.ranged.aimbot", true):elements({ Slider.new("gameplay.ranged.aimbot.sensitivity"):title("Sensitivity"):suffix("%"):round(0):limits(1, 100):default(50):compact(true):hideMax(true) }) }) }), Page.new():title("Targeting"):left({ Groupbox.new():title("Selector"):elements({ MultiDropdown.new("targeting.selector.filters"):title("Filters"):tooltip("Only targets that meet these conditions will be considered"):options({ "Enemies", "Alive", "In Radius", "Visible", "Not Obstructed" }):default({ "Enemies", "Alive", "In Radius" }), Dropdown.new("targeting.selector.mode"):title("Priority"):tooltip("Prioritizes certain targets over others"):options({ "Closest to Cursor", "Closest to Player", "Lowest HP", "Highest HP" }):default("Closest to Player"), Slider.new("targeting.selector.fov_radius"):title("FOV Radius"):round(0):limits(10, 500):default(100):hideMax(true):suffix("px") }) }):right({ Groupbox.new():title("Designate"):elements({ MultiDropdown.new("targeting.designate.players"):title("Player List"):tooltip("The list of players to whitelist/blacklist"):canNull(true):specialType("Player"), Dropdown.new("targeting.designate.players_type"):title("Disposition"):tooltip("Sets the selected players as allies or enemies"):options({ "Ally", "Enemy" }):default("Enemy"), Spacer.new(8), Toggle.new("targeting.designate.team_filter"):title("Filter teams?"):tooltip("Enables team checking for the filter"):default(false), DependencyBox.new():dependsOn("targeting.designate.team_filter", true):elements({ MultiDropdown.new("targeting.designate.teams"):title("Team List"):tooltip("The list of teams to whitelist/blacklist"):canNull(true):specialType("Team"), Dropdown.new("targeting.designate.teams_type"):title("Disposition"):tooltip("Sets the selected teams as allies or enemies"):options({ "Ally", "Enemy" }):default("Enemy"), Dropdown.new("targeting.designate.resolve"):title("Resolve Method"):tooltip("Sets how the filter will resolve conflicts in disposition."):options({ "Resolve as Ally", "Resolve as Enemy" }):default("Resolve as Ally") }) }) }), Page.new():title("Settings"):left({}):right({}) }) }):renderUI()
--[[
	***********************************************************
	 * INITIALIZATION
	 * Description: Initializes and starts the runtime
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
PlayerController.__init()
return "Initialized Successfully"
