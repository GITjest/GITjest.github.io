let sumSkillPoints = 0;
let sumCredits = 0;
let sumSeprom = 0;

$(function () {


    $("#skill-tree-container").on("contextmenu", function (e) {return false;});
    createSkillTree();
});

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