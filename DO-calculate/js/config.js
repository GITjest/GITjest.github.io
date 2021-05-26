const config = (function () {
    const defaultMaxUpgradeLevelItem = 20;
    const numberOfDrones = 10;
    const numberOfDroneItems = 2;
    const defaultMaxDroneLevel = 6;
    const defaultMaxDroneUpgrade = 16;
    const droneUpgradePercentValueLaser = 0.5;
    const droneUpgradePercentValueShield = 1;
    const droneLevelPercentValueLaser = 2;
    const droneLevelPercentValueShield = 4;

    return {
        defaultMaxUpgradeLevelItem: defaultMaxUpgradeLevelItem,
        numberOfDrones: numberOfDrones,
        numberOfDroneItems: numberOfDroneItems,
        defaultMaxDroneLevel: defaultMaxDroneLevel,
        defaultMaxDroneUpgrade: defaultMaxDroneUpgrade,
        droneUpgradePercentValueLaser: droneUpgradePercentValueLaser,
        droneUpgradePercentValueShield: droneUpgradePercentValueShield,
        droneLevelPercentValueLaser: droneLevelPercentValueLaser,
        droneLevelPercentValueShield: droneLevelPercentValueShield
    }
})();