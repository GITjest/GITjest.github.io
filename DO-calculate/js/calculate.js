let bonuses = [];

$(function () {
    margeArray(bonuses, ship.bonuses);
    refreshStatistics();

    $("#boosters").on('change', function () {
        resetBonus("boost");
        margeArray(bonuses, getValuesFromGroup(this, boosters));
        refreshStatistics();
    });

    $("#modules").on('change', function () {
        resetBonus("module");
        margeArray(bonuses, getValuesFromGroup(this, modules));
        refreshStatistics();
    });

    $("#drone-formation").on('change', function () {
        resetBonus("formation");
        margeArray(bonuses, getValues(this, formations));
        refreshStatistics();
    });

    $("#ore-laser").on('change', function () {
        bonuses["damage_%_ore"] = Number($("#ore-laser").val());
        refreshStatistics();
    });

    $("#ore-rocket").on('change', function () {
        bonuses["damage_rocket_%_ore"] = Number($("#ore-rocket").val());
        refreshStatistics();
    });

    $("#ore-generator").on('change', function () {
        bonuses["speed_%_ore"] = Number($("#ore-generator").val());
        refreshStatistics();
    });

    $("#ore-shield").on('change', function () {
        bonuses["shield_%_ore"] = Number($("#ore-shield").val());
        refreshStatistics();
    });

    $("#infection").on('change', function () {
        if (this.checked) {
            bonuses["damage_%_infection"] = 10;
            bonuses["hp_%_infection"] = -15;
            bonuses["speed_%_infection"] = -10;
        } else {
            resetBonus("infection");
        }
        refreshStatistics();
    });

    $("#premium").on('change', function () {
        if (this.checked) {
            bonuses["rocket_reload_time_%_premium"] = -50;
            bonuses["rep_%_premium"] = 100;
            bonuses["cargo_premium"] = 500;
        } else {
            resetBonus("premium");
        }
        refreshStatistics();
    });

});

function nanToZero(value) {
    return value ? value : 0;
}

function resetBonus(item) {
    for (let bonus in bonuses) {
        bonuses[bonus] = bonus.search(item) > 0 ? 0 : bonuses[bonus];
    }
}

function getValuesFromGroup(object, values) {
    let array = [];
    $(object).find('optgroup').each(function () {
        let result = getValues(this, values[$(this).attr('label')]);
        for (let bonus in result) {
            array[bonus] = nanToZero(array[bonus]) + result[bonus];
        }
    });
    return array;
}

function getValues(object, values) {
    let array = [];
    $(object).find('option').each(function () {
        if ($(this).prop('selected')) {
            let item = values[$(this).val()];

            if (item == null) return null;
            margeArray(array, item.bonuses);
        }
    });
    return array;
}

function margeArray(to, from) {
    for (let item in from) {
        to[item] = nanToZero(to[item]) + from[item];
    }
}

function refreshStatistics() {
    $("#hp").text("HP: " + stats["hp"]["hp"]().toFixed(0));
    $("#speed").text("Speed: " + stats["speed"]["speed"]().toFixed(0));
    $("#cargo").text("Cargo: " + stats["cargo"]["cargo"]().toFixed(0));
    $("#shield").text("Shield: " + stats["shield"]["shield"]().toFixed(0));

    $("#damage-PVE").text("Damage PVE: " + stats["laser"]["PVE"]()[0].toFixed(0)
        + "(" + Number(stats["laser"]["bonus_PVE"]()[0] + stats["laser"]["PVE"]()[0]).toFixed(0) + ")"
        + " - " + stats["laser"]["PVE"]()[1].toFixed(0)
        + "(" + Number(stats["laser"]["bonus_PVE"]()[1] + stats["laser"]["PVE"]()[1]).toFixed(0) + ")");

    $("#damage-PVP").text("Damage PVP: " + stats["laser"]["PVP"]()[0].toFixed(0)
        + "(" + Number(stats["laser"]["bonus_PVP"]()[0] + stats["laser"]["PVP"]()[0]).toFixed(0) + ")"
        + " - " + stats["laser"]["PVP"]()[1].toFixed(0)
        + "(" + Number(stats["laser"]["bonus_PVP"]()[1] + stats["laser"]["PVP"]()[1]).toFixed(0) + ")");

    for (let stat in stats) {
        let container = $("#statistics-details-" + stat);
        container.empty();
        for (let s in stats[stat]) {
            if (stats[stat][s]() !== 0 && stats[stat][s]()[0] !== 0) {
                container.append($("<span>").text(statisticDetailText(s))
                    .append($("<span>").text(setValueText(s, stats[stat][s]()))))
                    .append("<br>");
            }
        }
    }
}

function statisticDetailText(text) {
    let describe = text.replace(/_/gi, " ");
    describe = describe.charAt(0).toUpperCase() + describe.slice(1);

    let percent = describe.search("%");
    if (percent > -1) {
        describe = describe.substr(0, percent - 1);
    }
    describe += ":";
    return describe;
}

function setValueText(text, value) {
    if (value.length == null) {
        if (text.search("%") > -1) {
            return value.toFixed(2) + "%";
        } else if (text.search("time") > -1) {
            return value.toFixed(2)
        } else {
            return value.toFixed(0)
        }
    }

    let describe = "";
    for (let i = 0; i < value.length; i++) {
        describe += value[i].toFixed(0) + " - ";
    }
    return describe.substr(0, describe.length - 3)
}

