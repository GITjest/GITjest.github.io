const dronesGenerator = (function () {

    function create(numberOfDrones) {
        let fields = [];
        for(let id = 0; id < numberOfDrones; id++) {
            fields.push(createDroneField(
                id,
                droneDesignOnChangeEvent,
                droneLevelOnChangeEvent,
                droneUpgradeOnChangeEvent,
                itemOnChangeEvent,
                itemUpgradeOnChangeEvent
            ));
        }
        return fields;
    }

    function createSetterForAllItems() {
        return createDroneField(
            "id",
            fieldGenerator.setAllValues,
            fieldGenerator.setAllUpgradeValues,
            fieldGenerator.setAllUpgradeValues,
            fieldGenerator.setAllValues,
            fieldGenerator.setAllUpgradeValues
        );
    }

    function createDroneField(id,
                              droneDesignOnChangeEvent,
                              droneLevelOnChangeEvent,
                              droneUpgradeOnChangeEvent,
                              itemOnChangeEvent,
                              itemUpgradeOnChangeEvent) {
        const laserOptions = selectGenerator.createItemOptionGroup(data.getLasers(), "Lasers");
        const shieldOptions = selectGenerator.createItemOptionGroup(data.getShields(), "Shields");
        const itemUpgradeOptions = selectGenerator.createNumberOptions(data.getConfigData("defaultMaxUpgradeLevelItem"));
        let itemsField = [];
        for(let i = 0; i < data.getConfigData("numberOfDroneItems"); i++) {
            itemsField.push(fieldGenerator.generateItemField(
                [laserOptions, shieldOptions],
                itemUpgradeOptions,
                "drone-slot-" + id + "-" + i,
                "Item",
                itemOnChangeEvent,
                itemUpgradeOnChangeEvent
            ));
        }
        return fieldGenerator.createDroneField(
            id,
            createDroneDesign(id, droneDesignOnChangeEvent),
            itemsField,
            createDroneLevel(id, droneLevelOnChangeEvent),
            createDroneUpgrade(id, droneUpgradeOnChangeEvent)
        );
    }

    function createDroneDesign(id, droneDesignOnChangeEvent) {
        return selectGenerator.createSelect(
            `<option value=""></option>` + selectGenerator.createItemOptions(data.getDroneDesigns(), ""),
            "drone-design-" + id,
            "Design",
            droneDesignOnChangeEvent
        );
    }

    function createDroneLevel(id, droneLevelOnChangeEvent) {
        return selectGenerator.createSelect(
            selectGenerator.createNumberOptions(data.getConfigData("defaultMaxDroneLevel")),
            "drone-lvl-" + id,
            "Drone level",
            droneLevelOnChangeEvent
        );
    }

    function createDroneUpgrade(id, droneUpgradeOnChangeEvent) {
        return selectGenerator.createSelect(
            selectGenerator.createNumberOptions(data.getConfigData("defaultMaxDroneUpgrade")),
            "drone-upgrade-" + id,
            "Drone upgrade",
            droneUpgradeOnChangeEvent
        );
    }

    function droneDesignOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id);
        let itemName = this.value;
        status.setDroneDesign(slotNumber, itemName);
        fieldGenerator.setFieldStatus("field-drone-" + slotNumber, status.isDroneActive(slotNumber));
    }

    function droneLevelOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id);
        let droneLevel = this.value;
        status.setDroneLevel(slotNumber, droneLevel);
    }

    function droneUpgradeOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id);
        let droneUpgrade = this.value;
        status.setDroneUpgrade(slotNumber, droneUpgrade);
    }

    function itemOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id.substring(0, id.length - 2));
        let itemSlotNumber = extractSlotNumber(id);
        let itemName = this.value;
        status.setDroneItem(slotNumber, itemSlotNumber, itemName);
        fieldGenerator.setFieldStatus("field-drone-" + slotNumber, status.isDroneActive(slotNumber));
        fieldGenerator.updateItemField(id, itemName);
    }

    function itemUpgradeOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id.substring(0, id.length - 2));
        let itemSlotNumber = extractSlotNumber(id);
        let itemUpgrade = this.value;
        status.setDroneItemUpgrade(slotNumber, itemSlotNumber, itemUpgrade);
    }

    function extractSlotNumber(id) {
        return id.slice(id.lastIndexOf("-") + 1);
    }

    return {
        create: create,
        createSetterForAllItems: createSetterForAllItems
    }

})();