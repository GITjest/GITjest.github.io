const url = new URL(window.location.href);
if(url.searchParams.get("shipBase") === null || url.searchParams.get("ship") === null) {
    window.location.replace("index.html");
}
const ship = ships[url.searchParams.get("shipBase")][url.searchParams.get("ship")];

const itemUpgradeOption = createNumberOptions(16);
const droneLVLOption = createNumberOptions(6);
const lasersOption = `<optgroup label="Lasers">${createOptions(lasers, "Lasers", "lasers", false)}</optgroup>`;
const shieldsOption = `<optgroup label="Shields">${createOptions(shields, "Shields", "shields", false)}</optgroup>`;
const generatorsOption = `<optgroup label="Generators">${createOptions(generators, "Generators", "generators", false)}</optgroup>`;
const dronesCount = 10;

let sumSkillPoints = 0;
let sumCredits = 0;
let sumSeprom = 0;

$(function () {
    for (let i = 0; i < ship.lasers; i++) {
        $("#laser-slots-container").append(createItemField("ship-laser-" + i, "Laser", lasersOption, scanShipLasers));
    }
    $("#laser-slots-container").append(createItemField("ship-laser-id", "Laser", lasersOption, function () {
        setAllValues(this, "field-ship-laser-id");
    }));

    for (let i = 0; i < ship.generators; i++) {
        $("#generator-slots-container").append(createItemField("ship-generator-" + i, "Generator", [shieldsOption, generatorsOption], scanShipGenerators));
    }
    $("#generator-slots-container").append(createItemField("ship-generator-id", "Generator", [shieldsOption, generatorsOption], function () {
        setAllValues(this, "field-ship-generator-id");
    }));

    for (let i = 0; i < dronesCount; i++) {
        $("#drone-slots-container").append(createDroneField(i, scanDrones));
    }
    $("#drone-slots-container").append(createDroneField("id", function () {
        setAllValues(this, "field-drone-id");
    }));

    for (let item in boosters) {
        $("#boosters").append($("<optgroup>", {"label": item}).append(createOptions(boosters[item], item, "", false)));
    }

    $("#modules").attr({
        "data-max-options": ship.modulesSlot,
        "data-max-options-text": "This ship can have max " + ship.modulesSlot + " modules"
    });
    for (let item in shipModules(ship.modules)) {
        $("#modules").append($("<optgroup>", {"label": item}).append(createOptions(shipModules(ship.modules)[item], item, "", false)));
    }
    $("#modules").on('change', function () {setLimit(this,1)});


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
    let itemSelect = $("<select>", {"class": "selectpicker", "id": selectId, "title": selectTitle})
        .append($("<option>", {"value": ""}))
        .append(itemArrays);
    itemSelect.on('change', onChangeEvent);

    let itemSlot = $("<div>", {"class": "item-field", "id": "field-" + selectId}).append(itemSelect);

    let upgradeSelect = $("<select>", {
        "class": "selectpicker",
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
    let droneDesign = $("<select>", {"class": "selectpicker", "id": "drone-design-" + i, "title": "Design"})
        .append($("<option>", {"value": ""}))
        .append(createOptions(droneDesigns, "", "", false));
    droneDesign.on('change', onChangeEvent);

    let droneSlot1 = createItemField("drone-slot-" + i + "-0", "Item", [lasersOption, shieldsOption], onChangeEvent);
    let droneSlot2 = createItemField("drone-slot-" + i + "-1", "Item", [lasersOption, shieldsOption], onChangeEvent);

    let droneLvl = $("<select>", {
        "class": "selectpicker",
        "id": "drone-LVL-" + i,
        "title": "Drone lvl"
    }).append(droneLVLOption);
    droneLvl.on('change', onChangeEvent);

    let droneUpgrade = $("<select>", {
        "class": "selectpicker",
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