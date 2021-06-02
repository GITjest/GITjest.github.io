const statisticsGenerator = (function () {

    function damagePVE() {
        let PVEBase = damagePVEBase();
        let PVEPercent = damagePVEPercent();
        return {
            min: PVEBase.min * (1 + PVEPercent * 0.01),
            max: PVEBase.max * (1 + PVEPercent * 0.01)
        };
    }

    function damagePVEBase() {
        let damage = bonuses.getBonus("damage_PVE_laser_ship")
            + (bonuses.getBonus("damage_PVE_laser_drone")
                * (1 + bonuses.getBonus("damage_%_havoc_set_drone") * 0.01));
        return {
            min: damage - damage * fluctuating() * 0.01,
            max: damage
        };
    }

    function damagePVEPercent() {
        return (((((bonuses.getBonus("damage_%_ship")
            + bonuses.getBonus("damage_%_formation")
            + bonuses.getBonus("damage_PVE_%_formation")
            + bonuses.getBonus("damage_%_module")
            + bonuses.getBonus("damage_PVE_%_module")
            + bonuses.getBonus("damage_%_infection"))
            * (1 + bonuses.getBonus("damage_%_boost") * 0.01) + bonuses.getBonus("damage_%_boost"))
            * (1 + bonuses.getBonus("damage_%_ore") * 0.01) + bonuses.getBonus("damage_%_ore"))
            * (1 + bonuses.getBonus("damage_%_spartan_drone") * 0.01) + bonuses.getBonus("damage_%_spartan_drone"))
            * (1 + bonuses.getBonus("damage_%_hermes_drone") * 0.01) + bonuses.getBonus("damage_%_hermes_drone"))
            * (1 + bonuses.getBonus("damage_PVE_%_skill") * 0.01) + bonuses.getBonus("damage_PVE_%_skill");
    }

    function damagePVP() {
        let PVPBase = damagePVPBase();
        let PVPPercent = damagePVPPercent();
        return {
            min: PVPBase.min * (1 + PVPPercent * 0.01),
            max: PVPBase.max * (1 + PVPPercent * 0.01)
        };
    }

    function damagePVPBase() {
        let damage = bonuses.getBonus("damage_PVP_laser_ship")
            + (bonuses.getBonus("damage_PVP_laser_drone")
                * (1 + bonuses.getBonus("damage_%_havoc_set_drone") * 0.01));
        return {
            min: damage - damage * fluctuating() * 0.01,
            max: damage
        };
    }

    function damagePVPPercent() {
        return (((((bonuses.getBonus("damage_PVP_%_ship")
            + bonuses.getBonus("damage_%_ship")
            + bonuses.getBonus("damage_%_formation")
            + bonuses.getBonus("damage_PVP_%_formation")
            + bonuses.getBonus("damage_%_module")
            + bonuses.getBonus("damage_PVP_%_module")
            + bonuses.getBonus("damage_%_infection"))
            * (1 + bonuses.getBonus("damage_%_boost") * 0.01) + bonuses.getBonus("damage_%_boost"))
            * (1 + bonuses.getBonus("damage_%_ore") * 0.01) + bonuses.getBonus("damage_%_ore"))
            * (1 + bonuses.getBonus("damage_%_spartan_drone") * 0.01) + bonuses.getBonus("damage_%_spartan_drone"))
            * (1 + bonuses.getBonus("damage_%_hermes_drone") * 0.01) + bonuses.getBonus("damage_%_hermes_drone"))
            * (1 + bonuses.getBonus("damage_PVP_%_skill") * 0.01) + bonuses.getBonus("damage_PVP_%_skill");
    }

    function damagePVEBonus() {
        let damage = (bonuses.getBonus("damage_bonus_laser_ship")
            + (bonuses.getBonus("damage_bonus_laser_drone")
                * (1 + bonuses.getBonus("damage_%_havoc_set_drone") * 0.01)))
            * (1 + damagePVEPercent() * 0.01);
        return {
            min: damage - damage * fluctuating() * 0.01,
            max: damage
        };
    }

    function damagePVPBonus() {
        let damage = (bonuses.getBonus("damage_bonus_laser_ship")
            + (bonuses.getBonus("damage_bonus_laser_drone")
                * (1 + bonuses.getBonus("damage_%_havoc_set_drone") * 0.01)))
            * (1 + damagePVPPercent() * 0.01);
        return {
            min: damage - damage * fluctuating() * 0.01,
            max: damage
        };
    }

    function damageBL() {
        let damage = (bonuses.getBonus("damage_BL_laser_ship") + damagePVEBase().max
            + (bonuses.getBonus("damage_BL_laser_drone")
                * (1 + bonuses.getBonus("damage_%_havoc_set_drone") * 0.01)))
            * (1 + damagePVEPercent() * 0.01);
        return {
            min: damage - damage * fluctuating() * 0.01,
            max: damage
        };
    }

    function damageAI() {
        let damage = (bonuses.getBonus("damage_IA_laser_ship") + damagePVEBase().max
            + (bonuses.getBonus("damage_IA_laser_drone")
                * (1 + bonuses.getBonus("damage_%_havoc_set_drone") * 0.01)))
            * (1 + damagePVEPercent() * 0.01);
        return {
            min: damage - damage * fluctuating() * 0.01,
            max: damage
        };
    }

    function laserAmount() {
        return bonuses.getBonus("amount_laser_ship")
            + bonuses.getBonus("amount_laser_drone");
    }

    function fluctuating() {
        let amount = laserAmount();
        return (bonuses.getBonus("fluctuating_%_laser_ship")
            + bonuses.getBonus("fluctuating_%_laser_drone"))
            / (amount > 1 ? amount : 1);
    }

    function accuracy() {
        return data.getConfigData("baseAccuracy")
            + bonuses.getBonus("accuracy_%_ship")
            + bonuses.getBonus("accuracy_laser_%_module")
            + bonuses.getBonus("accuracy_laser_%_skill");
    }

    function hp() {
        return hpBase() * (1 + hpPercent() * 0.01);
    }

    function hpBase() {
        return bonuses.getBonus("hp_ship") + bonuses.getBonus("hp_skill");
    }

    function hpPercent() {
        let hpBoost = bonuses.getBonus("hp_%_boost")
            + bonuses.getBonus("hp_%_laser_ship")
            + bonuses.getBonus("hp_%_laser_drone");
        let hpSpartan = bonuses.getBonus("hp_%_spartan_drone")
            + bonuses.getBonus("hp_%_spartan_set_drone");
        return ((((bonuses.getBonus("hp_%_ship")
            + bonuses.getBonus("hp_%_formation")
            + bonuses.getBonus("hp_%_module")
            + bonuses.getBonus("hp_%_infection")
            + bonuses.getBonus("hp_%_hermes_drone"))
            * (1 + hpBoost * 0.01) + hpBoost)
            * (1 + bonuses.getBonus("hp_%_hercules_set_drone") * 0.01) + bonuses.getBonus("hp_%_hercules_set_drone"))
            * (1 + hpSpartan * 0.01) + hpSpartan);
    }

    function repair() {
        let robotTime = data.getConfigData("repairRobotTime");
        return (hp() / (robotTime - robotTime * bonuses.getBonus("rep_%_skill") * 0.01))
            * (1 + bonuses.getBonus("rep_%_boost") * 0.01)
            * (1 + bonuses.getBonus("rep_%_premium") * 0.01);
    }

    function shieldAmount() {
        return bonuses.getBonus("amount_shield_ship")
            + bonuses.getBonus("amount_shield_drone");
    }

    function shield() {
        return shieldBase() * (1 + shieldPercent() * 0.01);
    }

    function shieldBase() {
        return bonuses.getBonus("shield_shield_ship")
            + bonuses.getBonus("shield_shield_drone");
    }

    function shieldPercent() {
        return ((((bonuses.getBonus("shield_%_ship")
            + bonuses.getBonus("shield_%_formation")
            + bonuses.getBonus("shield_%_module"))
            * (1 + bonuses.getBonus("shield_%_boost") * 0.01) + bonuses.getBonus("shield_%_boost"))
            * (1 + bonuses.getBonus("shield_%_ore") * 0.01) + bonuses.getBonus("shield_%_ore"))
            * (1 + bonuses.getBonus("shield_%_spartan_set_drone") * 0.01) + bonuses.getBonus("shield_%_spartan_set_drone"))
            * (1 + bonuses.getBonus("shield_%_skill") * 0.01) + bonuses.getBonus("shield_%_skill");
    }

    function absorption() {
        let amount = shieldAmount();
        return bonuses.getBonus("shield_absorption_%_formation")
            + ((bonuses.getBonus("shield_absorption_%_shield_ship")
                + bonuses.getBonus("shield_absorption_%_shield_drone"))
                / (amount > 1 ? amount : 1))
            + bonuses.getBonus("shield_absorption_%_skill");
    }

    function regeneration() {
        return shield()
            * (regenerationPercent() * 0.01)
            + regenerationDiamond();
    }

    function regenerationPercent() {
        return data.getConfigData("baseShieldRegeneration")
            * (1 + bonuses.getBonus("shield_regeneration_%_boost") * 0.01)
            * (1 + (bonuses.getBonus("shield_regeneration_%_shield_ship") + bonuses.getBonus("shield_regeneration_%_shield_drone")) * 0.01)
            + bonuses.getBonus("shield_regeneration_dome_%_formation");      //TODO it can be different
    }

    function regenerationDiamond() {
        let s = shield();
        let maxDiamond = data.getConfigData("maxDiamondShield");
        return (s > maxDiamond ? maxDiamond : s)
            * bonuses.getBonus("shield_regeneration_diamond_%_formation") * 0.01;
    }

    function penetration() {
        return bonuses.getBonus("shield_penetration_%_ship")
            + bonuses.getBonus("shield_penetration_%_formation");
    }

    function speed() {
        return speedBase() * (1 + speedPercent() * 0.01);
    }

    function speedBase() {
        return bonuses.getBonus("speed_ship")
            + bonuses.getBonus("speed_generator_ship");
    }

    function speedPercent() {
        return (bonuses.getBonus("speed_%_module")
            + bonuses.getBonus("speed_%_formation")
            + bonuses.getBonus("speed_%_infection"))
            * (1 + bonuses.getBonus("speed_%_ore") * 0.01) + bonuses.getBonus("speed_%_ore");
    }

    function generatorAmount() {
        return bonuses.getBonus("amount_generator_ship");
    }

    function rocketDamage() {
        return rocketDamageBase() * (1 + rocketDamagePercent() * 0.01);
    }

    function rocketDamageBase() {
        return 0;
    }

    function rocketDamagePercent() {
        return (((bonuses.getBonus("damage_rocket_%_ship")
            + bonuses.getBonus("damage_rocket_%_formation")
            + bonuses.getBonus("damage_rocket_%_module"))
            * (1 + bonuses.getBonus("damage_rocket_%_ore") * 0.01) + bonuses.getBonus("damage_rocket_%_ore"))
            * (1 + bonuses.getBonus("damage_rocket_%_demon_drone") * 0.01) + bonuses.getBonus("damage_rocket_%_demon_drone"))
            * (1 + bonuses.getBonus("damage_rocket_%_skill") * 0.01) + bonuses.getBonus("damage_rocket_%_skill");
    }

    function rocketAccuracy() {
        return bonuses.getBonus("accuracy_rocket_%_module")
            + bonuses.getBonus("accuracy_rocket_%_skill");
    }

    function rocketReloadTime() {
        let val = data.getConfigData("baseRocketReload") * bonuses.getBonus("rocket_reload_time_%_formation") * 0.01 + 4;
        val = val * bonuses.getBonus("rocket_reload_time_%_premium") * 0.01 + val;
        val = val * bonuses.getBonus("rocket_reload_time_%_demon_set_drone") * 0.01 + val;
        val = val * bonuses.getBonus("rocket_reload_time_%_hermes_set_drone") * 0.01 + val;
        return val;
    }

    function rocketLauncherReloadTime() {
        let val = data.getConfigData("baseRocketLauncherReload")
            * bonuses.getBonus("launcher_reload_time_%_formation") * 0.01
            + data.getConfigData("baseRocketLauncherReload");
        val = val * bonuses.getBonus("launcher_reload_time_%_hermes_set_drone") * 0.01 + val;
        return val;
    }

    function mineDamagePercent() {
        return bonuses.getBonus("damage_mine_%_formation")
            * (1 + bonuses.getBonus("damage_mine_%_skill") * 0.01) + bonuses.getBonus("damage_mine_%_skill");
    }

    function mineReloadTime() {
        return data.getConfigData("baseMineReloadTime")
            * bonuses.getBonus("mine_reload_time_%_hermes_set_drone") * 0.01
            + data.getConfigData("baseMineReloadTime");
    }

    function mineRadius() {
        return bonuses.getBonus("mine_radius_%_skill");
    }

    function cargo() {
        return cargoBase()
            * (1 + cargoPercent() * 0.01);
    }

    function cargoBase() {
        return bonuses.getBonus("cargo_ship")
            + bonuses.getBonus("cargo_premium");
    }

    function cargoPercent() {
        return bonuses.getBonus("cargo_%_skill");
    }

    function cargoBoxPercent() {
        return bonuses.getBonus("res_%_boost")
            * (1 + bonuses.getBonus("res_%_skill") * 0.01);
    }

    function experiencePercent() {
        return ((bonuses.getBonus("experience_%_ship")
            * (1 + bonuses.getBonus("experience_%_boost") * 0.01) + bonuses.getBonus("experience_%_boost"))
            * (1 + bonuses.getBonus("experience_%_module") * 0.01) + bonuses.getBonus("experience_%_module"))
            * (1 + bonuses.getBonus("experience_%_formation") * 0.01) + bonuses.getBonus("experience_%_formation");
    }

    function experiencePercentPVE() {
        return experiencePercent()
            * (1 + bonuses.getBonus("experience_%_PVE_skill") * 0.01) + bonuses.getBonus("experience_%_PVE_skill");
    }

    function honorPercent() {
        return (((bonuses.getBonus("honor_%_ship")
            * (1 + bonuses.getBonus("honor_%_boost") * 0.01) + bonuses.getBonus("honor_%_boost"))
            * (1 + bonuses.getBonus("honor_%_module") * 0.01) + bonuses.getBonus("honor_%_module"))
            * (1 + bonuses.getBonus("honor_%_formation") * 0.01) + bonuses.getBonus("honor_%_formation"))
            * (1 + bonuses.getBonus("honor_%_skill") * 0.01) + bonuses.getBonus("honor_%_skill");
    }

    function evasion() {
        return bonuses.getBonus("evasion_%_ship")
            + bonuses.getBonus("evasion_%_module")
            + bonuses.getBonus("evasion_%_formation")
            + bonuses.getBonus("evasion_%_skill");
    }

    function cooldownPercent() {
        return bonuses.getBonus("cd_%_boost") + bonuses.getBonus("cd_%_hermes_set_drone");
    }

    function bonusBoxPercent() {
        return bonuses.getBonus("bonus_box_%_skill");
    }

    function bonusBoxUriudiumPercent() {
        return bonuses.getBonus("bonus_box_uridium_%_skill");
    }

    function creditsPercent() {
        return bonuses.getBonus("credits_%_skill");
    }

    function refresh() {
        let PVE = damagePVE();
        let PVEBase = damagePVEBase();
        let PVP = damagePVP();
        let PVPBase = damagePVPBase();
        let PVEBonus = damagePVEBonus();
        let PVPBonus = damagePVPBonus();
        let BL = damageBL();
        let AI = damageAI();

        $("#damage-PVE").text(
            PVE.min.toFixed(0) + "(" + (PVE.min + PVEBonus.min).toFixed(0) + ") - "
            + PVE.max.toFixed(0) + "(" + (PVE.max + PVEBonus.max).toFixed(0) + ")"
        );

        $("#damage-PVP").text(
            PVP.min.toFixed(0) + "(" + (PVP.min + PVPBonus.min).toFixed(0) + ") - "
            + PVP.max.toFixed(0) + "(" + (PVP.max + PVPBonus.max).toFixed(0) + ")"
        );

        $(".damage-PVE").text(PVE.min.toFixed(0) + " - " + PVE.max.toFixed(0));
        $(".damage-PVE-base").text(PVEBase.min.toFixed(0) + " - " + PVEBase.max.toFixed(0));
        $(".damage-PVE-percent").text(damagePVEPercent().toFixed(2) + "%");

        $(".damage-PVP").text(PVP.min.toFixed(0) + " - " + PVP.max.toFixed(0));
        $(".damage-PVP-base").text(PVPBase.min.toFixed(0) + " - " + PVPBase.max.toFixed(0));
        $(".damage-PVP-percent").text(damagePVPPercent().toFixed(2) + "%");

        $(".damage-bonus-PVE").text(PVEBonus.min.toFixed(0) + " - " + PVEBonus.max.toFixed(0));
        $(".damage-bonus-PVP").text(PVPBonus.min.toFixed(0) + " - " + PVPBonus.max.toFixed(0));
        $(".damage-BL").text(BL.min.toFixed(0) + " - " + BL.max.toFixed(0));
        $(".damage-AI").text(AI.min.toFixed(0) + " - " + AI.max.toFixed(0));

        $(".fluctuating").text(fluctuating().toFixed(0) + "%");
        $(".accuracy").text(accuracy().toFixed(0) + "%");
        $(".laser-amount").text(laserAmount().toFixed(0));

        $(".hp").text(hp().toFixed(0));
        $(".hp-base").text(hpBase().toFixed(0));
        $(".hp-percent").text(hpPercent().toFixed(2) + "%");
        $(".repair").text(repair().toFixed(0));

        $(".shield").text(shield().toFixed(0));
        $(".shield-base").text(shieldBase().toFixed(0));
        $(".shield-percent").text(shieldPercent().toFixed(2) + "%");
        $(".absorption").text(absorption().toFixed(0) + "%");
        $(".regeneration").text(regeneration().toFixed(0));
        $(".regeneration-percent").text(regenerationPercent().toFixed(0) + "%");
        $(".regeneration-diamond").text(regenerationDiamond().toFixed(0));
        $(".penetration").text(penetration().toFixed(0) + "%");
        $(".shield-amount").text(shieldAmount().toFixed(0));

        $(".speed").text(speed().toFixed(0));
        $(".speed-base").text(speedBase().toFixed(0));
        $(".speed-percent").text(speedPercent().toFixed(2) + "%");
        $(".generator-amount").text(generatorAmount().toFixed(0));

        $(".rocket-damage").text(rocketDamage().toFixed(0));
        $(".rocket-damage-base").text(rocketDamageBase().toFixed(0));
        $(".rocket-damage-percent").text(rocketDamagePercent().toFixed(2) + "%");
        $(".rocket-accuracy").text(rocketAccuracy().toFixed(0) + "%");
        $(".rocket-reload-time").text(rocketReloadTime().toFixed(2) + "s");
        $(".rocket-launcher-reload-time").text(rocketLauncherReloadTime().toFixed(2) + "s");

        $(".mine-damage").text(mineDamagePercent().toFixed(2) + "%");
        $(".mine-reload-time").text(mineReloadTime().toFixed(2) + "s");
        $(".mine-radius").text(mineRadius().toFixed(0) + "%");

        $(".cargo").text(cargo().toFixed(0));
        $(".cargo-base").text(cargoBase().toFixed(0));
        $(".cargo-percent").text(cargoPercent().toFixed(2) + "%");
        $(".cargo-box").text(cargoBoxPercent().toFixed(2) + "%");

        $(".experience").text(experiencePercent().toFixed(0) + "%");
        $(".experience-PVE").text(experiencePercentPVE().toFixed(0) + "%");
        $(".honor").text(honorPercent().toFixed(0) + "%");
        $(".evasion").text(evasion().toFixed(0) + "%");
        $(".cooldown").text(cooldownPercent().toFixed(0) + "%");
        $(".bonus-box").text(bonusBoxPercent().toFixed(0) + "%");
        $(".bonus-box-uridium").text(bonusBoxUriudiumPercent().toFixed(0) + "%");
        $(".credits").text(creditsPercent().toFixed(0) + "%");
    }

    return {
        refresh: refresh
    }
})();