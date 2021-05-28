const formations = [];

formations["Turtle"] = {
	image: "formations/turtle.png",
	description: "Increases shield power by 10%, but laser and rocket damage decrease by 7.5%.",
	bonuses: {
		"shield_%_formation": 10,
		"damage_%_formation": -7.5,
		"damage_rocket_%_formation": -7.5
	}
};

formations["Arrow"] = {
	image: "formations/arrow.png",
	description: "Increases rocket damage by 20%, but reduces laser damage by 3%.",
	bonuses: {
		"damage_rocket_%_formation": 20,
		"damage_%_formation": -3
	}
};

formations["Star"] = {
	image: "formations/star.png",
	description: "Increases rocket damage by 25%, evasion by 5%, but rocket launcher reload time increases by 33%, as well.",
	bonuses: {
		"damage_rocket_%_formation": 25,
		"evasion_%_formation": 5,
		"launcher_reload_time_%_formation": 33
	}
};

formations["Double arrow"] = {
	image: "formations/double-arrow.png",
	description: "Increases rocket damage by 30%, shield penetration by 10%, but reduces shield power by 20%.",
	bonuses: {
		"damage_rocket_%_formation": 30,
		"shield_penetration_%_formation": 10,
		"shield_%_formation": -20
	}
};

formations["Pincer"] = {
	image: "formations/pincer.png",
	description: "Increases laser damage by 3% against other players and provides an additional 5% honour point bonus.&#10;However, it reduces shield penetration by 10%.",
	bonuses: {
		"damage_PVP_%_formation": 3,
		"honor_%_formation": 5,
		"shield_penetration_%_formation": -10
	}
};

formations["Diamond"] = {
	image: "formations/diamond.png",
	description: "Your shield regenerates 1% of your max shield power per second, up to a maximum of 5,000 per second.&#10;But hit points are reduced by 30%.",
	bonuses: {
		"hp_%_formation": -30,
		"shield_regeneration_diamond_%_formation": 1,
	}
};

formations["Chevron"] = {
	image: "formations/chevron.png",
	description: "Increases rocket damage by 65%, but reduces ship hit points by 20%.",
	bonuses: {
		"damage_rocket_%_formation": 65,
		"hp_%_formation": -20
	}
};

formations["Moth"] = {
	image: "formations/moth.png",
	description: "Increases shield penetration by 20%. Increases hit points by 20%, as well.&#10;But weakens your shield strength at a rate of 5% per second.",
	bonuses: {
		"hp_%_formation": 20,
		"shield_penetration_%_formation": 20
	}
};

formations["Crab"] = {
	image: "formations/crab.png",
	description: "Increases shield absorption by 20% but reduce speed by 15%.",
	bonuses: {
		"speed_%_formation": -15,
		"shield_absorption_%_formation": 20
	}
};

formations["Heart"] = {
	image: "formations/heart.png",
	description: "Increases your shield power by 20% and your hit points by 20%.&#10;Laser damage is, however, reduced by 5%.",
	bonuses: {
		"hp_%_formation": 20,
		"shield_%_formation": 20,
		"damage_%_formation": -5
	}
};

formations["Barrage"] = {
	image: "formations/barrage.png",
	description: "Increases laser damage on Aliens by 5% and provides an additional 5% of EP.&#10;Shield absorption, however, will be reduced by 15%.",
	bonuses: {
		"experience_%_formation": 5,
		"damage_PVE_%_formation": 5,
		"shield_absorption_%_formation": -15
	}
};

formations["Lance"] = {
	image: "formations/lance.png",
	description: "Increases mine damage by 50%.",
	bonuses: {
		"damage_mine_%_formation": 50
	}
};

formations["Bat"] = {
	image: "formations/bat.png",
	description: "Increase damage to NPCs by 8% and earn 8% more XP&#10;however, your speed will be reduced by 15%.",
	bonuses: {
		"experience_%_formation": 8,
		"speed_%_formation": -15,
		"damage_PVE_%_formation": 8
	}
};

formations["Dome"] = {
	image: "formations/dome.png",
	description: "Shield points are increased by 30% and regenerate by 0.5% per second.&#10;Cooldown times for rockets and rocket launchers are reduced by 25%&#10;however, laser damage and speed are both reduced by 50%.",
	bonuses: {
		"speed_%_formation": -50,
		"shield_%_formation": 30,
		"damage_%_formation": 50,
		"shield_regeneration_dome_%_formation": 0.5,
		"rocket_reload_time_%_formation": -25,
		"launcher_reload_time_%_formation": -25
	}
};

formations["Drill"] = {
	image: "formations/drill.png",
	description: "Laser damage is increased by 20%&#10;however, shield points are reduced by 25%, shield spread by 5%, and speed by 5%.",
	bonuses: {
		"shield_%_formation": -25,
		"speed_%_formation": -5,
		"damage_%_formation": 20,
		"shield_absorption_%_formation": -5
	}
};

formations["Ring"] = {
	image: "formations/ring.png",
	description: "Shield points are increased by 85%; however, speed is reduced by 5%,&#10;laser damage is reduced by 25%, and cooldown times for rockets and rocket launchers are increased by 25%.",
	bonuses: {
		"shield_%_formation": 85,
		"speed_%_formation": -5,
		"damage_%_formation": -25,
		"rocket_reload_time_%_formation": 25,
		"launcher_reload_time_%_formation": 25
	}
};

formations["Veteran"] = {
	image: "formations/veteran.png",
	description: "Honour is increased by 20%; however,&#10;laser damage, hit points, and shield points are all decreased by 20%.",
	bonuses: {
		"honor_%_formation": 20,
		"hp_%_formation": -20,
		"damage_%_formation": -20,
		"shield_%_formation": -20
	}
};

formations["Wheel"] = {
	image: "formations/wheel.png",
	description: "Speed is increased by 5%; however,&#10;laser damage is reduced by 20%, and this formation drains shields by 5% per second.",
	bonuses: {
		"speed_%_formation": 5,
		"damage_%_formation": -20
	}
};

formations["Wave"] = {
	image: "formations/wave.png",
	description: "Drones will make waves, but otherwise, this formation grants neither benefits nor penalties.",
	bonuses: {}
};

formations["X"] = {
	image: "formations/x.png",
	description: "-100% honour rewarded&#10;Your lasers cause no damage to enemy players&#10;+5% Laser Damage against aliens&#10;+5% XP from aliens&#10;+8% HP",
	bonuses: {
		"honor_%_formation": -100,
		"damage_PVP_%_formation": -100,
		"experience_%_formation": 5,
		"damage_PVE_%_formation": 5,
		"hp_%_formation": 8
	}
};