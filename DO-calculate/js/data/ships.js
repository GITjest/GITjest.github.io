const ships = [];

function describe() {
    return `Laser: ${this.lasers}&#10;`
	+ `Generators: ${this.generators}&#10;`
	+ `Modules: ${this.modulesSlot}&#10;`
	+ describeBonuses(this.bonuses);
}

function describeBonuses(bonuses) {
	let describe = "";
	for(let bonus in bonuses) {
		let res = bonus.replace("_ship", "")
			.replace("_", " ");
		res = res.charAt(0).toUpperCase() + res.slice(1);

		let parent = res.search("%");
		if(parent > -1) {
			res = res.substr(0, parent - 1);
			res += `: ${bonuses[bonus]}%&#10;`;
		} else {
			res += `: ${bonuses[bonus]}&#10;`;
		}
		describe += res;
	}
	return describe;
}

ships["PHOENIX"] = {
    "PHOENIX": {
		lasers: 1,
        generators: 1,
        modulesSlot: 3,
        description: describe,
        bonuses: {
			"hp_ship": 104000,
			"speed_ship": 320,
			"cargo_ship": 100
		},
        modules: ["SPC-XP01"]
    }
};

ships["LEONOV"] = {
	"LEONOV": {
		lasers: 6,
		generators: 6,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 164000,
			"speed_ship": 360,
			"cargo_ship": 500
		},
		modules: ["SPC-XP01", "DMG-LEO01"]
	},
	"LEONOV(BONUS)": {
		lasers: 6,
		generators: 6,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 260000,
			"speed_ship": 380,
			"cargo_ship": 1000,
			"damage_%_ship": 50,
			"shield_%_ship": 100,
			"damage_rocket_%_ship": 100
		},
		modules: ["SPC-XP01", "DMG-LEO01"]
	}
};

ships["YAMATO"] = {
	"YAMATO": {
		lasers: 8,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 260000,
			"speed_ship": 260,
			"cargo_ship": 1000
		},
		modules: []
	},
	"Y-ROBIN": {
		lasers: 8,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 300000,
			"speed_ship": 260,
			"cargo_ship": 1000
		},
		modules: []
	}
};

ships["DEFCOM"] = {
	"DEFCOM": {
		lasers: 12,
		generators: 8,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 250000,
			"speed_ship": 340,
			"cargo_ship": 800
		},
		modules: []
	},
	"D-RAVEN":{
		lasers: 12,
		generators: 8,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 287500,
			"speed_ship": 340,
			"cargo_ship": 800
		},
		modules: []
	}
};

ships["LIBERATOR"] = {
	"LIBERATOR": {
		lasers: 4,
		generators: 6,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 116000,
			"speed_ship": 330,
			"cargo_ship": 400
		},
		modules: []
	}
};

ships["PIRANHA"] = {
	"PIRANHA": {
		lasers: 6,
		generators: 8,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 164000,
			"speed_ship": 330,
			"cargo_ship": 600
		},
		modules: ["SPC-XP01"]
	}
};

ships["NOSTROMO"] = {
	"NOSTROMO": {
		lasers: 7,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 220000,
			"speed_ship": 340,
			"cargo_ship": 700
		},
		modules: ["SPC-XP01"]
	},
	"N-AMBASADOR": {
		lasers: 12,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 320000,
			"speed_ship": 340,
			"cargo_ship": 1500
		},
		modules: ["SPC-XP01"]
	},
	"N-DIPLOMAT": {
		lasers: 7,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 240000,
			"speed_ship": 340,
			"cargo_ship": 900
		},
		modules: ["SPC-XP01"]
	},
	"N-ENVOY": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 260000,
			"speed_ship": 340,
			"cargo_ship": 1000
		},
		modules: ["SPC-XP01"]
	}
};

ships["VENGEANCE"] = {
	"VENGEANCE": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 280000,
			"speed_ship": 380,
			"cargo_ship": 1000
		},
		modules: ["DMG-VP01", "HP-VP01"]
	},
	"V-ADEPT": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 280000,
			"speed_ship": 380,
			"cargo_ship": 1000,
			"experience_%_ship": 10
		},
		modules: ["DMG-VP01", "HP-VP01"]
	},
	"V-AVENGER": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 280000,
			"speed_ship": 380,
			"cargo_ship": 1000,
			"shield_%_ship": 10
		},
		modules: ["DMG-VP01", "HP-VP01"]
	},
	"V-CORSAIR": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 280000,
			"speed_ship": 380,
			"cargo_ship": 1000,
			"honor_%_ship": 10
		},
		modules: ["DMG-VP01", "HP-VP01"]
	},
	"V-REVENG": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 280000,
			"speed_ship": 380,
			"cargo_ship": 1000,
			"damage_%_ship": 5
		},
		modules: ["DMG-VP01", "HP-VP01"]
	},
	"V-LIGHTNING": {
		lasers: 10,
		generators: 10,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 280000,
			"speed_ship": 380,
			"cargo_ship": 1000,
			"damage_%_ship": 5
		},
		modules: ["DMG-VP01", "HP-VP01"]
	}
};

