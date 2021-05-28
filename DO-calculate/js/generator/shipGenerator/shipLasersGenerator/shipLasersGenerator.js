const shipLasersGenerator = (function () {
    const laserOptions = selectGenerator.createItemOptionGroup(lasers, "Lasers");
    const itemUpgradeOptions = selectGenerator.createNumberOptions(config.defaultMaxUpgradeLevelItem);

    function create(numberOfLasers) {
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
    }

    function extractSlotNumber(id) {
        return id.slice(id.lastIndexOf("-") + 1);
    }

    return {
        create: create,
        createSetterForAllItems: createSetterForAllItems
    }
})();