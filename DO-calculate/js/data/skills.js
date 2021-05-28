const skills = [];

skills["Defensive"] = {
	"Ship hull I": {
		amount: 0,
		image: "skills/ship-hull-1.png",
		requirements: function() {return true},
		description: "Name: Ship hull I&#10;Level: 0/2&#10;&#10;Next level:&#10;Increase your HP by 5000&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0",
		levels: [
			{
				value: 5000,
				bonus: "hp_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Ship hull I&#10;Level: 1/2&#10;&#10;Current level:&#10;Increase your HP by 5000&#10;Next level:&#10;Increase your HP by 10000&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 10000,
				bonus: "hp_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Ship hull I&#10;Level: 2/2&#10;&#10;Current level:&#10;Increase your HP by 10000"
			}
		]
	},
	"Engineering": {
		amount: 0,
		image: "skills/engineering.png",
		requirements: function() {return skills["Defensive"]["Ship hull I"].amount > 0 || skills["Resource"]["Tactics"].amount > 0 || skills["Offensive"]["Detonation I"].amount > 0},
		description: "Name: Engineering&#10;Level: 0/5&#10;&#10;Next level:&#10;Lets your bots repair 5% more Hp per second&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0&#10;&#10;1 PP required in any of the following:&#10;Detonation I&#10;Tactics&#10;Ship hull I",
		levels: [
			{
				value: 5,
				bonus: "rep_%_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Engineering&#10;Level: 1/5&#10;&#10;Current level:&#10;Lets your bots repair 5% more Hp per second&#10;Next level:&#10;Lets your bots repair 10% more Hp per second&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 10,
				bonus: "rep_%_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Engineering&#10;Level: 2/5&#10;&#10;Current level:&#10;Lets your bots repair 10% more Hp per second&#10;Next level:&#10;Lets your bots repair 15% more Hp per second&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 15,
				bonus: "rep_%_skill",
				credits: 30000,
				seprom: 0,
				description: "Name: Engineering&#10;Level: 3/5&#10;&#10;Current level:&#10;Lets your bots repair 15% more Hp per second&#10;Next level:&#10;Lets your bots repair 20% more Hp per second&#10;&#10;Prequisites for next level:&#10;Credits: 40000&#10;Seprom: 0"
			},
			{
				value: 20,
				bonus: "rep_%_skill",
				credits: 40000,
				seprom: 0,
				description: "Name: Engineering&#10;Level: 4/5&#10;&#10;Current level:&#10;Lets your bots repair 20% more Hp per second&#10;Next level:&#10;Lets your bots repair 30% more Hp per second&#10;&#10;Prequisites for next level:&#10;Credits: 50000&#10;Seprom: 0"
			},
			{
				value: 30,
				bonus: "rep_%_skill",
				credits: 50000,
				seprom: 0,
				description: "Name: Engineering&#10;Level: 5/5&#10;&#10;Current level:&#10;Lets your bots repair 30% more Hp per second"
			}
		]
	},
	"Shield engineering": {
		amount: 0,
		image: "skills/shield-engineering.png",
		requirements: function() {return skills["Defensive"]["Engineering"].amount > 0 || skills["Resource"]["Logistics"].amount > 0 || skills["Offensive"]["Explosives"].amount > 0},
		description: "Name: Shield engineering&#10;Level: 0/5&#10;&#10;Next level:&#10;Increases your shield strengt by 4%&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0&#10;&#10;1 PP required in any of the following:&#10;Explosives&#10;Logistics&#10;Engineering",
		levels: [
			{
				value: 4,
				bonus: "shield_%_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Shield engineering&#10;Level: 1/5&#10;&#10;Current level:&#10;Increases your shield strengt by 4%&#10;Next level:&#10;Increases your shield strengt by 8%&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 8,
				bonus: "shield_%_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Shield engineering&#10;Level: 2/5&#10;&#10;Current level:&#10;Increases your shield strengt by 8%&#10;Next level:&#10;Increases your shield strengt by 12%&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 12,
				bonus: "shield_%_skill",
				credits: 30000,
				seprom: 0,
				description: "Name: Shield engineering&#10;Level: 3/5&#10;&#10;Current level:&#10;Increases your shield strengt by 12%&#10;Next level:&#10;Increases your shield strengt by 18%&#10;&#10;Prequisites for next level:&#10;Credits: 40000&#10;Seprom: 0"
			},
			{
				value: 18,
				bonus: "shield_%_skill",
				credits: 40000,
				seprom: 0,
				description: "Name: Shield engineering&#10;Level: 4/5&#10;&#10;Current level:&#10;Increases your shield strengt by 12%&#10;Next level:&#10;Increases your shield strengt by 25%&#10;&#10;Prequisites for next level:&#10;Credits: 50000&#10;Seprom: 0"
			},
			{
				value: 25,
				bonus: "shield_%_skill",
				credits: 50000,
				seprom: 0,
				description: "Name: Shield engineering&#10;Level: 5/5&#10;&#10;Current level:&#10;Increases your shield strengt by 25%"
			}
		]
	},
	"interspace 1": {},
	"Evasive maneuvers I": {
		amount: 0,
		image: "skills/evasive-maneuvers-1.png",
		requirements: function() {return (skills["Offensive"]["Heat-seeking missiles"].amount + skills["Defensive"]["Shield engineering"].amount) > 1},
		description: "Name: Evasive maneuvers I&#10;Level: 0/2&#10;&#10;Next level:&#10;Reduces the probabillity of an enemy hit by 2%&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in any of the following:&#10;Heat-seeking missiles&#10;Shield engineering",
		levels: [
			{
				value: 2,
				bonus: "evasion_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Evasive maneuvers I&#10;Level: 1/2&#10;&#10;Current level:&#10;Reduces the probabillity of an enemy hit by 2%&#10;Next level:&#10;Reduces the probabillity of an enemy hit by 4%&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 4,
				bonus: "evasion_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Evasive maneuvers I&#10;Level: 2/2&#10;&#10;Current level:&#10;Reduces the probabillity of an enemy hit by 4%"
			}
		]
	},
	"Ship hull II": {
		amount: 0,
		image: "skills/ship-hull-2.png",
		requirements: function() {return skills["Defensive"]["Ship hull I"].amount > 1 && (skills["Offensive"]["Bounty Hunter I"].amount + skills["Resource"]["Luck I"].amount + skills["Defensive"]["Evasive maneuvers I"].amount) > 1},
		description: "Name: Ship hull II&#10;Level: 0/3&#10;&#10;Next level:&#10;Increase your HP by 15000&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in any of the following:&#10;Bounty Hunter I&#10;Luck I&#10;Evasive maneuvers I&#10;&#10;2 PP required in:&#10;Ship hull I",
		levels: [
			{
				value: 15000,
				bonus: "hp_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Ship hull II&#10;Level: 1/3&#10;&#10;Current level:&#10;Increase your HP by 15000&#10;Next level:&#10;Increase your HP by 25000&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 25000,
				bonus: "hp_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Ship hull II&#10;Level: 2/3&#10;&#10;Current level:&#10;Increase your HP by 25000&#10;Next level:&#10;Increase your HP by 50000&#10;&#10;Prequisites for next level:&#10;Credits: 300000&#10;Seprom: 300"
			},
			{
				value: 50000,
				bonus: "hp_skill",
				credits: 300000,
				seprom: 300,
				description: "Name: Ship hull II&#10;Level: 2/3&#10;&#10;Current level:&#10;Increase your HP by 50000"
			}
		]
	},
	"empty 1": {},
	"interspace 2": {},
	"Shield mechanics": {
		amount: 0,
		image: "skills/shield-mechanics.png",
		requirements: function() {return skills["Defensive"]["Ship hull II"].amount > 2},
		description: "Name: Shield mechanics&#10;Level: 0/5&#10;&#10;Next level:&#10;Lets your shields withstand 2% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in:&#10;Ship hull II",
		levels: [
			{
				value: 2,
				bonus: "shield_absorption_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Shield mechanics&#10;Level: 1/5&#10;&#10;Current level:&#10;Lets your shields withstand 2% more damage&#10;Next level:&#10;Lets your shields withstand 4% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 4,
				bonus: "shield_absorption_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Shield mechanics&#10;Level: 2/5&#10;&#10;Current level:&#10;Lets your shields withstand 4% more damage&#10;Next level:&#10;Lets your shields withstand 6% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 6,
				bonus: "shield_absorption_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Shield mechanics&#10;Level: 3/5&#10;&#10;Current level:&#10;Lets your shields withstand 6% more damage&#10;Next level:&#10;Lets your shields withstand 8% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 4000000&#10;Seprom: 4000"
			},
			{
				value: 8,
				bonus: "shield_absorption_%_skill",
				credits: 4000000,
				seprom: 4000,
				description: "Name: Shield mechanics&#10;Level: 4/5&#10;&#10;Current level:&#10;Lets your shields withstand 8% more damage&#10;Next level:&#10;Lets your shields withstand 12% more damage&#10;&#10;Prequisites for next level:&#10;Credits:5000000&#10;Seprom: 5000"
			},
			{
				value: 12,
				bonus: "shield_absorption_%_skill",
				credits: 5000000,
				seprom: 5000,
				description: "Name: Shield mechanics&#10;Level: 5/5&#10;&#10;Current level:&#10;Lets your shields withstand 12% more damage"
			}
		]
	},
	"empty 2": {},
	"Evasive maneuvers II": {
		amount: 0,
		image: "skills/evasive-maneuvers-2.png",
		requirements: function() {return skills["Defensive"]["Evasive maneuvers I"].amount > 1 && skills["Defensive"]["Shield mechanics"].amount > 2},
		description: "Name: Evasive maneuvers II&#10;Level: 0/3&#10;&#10;Next level:&#10;Reduces the probabillity of an enemy hit by 6%&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in:&#10;Shield mechanics&#10;&#10;2 PP required in:&#10;Evasive maneuvers I",
		levels: [
			{
				value: 6,
				bonus: "evasion_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Evasive maneuvers II&#10;Level: 1/3&#10;&#10;Current level:&#10;Reduces the probabillity of an enemy hit by 2%&#10;Next level:&#10;Reduces the probabillity of an enemy hit by 8%&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 8,
				bonus: "evasion_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Evasive maneuvers II&#10;Level: 2/3&#10;&#10;Current level:&#10;Reduces the probabillity of an enemy hit by 8%&#10;Next level:&#10;Reduces the probabillity of an enemy hit by 12%&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 12,
				bonus: "evasion_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Evasive maneuvers II&#10;Level: 3/3&#10;&#10;Current level:&#10;Reduces the probabillity of an enemy hit by 12%"
			}
		]
	},
	"empty 3": {}
};

