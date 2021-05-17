const lasers = {
	"LF-1": {
		bonuses: {
			"damage_PVE_laser": 65,
			"damage_PVP_laser": 65,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "LF-1.png",
		description: "LF-1&#10;&#10;Damage: 65&#10;Fluctuating: 25%"
	},
	"MP-1": {
		bonuses: {
			"damage_PVE_laser": 70,
			"damage_PVP_laser": 70,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "MP-1.png",
		description: "MP-1&#10;&#10;Damage: 70&#10;Fluctuating: 25%"
	},
	"LF-2": {
		bonuses: {
			"damage_PVE_laser": 140,
			"damage_PVP_laser": 140,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "LF-2.png",
		description: "LF-2&#10;&#10;Damage: 140&#10;Fluctuating: 25%"
	},
	"LF-3": {
		bonuses: {
			"damage_PVE_laser": 180,
			"damage_PVP_laser": 180,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "LF-3.png",
		description: "LF-3&#10;&#10;Damage: 180&#10;Fluctuating: 25%"
	},
	"LF-4": {
		bonuses: {
			"damage_PVE_laser": 200,
			"damage_PVP_laser": 200,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "LF-4.png",
		description: "LF-4&#10;&#10;Damage: 200&#10;Fluctuating: 25%"
	},
	"LF-4-HP": {
		bonuses: {
			"damage_PVE_laser": 225,
			"damage_PVP_laser": 225,
			"fluctuating_%_laser": 25,
			"hp_%_laser": 0.5
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "LF-4-HP.png",
		description: "LF-4-HP&#10;&#10;Damage: 225&#10;HP: 0.5%&#10;Fluctuating: 25%",

	},
	"LF-4-MD": {
		bonuses: {
			"damage_PVE_laser": 230,
			"damage_PVP_laser": 235,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "LF-4-MD.png",
		description: "LF-4-MD&#10;&#10;Damage: 230&#10;Damage PVP: 235&#10;Fluctuating: 25%"
	},
	"LF-4-PD": {
		bonuses: {
			"damage_PVE_laser": 235,
			"damage_PVP_laser": 230,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "LF-4-PD.png",
		description: "LF-4-PD&#10;&#10;Damage: 235&#10;Damage PVP: 230&#10;Fluctuating: 25%"
	},
	"U-LF-4": {
		bonuses: {
			"damage_PVE_laser": 220,
			"damage_PVP_laser": 220,
			"fluctuating_%_laser": 42
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "U-LF-4.png",
		description: "U-LF-4&#10;&#10;Damage: 220&#10;Fluctuating: 42%"
	},
	"Prometheus": {
		bonuses: {
			"damage_PVE_laser": 210,
			"damage_PVP_laser": 210,
			"damage_bonus_laser": 200,
			"damage_BL_laser": 525,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "prometheus.png",
		description: "Prometheus&#10;&#10;Damage: 210&#10;Damage extra: 200&#10;Blacklight aliens: 735&#10;Fluctuating: 25%",

	},
	"SL-01": {
		bonuses: {
			"damage_PVE_laser": 125,
			"damage_PVP_laser": 125,
			"damage_bonus_laser": 38,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "SL-01.png",
		description: "SL-01&#10;&#10;Damage: 125&#10;Damage extra: 38&#10;Fluctuating: 25%"
	},
	"SL-02": {
		bonuses: {
			"damage_PVE_laser": 142,
			"damage_PVP_laser": 142,
			"damage_bonus_laser": 75,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "SL-02.png",
		description: "SL-02&#10;&#10;Damage: 142&#10;Damage extra: 75&#10;Fluctuating: 25%"
	},
	"SL-03": {
		bonuses: {
			"damage_PVE_laser": 150,
			"damage_PVP_laser": 150,
			"damage_bonus_laser": 150,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 20,
		upgradePercentValue: 0.005,
		image: "SL-03.png",
		description: "SL-03&#10;&#10;Damage: 150&#10;Damage extra: 150&#10;Fluctuating: 25%"
	},
	"SLL-01": {
		bonuses: {
			"damage_PVE_laser": 85,
			"damage_PVP_laser": 130,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "SLL-01.png",
		description: "SLL-01&#10;&#10;Damage: 85&#10;Damage PVP: 130&#10;Fluctuating: 25%"
	},
	"SLL-02": {
		bonuses: {
			"damage_PVE_laser": 90,
			"damage_PVP_laser": 165,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "SLL-02.png",
		description: "SLL-02&#10;&#10;Damage: 85&#10;Damage PVP: 165&#10;Fluctuating: 25%"
	},
	"SLL-03": {
		bonuses: {
			"damage_PVE_laser": 140,
			"damage_PVP_laser": 185,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "SLL-03.png",
		description: "SLL-03&#10;&#10;Damage: 140&#10;Damage PVP: 185&#10;Fluctuating: 25%"
	},
	"AA-1": {
		bonuses: {
			"damage_PVE_laser": 175,
			"damage_PVP_laser": 175,
			"damage_IA_laser": 75,
			"fluctuating_%_laser": 25
		},
		maxUpgrade: 16,
		upgradePercentValue: 0.005,
		image: "AA-1.png",
		description: "AA-1&#10;&#10;Damage: 175&#10;Damage IA: 250&#10;Fluctuating: 25%",
	}
}