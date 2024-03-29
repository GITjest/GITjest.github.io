const shipGeneratorsGenerator = (function () {

    function create(numberOfGenerators) {
        const shieldOptions = selectGenerator.createItemOptionGroup(data.getShields(), "Shields");
        const generatorOptions = selectGenerator.createItemOptionGroup(data.getGenerators(), "Generators");
        const itemUpgradeOptions = selectGenerator.createNumberOptions(data.getConfigData("defaultMaxUpgradeLevelItem"));
        let fields = [];
        for(let i = 0; i < numberOfGenerators; i++) {
            fields.push(fieldGenerator.generateItemField(
                [shieldOptions, generatorOptions],
                itemUpgradeOptions,
                "ship-generator-" + i,
                "Generator",
                generatorOnChangeEvent,
                updateOnChangeEvent
            ));
        }
        return fields;
    }

    function createSetterForAllItems() {
        const shieldOptions = selectGenerator.createItemOptionGroup(data.getShields(), "Shields");
        const generatorOptions = selectGenerator.createItemOptionGroup(data.getGenerators(), "Generators");
        const itemUpgradeOptions = selectGenerator.createNumberOptions(data.getConfigData("defaultMaxUpgradeLevelItem"));
        return fieldGenerator.generateItemField(
            [shieldOptions, generatorOptions],
            itemUpgradeOptions,
            "ship-generator-id",
            "Generator",
            fieldGenerator.setAllValues,
            fieldGenerator.setAllUpgradeValues
        )
    }

    function generatorOnChangeEvent() {
        let id = this.id;
        let slotNumber = extractSlotNumber(id);
        let itemName = this.value;
        status.setGenerator(slotNumber, itemName);
        fieldGenerator.updateItemField(id, itemName);
    }

    function updateOnChangeEvent() {
        let slotNumber = extractSlotNumber(this.id);
        status.setGeneratorUpgrade(slotNumber, this.value);
        statisticsGenerator.refresh();
    }

    function extractSlotNumber(id) {
        return id.slice(id.lastIndexOf("-") + 1);
    }

    function setData(data) {
        for(let i = 0; i < data.length; i++) {
            $("#ship-generator-" + i).selectpicker('val', data[i]?.name);
            $("#upgrade-ship-generator-" + i).selectpicker('val', data[i]?.upgrade);
        }
    }

    return {
        create: create,
        createSetterForAllItems: createSetterForAllItems,
        setData: setData
    }
})();