function setBonuses(item, source, multi) {
    if (item != null) {
        multi = multi = 0 ? 1 : multi;
        for (let bonus in item.bonuses) {
            bonuses[bonus + "_" + source] = nanToZero(bonuses[bonus + "_" + source])
                + item.bonuses[bonus]
                * (bonus.search("%") > 0 ? 1 : multi);
        }
    }
}

function scanShipLasers() {
    resetBonus("laser_ship");
    let field;
    let id = 0;
    while ((field = document.getElementById("field-ship-laser-" + id)) != null) {
        let item = lasers[document.getElementById("ship-laser-" + id).value];
        if (item != null) {
            let multi = 1 + (document.getElementById("upgrade-ship-laser-" + id).value * 0.005) - 0.005;
            setBonuses(item, "ship", multi);
            bonuses["amount_laser_ship"] = nanToZero(bonuses["amount_laser_ship"]) + 1;
        }
        field.style.border = item != null ? "2px solid green" : "2px solid grey";
        id++;
    }
    refreshStatistics();
}

function scanShipGenerators() {
    resetBonus("shield_ship");
    resetBonus("generator_ship");
    let field;
    let id = 0;
    while ((field = document.getElementById("field-ship-generator-" + id)) != null) {
        let slotValue = document.getElementById("ship-generator-" + id).value;
        let item = shields[slotValue];

        if (item != null) {
            let multi = 1 + (document.getElementById("upgrade-ship-generator-" + id).value * 0.01) - 0.01;
            setBonuses(item, "ship", multi);
            bonuses["amount_shield_ship"] = nanToZero(bonuses["amount_shield_ship"]) + 1;
        } else {
            item = generators[slotValue];
            if (item != null) {
                setBonuses(item, "ship", 1);
            }
        }
        field.style.border = item != null ? "2px solid green" : "2px solid grey";
        id++;
    }
    refreshStatistics();
}

function scanDrones() {
    resetBonus("drone");
    let id = 0;
    let field;
    let designSum = [];
    let droneCount = 0;

    while ((field = document.getElementById("field-drone-" + id)) != null) {
        let active = false;
        let fieldDroneSlot;
        let slot = 0;
        let hercules = 0;
        let dronelvl = document.getElementById("drone-LVL-" + id).value;
        let droneUpgrade = document.getElementById("drone-upgrade-" + id).value;
        let droneDesign = document.getElementById("drone-design-" + id).value;

        if (droneDesign !== "") {
            active = true;
            designSum[droneDesign] = nanToZero(designSum[droneDesign]) + 1;
            if (droneDesign === "HERCULES") {
                hercules = droneDesigns["HERCULES"]["bonuses"]["shield_%_hercules_drone"];
            }
        }

        while ((fieldDroneSlot = document.getElementById("field-drone-slot-" + id + "-" + slot)) != null) {
            let item = lasers[document.getElementById("drone-slot-" + id + "-" + slot).value];
            if (item != null) {
                active = true;
                let multi = 1 + ((document.getElementById("upgrade-drone-slot-" + id + "-" + slot).value * 0.5 - 0.5)
                    * (1 + dronelvl * 0.02 - 0.02) + (dronelvl * 2 - 2)
                    * (1 + droneUpgrade * 0.004 - 0.004) + (droneUpgrade * 0.4 - 0.4)) * 0.01;
                setBonuses(item, "drone", multi);
                bonuses["amount_laser_drone"] = nanToZero(bonuses["amount_laser_drone"]) + 1;
            } else {
                item = shields[document.getElementById("drone-slot-" + id + "-" + slot).value];
                if (item != null) {
                    active = true;
                    let multi = 1 + ((((document.getElementById("upgrade-drone-slot-" + id + "-" + slot).value - 1)
                        * (1 + dronelvl * 0.04 - 0.04) + (dronelvl * 4 - 4))
                        * (1 + droneUpgrade * 0.01 - 0.01) + (droneUpgrade - 1))
                        * (1 + hercules * 0.01) + hercules) * 0.01;
                    setBonuses(item, "drone", multi);
                    bonuses["amount_shield_drone"] = nanToZero(bonuses["amount_shield_drone"]) + 1;
                }
            }
            fieldDroneSlot.style.border = item != null ? "2px solid green" : "2px solid grey";
            slot++;
        }
        field.style.border = active === true ? "2px solid green" : "2px solid grey";
        if (active) droneCount++;
        id++;
    }

    for (let design in designSum) {
        let designBonuses = droneDesigns[design].bonuses;
        for (let bonus in designBonuses) {
            if (bonus.search("set") > 0) {
                if (designSum[design] === droneCount) {
                    bonuses[bonus] = nanToZero(bonuses[bonus]) + designBonuses[bonus];
                }
            } else {
                bonuses[bonus] = nanToZero(bonuses[bonus]) + (designBonuses[bonus] * designSum[design]);
            }
        }
    }
    refreshStatistics();
}

function skillBonuses() {
    resetBonus("skill");
    for (let type in skills) {
        for (let s in skills[type]) {
            if (skills[type][s].amount != null && skills[type][s].requirements() && skills[type][s].amount > 0) {
                let bonus = skills[type][s].levels[skills[type][s].amount - 1];
                bonuses[bonus.bonus] = bonus.value;
            }
        }
    }
    refreshStatistics();
}