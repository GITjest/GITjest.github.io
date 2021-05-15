const status = (function () {
    let bonuses = {};
    let ship = "";
    let shipBase = "";
    let shipLasers = [];

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
        shipLasers[slot] = setItem(shipLasers[slot], name, 0, lasers, "ship");
    }

    function setLaserUpgrade(slot, upgrade) {
        shipLasers[slot] = setItem(shipLasers[slot], "", upgrade, lasers, "ship");
    }

    function setItem(slot, name, upgrade, items, source) {
        if(slot != null && slot.name !== "") {
            let item = items[slot.name];
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
            addBonuses(items[name], upgrade, source);
        }
        return {name: name, upgrade: upgrade};
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

    return {
        init: init,
        getBonuses: getBonuses,
        setShip: setShip,
        getShip: getShip,
        getShipBase: getShipBase,
        setLaser: setLaser,
        setLaserUpgrade: setLaserUpgrade,
        getLaser: getLaser
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