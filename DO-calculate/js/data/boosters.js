const boosters = [];

boosters["DMG"] = {
	"DMG-B01": {description: "+10% damage", bonuses: {"damage_%_boost": 10}},
	"DMG-B02": {description: "+10% damage", bonuses: {"damage_%_boost": 10}},
	"DMG-DLB1": {description: "+5% damage", bonuses: {"damage_%_boost": 5}},
	"DMG-DLB2": {description: "+5% damage", bonuses: {"damage_%_boost": 5}},
	"MUL-B03": {description: "+5% damage", bonuses: {"damage_%_boost": 5}}
};

boosters["SHD"] = {
	"SHD-B01": {description: "+25% shield", bonuses: {"shield_%_boost": 25}},
	"SHD-B02": {description: "+25% shield", bonuses: {"shield_%_boost": 25}},
	"SHD-DLB": {description: "+25% shield", bonuses: {"shield_%_boost": 25}},
	"MUL-B03": {description: "+5% shield", bonuses: {"shield_%_boost": 5}}
};

boosters["HP"] = {
	"HP-B01": {description: "+10% ship hp", bonuses: {"hp_%_boost": 10}},
	"HP-B02": {description: "+10% ship hp", bonuses: {"hp_%_boost": 10}},
	"HP-DLB": {description: "+10% ship hp", bonuses: {"hp_%_boost": 10}}
};

boosters["RES"] = {
	"RES-B01": {description: "The resource booster increases the number of&#10;resources from collected NPC cargo boxes by 25%", bonuses: {"res_%_boost": 25}},
	"RES-B02": {description: "The resource booster increases the number of&#10;resources from collected NPC cargo boxes by 25%", bonuses: {"res_%_boost": 25}}
};

boosters["CD"] = {
	"CD-B01": {description: "20% quicker cooldown times for all ship skills", bonuses: {"cd_%_boost": -20}},
	"CD-B02": {description: "30% quicker cooldown times for all ship skills", bonuses: {"cd_%_boost": -30}},
	"CD-DLB": {description: "5% quicker cooldown times for all ship skills", bonuses: {"cd_%_boost": -5}}
};

boosters["EP"] = {
	"EP-B01": {description: "Gives you a 10% EP bonus", bonuses: {"experience_%_boost": 10}},
	"EP-B02": {description: "Gives you a 10% EP bonus", bonuses: {"experience_%_boost": 10}},
	"EP-50": {description: "Gives you a 50% EP bonus", bonuses: {"experience_%_boost": 50}},
	"EP-DLB1": {description: "Gives you a 25% EP bonus", bonuses: {"experience_%_boost": 25}},
	"EPHON-1": {description: "Gives you a 100% EP bonus", bonuses: {"experience_%_boost": 100}},
	"MUL-B03": {description: "Gives you a 5% EP bonus", bonuses: {"experience_%_boost": 5}}
};

boosters["REP"] = {
	"REP-B01": {description: "+10% faster ship repairs", bonuses: {"rep_%_boost": 10}},
	"REP-B02": {description: "+10% faster ship repairs", bonuses: {"rep_%_boost": 10}},
	"REP-S01": {description: "+10% faster ship repairs", bonuses: {"rep_%_boost": 10}}
};

boosters["HON"] = {
	"HON-B01": {description: "+10% honor", bonuses: {"honor_%_boost": 10}},
	"HON-B02": {description: "+10% honor", bonuses: {"honor_%_boost": 10}},
	"HON-50": {description: "+50% honor", bonuses: {"honor_%_boost": 50}},
	"HON-DLB1": {description: "+10% honor", bonuses: {"honor_%_boost": 10}}
};

boosters["SREG"] = {
	"SREG-B01": {description: "+25% shield regeneration speed", bonuses: {"shield_regeneration_%_boost": 25}},
	"SREG-B02": {description: "+25% shield regeneration speed", bonuses: {"shield_regeneration_%_boost": 25}}
};