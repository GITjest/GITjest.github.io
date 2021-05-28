const modulesGenerator = (function () {

    function create(ship) {
        let options = [];
        for(let module in modules) {
            options.push(selectGenerator.createItemOptionGroup(shipModules(ship.modules)[module], module));
        }
        let select = selectGenerator.createSelect(options, "modules", "Modules", modulesOnchangeEvent);
        select.attr({
            "class": "selectpicker",
            "data-max-options": ship.modulesSlot,
            "data-max-options-text": "This ship can have max " + ship.modulesSlot + " modules",
            "multiple": "multiple"
        });
        select.val([]);
        return select;
    }

    function modulesOnchangeEvent() {
        selectGenerator.setLimitSelectedItem(this,1);
        status.setModules($(this).val());
    }

    function shipModules(shipModuleNames) {
        let shipModules = [];
        for (let type in modules) {
            for (let module in modules[type]) {
                for (let i = 0; i < shipModuleNames.length; i++) {
                    if (module === shipModuleNames[i]) {
                        shipModules[type] = shipModules[type] ? shipModules[type] : [];
                        shipModules[type][module] = modules[type][module];
                    }
                }
            }
        }
        return shipModules;
    }

    return {
        create: create
    }
})();