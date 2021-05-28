const shipGeneratorsGenerator = (function () {
    const shieldOptions = selectGenerator.createItemOptionGroup(shields, "Shields");
    const generatorOptions = selectGenerator.createItemOptionGroup(generators, "Generators");
    const itemUpgradeOptions = selectGenerator.createNumberOptions(config.defaultMaxUpgradeLevelItem);

    function create(numberOfGenerators) {
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
    }

    function extractSlotNumber(id) {
        return id.slice(id.lastIndexOf("-") + 1);
    }

    return {
        create: create,
        createSetterForAllItems: createSetterForAllItems
    }
})();