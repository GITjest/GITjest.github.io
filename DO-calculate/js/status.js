const status = (function () {
    let bonuses = {};
    let ship = "";
    let shipBase = "";
    let shipLasers = [];
    let shipGenerators = [];

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

    function setItem(slot, name, upgrade, items, source) {
        if(slot != null && slot.name !== "") {
            let item = findItem(slot.name, items);
            let up = slot.upgrade;
            subBonuses(item, up, source);
        }
        if(upgrade > 0) {
            if(slot != null) {
                name = slot.name;
            }
        } else {
            upgrade = 1;
        }
        if(name !== "") {
            addBonuses(findItem(name, items), upgrade, source);
        }git
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

    function subBonuses(item, upgrade, source) {
        let multi = 1 + upgrade * item.upgradePercentValue - item.upgradePercentValue;
        for(let bonus in item.bonuses) {
            let bonusName = bonus + "_" + source;
            bonuses[bonusName] = bonuses[bonusName] - item.bonuses[bonus]
                * (bonus.search("%") > 0 ? 1 : multi);
        }
    }

    function addBonuses(item, upgrade, source) {
        let multi = 1 + upgrade * item.upgradePercentValue - item.upgradePercentValue;
        for(let bonus in item.bonuses) {
            let bonusName = bonus + "_" + source;
            bonuses[bonusName] = bonuses[bonusName] + item.bonuses[bonus]
                * (bonus.search("%") > 0 ? 1 : multi);
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