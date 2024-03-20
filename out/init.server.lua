-- Compiled with roblox-ts v2.3.0
local Players = game:GetService("Players")
if _G["program id"] then
	error("This program is already running!")
end
_G["program id"] = true
--[[
	***********************************************************
	 * CONFIGURATIONS
	 * Description: User-defined settings and configurations
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
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
local Toggle = _binding.Toggle
local Slider = _binding.Slider
local Dropdown = _binding.Dropdown
local MultiDropdown = _binding.MultiDropdown
local KeyPicker = _binding.KeyPicker
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
--[[
	***********************************************************
	 * CONTROLLERS
	 * Description: Singletons that are used once
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
--[[
	***********************************************************
	 * INTERFACE
	 * Description: User interface instantiation
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
Builder.new():setLibrary(library):windows({ Window.new():title("Muffet Hub | Combat Warriors"):centered(true):autoShow(true):withFadeTime(0):pages({ Page.new():title("Gameplay"):left({ Groupbox.new():title("Auto Parry"):elements({ Toggle.new():index("gameplay.auto_parry.enabled"):title("Enabled"):tooltip("Automatically parry attacks"):default(false):extensions({ KeyPicker.new():index("gameplay.auto_parry.key"):title("Auto Parry"):bind("V"):mode("Hold") }), DependencyBox.new():dependsOn("gameplay.auto_parry.enabled", true):elements({ Toggle.new():index("gameplay.auto_parry.predict_enabled"):title("Predict"):tooltip("Predicts the enemy's velocity, so you can parry in advance."):default(false), DependencyBox.new():dependsOn("gameplay.auto_parry.predict_enabled", true):elements({ Slider.new():index("gameplay.auto_parry.predict_time"):title("Amount"):suffix(" ms"):round(0):limits(10, 400):default(10):compact(true):hideMax(true) }), Toggle.new():index("gameplay.auto_parry.debug"):title("Debugger"):tooltip("Enable debug notifications for Auto Parry"):default(true) }) }) }):right({}), Page.new():title("Target"):left({ Groupbox.new():title("Filters"):elements({ Toggle.new():index("target.filter.team_filter"):title("Team filter"):tooltip("Enables team checking for the filter"):default(false), DependencyBox.new():dependsOn("target.filter.team_filter", false):elements({ MultiDropdown.new():index("target.filter.players"):title("Players"):tooltip("The list of players to whitelist/blacklist"):canNull(true):specialType("Player"), Dropdown.new():index("target.filter.players_type"):title("Player disposition"):tooltip("Sets the selected players as allies or enemies"):options({ "Ally", "Enemy" }):default("Enemy") }), DependencyBox.new():dependsOn("target.filter.team_filter", true):elements({ MultiDropdown.new():index("target.filter.teams"):title("Teams"):tooltip("The list of teams to whitelist/blacklist"):canNull(true):specialType("Team"), Dropdown.new():index("target.filter.teams_type"):title("Team disposition"):tooltip("Sets the selected teams as allies or enemies"):options({ "Ally", "Enemy" }):default("Enemy") }) }) }):right({}), Page.new():title("Settings"):left({}):right({}) }) }):renderUI()
--[[
	***********************************************************
	 * INITIALIZATION
	 * Description: Initializes and starts the runtime
	 * Last updated: Feb. 14, 2024
	 ***********************************************************
]]
return "Initialized Successfully"