skills["Resource"] = {
	"Tactics": {
		amount: 0,
		image: "skills/tactics.png",
		requirements: function() {return true},
		description: "Name: Tactics&#10;Level: 0/5&#10;&#10;Next level:&#10;Receive 2% more EP for each alien kill&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0",
		levels: [
			{
				value: 2,
				bonus: "experience_%_PVE_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Tactics&#10;Level: 1/5&#10;&#10;Current level:&#10;Receive 2% more EP for each alien kill&#10;Next level:&#10;Receive 4% more EP for each alien kill&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 4,
				bonus: "experience_%_PVE_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Tactics&#10;Level: 2/5&#10;&#10;Current level:&#10;Receive 4% more EP for each alien kill&#10;Next level:&#10;Receive 6% more EP for each alien kill&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 6,
				bonus: "experience_%_PVE_skill",
				credits: 30000,
				seprom: 0,
				description: "Name: Tactics&#10;Level: 3/5&#10;&#10;Current level:&#10;Receive 6% more EP for each alien kill&#10;Next level:&#10;Receive 8% more EP for each alien kill&#10;&#10;Prequisites for next level:&#10;Credits: 40000&#10;Seprom: 0"
			},
			{
				value: 8,
				bonus: "experience_%_PVE_skill",
				credits: 40000,
				seprom: 0,
				description: "Name: Tactics&#10;Level: 4/5&#10;&#10;Current level:&#10;Receive 8% more EP for each alien kill&#10;Next level:&#10;Receive 12% more EP for each alien kill&#10;&#10;Prequisites for next level:&#10;Credits: 50000&#10;Seprom: 0"
			},
			{
				value: 12,
				bonus: "experience_%_PVE_skill",
				credits: 50000,
				seprom: 0,
				description: "Name: Tactics&#10;Level: 5/5&#10;&#10;Current level:&#10;Receive 12% more EP for each alien kill"
			}
		]
	},
	"empty 1": {},
	"Logistics": {
		amount: 0,
		image: "skills/logistics.png",
		requirements: function() {return skills["Defensive"]["Ship hull I"].amount > 0 || skills["Resource"]["Tactics"].amount > 0 || skills["Offensive"]["Detonation I"].amount > 0},
		description: "Name: Logistics&#10;Level: 0/5&#10;&#10;Next level:&#10;Expends your cargo bay by 4%&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0&#10;&#10;1 PP required in any of the following:&#10;Detonation I&#10;Tactics&#10;Ship hull I",
		levels: [
			{
				value: 4,
				bonus: "cargo_%_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Logistics&#10;Level: 1/5&#10;&#10;Current level:&#10;Expends your cargo bay by 4%&#10;Next level:&#10;Expends your cargo bay by 8%&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 8,
				bonus: "cargo_%_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Logistics&#10;Level: 2/5&#10;&#10;Current level:&#10;Expends your cargo bay by 8%&#10;Next level:&#10;Expends your cargo bay by 12%&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 12,
				bonus: "cargo_%_skill",
				credits: 30000,
				seprom: 0,
				description: "Name: Logistics&#10;Level: 3/5&#10;&#10;Current level:&#10;Expends your cargo bay by 12%&#10;Next level:&#10;Expends your cargo bay by 18%&#10;&#10;Prequisites for next level:&#10;Credits: 40000&#10;Seprom: 0"
			},
			{
				value: 18,
				bonus: "cargo_%_skill",
				credits: 40000,
				seprom: 0,
				description: "Name: Logistics&#10;Level: 4/5&#10;&#10;Current level:&#10;Expends your cargo bay by 18%&#10;Next level:&#10;Expends your cargo bay by 25%&#10;&#10;Prequisites for next level:&#10;Credits: 50000&#10;Seprom: 0"
			},
			{
				value: 25,
				bonus: "cargo_%_skill",
				credits: 50000,
				seprom: 0,
				description: "Name: Logistics&#10;Level: 5/5&#10;&#10;Current level:&#10;Expends your cargo bay by 25%"
			}
		]
	},
	"interspace 1": {},
	"Luck I": {
		amount: 0,
		image: "skills/luck-1.png",
		requirements: function() {return skills["Resource"]["Logistics"].amount > 1},
		description: "Name: Luck I&#10;Level: 0/2&#10;&#10;Next level:&#10;Gives you 2% more bonus-box Uridium&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in:&#10;Logistics",
		levels: [
			{
				value: 2,
				bonus: "bonus_box_uridium_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Luck I&#10;Level: 1/2&#10;&#10;Current level:&#10;Gives you 2% more bonus-box Uridium&#10;Next level:&#10;Gives you 4% more bonus-box Uridium&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 4,
				bonus: "bonus_box_uridium_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Luck I&#10;Level: 2/2&#10;&#10;Current level:&#10;Gives you 4% more bonus-box Uridium"
			}
		]
	},
	"Cruelty I": {
		amount: 0,
		image: "skills/cruelty-1.png",
		requirements: function() {return (skills["Resource"]["Luck I"].amount + skills["Defensive"]["Evasive maneuvers I"].amount + skills["Offensive"]["Bounty Hunter I"].amount) > 1},
		description: "Name: Cruelty I&#10;Level: 0/2&#10;&#10;Next level:&#10;Gives you 4% more honor points&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in any of the following:&#10;Bounty Hunter I&#10;Luck I&#10;Evasive maneuvers I",
		levels: [
			{
				value: 4,
				bonus: "honor_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Cruelty I&#10;Level: 1/2&#10;&#10;Current level:&#10;Gives you 4% more honor points&#10;Next level:&#10;Gives you 8% more honor points&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 8,
				bonus: "honor_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Cruelty I&#10;Level: 2/2&#10;&#10;Current level:&#10;Gives you 8% more honor points"
			}
		]
	},
	"Tractor beam I": {
		amount: 0,
		image: "skills/tractor-beam-1.png",
		requirements: function() {return (skills["Defensive"]["Ship hull II"].amount + skills["Resource"]["Cruelty I"].amount + skills["Offensive"]["Rocket fusion"].amount) > 1},
		description: "Name: Tractor beam I&#10;Level: 0/5&#10;&#10;Next level:&#10;Increased cargo box loot by 1%&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in any of the following:&#10;Rocket fusion&#10;Cruelty I&#10;Ship hull II",
		levels: [
			{
				value: 1,
				bonus: "res_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Tractor beam I&#10;Level: 1/5&#10;&#10;Current level:&#10;Increased cargo box loot by 1%&#10;Next level:&#10;Increased cargo box loot by 1%&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 2,
				bonus: "res_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Tractor beam I&#10;Level: 2/5&#10;&#10;Current level:&#10;Increased cargo box loot by 2%&#10;Next level:&#10;Increased cargo box loot by 3%&#10;&#10;Prequisites for next level:&#10;Credits: 300000&#10;Seprom: 300"
			},
			{
				value: 3,
				bonus: "res_%_skill",
				credits: 300000,
				seprom: 300,
				description: "Name: Tractor beam I&#10;Level: 3/5&#10;&#10;Current level:&#10;Increased cargo box loot by 3%&#10;Next level:&#10;Increased cargo box loot by 4%&#10;&#10;Prequisites for next level:&#10;Credits: 400000&#10;Seprom: 400"
			},
			{
				value: 4,
				bonus: "res_%_skill",
				credits: 400000,
				seprom: 400,
				description: "Name: Tractor beam I&#10;Level: 4/5&#10;&#10;Current level:&#10;Increased cargo box loot by 4%&#10;Next level:&#10;Increased cargo box loot by 6%&#10;&#10;Prequisites for next level:&#10;Credits: 500000&#10;Seprom: 500"
			},
			{
				value: 6,
				bonus: "res_%_skill",
				credits: 500000,
				seprom: 500,
				description: "Name: Tractor beam I&#10;Level: 5/5&#10;&#10;Current level:&#10;Increased cargo box loot by 6%"
			}
		]
	},
	"interspace 2": {},
	"Greed": {
		amount: 0,
		image: "skills/greed.png",
		requirements: function() {return (skills["Resource"]["Tractor beam I"].amount + skills["Offensive"]["Alien hunter"].amount) > 2},
		description: "Name: Greed&#10;Level: 0/5&#10;&#10;Next level:&#10;Receive 4% more credits for alien kills&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in any of the following:&#10;Alien hunter&#10;Tractor beam I",
		levels: [
			{
				value: 4,
				bonus: "credits_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Greed&#10;Level: 1/5&#10;&#10;Current level:&#10;Receive 4% more credits for alien kills&#10;Next level:&#10;Receive 8% more credits for alien kills&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 8,
				bonus: "credits_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Greed&#10;Level: 2/5&#10;&#10;Current level:&#10;Receive 8% more credits for alien kills&#10;Next level:&#10;Receive 12% more credits for alien kills&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 12,
				bonus: "credits_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Greed&#10;Level: 3/5&#10;&#10;Current level:&#10;Receive 12% more credits for alien kills&#10;Next level:&#10;Receive 18% more credits for alien kills%&#10;&#10;Prequisites for next level:&#10;Credits: 4000000&#10;Seprom: 4000"
			},
			{
				value: 18,
				bonus: "credits_%_skill",
				credits: 4000000,
				seprom: 4000,
				description: "Name: Greed&#10;Level: 4/5&#10;&#10;Current level:&#10;Receive 18% more credits for alien kills&#10;Next level:&#10;Receive 25% more credits for alien kills&#10;&#10;Prequisites for next level:&#10;Credits: 5000000&#10;Seprom: 5000"
			},
			{
				value: 25,
				bonus: "credits_%_skill",
				credits: 5000000,
				seprom: 5000,
				description: "Name: Greed&#10;Level: 5/5&#10;&#10;Current level:&#10;Receive 25% more credits for alien kills"
			}
		]
	},
	"Tractor beam II": {
		amount: 0,
		image: "skills/tractor-beam-2.png",
		requirements: function() {return (skills["Defensive"]["Shield mechanics"].amount + skills["Resource"]["Greed"].amount + skills["Offensive"]["Detonation II"].amount) > 4},
		description: "Name: Tractor beam II&#10;Level: 0/5&#10;&#10;Next level:&#10;Increased bonus box loot by 2%&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;5 PP required in any of the following:&#10;Detonation II&#10;Greed&#10;Shield mechanics",
		levels: [
			{
				value: 2,
				bonus: "bonus_box_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Tractor beam II&#10;Level: 1/5&#10;&#10;Current level:&#10;Increased bonus box loot by 2%&#10;Next level:&#10;Increased bonus box loot by 6%&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 6,
				bonus: "bonus_box_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Tractor beam II&#10;Level: 2/5&#10;&#10;Current level:&#10;Increased bonus box loot by 6%&#10;Next level:&#10;Increased bonus box loot by 10%&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 10,
				bonus: "bonus_box_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Tractor beam II&#10;Level: 3/5&#10;&#10;Current level:&#10;Increased bonus box loot by 10%&#10;Next level:&#10;Increased bonus box loot by 15%&#10;&#10;Prequisites for next level:&#10;Credits: 4000000&#10;Seprom: 4000"
			},
			{
				value: 15,
				bonus: "bonus_box_%_skill",
				credits: 4000000,
				seprom: 4000,
				description: "Name: Tractor beam II&#10;Level: 4/5&#10;&#10;Current level:&#10;Increased bonus box loot by 15%&#10;Next level:&#10;Increased bonus box loot by 20%&#10;&#10;Prequisites for next level:&#10;Credits: 5000000&#10;Seprom: 5000"
			},
			{
				value: 20,
				bonus: "bonus_box_%_skill",
				credits: 5000000,
				seprom: 5000,
				description: "Name: Tractor beam II&#10;Level: 5/5&#10;&#10;Current level:&#10;Increased bonus box loot by 20%"
			}
		]
	},
	"Cruelty II": {
		amount: 0,
		image: "skills/cruelty-2.png",
		requirements: function() {return skills["Resource"]["Cruelty I"].amount > 1 && (skills["Resource"]["Tractor beam II"].amount + skills["Offensive"]["Electro-optics"].amount) > 2},
		description: "Name: Cruelty II&#10;Level: 0/3&#10;&#10;Next level:&#10;Gives you 12% more honor points&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in any of the following:&#10;Electro-optics&#10;Tractor beam II&#10;&#10;2 PP required in:&#10;Cruelty I",
		levels: [
			{
				value: 12,
				bonus: "honor_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Cruelty II&#10;Level: 1/3&#10;&#10;Current level:&#10;Gives you 12% more honor points&#10;Next level:&#10;Gives you 16% more honor points&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 16,
				bonus: "honor_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Cruelty II&#10;Level: 2/3&#10;&#10;Current level:&#10;Gives you 16% more honor points&#10;Next level:&#10;Gives you 25% more honor points&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 25,
				bonus: "honor_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Cruelty II&#10;Level: 3/3&#10;&#10;Current level:&#10;Gives you 25% more honor points"
			}
		]
	},
	"Luck II": {
		amount: 0,
		image: "skills/luck-2.png",
		requirements: function() {return skills["Resource"]["Luck I"].amount > 1 && skills["Offensive"]["Bounty Hunter II"].amount > 2 && skills["Defensive"]["Evasive maneuvers II"].amount > 2},
		description: "Name: Luck II&#10;Level: 0/3&#10;&#10;Next level:&#10;Gives you 6% more bonus-box Uridium&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in each of the following:&#10;Bounty Hunter II&#10;Evasive maneuvers II&#10;&#10;2 PP required in:&#10;Luck I",
		levels: [
			{
				value: 6,
				bonus: "bonus_box_uridium_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Luck II&#10;Level: 1/3&#10;&#10;Current level:&#10;Gives you 6% more bonus-box Uridium&#10;Next level:&#10;Gives you 8% more bonus-box Uridium&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 8,
				bonus: "bonus_box_uridium_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Luck II&#10;Level: 2/3&#10;&#10;Current level:&#10;Gives you 8% more bonus-box Uridium&#10;Next level:&#10;Gives you 12% more bonus-box Uridium&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 12,
				bonus: "bonus_box_uridium_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Luck II&#10;Level: 3/3&#10;&#10;Current level:&#10;Gives you 12% more bonus-box Uridium"
			}
		]
	}
};