ships["BIGBOY"] = {
	"BIGBOY": {
		lasers: 8,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 260000,
			"speed_ship": 260,
			"cargo_ship": 800
		},
		modules: ["SPC-XP01"]
	},
	"BB-SOLEMN": {
		lasers: 8,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 260000,
			"speed_ship": 260,
			"cargo_ship": 800,
			"experience_%_ship": 10
		},
		modules: ["SPC-XP01"]
	}
};

ships["GOLIATH"] = {
	"GOLIATH": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: ["DMG-SG01", "SPC-XP02", "SPC-XP02", "SPC-SPD01", "DMG-GP01"]
	},
	"G-VETERAN": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"experience_%_ship": 10
		},
		modules: ["SPC-XP02"]
	},
	"G-EXALTED": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"honor_%_ship": 10
		},
		modules: ["SPC-XP02"]
	},
	"G-ENFORCER": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 5
		},
		modules: ["SPC-XP02", "SPC-EVA01", "HP-BES01", "DMG-GP01"]
	},
	"G-BASTION": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 10
		},
		modules: ["SPC-XP02", "SPC-EVA01", "HP-BES01", "DMG-GP01"]
	},
	"G-CENTAUR": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 10
		},
		modules: ["SPC-XP02"]
	},
	"G-CHAMPION": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 5,
			"honor_%_ship": 10
		},
		modules: ["SPC-XP02", "SHD-GOL01", "DMG-GP01"]
	},
	"G-GOAL": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"experience_%_ship": 10
		},
		modules: ["SPC-XP02"]
	},
	"G-KICK": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 10
		},
		modules: ["SPC-XP02"]
	},
	"G-REFEREE": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 5
		},
		modules: ["SPC-XP02"]
	},
	"G-SURGEON": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 6,
			"honor_%_ship": 6,
			"experience_%_ship": 6
		},
		modules: ["SPC-XP02"]
	},
	"G-SATURN": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 20
		},
		modules: ["SPC-XP02", "SPC-EVA01", "HP-BES01", "DMG-GP01"]
	},
	"SOLACE": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1600,
			"shield_%_ship": 10
		},
		modules: ["SPC-SPD01", "SPC-SL01", "DMG-SG01", "HP-SOL01", "DMG-NPC01", "SHD-SL01"]
	},
	"DIMINISHER": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1600,
			"damage_%_ship": 5
		},
		modules: ["HP-DIM01", "SHD-DIM01"]
	},
	"SPECTRUM": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1600,
			"shield_%_ship": 10
		},
		modules: ["DMG-ST01", "DMG-ROC01", "SPC-SPE01"]
	},
	"SENTINEL": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1600,
			"shield_%_ship": 10
		},
		modules: ["DMG-NPC01", "SHD-SL01", "SPC-SPD01", "SPC-SL01", "DMG-SG01"]
	},
	"VENOM": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1600,
			"damage_%_ship": 5
		},
		modules: []
	},
	"G-PECEMAKER": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_PVP_%_ship": 7,
			"honor_%_ship": 5
		},
		modules: ["SPC-XP02"]
	},
	"G-SOVEREIGN": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_PVP_%_ship": 7,
			"honor_%_ship": 5
		},
		modules: ["SPC-XP02"]
	},
	"G-VANQUISHER": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_PVP_%_ship": 7,
			"honor_%_ship": 5
		},
		modules: ["SPC-XP02"]
	},
	"G-IGNITE": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: ["SPC-XP02"]
	},
	"G-X": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: ["SPC-XP02", "SHD-GOL01", "DMG-SG01", "SPC-XP02", "DMG-GP01"]
	}
};

ships["SPEARHEAD"] = {
	"SPEARHEAD": {
		lasers: 5,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 200000,
			"speed_ship": 370,
			"cargo_ship": 500
		},
		modules: ["HP-S01", "DMG-SG01", "SHD-SH01", "SHD-SH02", "DMG-SH01"]
	},
	"S-ELITE": {
		lasers: 5,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 200000,
			"speed_ship": 370,
			"cargo_ship": 500,
			"damage_%_ship": 5
		},
		modules: ["HP-S01", "DMG-SG01"]
	},
	"S-VETERAN": {
		lasers: 5,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 200000,
			"speed_ship": 370,
			"cargo_ship": 500,
			"experience_%_ship": 5,
			"honor_%_ship": 5
		},
		modules: ["HP-S01", "DMG-SG01"]
	}
};

