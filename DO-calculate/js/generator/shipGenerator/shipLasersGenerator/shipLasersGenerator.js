const shipLasersGenerator = (function () {

    function create(numberOfLasers) {
        const laserOptions = selectGenerator.createItemOptionGroup(data.getLasers(), "Lasers");
        const itemUpgradeOptions = selectGenerator.createNumberOptions(data.getConfigData("defaultMaxUpgradeLevelItem"));
        let fields = [];
        for(let i = 0; i < numberOfLasers; i++) {
            fields.push(fieldGenerator.generateItemField(
                laserOptions,
                itemUpgradeOptions,
                "ship-laser-" + i,
                "Laser",
                laserOnChangeEvent,
                updateOnChangeEvent
            ));
        }
        return fields;
    }

    function createSetterForAllItems() {
        const laserOptions = selectGenerator.createItemOptionGroup(data.getLasers(), "Lasers");
        const itemUpgradeOptions = selectGenerator.createNumberOptions(data.getConfigData("defaultMaxUpgradeLevelItem"));
        return fieldGenerator.generateItemField(
            laserOptions,
            itemUpgradeOptions,
            "ship-laser-id",
            "Laser",
            fieldGenerator.setAllValues,
            fieldGenerator.setAllUpgradeValues
        )
    }

    function laserOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id);
        let itemName = this.value;
        status.setLaser(slotNumber, itemName);
        fieldGenerator.updateItemField(id, itemName);
    }

    function updateOnChangeEvent() {
        let slotNumber = extractSlotNumber(this.id);
        status.setLaserUpgrade(slotNumber, this.value);
        statisticsGenerator.refresh();
    }

    function extractSlotNumber(id) {
        return id.slice(id.lastIndexOf("-") + 1);
    }

    return {
        create: create,
        createSetterForAllItems: createSetterForAllItems
    }
})();