skills["Offensive"] = {
	"Detonation I": {
		amount: 0,
		image: "skills/detonation-1.png",
		requirements: function() {return true},
		description: "Name: Detonation I&#10;Level: 0/2&#10;&#10;Next level:&#10;Makes your mines causse 7% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0",
		levels: [
			{
				value: 7,
				bonus: "damage_mine_%_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Detonation I&#10;Level: 1/2&#10;&#10;Current level:&#10;Makes your mines causse 7% more damage&#10;Next level:&#10;Makes your mines causse 14% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0"
			},
			{
				value: 14,
				bonus: "damage_mine_%_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Detonation I&#10;Level: 2/2&#10;&#10;Current level:&#10;Makes your mines causse 14% more damage"
			}
		]
	},
	"Explosives": {
		amount: 0,
		image: "skills/explosives.png",
		requirements: function() {return (skills["Defensive"]["Ship hull I"].amount + skills["Resource"]["Tactics"].amount + skills["Offensive"]["Detonation I"].amount) > 0},
		description: "Name: Explosives&#10;Level: 0/5&#10;&#10;Next level:&#10;Inreases the radius of mine explosions by 4%&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0&#10;&#10;1 PP required in any of the following:&#10;Detonation I&#10;Tactics&#10;Ship hull I",
		levels: [
			{
				value: 4,
				bonus: "mine_radius_%_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Explosives&#10;Level: 1/5&#10;&#10;Current level:&#10;Inreases the radius of mine explosions by 4%&#10;Next level:&#10;Inreases the radius of mine explosions by 8%&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 8,
				bonus: "mine_radius_%_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Explosives&#10;Level: 2/5&#10;&#10;Current level:&#10;Inreases the radius of mine explosions by 8%&#10;Next level:&#10;Inreases the radius of mine explosions by 12%&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 12,
				bonus: "mine_radius_%_skill",
				credits: 30000,
				seprom: 0,
				description: "Name: Explosives&#10;Level: 3/5&#10;&#10;Current level:&#10;Inreases the radius of mine explosions by 12%&#10;Next level:&#10;Inreases the radius of mine explosions by 18%&#10;&#10;Prequisites for next level:&#10;Credits: 40000&#10;Seprom: 0"
			},
			{
				value: 18,
				bonus: "mine_radius_%_skill",
				credits: 40000,
				seprom: 0,
				description: "Name: Explosives&#10;Level: 4/5&#10;&#10;Current level:&#10;Inreases the radius of mine explosions by 18%&#10;Next level:&#10;Inreases the radius of mine explosions by 25%&#10;&#10;Prequisites for next level:&#10;Credits: 50000&#10;Seprom: 0"
			},
			{
				value: 25,
				bonus: "mine_radius_%_skill",
				credits: 50000,
				seprom: 0,
				description: "Name: Explosives&#10;Level: 5/5&#10;&#10;Current level:&#10;Inreases the radius of mine explosions by 25%"
			}
		]
	},
	"Heat-seeking missiles": {
		amount: 0,
		image: "skills/heat-seeking-missiles.png",
		requirements: function() {return (skills["Defensive"]["Engineering"].amount + skills["Resource"]["Logistics"].amount + skills["Offensive"]["Explosives"].amount) > 0},
		description: "Name: Heat-seeking missiles&#10;Level: 0/5&#10;&#10;Next level:&#10;Inreases hit probabillity of your rockets by 1%&#10;&#10;Prequisites for next level:&#10;Credits: 10000&#10;Seprom: 0&#10;&#10;1 PP required in any of the following:&#10;Explosives&#10;Logistics&#10;Engineering",
		levels: [
			{
				value: 1,
				bonus: "accuracy_rocket_%_skill",
				credits: 10000,
				seprom: 0,
				description: "Name: Heat-seeking missiles&#10;Level: 1/5&#10;&#10;Current level:&#10;Inreases hit probabillity of your rockets by 1%&#10;Next level:&#10;Inreases hit probabillity of your rockets by 2%&#10;&#10;Prequisites for next level:&#10;Credits: 20000&#10;Seprom: 0"
			},
			{
				value: 2,
				bonus: "accuracy_rocket_%_skill",
				credits: 20000,
				seprom: 0,
				description: "Name: Heat-seeking missiles&#10;Level: 2/5&#10;&#10;Current level:&#10;Inreases hit probabillity of your rockets by 2%&#10;Next level:&#10;Inreases hit probabillity of your rockets by 4%&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 4,
				bonus: "accuracy_rocket_%_skill",
				credits: 30000,
				seprom: 0,
				description: "Name: Heat-seeking missiles&#10;Level: 3/5&#10;&#10;Current level:&#10;Inreases hit probabillity of your rockets by 4%&#10;Next level:&#10;Inreases hit probabillity of your rockets by 6%&#10;&#10;Prequisites for next level:&#10;Credits: 40000&#10;Seprom: 0"
			},
			{
				value: 6,
				bonus: "accuracy_rocket_%_skill",
				credits: 40000,
				seprom: 0,
				description: "Name: Heat-seeking missiles&#10;Level: 4/5&#10;&#10;Current level:&#10;Inreases hit probabillity of your rockets by 6%&#10;Next level:&#10;Inreases hit probabillity of your rockets by 10%&#10;&#10;Prequisites for next level:&#10;Credits: 50000&#10;Seprom: 0"
			},
			{
				value: 10,
				bonus: "accuracy_rocket_%_skill",
				credits: 50000,
				seprom: 0,
				description: "Name: Heat-seeking missiles&#10;Level: 5/5&#10;&#10;Current level:&#10;Inreases hit probabillity of your rockets by 10%"
			}
		]
	},
	"interspace 1": {},
	"Bounty Hunter I": {
		amount: 0,
		image: "skills/bounty-hunter-1.png",
		requirements: function() {return (skills["Defensive"]["Shield engineering"].amount + skills["Offensive"]["Heat-seeking missiles"].amount) > 1},
		description: "Name: Bounty Hunter I&#10;Level: 0/2&#10;&#10;Next level:&#10;Makes your lasers cause 2% more damage in PVP battles&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in any of the following:&#10;Heat-seeking missiles&#10;Shield engineering",
		levels: [
			{
				value: 2,
				bonus: "damage_PVP_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Bounty Hunter I&#10;Level: 1/2&#10;&#10;Current level:&#10;Makes your lasers cause 2% more damage in PVP battles&#10;Next level:&#10;Makes your lasers cause 4% more damage in PVP battles&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 4,
				bonus: "damage_PVP_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Bounty Hunter I&#10;Level: 2/2&#10;&#10;Current level:&#10;Makes your lasers cause 4% more damage in PVP battles"
			}
		]
	},
	"Rocket fusion": {
		amount: 0,
		image: "skills/rocket-fusion.png",
		requirements: function() {return (skills["Defensive"]["Ship hull II"].amount + skills["Resource"]["Luck I"].amount + skills["Offensive"]["Bounty Hunter I"].amount) > 1},
		description: "Name: Rocket fusion&#10;Level: 0/5&#10;&#10;Next level:&#10;Makes your rockets cause 2% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in any of the following:&#10;Bounty Hunter I&#10;Luck I&#10;Ship hull II",
		levels: [
			{
				value: 2,
				bonus: "damage_rocket_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Rocket fusion&#10;Level: 1/5&#10;&#10;Current level:&#10;Makes your rockets cause 2% more damage&#10;Next level:&#10;Makes your rockets cause 4% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 4,
				bonus: "damage_rocket_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Rocket fusion&#10;Level: 2/5&#10;&#10;Current level:&#10;Makes your rockets cause 4% more damage&#10;Next level:&#10;Makes your rockets cause 6% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 30000&#10;Seprom: 0"
			},
			{
				value: 6,
				bonus: "damage_rocket_%_skill",
				credits: 300000,
				seprom: 300,
				description: "Name: Rocket fusion&#10;Level: 3/5&#10;&#10;Current level:&#10;Makes your rockets cause 6% more damage&#10;Next level:&#10;Makes your rockets cause 8% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 400000&#10;Seprom: 400"
			},
			{
				value: 8,
				bonus: "damage_rocket_%_skill",
				credits: 400000,
				seprom: 400,
				description: "Name: Rocket fusion&#10;Level: 4/5&#10;&#10;Current level:&#10;Makes your rockets cause 8% more damage&#10;Next level:&#10;Makes your rockets cause 15% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 500000&#10;Seprom: 500"
			},
			{
				value: 15,
				bonus: "damage_rocket_%_skill",
				credits: 500000,
				seprom: 500,
				description: "Name: Rocket fusion&#10;Level: 5/5&#10;&#10;Current level:&#10;Makes your rockets cause 15% more damage"
			}
		]
	},
	"Alien hunter": {
		amount: 0,
		image: "skills/alien-hunter.png",
		requirements: function() {return skills["Resource"]["Cruelty I"].amount > 1 && skills["Offensive"]["Rocket fusion"].amount > 1},
		description: "Name: Alien hunter&#10;Level: 0/5&#10;&#10;Next level:&#10;Makes your lasers cause 2% more damage against aliens&#10;&#10;Prequisites for next level:&#10;Credits: 100000&#10;Seprom: 100&#10;&#10;2 PP required in each of the following:&#10;Rocket fusion&#10;Cruelty I",
		levels: [
			{
				value: 2,
				bonus: "damage_PVE_%_skill",
				credits: 100000,
				seprom: 100,
				description: "Name: Alien hunter&#10;Level: 1/5&#10;&#10;Current level:&#10;Makes your lasers cause 2% more damage against aliens&#10;Next level:&#10;Makes your lasers cause 4% more damage against aliens&#10;&#10;Prequisites for next level:&#10;Credits: 200000&#10;Seprom: 200"
			},
			{
				value: 4,
				bonus: "damage_PVE_%_skill",
				credits: 200000,
				seprom: 200,
				description: "Name: Alien hunter&#10;Level: 2/5&#10;&#10;Current level:&#10;Makes your lasers cause 4% more damage against aliens&#10;Next level:&#10;Makes your lasers cause 6% more damage against aliens&#10;&#10;Prequisites for next level:&#10;Credits: 300000&#10;Seprom: 300"
			},
			{
				value: 6,
				bonus: "damage_PVE_%_skill",
				credits: 300000,
				seprom: 300,
				description: "Name: Alien hunter&#10;Level: 3/5&#10;&#10;Current level:&#10;Makes your lasers cause 6% more damage against aliens&#10;Next level:&#10;Makes your lasers cause 8% more damage against aliens&#10;&#10;Prequisites for next level:&#10;Credits: 400000&#10;Seprom: 400"
			},
			{
				value: 8,
				bonus: "damage_PVE_%_skill",
				credits: 400000,
				seprom: 400,
				description: "Name: Alien hunter&#10;Level: 4/5&#10;&#10;Current level:&#10;Makes your lasers cause 8% more damage against aliens&#10;Next level:&#10;Makes your lasers cause 12% more damage against aliens&#10;&#10;Prequisites for next level:&#10;Credits: 500000&#10;Seprom: 500"
			},
			{
				value: 12,
				bonus: "damage_PVE_%_skill",
				credits: 500000,
				seprom: 500,
				description: "Name: Alien hunter&#10;Level: 5/5&#10;&#10;Current level:&#10;Makes your lasers cause 12% more damage against aliens"
			}
		]
	},
	"interspace 2": {},
	"Detonation II": {
		amount: 0,
		image: "skills/detonation-2.png",
		requirements: function() {return skills["Offensive"]["Detonation I"].amount > 1 && (skills["Resource"]["Tractor beam I"].amount + skills["Offensive"]["Alien hunter"].amount) > 2},
		description: "Name: Detonation II&#10;Level: 0/3&#10;&#10;Next level:&#10;Makes your mines causse 7% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in any of the following:&#10;Alien hunter&#10;Tractor beam I&#10;&#10;2 PP required in:&#10;Detonation I",
		levels: [
			{
				value: 21,
				bonus: "damage_mine_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Detonation II&#10;Level: 1/3&#10;&#10;Current level:&#10;Makes your mines causse 21% more damage&#10;Next level:&#10;Makes your mines causse 28% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 28,
				bonus: "damage_mine_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Detonation II&#10;Level: 2/3&#10;&#10;Current level:&#10;Makes your mines causse 28% more damage&#10;Next level:&#10;Makes your mines causse 50% more damage&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 50,
				bonus: "damage_mine_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Detonation II&#10;Level: 3/3&#10;&#10;Current level:&#10;Makes your mines causse 50% more damage"
			}
		]
	},
	"Electro-optics": {
		amount: 0,
		image: "skills/electro-optics.png",
		requirements: function() {return (skills["Resource"]["Greed"].amount + skills["Defensive"]["Shield mechanics"].amount + skills["Offensive"]["Detonation II"].amount) > 4},
		description: "Name: Electro-optics&#10;Level: 0/5&#10;&#10;Next level:&#10;Increases hit probabillity of lasers by 5%&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;5 PP required in any of the following:&#10;Detonation II&#10;Greed&#10;Shield mechanics",
		levels: [
			{
				value: 5,
				bonus: "accuracy_laser_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Electro-optics&#10;Level: 1/5&#10;&#10;Current level:&#10;Increases hit probabillity of lasers by 5%&#10;Next level:&#10;Increases hit probabillity of lasers by 10%&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 10,
				bonus: "accuracy_laser_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Electro-optics&#10;Level: 2/5&#10;&#10;Current level:&#10Increases hit probabillity of lasers by 10%&#10;Next level:&#10;Increases hit probabillity of lasers by 15%&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 15,
				bonus: "accuracy_laser_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Electro-optics&#10;Level: 3/5&#10;&#10;Current level:&#10;Increases hit probabillity of lasers by 15%&#10;Next level:&#10;Increases hit probabillity of lasers by 20%&#10;&#10;Prequisites for next level:&#10;Credits: 4000000&#10;Seprom: 4000"
			},
			{
				value: 20,
				bonus: "accuracy_laser_%_skill",
				credits: 4000000,
				seprom: 4000,
				description: "Name: Electro-optics&#10;Level: 4/5&#10;&#10;Current level:&#10;Increases hit probabillity of lasers by 20%&#10;Next level:&#10;Increases hit probabillity of lasers by 25%&#10;&#10;Prequisites for next level:&#10;Credits: 5000000&#10;Seprom: 5000"
			},
			{
				value: 25,
				bonus: "accuracy_laser_%_skill",
				credits: 5000000,
				seprom: 5000,
				description: "Name: Electro-optics&#10;Level: 5/5&#10;&#10;Current level:&#10;Increases hit probabillity of lasers by 25%"
			}
		]
	},
	"Bounty Hunter II": {
		amount: 0,
		image: "skills/bounty-hunter-2.png",
		requirements: function() {return skills["Offensive"]["Bounty Hunter I"].amount > 1 && (skills["Offensive"]["Electro-optics"].amount + skills["Resource"]["Tractor beam II"].amount) > 2},
		description: "Name: Bounty Hunter II&#10;Level: 0/3&#10;&#10;Next level:&#10;Makes your lasers cause 6% more damage in PVP battles&#10;&#10;Prequisites for next level:&#10;Credits: 1000000&#10;Seprom: 1000&#10;&#10;3 PP required in any of the following:&#10;Electro-optics&#10;Tractor beam II&#10;&#10;2 PP required in:&#10;Bounty Hunter I",
		levels: [
			{
				value: 6,
				bonus: "damage_PVP_%_skill",
				credits: 1000000,
				seprom: 1000,
				description: "Name: Bounty Hunter II&#10;Level: 1/3&#10;&#10;Current level:&#10;Makes your lasers cause 6% more damage in PVP battles&#10;Next level:&#10;Makes your lasers cause 8% more damage in PVP battles&#10;&#10;Prequisites for next level:&#10;Credits: 2000000&#10;Seprom: 2000"
			},
			{
				value: 8,
				bonus: "damage_PVP_%_skill",
				credits: 2000000,
				seprom: 2000,
				description: "Name: Bounty Hunter II&#10;Level: 2/3&#10;&#10;Current level:&#10;Makes your lasers cause 8% more damage in PVP battles&#10;Next level:&#10;Makes your lasers cause 12% more damage in PVP battles&#10;&#10;Prequisites for next level:&#10;Credits: 3000000&#10;Seprom: 3000"
			},
			{
				value: 12,
				bonus: "damage_PVP_%_skill",
				credits: 3000000,
				seprom: 3000,
				description: "Name: Bounty Hunter II&#10;Level: 3/3&#10;&#10;Current level:&#10;Makes your lasers cause 12% more damage in PVP battles"
			}
		]
	},
	"empty 1": {}
};