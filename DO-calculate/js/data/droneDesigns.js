const droneDesigns = {
	"HAVOC": {
		description: "With the improved specifications of the Havoc design, more energy can&#10;be redirected to the laser components. If all the drones are equipped with&#10;the Havoc design, then all of the drones will profit from a laser cannon&#10;efficiency bonus of 10%.",
		bonuses: {
			"damage_%_havoc_set_drone": 10
		}
	},
	"HERCULES": {
		description: "The improved design lets you transfer more energy to the drones shield generators.&#10;If all of your drones have the Hercules design, you will receive an additional 20% increase in HP.",
		bonuses: {
			"shield_%_hercules_drone": 15,
			"hp_%_hercules_set_drone": 20
		}
	},
	"SPARTAN": {
		description: "Lasers and rockets have a tough time with the Spartan drone design! Each&#10;Spartan drone increases damage and HP by 1%. If all of your drones have&#10;the Spartan design equipped, you will receive an aditional 10% in shield&#10;power and 5% in HP.",
		bonuses: {
			"damage_%_spartan_drone": 1,
			"hp_%_spartan_drone": 1,
			"hp_%_spartan_set_drone": 5,
			"shield_%_spartan_set_drone": 10
		}
	},
	"DEMON": {
		description: "1% bonus rocket damage for each drone that is equipped (Up to 10%).&#10; If 10 drones are equipped you get -5% Rocket Cooldown.",
		bonuses: {
			"damage_rocket_%_demon_drone": 1,
			"rocket_reload_time_%_demon_set_drone": -5
		}
	},
	"HERMES": {
		description: "+0.5% DMG and +2% HP per drone and gives an aditional +10% Cooldown&#10;Reduction for Abilities, Hellstorm Launchers, Mines and Rockets as a set bonus.&#10;Stats With Full Set (10) Damage 5%, HP Bonus 20% and 10% Cooldown.",
		bonuses: {
			"damage_%_hermes_drone": 0.5,
			"hp_%_hermes_drone": 2,
			"cd_%_hermes_set_drone": -10,
			"rocket_reload_time_%_hermes_set_drone": -10,
			"launcher_reload_time_%_hermes_set_drone": -10,
			"mine_reload_time_%_hermes_set_drone": -10,
		}
	}
};

