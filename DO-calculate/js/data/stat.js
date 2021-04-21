const stats = [];

stats["laser"] = {
    "amount": function () {
        return nanToZero(bonuses["amount_laser_ship"]) + nanToZero(bonuses["amount_laser_drone"]);
    },
    "PVE": function () {
        return [this["PVE_base"]()[0] * (1 + this["PVE_%"]() * 0.01),
            this["PVE_base"]()[1] * (1 + this["PVE_%"]() * 0.01)];
    },
    "PVE_base": function () {
        let damage = nanToZero(bonuses["damage_PVE_laser_ship"])
            + (nanToZero(bonuses["damage_PVE_laser_drone"]) * (1 + nanToZero(bonuses["damage_%_havoc_set_drone"]) * 0.01));
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "PVE_%": function () {
        return (((((nanToZero(bonuses["damage_%_ship"]) + nanToZero(bonuses["damage_%_formation"]) + nanToZero(bonuses["damage_PVE_%_formation"])
            + nanToZero(bonuses["damage_%_module"]) + nanToZero(bonuses["damage_PVE_%_module"]) + nanToZero(bonuses["damage_%_infection"]))
            * (1 + nanToZero(bonuses["damage_%_boost"]) * 0.01) + nanToZero(bonuses["damage_%_boost"]))
            * (1 + nanToZero(bonuses["damage_%_ore"]) * 0.01) + nanToZero(bonuses["damage_%_ore"]))
            * (1 + nanToZero(bonuses["damage_%_spartan_drone"]) * 0.01) + nanToZero(bonuses["damage_%_spartan_drone"]))
            * (1 + nanToZero(bonuses["damage_%_hermes_drone"]) * 0.01) + nanToZero(bonuses["damage_%_hermes_drone"]))
            * (1 + nanToZero(bonuses["damage_PVE_%_skill"]) * 0.01) + nanToZero(bonuses["damage_PVE_%_skill"]);
    },
    "PVP": function () {
        return [this["PVP_base"]()[0] * (1 + this["PVP_%"]() * 0.01),
            this["PVP_base"]()[1] * (1 + this["PVP_%"]() * 0.01)];
    },
    "PVP_base": function () {
        let damage = nanToZero(bonuses["damage_PVP_laser_ship"])
            + (nanToZero(bonuses["damage_PVP_laser_drone"]) * (1 + nanToZero(bonuses["damage_%_havoc_set_drone"]) * 0.01));
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "PVP_%": function () {
        return (((((nanToZero(bonuses["damage_PVP_%_ship"]) + nanToZero(bonuses["damage_%_ship"]) + nanToZero(bonuses["damage_%_formation"]) + nanToZero(bonuses["damage_PVP_%_formation"])
            + nanToZero(bonuses["damage_%_module"]) + nanToZero(bonuses["damage_PVP_%_module"]) + nanToZero(bonuses["damage_%_infection"]))
            * (1 + nanToZero(bonuses["damage_%_boost"]) * 0.01) + nanToZero(bonuses["damage_%_boost"]))
            * (1 + nanToZero(bonuses["damage_%_ore"]) * 0.01) + nanToZero(bonuses["damage_%_ore"]))
            * (1 + nanToZero(bonuses["damage_%_spartan_drone"]) * 0.01) + nanToZero(bonuses["damage_%_spartan_drone"]))
            * (1 + nanToZero(bonuses["damage_%_hermes_drone"]) * 0.01) + nanToZero(bonuses["damage_%_hermes_drone"]))
            * (1 + nanToZero(bonuses["damage_PVP_%_skill"]) * 0.01) + nanToZero(bonuses["damage_PVP_%_skill"]);
    },
    "bonus_PVE": function () {
        let damage = (nanToZero(bonuses["damage_bonus_laser_ship"])
            + (nanToZero(bonuses["damage_bonus_laser_drone"]) * (1 + nanToZero(bonuses["damage_%_havoc_set_drone"]) * 0.01)))
            * (1 + this["PVE_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "bonus_PVP": function () {
        let damage = (nanToZero(bonuses["damage_bonus_laser_ship"])
            + (nanToZero(bonuses["damage_bonus_laser_drone"]) * (1 + nanToZero(bonuses["damage_%_havoc_set_drone"]) * 0.01)))
            * (1 + this["PVP_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "BL": function () {
        let damage = (nanToZero(bonuses["damage_BL_laser_ship"]) + this["PVE_base"]()[1]
            + (nanToZero(bonuses["damage_BL_laser_drone"]) * (1 + nanToZero(bonuses["damage_%_havoc_set_drone"]) * 0.01)))
            * (1 + this["PVE_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "AI": function () {
        let damage = (nanToZero(bonuses["damage_IA_laser_ship"]) + this["PVE_base"]()[1]
            + (nanToZero(bonuses["damage_IA_laser_drone"]) * (1 + nanToZero(bonuses["damage_%_havoc_set_drone"]) * 0.01)))
            * (1 + this["PVE_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "fluctuating_%": function () {
        return nanToZero((nanToZero(bonuses["fluctuating_%_laser_ship"]) + nanToZero(bonuses["fluctuating_%_laser_drone"])) / this["amount"]());
    },
    "accuracy_%": function () {
        return 75 + nanToZero(bonuses["accuracy_%_ship"]) + nanToZero(bonuses["accuracy_laser_%_module"]) + nanToZero(bonuses["accuracy_laser_%_skill"]);
    }
};

stats["rocket"] = {
    "damage": function () {
        return this["damage_base"]() * (1 + this["damage_%"]() * 0.01);
    },
    "damage_base": function () {
        return 0;
    },
    "damage_%": function () {
        return (((nanToZero(bonuses["damage_rocket_%_ship"]) + nanToZero(bonuses["damage_rocket_%_formation"]) + nanToZero(bonuses["damage_rocket_%_module"]))
            * (1 + nanToZero(bonuses["damage_rocket_%_ore"]) * 0.01) + nanToZero(bonuses["damage_rocket_%_ore"]))
            * (1 + nanToZero(bonuses["damage_rocket_%_demon_drone"]) * 0.01) + nanToZero(bonuses["damage_rocket_%_demon_drone"]))
            * (1 + nanToZero(bonuses["damage_rocket_%_skill"]) * 0.01) + nanToZero(bonuses["damage_rocket_%_skill"]);
    },
    "accuracy_%": function () {
        return nanToZero(bonuses["accuracy_rocket_%_module"])
            + nanToZero(bonuses["accuracy_rocket_%_skill"]);
    },
    "reload_time": function () {
        let val = 4 * nanToZero(bonuses["rocket_reload_time_%_formation"]) * 0.01 + 4;
        val = val * nanToZero(bonuses["rocket_reload_time_%_premium"]) * 0.01 + val;
        val = val * nanToZero(bonuses["rocket_reload_time_%_demon_set_drone"]) * 0.01 + val;
        val = val * nanToZero(bonuses["rocket_reload_time_%_hermes_set_drone"]) * 0.01 + val;
        return val;
    },
    "launcher_reload_time": function () {
        let val = 5 * nanToZero(bonuses["launcher_reload_time_%_formation"]) * 0.01 + 5;
        val = val * nanToZero(bonuses["launcher_reload_time_%_hermes_set_drone"]) * 0.01 + val;
        return val;
    }
};

stats["mine"] = {
    "damage_%": function () {
        return nanToZero(bonuses["damage_mine_%_formation"])
            * (1 + nanToZero(bonuses["damage_mine_%_skill"]) * 0.01) + nanToZero(bonuses["damage_mine_%_skill"]);
    },
    "reload_time": function () {
        return 20 * nanToZero(bonuses["mine_reload_time_%_hermes_set_drone"]) * 0.01 + 20;
    },
    "radius_%": function () {
        return nanToZero(bonuses["mine_radius_%_skill"]);
    }
};

stats["hp"] = {
    "hp": function () {
        return this["hp_base"]() * (1 + this["hp_%"]() * 0.01);
    },
    "hp_base": function () {
        return nanToZero(bonuses["hp_ship"]) + nanToZero(bonuses["hp_skill"]);
    },
    "hp_%": function () {
        let hpBoost = nanToZero(bonuses["hp_%_boost"]) + nanToZero(bonuses["hp_%_laser_ship"]) + nanToZero(bonuses["hp_%_laser_drone"]);
        let hpSpartan = nanToZero(bonuses["hp_%_spartan_drone"]) + nanToZero(bonuses["hp_%_spartan_set_drone"]);
        return ((((nanToZero(bonuses["hp_%_ship"]) + nanToZero(bonuses["hp_%_formation"]) + nanToZero(bonuses["hp_%_module"]) + nanToZero(bonuses["hp_%_infection"]) + nanToZero(bonuses["hp_%_hermes_drone"]))
            * (1 + hpBoost * 0.01) + hpBoost)
            * (1 + nanToZero(bonuses["hp_%_hercules_set_drone"]) * 0.01) + nanToZero(bonuses["hp_%_hercules_set_drone"]))
            * (1 + hpSpartan * 0.01) + hpSpartan);
    },
    "repair": function () {
        return (this["hp"]() / (90 - 90 * nanToZero(bonuses["rep_%_skill"]) * 0.01))
            * (1 + nanToZero(bonuses["rep_%_boost"]) * 0.01)
            * (1 + nanToZero(bonuses["rep_%_premium"]) * 0.01);
    },
};

stats["speed"] = {
    "speed": function () {
        return this["speed_base"]() * (1 + this["speed_%"]() * 0.01);
    },
    "speed_base": function () {
        return nanToZero(bonuses["speed_ship"]) + nanToZero(bonuses["speed_generator_ship"]);
    },
    "speed_%": function () {
        return (nanToZero(bonuses["speed_%_module"]) + nanToZero(bonuses["speed_%_formation"]) + nanToZero(bonuses["speed_%_infection"]))
            * (1 + nanToZero(bonuses["speed_%_ore"]) * 0.01) + nanToZero(bonuses["speed_%_ore"]);
    }
};

stats["shield"] = {
    "amount": function () {
        return nanToZero(bonuses["amount_shield_ship"]) + nanToZero(bonuses["amount_shield_drone"]);
    },
    "shield": function () {
        return this["shield_base"]() * (1 + this["shield_%"]() * 0.01);
    },
    "shield_base": function () {
        return nanToZero(bonuses["shield_shield_ship"]) + nanToZero(bonuses["shield_shield_drone"]);
    },
    "shield_%": function () {
        return ((((nanToZero(bonuses["shield_%_ship"]) + nanToZero(bonuses["shield_%_formation"]) + nanToZero(bonuses["shield_%_module"]))
            * (1 + nanToZero(bonuses["shield_%_boost"]) * 0.01) + nanToZero(bonuses["shield_%_boost"]))
            * (1 + nanToZero(bonuses["shield_%_ore"]) * 0.01) + nanToZero(bonuses["shield_%_ore"]))
            * (1 + nanToZero(bonuses["shield_%_spartan_set_drone"]) * 0.01) + nanToZero(bonuses["shield_%_spartan_set_drone"]))
            * (1 + nanToZero(bonuses["shield_%_skill"]) * 0.01) + nanToZero(bonuses["shield_%_skill"]);
    },
    "absorption_%": function () {
        return nanToZero(bonuses["shield_absorption_%_formation"])
            + (nanToZero((nanToZero(bonuses["shield_absorption_%_shield_ship"]) + nanToZero(bonuses["shield_absorption_%_shield_drone"])) / this["amount"]()))
            + nanToZero(bonuses["shield_absorption_%_skill"]);
    },
    "regeneration": function () {
        return this["shield"]()
            * (this["regeneration_%"]() * 0.01)
            + this["regeneration_diamond"]();
    },
    "regeneration_%": function () {
        return 4 * (1 + nanToZero(bonuses["shield_regeneration_%_boost"]) * 0.01)
            * (1 + (nanToZero(bonuses["shield_regeneration_%_shield_ship"]) + nanToZero(bonuses["shield_regeneration_%_shield_drone"])) * 0.01)
            + nanToZero(bonuses["shield_regeneration_dome_%_formation"]);      //it can be different
    },
    "regeneration_diamond": function () {
        return (this["shield"]() > 500000 ? 500000 : this["shield"]())
            * nanToZero(bonuses["shield_regeneration_diamond_%_formation"]) * 0.01;
    },
    "penetration_%": function () {
        return nanToZero(bonuses["shield_penetration_%_ship"]) + nanToZero(bonuses["shield_penetration_%_formation"]);
    }
};

stats["cargo"] = {
    "cargo": function () {
        return this["cargo_base"]()
            * (1 + this["cargo_%"]() * 0.01);
    },
    "cargo_base": function () {
        return nanToZero(bonuses["cargo_ship"]) + nanToZero(bonuses["cargo_premium"]);
    },
    "cargo_%": function () {
        return nanToZero(bonuses["cargo_%_skill"]);
    },
    "cargo_box_%": function () {
        return nanToZero(bonuses["res_%_boost"])
            * (1 + nanToZero(bonuses["res_%_skill"]) * 0.01);
    }
};

stats["other"] = {
    "experience_%": function () {
        return ((nanToZero(bonuses["experience_%_ship"])
            * (1 + nanToZero(bonuses["experience_%_boost"]) * 0.01) + nanToZero(bonuses["experience_%_boost"]))
            * (1 + nanToZero(bonuses["experience_%_module"]) * 0.01) + nanToZero(bonuses["experience_%_module"]))
            * (1 + nanToZero(bonuses["experience_%_formation"]) * 0.01) + nanToZero(bonuses["experience_%_formation"]);
    },
    "experience_PVE_%": function () {
        return this["experience_%"]()
            * (1 + nanToZero(bonuses["experience_%_PVE_skill"]) * 0.01) + nanToZero(bonuses["experience_%_PVE_skill"]);
    },
    "honor_%": function () {
        return (((nanToZero(bonuses["honor_%_ship"])
            * (1 + nanToZero(bonuses["honor_%_boost"]) * 0.01) + nanToZero(bonuses["honor_%_boost"]))
            * (1 + nanToZero(bonuses["honor_%_module"]) * 0.01) + nanToZero(bonuses["honor_%_module"]))
            * (1 + nanToZero(bonuses["honor_%_formation"]) * 0.01) + nanToZero(bonuses["honor_%_formation"]))
            * (1 + nanToZero(bonuses["honor_%_skill"]) * 0.01) + nanToZero(bonuses["honor_%_skill"]);
    },
    "evasion_%": function () {
        return nanToZero(bonuses["evasion_%_ship"])
            + nanToZero(bonuses["evasion_%_module"])
            + nanToZero(bonuses["evasion_%_formation"])
            + nanToZero(bonuses["evasion_%_skill"]);
    },
    "cooldown_%": function () {
        return nanToZero(bonuses["cd_%_boost"]) + nanToZero(bonuses["cd_%_hermes_set_drone"]);
    },
    "bonus_box_%": function () {
        return nanToZero(bonuses["bonus_box_%_skill"]);
    },
    "bonus_box_uridium_%": function () {
        return nanToZero(bonuses["bonus_box_uridium_%_skill"]);
    },
    "credits_%": function () {
        return nanToZero(bonuses["credits_%_skill"]);
    }
};