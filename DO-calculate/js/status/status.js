const status = (function () {
    let ship = "";
    let shipBase = "";
    let shipLasers = [];
    let shipGenerators = [];
    let drones = [];
    let booster = [];
    let module = [];
    let formation = "";
    let laserOre = "";
    let rocketOre = "";
    let generatorOre = "";
    let shieldOre = "";
    let infection = false;
    let premium = false;

    function setShip(sBase, s) {
        shipBase = sBase;
        ship = s;
        bonuses.addBonuses(data.getShip(shipBase, ship).bonuses);
    }

    function getShip() {
        return ship;
    }

    function getShipBase() {
        return shipBase;
    }

    function setLaser(slot, name) {
        shipLasers[slot] = setItem(shipLasers[slot], name, 0, [data.getLasers()], "ship");
        bonuses.setBonus("amount_laser_ship", countItems(shipLasers, data.getLasers()));
    }

    function setLaserUpgrade(slot, upgrade) {
        shipLasers[slot] = setItem(shipLasers[slot], "", upgrade, [data.getLasers()], "ship");
    }

    function setGenerator(slot, name) {
        shipGenerators[slot] = setItem(shipGenerators[slot], name, 0, [data.getShields(), data.getGenerators()], "ship");
        bonuses.setBonus("amount_shield_ship", countItems(shipGenerators, data.getShields()));
        bonuses.setBonus("amount_generator_ship", countItems(shipGenerators, data.getGenerators()));
    }

    function countItems(itemsToCount, items) {
        let count = 0;
        for(let item of itemsToCount) {
            if(item != null) {
                let i = items[item.name];
                if(i != null) count++;
            }
        }
        return count;
    }

    function setGeneratorUpgrade(slot, upgrade) {
        shipGenerators[slot] = setItem(shipGenerators[slot], "", upgrade, [data.getShields(), data.getGenerators()], "ship");
    }

    function setDroneDesign(slot, design) {
        drones[slot] = setDrone(drones[slot], design, 0, 0);
        calculateDroneBonuses();
    }

    function setDroneLevel(slot, level) {
        drones[slot] = setDrone(drones[slot], "", level, 0);
        calculateDroneBonuses();
    }

    function setDroneUpgrade(slot, upgrade) {
        drones[slot] = setDrone(drones[slot], "", 0, upgrade);
        calculateDroneBonuses();
    }

    function setDroneItem(slot, droneSlot, itemName) {
        setDroneItemSlot(slot, droneSlot, itemName, 0);
        calculateDroneBonuses();
    }

    function setDroneItemUpgrade(slot, droneSlot, itemUpgrade) {
        setDroneItemSlot(slot, droneSlot, "", itemUpgrade);
        calculateDroneBonuses();
    }

    function setDroneItemSlot(slot, droneSlot, itemName, itemUpgrade) {
        if(drones[slot] == null) drones[slot] = setDrone(null, "", 0, 0);
        drones[slot].items[droneSlot] = setItem(drones[slot].items[droneSlot], itemName, itemUpgrade, [], "");
    }

    function setBoosters(names) {
        booster = names;
        bonuses.resetBonuses("boost");
        addBonusesFromItems(data.getBoosters(), booster);
    }

    function setModules(names) {
        module = names;
        bonuses.resetBonuses("module");
        addBonusesFromItems(data.getModules(), module);
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

    function addBonusesFromItems(items, itemsNameToAdd) {
        for(let itemType in items) {
            for(let name of itemsNameToAdd) {
                let item = items[itemType][name];
                if(item != null) {
                    bonuses.addBonuses(item.bonuses);
                }
            }
        }
    }

    function setDrone(slot, design, level, upgrade) {
        let d = "";
        let l = 1;
        let u = 1;
        let items = [];

        if(slot != null) {
            if(design !== "") d = design;
            else {
                if(level > 0 || upgrade > 0) d = slot.design;
            }
            if(level > 0) l = level;
            else l = slot.level;
            if(upgrade > 0) u = upgrade;
            else u = slot.upgrade;
            items = slot.items;
        } else {
            if(design !== "") d = design;
            if(level > 0) l = level;
            if(upgrade > 0) u = upgrade;
            for(let i = 0; i < data.getConfigData("numberOfDroneItems"); i++) {
                items[i] = setItem(null, "", 0, [], "");
            }
        }
        return {design: d, level: l, upgrade: u, items: items}
    }

    function calculateDroneBonuses() {
        bonuses.resetBonuses("drone");
        let designSum = [];
        let droneCount = 0;

        for(let drone of drones) {
            if(drone != null) {
                let hercules = 0;
                let isActive = false;
                if(drone.design !== "") {
                    designSum[drone.design] = designSum[drone.design] ? designSum[drone.design] + 1 : 1;
                    if (drone.design === "HERCULES") {
                        hercules = data.getDroneDesign("HERCULES")["bonuses"]["shield_%_hercules_drone"];
                    }
                    isActive = true;
                }

                for(let item of drone.items) {
                    let itemValue = findItem(item.name, [data.getLasers()]);
                    if(itemValue != null) {
                        let multi = multiplyPercentages(
                            [item.upgrade, drone.level, drone.upgrade],
                            [itemValue.upgradePercentValue, data.getConfigData("droneLevelPercentValueLaser"), data.getConfigData("droneUpgradePercentValueLaser")]
                        );
                        multi = 1 + multi * 0.01;
                        bonuses.addBonus("amount_laser_drone", 1);
                        bonuses.addBonusesMultiValue(itemValue.bonuses, multi, "drone");
                        isActive = true;
                    } else {
                        itemValue = findItem(item.name, [data.getShields()]);
                        if(itemValue != null) {
                            let multi = multiplyPercentages(
                                [item.upgrade, drone.level, drone.upgrade],
                                [itemValue.upgradePercentValue, data.getConfigData("droneLevelPercentValueShield"), data.getConfigData("droneUpgradePercentValueShield")]
                            );
                            multi = 1 + (multi * (1 + hercules * 0.01) + hercules) * 0.01;
                            bonuses.addBonus("amount_shield_drone", 1);
                            bonuses.addBonusesMultiValue(itemValue.bonuses, multi, "drone");
                            isActive = true;
                        }
                    }
                }
                if(isActive) droneCount++;
            }
        }
        setDroneDesignBonuses(designSum, droneCount);
    }

    function setDroneDesignBonuses(selectedDroneDesigns, numberActiveDrones) {
        for (let design in selectedDroneDesigns) {
            let designBonuses = data.getDroneDesign(design).bonuses;
            for (let bonus in designBonuses) {
                if (bonus.search("set") > 0) {
                    if (selectedDroneDesigns[design] === numberActiveDrones) {
                        bonuses.addBonus(bonus, designBonuses[bonus]);
                    }
                } else {
                    bonuses.addBonus(bonus, (designBonuses[bonus] * selectedDroneDesigns[design]));
                }
            }
        }
    }

    function multiplyPercentages(values, percentages) {
        if(values.length !== percentages.length && values.length > 0) return 1;
        let multi = values[0] * (percentages[0] * 100) - (percentages[0] * 100);
        for (let i = 1; i < values.length; i++) {
            multi = multi * (1 + values[i] * (percentages[i] * 0.01) - (percentages[i] * 0.01))
                + (values[i] * percentages[i] - percentages[i]);
        }
        return multi;
    }

    function isDroneActive(slot) {
        let drone = drones[slot];
        if(drone != null) {
            if(drone.design !== "") return true;
            for(let item of drone.items) {
                if(item.name !== "") return true;
            }
        }
        return false;
    }

    function setItem(slot, name, upgrade, items, source) {
        if(slot != null && slot.name !== "" && source !== "") {
            let item = findItem(slot.name, items);
            let multi = 1 + slot.upgrade * item.upgradePercentValue - item.upgradePercentValue;
            bonuses.subBonusesMultiValue(item.bonuses, multi, source);
        }
        if(upgrade > 0) {
            if(slot != null) {
                name = slot.name;
            }
        } else {
            upgrade = 1;
        }
        if(name !== "" && source !== "") {
            let item = findItem(name, items);
            let multi = 1 + upgrade * item.upgradePercentValue - item.upgradePercentValue;
            bonuses.addBonusesMultiValue(item.bonuses, multi, source);
        }
        return {name: name, upgrade: upgrade};
    }

    function findItem(itemNameToFind, items) {
        for(let i of items) {
            let item = i[itemNameToFind];
            if(item != null) {
                return item;
            }
        }
        return null;
    }

    function getLaser(slot) {
        return shipLasers[slot];
    }

    function getGenerator(slot) {
        return shipGenerators[slot];
    }

    return {
        setShip: setShip,
        getShip: getShip,
        getShipBase: getShipBase,
        setLaser: setLaser,
        setLaserUpgrade: setLaserUpgrade,
        getLaser: getLaser,
        setGenerator: setGenerator,
        setGeneratorUpgrade: setGeneratorUpgrade,
        getGenerator: getGenerator,
        setDroneDesign: setDroneDesign,
        setDroneLevel: setDroneLevel,
        setDroneUpgrade: setDroneUpgrade,
        setDroneItem: setDroneItem,
        setDroneItemUpgrade: setDroneItemUpgrade,
        isDroneActive: isDroneActive,
        setBoosters: setBoosters,
        setModules: setModules,
        setDroneFormation: setDroneFormation,
        setLaserOre: setLaserOre,
        setRocketOre: setRocketOre,
        setGeneratorOre: setGeneratorOre,
        setShieldOre: setShieldOre,
        setInfection: setInfection,
        setPremium: setPremium,
        findItem: findItem
    };
})();

//     skillTree: [
//         {
//             name: "",
//             points: 0
//         }
//     ]
//
// };