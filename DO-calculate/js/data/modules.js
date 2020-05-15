const modules = [];

modules["DMG"] = {
	"DMG-MTCH01": {
		description: "7% increased damage if equipped on your ship.&#10;This ship upgrade module can be used on the following&#10;ships: Hammerclaw, Mimesis, Tartarus, Citadel, C-Veteran and C-Elite.",
		bonuses: {"damage_%_module": 7}
	},
	"DMG-SG01": {
		description: "5% increased damage if equipped on your ship.&#10;This ship upgrade module can be used on the following&#10;ships: Goliath-X, Goliath, Spearhead, S-Elite, S-Veteran , Sentinel, Solace.",
		bonuses: {"damage_%_module": 5}
	},
	"DMG-VP01": {
		description: "10% increased damage if equipped on your ship.&#10;This ship upgrade module can be used on the following&#10;ships: Vengeance, V-Lightning, V-Adept, V-Avenger, V-Corsair, V-Revengeance, Pusat.",
		bonuses: {"damage_%_module": 10}
	},
	"DMG-T01": {
		description: "10% increased damage, but 8% decreased HP if equipped on your ship.&#10;This ship upgrade module can be used on Tartarus.",
		bonuses: {"damage_%_module": 10, "hp_%_module": -8}
	},
	"DMG-T02": {
		description: "12% increased damage, but 12% decreased HP if equipped on your ship.&#10;This ship upgrade module can be used on Tartarus.",
		bonuses: {"damage_%_module": 12, "shield_%_module": -12}
	},
	"DMG-MS01": {
		description: "10% increased damage, 5% increased evasion but 8% decreased HP.&#10;This ship upgrade module can be used on Mimesis.",
		bonuses: {"damage_%_module": 10, "evasion_%_module" : 5, "hp_%_module": -8}
	},
	"DMG-MS02": {
		description: "12% increased damage, 5% increased evasion but 5% decreased shield.&#10;This ship upgrade module can be used on Mimesis.",
		bonuses: {"damage_%_module": 12, "evasion_%_module" : 5, "shield_%_module": -5}
	},
	"DMG-NPC01": {
		description: "15% increased NPC damage if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Sentinel, Solace, Mimesis, Berserker.",
		bonuses: {"damage_PVE_%_module": 15}}
	,
	"DMG-ST01": {
		description: "This module gives a 8% damage increase.&#10;This ship upgrade module can be used on the following ships: Spectrum and Tartarus.",
		bonuses: {"damage_%_module": 8}
	},
	"DMG-LEO01": {
		description: "30% increased rocket damage and 20% increased hitchance laser.&#10;This ship upgrade module can be used on Leonov.",
		bonuses: {"damage_rocket_%_module": 30, "accuracy_laser_%_module": 20}
	},
	"DMG-SDZ01": {
		description: "4% increased damage if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Solaris, Disruptor.",
		bonuses: {"damage_%_module": 4}
	},
	"DMG-SH01": {
		description: "15% increased damage but 5% decreased speed if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Spearhead.",
		bonuses: {"damage_%_module": 15, "speed_%_module": -5}
	},
	"DMG-GP01": {
		description: "10% increased PVP damage if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;G-Champion, Goliath, Goliath-X, Bastion, Enforcer, Saturn.",
		bonuses: {"damage_PVP_%_module": 10}
	}
};

modules["SHD"] = {
	"SHD-T01": {
		description: "15% increased shield, 10% increased evasion but 10% decreased HP if equipped on your ship.&#10;This ship upgrade module can be used on Tartarus.",
		bonuses: {"shield_%_module": 15, "hp_%_module": -10, "evasion_%_module": 10}
	},
	"SHD-MS01": {
		description: "8% increased shield, 5% increased evasion but 5% decreased HP.&#10;This ship upgrade module can be used on Mimesis.",
		bonuses: {"shield_%_module": 8, "hp_%_module": -5, "evasion_%_module": 5}
	},
	"SHD-SL01": {
		description: "10% increased shield, but 5% decreased HP if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Sentinel, Solace.",
		bonuses: {"shield_%_module": 10, "hp_%_module": -5}
	},
	"SHD-GOL01": {
		description: "This module gives a 5% shield increase and 5% evasion.&#10;This ship upgrade module can be used on the following ships: Goliath, Goliath-X and Champion Goliath.",
		bonuses: {"shield_%_module": 5, "evasion_%_module": 5}
	},
	"SHD-DIM01": {
		description: "25% increased shield if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Diminisher.",
		bonuses: {"shield_%_module": 25}
	},
	"SHD-SH01": {
		description: "5% increased damage and 10% increased shield but 5% decreased speed if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Spearhead.",
		bonuses: {"shield_%_module": 10, "damage_%_module": 5, "speed_%_module": -5}
	},
	"SHD-SH02": {
		description: "15% increased shield but 5% decreased speed if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Spearhead.",
		bonuses: {"shield_%_module": 15, "speed_%_module": -5}
	}
};