ships["AEGIS"] = {
	"AEGIS": {
		lasers: 10,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 375000,
			"speed_ship": 300,
			"cargo_ship": 2000
		},
		modules: ["HP-HAM01", "HP-A01"]
	},
	"A-ELITE": {
		lasers: 10,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 375000,
			"speed_ship": 300,
			"cargo_ship": 2000,
			"damage_%_ship": 5
		},
		modules: ["HP-A01"]
	},
	"A-VETERAN": {
		lasers: 10,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 375000,
			"speed_ship": 300,
			"cargo_ship": 2000,
			"experience_%_ship": 5,
			"honor_%_ship": 5
		},
		modules: ["HP-A01"]
	}
};

ships["CITADEL"] = {
	"CITADEL": {
		lasers: 7,
		generators: 20,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 650000,
			"speed_ship": 240,
			"cargo_ship": 4000
		},
		modules: ["SPC-C01", "SPC-C02", "DMG-MTCH01", "HP-C01"]
	},
	"C-ELITE": {
		lasers: 7,
		generators: 20,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 650000,
			"speed_ship": 240,
			"cargo_ship": 4000,
			"damage_%_ship": 5
		},
		modules: ["SPC-C01", "SPC-C02", "DMG-MTCH01", "HP-C01"]
	},
	"C-VETERAN": {
		lasers: 7,
		generators: 20,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 650000,
			"speed_ship": 240,
			"cargo_ship": 4000,
			"experience_%_ship": 5,
			"honor_%_ship": 5
		},
		modules: ["SPC-C01", "SPC-C02", "DMG-MTCH01", "HP-C01"]
	}
};

ships["TARTARUS"] = {
	"TARTARUS": {
		lasers: 14,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 360000,
			"speed_ship": 220,
			"cargo_ship": 1500
		},
		modules: ["DMG-MTCH01", "DMG-T02", "SHD-T01", "DMG-T01", "HP-T01"]
	}
};

ships["CYBORG"] = {
	"CYBORG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 10
		},
		modules: []
	}
};

ships["HAMMERCLAW"] = {
	"HAMMERCLAW": {
		lasers: 12,
		generators: 14,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 377500,
			"speed_ship": 310,
			"cargo_ship": 1500,
			"hp_%_ship": 25
		},
		modules: ["DMG-MTCH01", "HP-HAM01"]
	}
};

ships["MIMESIS"] = {
	"MIMESIS": {
		lasers: 14,
		generators: 14,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 386000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 10,
			"shield_penetration_%_ship": 5
		},
		modules: ["DMG-MS02", "SHD-MS01", "DMG-NPC01", "DMG-MS01", "DMG-MTCH01"]
	}
};

ships["HECATE"] = {
	"HECATE": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 377500,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: ["SPC-SPD01"]
	}
};

