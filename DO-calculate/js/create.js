const generator = (function () {
    const laserOptions = createItemOptionGroup(lasers, "Lasers");
    const shieldOptions = createItemOptionGroup(shields, "Shields");
    const generatorOptions = createItemOptionGroup(generators, "Generators");
    const itemUpgradeOptions = createNumberOptions(config.defaultMaxUpgradeLevelItem);

    function init(ship) {
        const url = new URL(window.location.href);
        if(url.searchParams.get("shipBase") === null || url.searchParams.get("ship") === null) {
            window.location.replace("index.html");
        }

        generateItemFields(
            ship.lasers,
            "laser-slots-container",
            "ship-laser",
            "Laser",
            [laserOptions],
            status.setLaser,
            status.setLaserUpgrade
        );

        generateItemFields(
            ship.generators,
            "generator-slots-container",
            "ship-generator",
            "Generator",
            [shieldOptions, generatorOptions],
            status.setGenerator,
            status.setGeneratorUpgrade
        );
        
        generateDroneFields(config.numberOfDrones, "drone-slots-container");
        generateBoostersField();
        generateModulesField();
        //
        // $("#modules").attr({
        //     "data-max-options": ship.modulesSlot,
        //     "data-max-options-text": "This ship can have max " + ship.modulesSlot + " modules"
        // });
        // for (let item in shipModules(ship.modules)) {
        //     $("#modules").append($("<optgroup>", {"label": item}).append(createOptions(shipModules(ship.modules)[item], item, "", false)));
        // }
        // $("#modules").on('change', function () {setLimit(this,1)});
        //
        //
        // $("#drone-formation").append(createOptions(formations, "", "formations", true));
        //
        // for (let ore in ores) {
        //     if (ores[ore].laser > 0)
        //         $("#ore-laser").append(createOptionOre(ores[ore].laser, ores[ore], ore));
        //     if (ores[ore].rocket > 0)
        //         $("#ore-rocket").append(createOptionOre(ores[ore].rocket, ores[ore], ore));
        //     if (ores[ore].generator > 0)
        //         $("#ore-generator").append(createOptionOre(ores[ore].generator, ores[ore], ore));
        //     if (ores[ore].shield > 0)
        //         $("#ore-shield").append(createOptionOre(ores[ore].shield, ores[ore], ore));
        // }


    }

    function generateBoostersField() {
        let bOnchangeEvent = function () {
            status.setBoosters($(this).val());
        };

        let options = [];
        for(let booster in boosters) {
            options.push(createItemOptionGroup(boosters[booster], booster));
        }
        let select = createSelect(options, "boosters", "Boosters", bOnchangeEvent);
        select.attr({
            "class": "selectpicker form",
            "data-live-search": true,
            "data-actions-box": true,
            "data-selected-text-format": "count > 3",
            "multiple": "multiple"
        });
        select.val([]);
        $("#boosters-container").append(select);
    }

    function generateModulesField() {
        let mOnchangeEvent = function () {
            setLimit(this,1);
            status.setModules($(this).val());
        };

        let options = [];
        for(let module in modules) {
            options.push(createItemOptionGroup(shipModules(ship.modules)[module], module));
        }
        let select = createSelect(options, "modules", "Modules", mOnchangeEvent);
        select.attr({
            "class": "selectpicker form",
            "data-max-options": ship.modulesSlot,
            "data-max-options-text": "This ship can have max " + ship.modulesSlot + " modules",
            "multiple": "multiple"
        });
        select.val([]);
        $("#modules-container").append(select);
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

    function setLimit(object, limit) {
        $(object).find('optgroup').each(function () {
            let count = 0;
            $(this).find('option').each(function () {
                if ($(this).prop('selected')) {
                    count++;
                    if (count > limit) {
                        $(this).attr("selected", false);
                    }
                }
            });
        });
        $(object).selectpicker('refresh');
    }

    function generateItemFields(numberOfItems, containerId, itemId, title, selectOptions, setItem, setItemUpgrade) {
        let iOnChangeEvent = function () {
            let id = this.id;
            let slotNumber = extractSlotNumber(id);
            let itemName = this.value;
            setItem(slotNumber, itemName);
            updateItemField(id, itemName);
        }

        let uOnChangeEvent = function () {
            let slotNumber = extractSlotNumber(this.id);
            setItemUpgrade(slotNumber, this.value);
        }

        for(let i = 0; i < numberOfItems; i++) {
            $("#" + containerId).append(generateItemField(selectOptions, itemId + "-" + i, title, iOnChangeEvent, uOnChangeEvent));
        }
        $("#" + containerId).append(generateItemField(selectOptions, itemId + "-id", title, setAllValues, setAllUpgradeValues));
    }
    
    function generateDroneFields(numberOfDrones, containerId) {
        let droneDesignOnChangeEvent = function () {
            let id = this.id;
            let slotNumber = extractSlotNumber(id);
            let itemName = this.value;
            status.setDroneDesign(slotNumber, itemName);
            setFieldStatus("field-drone-" + slotNumber, status.isDroneActive(slotNumber));
        };

        let droneLevelOnChangeEvent = function () {
            let id = this.id;
            let slotNumber = extractSlotNumber(id);
            let droneLevel = this.value;
            status.setDroneLevel(slotNumber, droneLevel);
        };

        let droneUpgradeOnChangeEvent = function () {
            let id = this.id;
            let slotNumber = extractSlotNumber(id);
            let droneUpgrade = this.value;
            status.setDroneUpgrade(slotNumber, droneUpgrade);
        };

        let itemOnChangeEvent = function () {
            let id = this.id;
            let slotNumber = extractSlotNumber(id.substring(0, id.length - 2));
            let itemSlotNumber = extractSlotNumber(id);
            let itemName = this.value;
            status.setDroneItem(slotNumber, itemSlotNumber, itemName);
            setFieldStatus("field-drone-" + slotNumber, status.isDroneActive(slotNumber));
            updateItemField(id, itemName);
        };

        let itemUpgradeOnChangeEvent = function () {
            let id = this.id;
            let slotNumber = extractSlotNumber(id.substring(0, id.length - 2));
            let itemSlotNumber = extractSlotNumber(id);
            let itemUpgrade = this.value;

            status.setDroneItemUpgrade(slotNumber, itemSlotNumber, itemUpgrade);
        };

        for(let i = 0; i < numberOfDrones; i++) {
            $("#" + containerId).append(generateDroneField(i, droneDesignOnChangeEvent, droneLevelOnChangeEvent, droneUpgradeOnChangeEvent, itemOnChangeEvent, itemUpgradeOnChangeEvent));
        }
        $("#" + containerId).append(generateDroneField("id", setAllValues, setAllUpgradeValues, setAllUpgradeValues, setAllValues, setAllUpgradeValues));
    }
    
    function generateDroneField(id, droneDesignOnChangeEvent, droneLevelOnChangeEvent, droneUpgradeOnChangeEvent, itemOnChangeEvent, itemUpgradeOnChangeEvent) {
        let droneDesign = createSelect(`<option value=""></option>` + createItemOptions(droneDesigns, ""), "drone-design-" + id, "Design", droneDesignOnChangeEvent);
        let droneLevel = createSelect(createNumberOptions(config.defaultMaxDroneLevel), "drone-lvl-" + id, "Drone level", droneLevelOnChangeEvent);
        let droneUpgrade = createSelect(createNumberOptions(config.defaultMaxDroneUpgrade), "drone-upgrade-" + id, "Drone upgrade", droneUpgradeOnChangeEvent);
        let itemsField = [];

        for(let i = 0; i < config.numberOfDroneItems; i++) {
            itemsField[i] = generateItemField(
                [laserOptions, shieldOptions],
                "drone-slot-" + id + "-" + i,
                "Item",
                itemOnChangeEvent,
                itemUpgradeOnChangeEvent);
        }

        return $("<div>", {"class": "drone", "id": "field-drone-" + id})
            .append($("<div>", {"class": "drone-design"})
                .append(droneDesign))
            .append(itemsField)
            .append($("<div>", {"class": "block"})
                .append($("<div>", {"class": "drone-lvl"})
                    .append(droneLevel)
                ).append($("<div>", {"class": "drone-lvl"})
                    .append(droneUpgrade)
                )
            );
    }

    function updateItemField(id, itemName) {
        let maxUpgrade = config.defaultMaxUpgradeLevelItem;
        if(itemName !== "") {
            maxUpgrade = status.findItem(itemName, [lasers, shields, generators]).maxUpgrade;
        }
        setFieldStatus("field-" + id, (itemName !== ""));
        updateItemUpgradeSelect(id, maxUpgrade);
    }

    function setFieldStatus(id, active) {
        $("#" + id).css("border", active ? "2px solid green" : "2px solid grey");
    }

    function updateItemUpgradeSelect(id, maxUpgrade) {
        let lastUpgradeValue = $("#upgrade-" + id).val();
        $("#upgrade-" + id).empty()
            .append(createNumberOptions(maxUpgrade))
            .selectpicker('refresh')
            .selectpicker('val', lastUpgradeValue > maxUpgrade ? maxUpgrade : lastUpgradeValue);
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

    function generateItemField(itemOptions, id, title, itemOnChangeEvent, upgradeOnChangeEvent) {
        itemOptions = `<option value=""></option>` + itemOptions;
        let itemSelect = createSelect(itemOptions, id, title, itemOnChangeEvent);
        let upgradeSelect = createSelect(itemUpgradeOptions, "upgrade-" + id, title + " upgrade", upgradeOnChangeEvent);
        return createItemField("field-" + id, itemSelect, upgradeSelect);
    }

    function createSelect(options, id, title, onChangeEvent) {
        let select = $("<select>", {
            "class": "selectpicker form-control",
            "id": id,
            "title": title
        }).append(options);
        select.on('change', onChangeEvent);
        return select;
    }

    function createItemField(containerId, itemSelect, upgradeSelect) {
        return $("<div>", {"class": "item-field", "id": containerId})
                .append(itemSelect)
                .append($("<div>", {"class": "item-upgrade"})
                    .append(upgradeSelect));
    }

    function createItemOptionGroup(items, groupName) {
        return `<optgroup label="${groupName}">${createItemOptions(items, groupName)}</optgroup>`;
    }

    function createItemOptions(items, groupName) {
        let output = [];
        for (let item in items) {
            let dataContent = items[item].image
                ? `<img src='images/${groupName.toLowerCase()}/${items[item].image}' alt='${item}' title='${items[item].description}'/>`
                : `<span title='${items[item].description}'>${item}<span/>`;
            output.push(`<option 
                    value="${item}" 
                    data-tokens="${groupName}" 
                    data-content="${dataContent}">
                </option>`);
        }
        return output.join("\n");
    }

    function createNumberOptions(max) {
        let output = [];
        output.push('<option value="1" selected>1</option>');
        for (let i = 2; i <= max; i++) {
            output.push('<option value="' + i + '">' + i + '</option>');
        }
        return output.join("\n");
    }

    function extractSlotNumber(id) {
        return id.slice(id.lastIndexOf("-") + 1);
    }

    return {
        init: init
    }

})()









const url = new URL(window.location.href);
if(url.searchParams.get("shipBase") === null || url.searchParams.get("ship") === null) {
    window.location.replace("index.html");
}
const ship = ships[url.searchParams.get("shipBase")][url.searchParams.get("ship")];

const itemUpgradeOption = createNumberOptions(20);
const droneLVLOption = createNumberOptions(6);
const lasersOption = `<optgroup label="Lasers">${createOptions(lasers, "Lasers", "lasers", false)}</optgroup>`;
const shieldsOption = `<optgroup label="Shields">${createOptions(shields, "Shields", "shields", false)}</optgroup>`;
const generatorsOption = `<optgroup label="Generators">${createOptions(generators, "Generators", "generators", false)}</optgroup>`;
const dronesCount = 10;

let sumSkillPoints = 0;
let sumCredits = 0;
let sumSeprom = 0;

$(function () {
    // for (let i = 0; i < ship.lasers; i++) {
    //     $("#laser-slots-container").append(createItemField("ship-laser-" + i, "Laser", lasersOption, scanShipLasers));
    // }
    // $("#laser-slots-container").append(createItemField("ship-laser-id", "Laser", lasersOption, function () {
    //     setAllValues(this, "field-ship-laser-id");
    // }));

    // for (let i = 0; i < ship.generators; i++) {
    //     $("#generator-slots-container").append(createItemField("ship-generator-" + i, "Generator", [shieldsOption, generatorsOption], scanShipGenerators));
    // }
    // $("#generator-slots-container").append(createItemField("ship-generator-id", "Generator", [shieldsOption, generatorsOption], function () {
    //     setAllValues(this, "field-ship-generator-id");
    // }));

    // for (let i = 0; i < dronesCount; i++) {
    //     $("#drone-slots-container").append(createDroneField(i, scanDrones));
    // }
    // $("#drone-slots-container").append(createDroneField("id", function () {
    //     setAllValues(this, "field-drone-id");
    // }));

    // for (let item in boosters) {
    //     $("#boosters").append($("<optgroup>", {"label": item}).append(createOptions(boosters[item], item, "", false)));
    // }

    // $("#modules").attr({
    //     "data-max-options": ship.modulesSlot,
    //     "data-max-options-text": "This ship can have max " + ship.modulesSlot + " modules"
    // });
    // for (let item in shipModules(ship.modules)) {
    //     $("#modules").append($("<optgroup>", {"label": item}).append(createOptions(shipModules(ship.modules)[item], item, "", false)));
    // }
    // $("#modules").on('change', function () {setLimit(this,1)});


    $("#drone-formation").append(createOptions(formations, "", "formations", true));

    for (let ore in ores) {
        if (ores[ore].laser > 0)
            $("#ore-laser").append(createOptionOre(ores[ore].laser, ores[ore], ore));
        if (ores[ore].rocket > 0)
            $("#ore-rocket").append(createOptionOre(ores[ore].rocket, ores[ore], ore));
        if (ores[ore].generator > 0)
            $("#ore-generator").append(createOptionOre(ores[ore].generator, ores[ore], ore));
        if (ores[ore].shield > 0)
            $("#ore-shield").append(createOptionOre(ores[ore].shield, ores[ore], ore));
    }

    $("#skill-tree-container").on("contextmenu", function (e) {return false;});
    createSkillTree();
});

function createOptionOre(value, ore, oreName) {
    return `<option value="${value}" data-content="<img src='images/ores/${ore.image}' alt='${oreName}' title='${ore.description}'/>"></option>`;
}

function createItemField(selectId, selectTitle, itemArrays, onChangeEvent) {
    let itemSelect = $("<select>", {"class": "selectpicker form-control", "id": selectId, "title": selectTitle})
        .append($("<option>", {"value": ""}))
        .append(itemArrays);
    itemSelect.on('change', onChangeEvent);

    let itemSlot = $("<div>", {"class": "item-field", "id": "field-" + selectId}).append(itemSelect);

    let upgradeSelect = $("<select>", {
        "class": "selectpicker form-control",
        "id": "upgrade-" + selectId,
        "title": selectTitle + " upgrade"
    }).append(itemUpgradeOption);
    upgradeSelect.on('change', onChangeEvent);

    let upgradeSlot = $("<div>", {"class": "item-upgrade"}).append(upgradeSelect);

    return itemSlot.append(upgradeSlot);
}

function createOptions(items, groupName, directory, imgText) {
    let output = [];
    for (let item in items) {
        output.push(`<option value="${item}" data-tokens="${groupName}" data-content="${items[item].image
            ? `<img src='images/${directory.toLowerCase()}/${items[item].image}' alt='${item}' title='${items[item].description}'/> ${imgText ? item : ""}`
            : `<span title='${items[item].description}'>${item}<span/>`}"></option>`);
    }
    return output.join("\n");
}

function setAllValues(object, containerId) {
    let id = 0;
    while (document.getElementById(containerId.replace("id", id)) != null) {
        $("#" + object.id.replace("id", id)).selectpicker('val', object.value);
        id++;
    }
}

function createDroneField(i, onChangeEvent) {
    let droneDesign = $("<select>", {"class": "selectpicker form-control", "id": "drone-design-" + i, "title": "Design"})
        .append($("<option>", {"value": ""}))
        .append(createOptions(droneDesigns, "", "", false));
    droneDesign.on('change', onChangeEvent);

    let droneSlot1 = createItemField("drone-slot-" + i + "-0", "Item", [lasersOption, shieldsOption], onChangeEvent);
    let droneSlot2 = createItemField("drone-slot-" + i + "-1", "Item", [lasersOption, shieldsOption], onChangeEvent);

    let droneLvl = $("<select>", {
        "class": "selectpicker form-control",
        "id": "drone-LVL-" + i,
        "title": "Drone lvl"
    }).append(droneLVLOption);
    droneLvl.on('change', onChangeEvent);

    let droneUpgrade = $("<select>", {
        "class": "selectpicker form-control",
        "id": "drone-upgrade-" + i,
        "title": "Drone upgrade"
    }).append(itemUpgradeOption);
    droneUpgrade.on('change', onChangeEvent);

    return $("<div>", {"class": "drone", "id": "field-drone-" + i})
        .append($("<div>", {"class": "drone-design"})
            .append(droneDesign))
        .append(droneSlot1)
        .append(droneSlot2)
        .append($("<div>", {"class": "block"})
            .append($("<div>", {"class": "drone-lvl"})
                .append(droneLvl)
            ).append($("<div>", {"class": "drone-lvl"})
                .append(droneUpgrade)
            )
        );
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

function createNumberOptions(max) {
    let output = [];
    output.push('<option value="1" selected>1</option>');
    for (let i = 2; i <= max; i++) {
        output.push('<option value="' + i + '">' + i + '</option>');
    }
    return output.join("\n");
}

function setLimit(object, limit) {
    $(object).find('optgroup').each(function () {
        let count = 0;
        $(this).find('option').each(function () {
            if ($(this).prop('selected')) {
                count++;
                if (count > 1) {
                    $(this).attr("selected", false);
                }
            }
        });
    });
    $(object).selectpicker('refresh');
}

function createSkillTree() {
    resetSkills();
    for (let type in skills) {
        $("#skill-tree-container").append(generateSkill(skills[type], type));
    }
    $("#skill-points").text(sumSkillPoints + "/50 Credits: " + sumCredits + " Seprom: " + sumSeprom);
}

function resetSkills() {
    sumSkillPoints = 0;
    sumCredits = 0;
    sumSeprom = 0;
    $("#skill-tree-container").empty();
}

function generateSkill(type, skillType) {
    let s = $("<div>", {"class": "skill-type", "id": skillType});
    for (let skill in type) {
        let skillContainer = $("<div>", {"class": "skill"});
        if (type[skill].amount != null) {
            for (let i = 0; i < type[skill].amount; i++) {
                sumCredits += type[skill].levels[i].credits;
                sumSeprom += type[skill].levels[i].seprom;
            }
            sumSkillPoints += type[skill].amount;

            skillContainer.attr("id", skill);
            skillContainer.on('mousedown', skillMouse);

            let disabled = !type[skill].requirements() ? "class='disabled'" : "";
            let description = type[skill].amount === 0 ? type[skill].description : type[skill].levels[type[skill].amount - 1].description;

            let img = `<img ${disabled} src='images/skills/${type[skill].image}'/>`;
            let frameImg = `<img src='images/skills/frame.png' class='frame-skill' alt='${skill}' title='${description}'/>`;

            let span = $("<span>", {"class": "skill-amount"}).text(type[skill].amount + "/" + type[skill].levels.length);
            span.css("color", "grey");
            if (type[skill].requirements()) span.css("color", "white");
            if (type[skill].amount === type[skill].levels.length) span.css("color", "lightblue");

            s.append(skillContainer.append(img, span, frameImg));
        } else {
            s.append(skillContainer.append("<img src='images/skills/null.png'/>"));
        }
    }
    return s;
}

function skillMouse(event) {
    switch (event.which) {
        case 1:
        case 3:
            for (let type in skills) {
                for (let skill in skills[type]) {
                    if (skill === this.id) {
                        if (skills[type][skill].amount < skills[type][skill].levels.length && sumSkillPoints < 50 && event.which === 1) {
                            skills[type][skill].amount++;
                        }
                        if (skills[type][skill].amount > 0 && event.which === 3) {
                            skills[type][skill].amount--;
                        }
                    }
                }
            }
            updateAmount();
            updateAmount();
            updateAmount();
            skillBonuses();
            createSkillTree();
            break;
    }
}

function updateAmount() {
    for (let type in skills) {
        for (let s in skills[type]) {
            if (skills[type][s].amount != null && !skills[type][s].requirements()) {
                skills[type][s].amount = 0;
            }
        }
    }
}