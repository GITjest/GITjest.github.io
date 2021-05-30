const fieldGenerator = (function () {

    function updateItemField(id, itemName) {
        let maxUpgrade = data.getConfigData("defaultMaxUpgradeLevelItem");
        if(itemName !== "") {
            maxUpgrade = item.findItem(itemName, [data.getLasers(), data.getShields(), data.getGenerators()]).maxUpgrade;
        }
        setFieldStatus("field-" + id, (itemName !== ""));
        selectGenerator.updateItemUpgradeSelect(id, maxUpgrade);
    }

    function setFieldStatus(id, active) {
        $("#" + id).css("border", active ? "2px solid green" : "2px solid grey");
    }

    function setAllValues() {
        let id = 0;
        while (document.getElementById(this.id.replace("id", id)) != null) {
            $("#" + this.id.replace("id", id)).selectpicker('val', this.value);
            id++;
        }
    }

    function setAllUpgradeValues() {
        let id = 0;
        while (document.getElementById(this.id.replace("id", id)) != null) {
            let container = $("#" + this.id.replace("id", id));
            let maxUpgrade = container.children().length - 1;
            container.selectpicker('val', this.value > maxUpgrade ? maxUpgrade : this.value);
            id++;
        }
    }

    function generateItemField(itemOptions, itemUpgradeOptions, id, title, itemOnChangeEvent, upgradeOnChangeEvent) {
        itemOptions = `<option value=""></option>` + itemOptions;
        let itemSelect = selectGenerator.createSelect(itemOptions, id, title, itemOnChangeEvent);
        let upgradeSelect = selectGenerator.createSelect(itemUpgradeOptions, "upgrade-" + id, title + " upgrade", upgradeOnChangeEvent);
        return createItemField("field-" + id, itemSelect, upgradeSelect);
    }

    function createItemField(containerId, itemSelect, upgradeSelect) {
        return $("<div>", {"class": "item-field", "id": containerId})
            .append(itemSelect)
            .append($("<div>", {"class": "item-upgrade"})
                .append(upgradeSelect));
    }

    function createDroneField(id, droneDesignSelect, itemsField, droneLevelSelect, droneUpgradeSelect) {
        return $("<div>", {"class": "drone", "id": "field-drone-" + id})
            .append($("<div>", {"class": "drone-design"})
                .append(droneDesignSelect))
            .append(itemsField)
            .append($("<div>", {"class": "block"})
                .append($("<div>", {"class": "drone-lvl"})
                    .append(droneLevelSelect)
                ).append($("<div>", {"class": "drone-lvl"})
                    .append(droneUpgradeSelect)
                )
            );
    }

    return {
        updateItemField: updateItemField,
        setFieldStatus: setFieldStatus,
        setAllValues: setAllValues,
        setAllUpgradeValues: setAllUpgradeValues,
        generateItemField: generateItemField,
        createItemField: createItemField,
        createDroneField: createDroneField
    }
})();