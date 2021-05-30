const shipStatus = (function (){
    let ship = "";
    let shipBase = "";
    let shipLasers = [];
    let shipGenerators = [];

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
        shipLasers[slot] = item.setItem(shipLasers[slot], name, 0, [data.getLasers()], "ship");
        bonuses.setBonus("amount_laser_ship", item.countItems(shipLasers, data.getLasers()));
    }

    function setLaserUpgrade(slot, upgrade) {
        shipLasers[slot] = item.setItem(shipLasers[slot], "", upgrade, [data.getLasers()], "ship");
    }

    function setGenerator(slot, name) {
        shipGenerators[slot] = item.setItem(shipGenerators[slot], name, 0, [data.getShields(), data.getGenerators()], "ship");
        bonuses.setBonus("amount_shield_ship", item.countItems(shipGenerators, data.getShields()));
        bonuses.setBonus("amount_generator_ship", item.countItems(shipGenerators, data.getGenerators()));
    }

    function setGeneratorUpgrade(slot, upgrade) {
        shipGenerators[slot] = item.setItem(shipGenerators[slot], "", upgrade, [data.getShields(), data.getGenerators()], "ship");
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
        getGenerator: getGenerator
    }
})();