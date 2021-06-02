const otherItemStatus = (function () {
    let booster = [];
    let module = [];
    let formation = "";
    let laserOre = "";
    let rocketOre = "";
    let generatorOre = "";
    let shieldOre = "";
    let infection = false;
    let premium = false;

    function setBoosters(names) {
        booster = names;
        bonuses.resetBonuses("boost");
        item.addBonusesFromItems(data.getBoosters(), booster);
    }

    function setModules(names) {
        module = names;
        bonuses.resetBonuses("module");
        item.addBonusesFromItems(data.getModules(), module);
    }

    function setDroneFormation(name) {
        formation = name;
        bonuses.resetBonuses("formation");
        if(name !== "") {
            bonuses.addBonuses(data.getDroneFormation(formation).bonuses);
        }
    }

    function setLaserOre(oreName) {
        laserOre = oreName;
        if(oreName !== "") {
            bonuses.addBonus("damage_%_ore", data.getOre(laserOre).laser);
        } else {
            bonuses.setBonus("damage_%_ore", 0);
        }
    }

    function setRocketOre(oreName) {
        rocketOre = oreName;
        if(oreName !== "") {
            bonuses.addBonus("damage_rocket_%_ore", data.getOre(rocketOre).rocket);
        } else {
            bonuses.setBonus("damage_rocket_%_ore", 0);
        }

    }

    function setGeneratorOre(oreName) {
        generatorOre = oreName;
        if(oreName !== "") {
            bonuses.addBonus("speed_%_ore", data.getOre(generatorOre).generator);
        } else {
            bonuses.setBonus("speed_%_ore", 0);
        }
    }

    function setShieldOre(oreName) {
        shieldOre = oreName;
        if(oreName !== "") {
            bonuses.addBonus("shield_%_ore", data.getOre(shieldOre).shield);
        } else {
            bonuses.setBonus("shield_%_ore", 0);
        }
    }

    function setInfection(isInfected) {
        infection = isInfected;
        bonuses.resetBonuses("infection");
        if(infection) {
            bonuses.addBonuses(data.getOther("infection").bonuses);
        }
    }

    function setPremium(hasPremium) {
        premium = hasPremium;
        bonuses.resetBonuses("premium");
        if(premium) {
            bonuses.addBonuses(data.getOther("premium").bonuses);
        }
    }

    return {
        setBoosters: setBoosters,
        setModules: setModules,
        setDroneFormation: setDroneFormation,
        setLaserOre: setLaserOre,
        setRocketOre: setRocketOre,
        setGeneratorOre: setGeneratorOre,
        setShieldOre: setShieldOre,
        setInfection: setInfection,
        setPremium: setPremium
    }
})();