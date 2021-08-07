const dronesStatus = (function () {
    let drones = [];

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
        drones[slot].items[droneSlot] = item.setItem(drones[slot].items[droneSlot], itemName, itemUpgrade, [], "");
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
                items[i] = item.setItem(null, "", 0, [], "");
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

                for(let i of drone.items) {
                    let itemValue = item.findItem(i.name, [data.getLasers()]);
                    if(itemValue != null) {
                        let multi = multiplyPercentages(
                            [i.upgrade, drone.level, drone.upgrade],
                            [itemValue.upgradePercentValue, data.getConfigData("droneLevelPercentValueLaser"), data.getConfigData("droneUpgradePercentValueLaser")]
                        );
                        multi = 1 + multi * 0.01;
                        bonuses.addBonus("amount_laser_drone", 1);
                        bonuses.addBonusesMultiValue(itemValue.bonuses, multi, "drone");
                        isActive = true;
                    } else {
                        itemValue = item.findItem(i.name, [data.getShields()]);
                        if(itemValue != null) {
                            let multi = multiplyPercentages(
                                [i.upgrade, drone.level, drone.upgrade],
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

    function getStatus() {
        return drones;
    }

    return {
        setDroneDesign: setDroneDesign,
        setDroneLevel: setDroneLevel,
        setDroneUpgrade: setDroneUpgrade,
        setDroneItem: setDroneItem,
        setDroneItemUpgrade: setDroneItemUpgrade,
        isDroneActive: isDroneActive,
        getStatus: getStatus
    }
})();