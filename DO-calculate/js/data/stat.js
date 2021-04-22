const stats = [];

stats["laser"] = {
    "amount": function () {
        return bonuses["amount_laser_ship"] + bonuses["amount_laser_drone"];
    },
    "PVE": function () {
        return [this["PVE_base"]()[0] * (1 + this["PVE_%"]() * 0.01),
            this["PVE_base"]()[1] * (1 + this["PVE_%"]() * 0.01)];
    },
    "PVE_base": function () {
        let damage = bonuses["damage_PVE_laser_ship"]
            + (bonuses["damage_PVE_laser_drone"] * (1 + bonuses["damage_%_havoc_set_drone"] * 0.01));
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "PVE_%": function () {
        return (((((bonuses["damage_%_ship"] + bonuses["damage_%_formation"] + bonuses["damage_PVE_%_formation"]
            + bonuses["damage_%_module"] + bonuses["damage_PVE_%_module"] + bonuses["damage_%_infection"])
            * (1 + bonuses["damage_%_boost"] * 0.01) + bonuses["damage_%_boost"])
            * (1 + bonuses["damage_%_ore"] * 0.01) + bonuses["damage_%_ore"])
            * (1 + bonuses["damage_%_spartan_drone"] * 0.01) + bonuses["damage_%_spartan_drone"])
            * (1 + bonuses["damage_%_hermes_drone"] * 0.01) + bonuses["damage_%_hermes_drone"])
            * (1 + bonuses["damage_PVE_%_skill"] * 0.01) + bonuses["damage_PVE_%_skill"];
    },
    "PVP": function () {
        return [this["PVP_base"]()[0] * (1 + this["PVP_%"]() * 0.01),
            this["PVP_base"]()[1] * (1 + this["PVP_%"]() * 0.01)];
    },
    "PVP_base": function () {
        let damage = bonuses["damage_PVP_laser_ship"]
            + (bonuses["damage_PVP_laser_drone"] * (1 + bonuses["damage_%_havoc_set_drone"]) * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "PVP_%": function () {
        return (((((bonuses["damage_PVP_%_ship"] + bonuses["damage_%_ship"] + bonuses["damage_%_formation"] + bonuses["damage_PVP_%_formation"]
            + bonuses["damage_%_module"] + bonuses["damage_PVP_%_module"] + bonuses["damage_%_infection"])
            * (1 + bonuses["damage_%_boost"] * 0.01) + bonuses["damage_%_boost"])
            * (1 + bonuses["damage_%_ore"] * 0.01) + bonuses["damage_%_ore"])
            * (1 + bonuses["damage_%_spartan_drone"] * 0.01) + bonuses["damage_%_spartan_drone"])
            * (1 + bonuses["damage_%_hermes_drone"] * 0.01) + bonuses["damage_%_hermes_drone"])
            * (1 + bonuses["damage_PVP_%_skill"] * 0.01) + bonuses["damage_PVP_%_skill"];
    },
    "bonus_PVE": function () {
        let damage = (bonuses["damage_bonus_laser_ship"]
            + (bonuses["damage_bonus_laser_drone"] * (1 + bonuses["damage_%_havoc_set_drone"] * 0.01)))
            * (1 + this["PVE_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "bonus_PVP": function () {
        let damage = (bonuses["damage_bonus_laser_ship"]
            + (bonuses["damage_bonus_laser_drone"] * (1 + bonuses["damage_%_havoc_set_drone"]) * 0.01))
            * (1 + this["PVP_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "BL": function () {
        let damage = (bonuses["damage_BL_laser_ship"] + this["PVE_base"]()[1]
            + (bonuses["damage_BL_laser_drone"] * (1 + bonuses["damage_%_havoc_set_drone"] * 0.01)))
            * (1 + this["PVE_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "AI": function () {
        let damage = (bonuses["damage_IA_laser_ship"] + this["PVE_base"]()[1]
            + (bonuses["damage_IA_laser_drone"] * (1 + bonuses["damage_%_havoc_set_drone"] * 0.01)))
            * (1 + this["PVE_%"]() * 0.01);
        return [damage - damage * this["fluctuating_%"]() * 0.01, damage];
    },
    "fluctuating_%": function () {
        return (bonuses["fluctuating_%_laser_ship"] + bonuses["fluctuating_%_laser_drone"]) / this["amount"]();
    },
    "accuracy_%": function () {
        return 75 + bonuses["accuracy_%_ship"] + bonuses["accuracy_laser_%_module"] + bonuses["accuracy_laser_%_skill"];
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
        return (((bonuses["damage_rocket_%_ship"] + bonuses["damage_rocket_%_formation"] + bonuses["damage_rocket_%_module"])
            * (1 + bonuses["damage_rocket_%_ore"] * 0.01) + bonuses["damage_rocket_%_ore"])
            * (1 + bonuses["damage_rocket_%_demon_drone"] * 0.01) + bonuses["damage_rocket_%_demon_drone"])
            * (1 + bonuses["damage_rocket_%_skill"] * 0.01) + bonuses["damage_rocket_%_skill"];
    },
    "accuracy_%": function () {
        return bonuses["accuracy_rocket_%_module"] + bonuses["accuracy_rocket_%_skill"];
    },
    "reload_time": function () {
        let val = 4 * bonuses["rocket_reload_time_%_formation"] * 0.01 + 4;
        val = val * bonuses["rocket_reload_time_%_premium"] * 0.01 + val;
        val = val * bonuses["rocket_reload_time_%_demon_set_drone"] * 0.01 + val;
        val = val * bonuses["rocket_reload_time_%_hermes_set_drone"] * 0.01 + val;
        return val;
    },
    "launcher_reload_time": function () {
        let val = 5 * bonuses["launcher_reload_time_%_formation"] * 0.01 + 5;
        val = val * bonuses["launcher_reload_time_%_hermes_set_drone"] * 0.01 + val;
        return val;
    }
};

stats["mine"] = {
    "damage_%": function () {
        return bonuses["damage_mine_%_formation"]
            * (1 + bonuses["damage_mine_%_skill"] * 0.01) + bonuses["damage_mine_%_skill"];
    },
    "reload_time": function () {
        return 20 * bonuses["mine_reload_time_%_hermes_set_drone"] * 0.01 + 20;
    },
    "radius_%": function () {
        return bonuses["mine_radius_%_skill"];
    }
};

stats["hp"] = {
    "hp": function () {
        return this["hp_base"]() * (1 + this["hp_%"]() * 0.01);
    },
    "hp_base": function () {
        return bonuses["hp_ship"] + bonuses["hp_skill"];
    },
    "hp_%": function () {
        let hpBoost = bonuses["hp_%_boost"] + bonuses["hp_%_laser_ship"] + bonuses["hp_%_laser_drone"];
        let hpSpartan = bonuses["hp_%_spartan_drone"] + bonuses["hp_%_spartan_set_drone"];
        return ((((bonuses["hp_%_ship"] + bonuses["hp_%_formation"] + bonuses["hp_%_module"] + bonuses["hp_%_infection"] + bonuses["hp_%_hermes_drone"])
            * (1 + hpBoost * 0.01) + hpBoost)
            * (1 + bonuses["hp_%_hercules_set_drone"] * 0.01) + bonuses["hp_%_hercules_set_drone"])
            * (1 + hpSpartan * 0.01) + hpSpartan);
    },
    "repair": function () {
        return (this["hp"]() / (90 - 90 * bonuses["rep_%_skill"] * 0.01))
            * (1 + bonuses["rep_%_boost"] * 0.01)
            * (1 + bonuses["rep_%_premium"] * 0.01);
    },
};

stats["speed"] = {
    "speed": function () {
        return this["speed_base"]() * (1 + this["speed_%"]() * 0.01);
    },
    "speed_base": function () {
        return bonuses["speed_ship"] + bonuses["speed_generator_ship"];
    },
    "speed_%": function () {
        return (bonuses["speed_%_module"] + bonuses["speed_%_formation"] + bonuses["speed_%_infection"])
            * (1 + bonuses["speed_%_ore"] * 0.01) + bonuses["speed_%_ore"];
    }
};

stats["shield"] = {
    "amount": function () {
        return bonuses["amount_shield_ship"] + bonuses["amount_shield_drone"];
    },
    "shield": function () {
        return this["shield_base"]() * (1 + this["shield_%"]() * 0.01);
    },
    "shield_base": function () {
        return bonuses["shield_shield_ship"] + bonuses["shield_shield_drone"];
    },
    "shield_%": function () {
        return ((((bonuses["shield_%_ship"] + bonuses["shield_%_formation"] + bonuses["shield_%_module"])
            * (1 + bonuses["shield_%_boost"] * 0.01) + bonuses["shield_%_boost"])
            * (1 + bonuses["shield_%_ore"] * 0.01) + bonuses["shield_%_ore"])
            * (1 + bonuses["shield_%_spartan_set_drone"] * 0.01) + bonuses["shield_%_spartan_set_drone"])
            * (1 + bonuses["shield_%_skill"] * 0.01) + bonuses["shield_%_skill"];
    },
    "absorption_%": function () {
        return bonuses["shield_absorption_%_formation"]
            + ((bonuses["shield_absorption_%_shield_ship"] + bonuses["shield_absorption_%_shield_drone"]) / this["amount"]())
            + bonuses["shield_absorption_%_skill"];
    },
    "regeneration": function () {
        return this["shield"]()
            * (this["regeneration_%"]() * 0.01)
            + this["regeneration_diamond"]();
    },
    "regeneration_%": function () {
        return 4 * (1 + bonuses["shield_regeneration_%_boost"] * 0.01)
            * (1 + (bonuses["shield_regeneration_%_shield_ship"] + bonuses["shield_regeneration_%_shield_drone"]) * 0.01)
            + bonuses["shield_regeneration_dome_%_formation"];      //it can be different
    },
    "regeneration_diamond": function () {
        return (this["shield"]() > 500000 ? 500000 : this["shield"]())
            * bonuses["shield_regeneration_diamond_%_formation"] * 0.01;
    },
    "penetration_%": function () {
        return bonuses["shield_penetration_%_ship"] + bonuses["shield_penetration_%_formation"];
    }
};

stats["cargo"] = {
    "cargo": function () {
        return this["cargo_base"]()
            * (1 + this["cargo_%"]() * 0.01);
    },
    "cargo_base": function () {
        return bonuses["cargo_ship"] + bonuses["cargo_premium"];
    },
    "cargo_%": function () {
        return bonuses["cargo_%_skill"];
    },
    "cargo_box_%": function () {
        return bonuses["res_%_boost"]
            * (1 + bonuses["res_%_skill"] * 0.01);
    }
};

stats["other"] = {
    "experience_%": function () {
        return ((bonuses["experience_%_ship"]
            * (1 + bonuses["experience_%_boost"] * 0.01) + bonuses["experience_%_boost"])
            * (1 + bonuses["experience_%_module"] * 0.01) + bonuses["experience_%_module"])
            * (1 + bonuses["experience_%_formation"] * 0.01) + bonuses["experience_%_formation"];
    },
    "experience_PVE_%": function () {
        return this["experience_%"]()
            * (1 + bonuses["experience_%_PVE_skill"] * 0.01) + bonuses["experience_%_PVE_skill"];
    },
    "honor_%": function () {
        return (((bonuses["honor_%_ship"]
            * (1 + bonuses["honor_%_boost"] * 0.01) + bonuses["honor_%_boost"])
            * (1 + bonuses["honor_%_module"] * 0.01) + bonuses["honor_%_module"])
            * (1 + bonuses["honor_%_formation"] * 0.01) + bonuses["honor_%_formation"])
            * (1 + bonuses["honor_%_skill"] * 0.01) + bonuses["honor_%_skill"];
    },
    "evasion_%": function () {
        return bonuses["evasion_%_ship"]
            + bonuses["evasion_%_module"]
            + bonuses["evasion_%_formation"]
            + bonuses["evasion_%_skill"];
    },
    "cooldown_%": function () {
        return bonuses["cd_%_boost"] + bonuses["cd_%_hermes_set_drone"];
    },
    "bonus_box_%": function () {
        return bonuses["bonus_box_%_skill"];
    },
    "bonus_box_uridium_%": function () {
        return bonuses["bonus_box_uridium_%_skill"];
    },
    "credits_%": function () {
        return bonuses["credits_%_skill"];
    }
};