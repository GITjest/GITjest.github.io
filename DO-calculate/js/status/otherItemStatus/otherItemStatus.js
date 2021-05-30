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
        bonuses.addBonuses(data.getDroneFormation(formation).bonuses);
    }

    function setLaserOre(oreName) {
        laserOre = oreName;
        bonuses.addBonus("damage_%_ore", data.getOre(laserOre).laser);
    }

    function setRocketOre(oreName) {
        rocketOre = oreName;
        bonuses.addBonus("damage_rocket_%_ore", data.getOre(rocketOre).rocket);
    }

    function setGeneratorOre(oreName) {
        generatorOre = oreName;
        bonuses.addBonus("speed_%_ore", data.getOre(generatorOre).generator);
    }

    function setShieldOre(oreName) {
        shieldOre = oreName;
        bonuses.addBonus("shield_%_ore", data.getOre(shieldOre).shield);
    }

    function setInfection(isInfected) {
        infection = isInfected;
        bonuses.resetBonuses("infection");
        if(infection) {
            bonuses.addBonus("damage_%_infection", 10);
            bonuses.addBonus("hp_%_infection", -15);
            bonuses.addBonus("speed_%_infection", -10);     //TODO add data
        }
    }

    function setPremium(hasPremium) {
        premium = hasPremium;
        bonuses.resetBonuses("premium");
        if(premium) {
            bonuses.addBonus("rocket_reload_time_%_premium", -50);
            bonuses.addBonus("rep_%_premium", 100);
            bonuses.addBonus("cargo_premium", 500);     //TODO add data
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