modules["HP"] = {
	"HP-DIM01": {
		description: "10% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on the following ship: Diminisher.",
		bonuses: {"hp_%_module": 10}
	},
	"HP-VP01": {
		description: "15% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on the following ships; Vengeance,&#10;V-Lightning, V-Adept, V-Avenger, V-Corsair, V-Revenge and Pusat.",
		bonuses: {"hp_%_module": 15}
	},
	"HP-S01": {
		description: "15% increased HP if equipped on your ship.&#10;Thiis ship upgrade module can be used on the following ships: Spearhead, S-Elite, S-Veteran.",
		bonuses: {"hp_%_module": 15}
	},
	"HP-A01": {
		description: "5% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Aegis, A-Elite, A-Veteran.",
		bonuses: {"hp_%_module": 5}
	},
	"HP-SOL01": {
		description: "15% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on the Solace.",
		bonuses: {"hp_%_module": 15}
	},
	"HP-C01": {
		description: "10% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Citadel, C-Elite, C-Veteran.",
		bonuses: {"hp_%_module": 10}
	},
	"HP-HAM01": {
		description: "15% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on the Hammerclaw and Aegis.",
		bonuses: {"hp_%_module": 15}
	},
	"HP-BES01": {
		description: "20% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on thefollowing ships:&#10;Bastion, Enforcer, Saturn.",
		bonuses: {"hp_%_module": 20}
	},
	"HP-T01": {
		description: "25% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on thefollowing ships:&#10;Tartarus.",
		bonuses: {"hp_%_module": 25}
	},
	"HP-D01": {
		description: "20% increased HP if equipped on your ship.&#10;This ship upgrade module can be used on thefollowing ships:&#10;Disruptor.",
		bonuses: {"hp_%_module": 20}
	}
};

modules["SPC"] = {
	"SPC-C01": {
		description: "5% increased hitchance for lasers and rockets if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Citadel, C-Veteran, C-Elite.",
		bonuses: {"accuracy_laser_%_module": 5, "accuracy_rocket_%_module": 5}
	},
	"SPC-C02": {
		description: "10% increased hitchance for lasers and rockets but 5% decreased HP if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Citadel, C-Veteran, C-Elite.",
		bonuses: {"hp_%_module": -5, "accuracy_laser_%_module": 10, "accuracy_rocket_%_module": 10}
	},
	"SPC-XP01": {
		description: "20% increased experience if equipped on your ship, up to level 16.&#10;This ship upgrade module can be used on the following ships:&#10;Leonov, Bigboy, Bigboy Solemn, Nostromo, N-Ambassador, N-Diplomat, N-Envoy, Piranha, Phoenix.",
		bonuses: {"experience_%_module": 20}
	},
	"SPC-XP02": {
		description: "15% increased experience if equipped on your ship, up to level 16.&#10;This ship upgrade module can be used on the following ships: Goliath, Goliath-X,&#10;G-Bastion, G-Centaur, G-Champion, G-Enforcer, G-Exalted, G-Goal, G-Ignite, G-Kick,&#10;G-Peacemaker, G-Referee, G-Saturn, G-Sovereign, G-Surgeon, G-Vanquisher, G-Veteran.",
		bonuses: {"experience_%_module": 15}
	},
	"SPC-SL01": {
		description: "5% increased hitchance on rockets and lasers, but 5% decreased shield if equipped on your ship.&#10;This ship upgrade module can be used on the following ships: Sentinel, Solace.",
		bonuses: {"shield_%_module": -5, "accuracy_laser_%_module": 5, "accuracy_rocket_%_module": 5}
	},
	"SPC-SPD01": {
		description: "5% increased speed if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Goliath, Goliath-X, Hecate, Sentinel, Solace.",
		bonuses: {"speed_%_module": 5}
	},
	"SPC-ROC01": {
		description: "4% increased rockets damage and 4% increased hitchance on rockets if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Solaris, Disruptor, Zephyr, Spectrum.",
		bonuses: {"damage_rocket_%_module": 4, "accuracy_rocket_%_module": 4}
	},
	"SPC-SPE01": {
		description: "20% increased rockets damage and 10% increased shield if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Spectrum.",
		bonuses: {"shield_%_module": 10, "damage_rocket_%_module": 20}
	},
	"SPC-EVA01": {
		description: "10% evasion if equipped on your ship.&#10;This ship upgrade module can be used on the following ships:&#10;Bastion, Enforcer, Disruptor, Saturn.",
		bonuses: {"evasion_%_module": 10}
	}
};