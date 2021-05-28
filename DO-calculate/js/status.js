const status = (function () {
    let bonuses = {};
    let ship = "";
    let shipBase = "";
    let shipLasers = [];
    let shipGenerators = [];
    let drones = [];
    let booster = [];
    let module = [];

    function init(b) {
        for(let i = 0; i < b.length; i++) {
            bonuses[b[i]] = 0;
        }
    }

    function getBonuses() {
        return bonuses;
    }

    function setShip(sBase, s) {
        shipBase = sBase;
        ship = s;
        for (let bonus in ships[shipBase][ship].bonuses) {
            bonuses[bonus] = ships[shipBase][ship].bonuses[bonus];
        }
    }

    function getShip() {
        return ship;
    }

    function getShipBase() {
        return shipBase;
    }

    function setLaser(slot, name) {
        shipLasers[slot] = setItem(shipLasers[slot], name, 0, [lasers], "ship");
    }

    function setLaserUpgrade(slot, upgrade) {
        shipLasers[slot] = setItem(shipLasers[slot], "", upgrade, [lasers], "ship");
    }

    function setGenerator(slot, name) {
        shipGenerators[slot] = setItem(shipGenerators[slot], name, 0, [shields, generators], "ship");
    }

    function setGeneratorUpgrade(slot, upgrade) {
        shipGenerators[slot] = setItem(shipGenerators[slot], "", upgrade, [shields, generators], "ship");
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
        resetBonuses("boost");
        addBonusesFromItems(boosters, booster);
    }

    function setModules(names) {
        module = names;
        resetBonuses("module");
        addBonusesFromItems(modules, module);
    }

    function addBonusesFromItems(items, itemsNameToAdd) {
        for(let itemType in items) {
            for(let name of itemsNameToAdd) {
                let item = items[itemType][name];
                if(item != null) {
                    addBonuses(item,1, "");
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
            for(let i = 0; i < config.numberOfDroneItems; i++) {
                items[i] = setItem(null, "", 0, [], "");
            }
        }
        return {design: d, level: l, upgrade: u, items: items}
    }

    function calculateDroneBonuses() {
        resetBonuses("drone");
        let designSum = [];
        let droneCount = 0;

        for(let drone of drones) {
            let hercules = 0;
            let isActive = false;
            if(drone.design !== "") {
                designSum[drone.design] = designSum[drone.design] ? designSum[drone.design] + 1 : 1;
                if (drone.design === "HERCULES") {
                    hercules = droneDesigns["HERCULES"]["bonuses"]["shield_%_hercules_drone"];
                }
                isActive = true;
            }

            for(let item of drone.items) {
                let itemValue = findItem(item.name, [lasers]);
                if(itemValue != null) {
                    let multi = multiplyPercentages(
                        [item.upgrade, drone.level, drone.upgrade],
                        [itemValue.upgradePercentValue, config.droneLevelPercentValueLaser, config.droneUpgradePercentValueLaser]
                    );
                    multi = 1 + multi * 0.01;
                    bonuses["amount_laser_drone"]++;
                    addBonuses(itemValue, multi, "drone");
                    isActive = true;
                } else {
                    itemValue = findItem(item.name, [shields]);
                    if(itemValue != null) {
                        let multi = multiplyPercentages(
                            [item.upgrade, drone.level, drone.upgrade],
                            [itemValue.upgradePercentValue, config.droneLevelPercentValueShield, config.droneUpgradePercentValueShield]
                        );
                        multi = 1 + (multi * (1 + hercules * 0.01) + hercules) * 0.01;
                        bonuses["amount_shield_drone"]++;
                        addBonuses(itemValue, multi, "drone");
                        isActive = true;
                    }
                }
            }
            if(isActive) droneCount++;
        }
        setDroneDesignBonuses(designSum, droneCount);
    }

    function setDroneDesignBonuses(selectedDroneDesigns, numberActiveDrones) {
        for (let design in selectedDroneDesigns) {
            let designBonuses = droneDesigns[design].bonuses;
            for (let bonus in designBonuses) {
                if (bonus.search("set") > 0) {
                    if (selectedDroneDesigns[design] === numberActiveDrones) {
                        bonuses[bonus] += designBonuses[bonus];
                    }
                } else {
                    bonuses[bonus] += designBonuses[bonus] * selectedDroneDesigns[design];
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
            subBonuses(item, multi, source);
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
            addBonuses(item, multi, source);
        }
        console.log(bonuses);       //TODO
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

    function subBonuses(item, multi, source) {
        for(let bonus in item.bonuses) {
            let bonusName = bonus + "_" + source;
            bonuses[bonusName] = bonuses[bonusName] - item.bonuses[bonus]
                * (bonus.search("%") > 0 ? 1 : multi);
        }
    }

    function addBonuses(item, multi, source) {
        for(let bonus in item.bonuses) {
            let bonusName = bonus;
            if(source !== "") {
                bonusName = bonusName + "_" + source
            }
            bonuses[bonusName] = bonuses[bonusName] + item.bonuses[bonus]
                * (bonus.search("%") > 0 ? 1 : multi);
        }
    }

    function resetBonuses(item) {
        for (let bonus in bonuses)  {
            bonuses[bonus] = bonus.search(item) > 0 ? 0 : bonuses[bonus];
        }
    }

    function getLaser(slot) {
        return shipLasers[slot];
    }

    function getGenerator(slot) {
        return shipGenerators[slot];
    }

    return {
        init: init,
        getBonuses: getBonuses,
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
        findItem: findItem
    };
})();

// let status = {
//     ship: "",
//     shipBase: "",
//     lasers: [
//          // {
//          //     name: "",
//          //     upgrade: 0
//          // }
//     ],
//     generators: [
//         {
//             name: "",
//             upgrade: 0
//         }
//     ],
//     drones: [
//         {
//             design: "",
//             level: 0,
//             upgrade: 0,
//             items: [
//                 {
//                     name: "",
//                     upgrade: 0
//                 }
//             ]
//         }
//     ],
//     boosters: [
//         "", ""
//     ],
//     modules: [
//         "", ""
//     ],
//     droneFormation: [
//         "", ""
//     ],
//     ores: [
//         ""
//     ],
//     other: [
//         "", ""
//     ],
//     skillTree: [
//         {
//             name: "",
//             points: 0
//         }
//     ]
//
// };