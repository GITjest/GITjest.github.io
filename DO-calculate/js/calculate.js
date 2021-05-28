function resetBonus(item) {
    for (let bonus in bonuses)  {
        bonuses[bonus] = bonus.search(item) > 0 ? 0 : bonuses[bonus];
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