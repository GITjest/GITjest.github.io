const status = (function () {

    return {
        setShip: shipStatus.setShip,
        getShip: shipStatus.getShip,
        getShipBase: shipStatus.getShipBase,
        setLaser: shipStatus.setLaser,
        setLaserUpgrade: shipStatus.setLaserUpgrade,
        getLaser: shipStatus.getLaser,
        setGenerator: shipStatus.setGenerator,
        setGeneratorUpgrade: shipStatus.setGeneratorUpgrade,
        getGenerator: shipStatus.getGenerator,
        setDroneDesign: dronesStatus.setDroneDesign,
        setDroneLevel: dronesStatus.setDroneLevel,
        setDroneUpgrade: dronesStatus.setDroneUpgrade,
        setDroneItem: dronesStatus.setDroneItem,
        setDroneItemUpgrade: dronesStatus.setDroneItemUpgrade,
        isDroneActive: dronesStatus.isDroneActive,
        setBoosters: otherItemStatus.setBoosters,
        setModules: otherItemStatus.setModules,
        setDroneFormation:otherItemStatus.setDroneFormation,
        setLaserOre: otherItemStatus.setLaserOre,
        setRocketOre: otherItemStatus.setRocketOre,
        setGeneratorOre: otherItemStatus.setGeneratorOre,
        setShieldOre: otherItemStatus.setShieldOre,
        setInfection: otherItemStatus.setInfection,
        setPremium: otherItemStatus.setPremium
    }
})();

//     skillTree: [
//         {
//             name: "",
//             points: 0
//         }
//     ]
//
// };