ships["CENTURION"] = {
	"CENTURION": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: []
	},
	"UC-DMG-SHD": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 8,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-DMG-HP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 8,
			"hp_%_ship": -15
		},
		modules: []
	},
	"UC-DMG-SP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"damage_%_ship": 8
		},
		modules: []
	},
	"UC-DMG-EVA": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 8,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-DMG-GS": {
		lasers: 16,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 8
		},
		modules: []
	},
	"UC-DMG-RLS": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 8
		},
		modules: []
	},
	"UC-DMG2-HPSHD": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 12,
			"hp_%_ship": -15,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-DMG2-SHDSP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"damage_%_ship": 12,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-DMG2-EVASP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"damage_%_ship": 12,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-DMG2-GSSHD": {
		lasers: 16,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 12,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-HP-DMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 15,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-HP-SHD": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 15,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-HP-SP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"hp_%_ship": 15
		},
		modules: []
	},
	"UC-HP-EVA": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 15,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-HP-GS": {
		lasers: 16,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 15
		},
		modules: []
	},
	"UC-HP-RLS": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 15
		},
		modules: []
	},
	"UC-HP2-SHDDMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": 35,
			"shield_%_ship": -10,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-HP2-DMGSP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"hp_%_ship": 35,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-HP2-EVASP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"hp_%_ship": 35,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-HP2-GSSHD": {
		lasers: 16,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"hp_%_ship": 35
		},
		modules: []
	},
	"UC-SHD-DMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 12,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-SHD-HP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 12,
			"hp_%_ship": -15
		},
		modules: []
	},
	"UC-SHD-SP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"shield_%_ship": 12
		},
		modules: []
	},
	"UC-SHD-EVA": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 12,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-SHD-LS": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 12
		},
		modules: []
	},
	"UC-SHD-RLS": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 12
		},
		modules: []
	},
	"UC-SHD2-HPDMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 20,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-SHD2-DMGSP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 295,
			"cargo_ship": 1500,
			"shield_%_ship": 20,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-SHD2-EVASP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"shield_%_ship": 20,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-SHD2-LSDMG": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 290,
			"cargo_ship": 1500,
			"shield_%_ship": 20,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-SP-SHD": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 310,
			"cargo_ship": 1500,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-SP-HP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 310,
			"cargo_ship": 1500,
			"hp_%_ship": -15
		},
		modules: []
	},
	"UC-SP-DMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 310,
			"cargo_ship": 1500,
			"damage_%_ship": -5
		},
		modules: []
	},
	"UC-SP-EVA": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 310,
			"cargo_ship": 1500,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-SP-LS": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 310,
			"cargo_ship": 1500
		},
		modules: []
	},
	"UC-SP-RLS": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 310,
			"cargo_ship": 1500
		},
		modules: []
	},
	"UC-SP2-HPSHD": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 315,
			"cargo_ship": 1500,
			"hp_%_ship": -15,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-SP2-SHDDMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 315,
			"cargo_ship": 1500,
			"damage_%_ship": -5,
			"shield_%_ship": -10
		},
		modules: []
	},
	"UC-SP2-EVADMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 315,
			"cargo_ship": 1500,
			"damage_%_ship": -5,
			"evasion_%_ship": -5
		},
		modules: []
	},
	"UC-SP2-LSSHD": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 315,
			"cargo_ship": 1500,
			"shield_%_ship": -10
		},
		modules: []
	},
	"A-UC-SB-EVA": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"evasion_%_ship": -15
		},
		modules: []
	},
	"A-US-PS-HP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": -15
		},
		modules: []
	},
	"A-UC-WS-SHD": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": -10
		},
		modules: []
	},
	"A-UC-HLP-HP": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": -15
		},
		modules: []
	},
	"A-UC-P-GS": {
		lasers: 16,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: []
	},
	"A-UC-SR-DMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": -10
		},
		modules: []
	},
	"A-UC-PRP-LS": {
		lasers: 13,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: []
	},
	"A-UC-SBMT-MPLS": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"hp_%_ship": -20
		},
		modules: []
	},
	"A-UC-HLPP-EVADMG": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"evasion_%_ship": -15,
			"damage_%_ship": -10
		},
		modules: []
	},
	"A-UC-WSSR-EVA": {
		lasers: 16,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"evasion_%_ship": -25
		},
		modules: []
	},
	"Tyrannos Centurion": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 365000,
			"speed_ship": 315,
			"cargo_ship": 1500,
			"damage_%_ship": 10,
			"accuracy_%_ship": 10
		},
		modules: []
	}
};

ships["DISRUPTOR"] = {
	"DISRUPTOR": {
		lasers: 14,
		generators: 14,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1600
		},
		modules: ["DMG-ROC01", "DMG-SDZ01", "SPC-EVA01", "HP-D01"]
	}
};

ships["BERSERKER"] = {
	"BERSERKER": {
		lasers: 5,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 500000,
			"speed_ship": 290,
			"cargo_ship": 1500
		},
		modules: ["DMG-NPC01"]
	}
};

ships["ZEPHYR"] = {
	"ZEPHYR": {
		lasers: 12,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 250000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: ["DMG-ROC01"]
	}
};

ships["PUSAT"] = {
	"PUSAT": {
		lasers: 16,
		generators: 12,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 325000,
			"speed_ship": 370,
			"cargo_ship": 1000
		},
		modules: ["DMG-VP01", "HP-VP01"]
	}
};

ships["SOLARIS"] = {
	"SOLARIS": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 377500,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: ["DMG-ROC01", "DMG-SDZ01"]
	},
	"ARMOR SOLARIS": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 377500,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"shield_%_ship": 10,
			"hp_%_ship": 5
		},
		modules: ["DMG-ROC01", "DMG-SDZ01"]
	},
	"PSYCHE SOLARIS": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 377500,
			"speed_ship": 300,
			"cargo_ship": 1500,
			"damage_%_ship": 10
		},
		modules: ["DMG-ROC01", "DMG-SDZ01"]
	}
};

ships["KERES"] = {
	"KERES": {
		lasers: 15,
		generators: 16,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 356000,
			"speed_ship": 300,
			"cargo_ship": 1500
		},
		modules: []
	}
};

ships["RETIARUS"] = {
	"RETIARUS": {
		lasers: 15,
		generators: 14,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 386000,
			"speed_ship": 310,
			"cargo_ship": 1500
		},
		modules: []
	}
};

ships["ORCUS"] = {
	"ORCUS": {
		lasers: 15,
		generators: 15,
		modulesSlot: 3,
		description: describe,
		bonuses: {
			"hp_ship": 350000,
			"speed_ship": 290,
			"cargo_ship": 1500
		},
		modules: []
	}
};
