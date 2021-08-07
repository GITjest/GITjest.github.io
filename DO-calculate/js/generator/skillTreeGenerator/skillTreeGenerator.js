const skillTreeGenerator = (function () {

    function create() {
        let skills = [];
        for(let skillType in data.getSkills()) {
            skills.push(createSkillsByType(skillType));
        }
        return skills;
    }

    function createSkillsByType(skillType) {
        let skillTypeContainer = $("<div>", {"class": "skill-type", "id": skillType});
        let skills = data.getTypeSkills(skillType);
        for(let skill in skills) {
            let skillContainer = $("<div>", {"class": "skill"});
            if(skills[skill].levels != null) {
                skillContainer.attr("id", skill);
                skillContainer.on('mousedown', skillMousedownEvent);

                let img = `<img class='disabled' src='images/${skills[skill].image}'/>`;
                let frameImg = `<img src='images/skills/frame.png' class='frame-skill' alt='${skill}' title='${skills[skill].description}'/>`;

                let span = $("<span>", {"class": "skill-amount"}).text(status.getSkillAmount(skill) + "/" + skills[skill].levels.length);
                span.css("color", "grey");

                skillTypeContainer.append(skillContainer.append(img, span, frameImg));
            } else {
                skillTypeContainer.append(skillContainer.append("<img src='images/skills/null.png'/>"));
            }
        }
        return skillTypeContainer;
    }

    function skillMousedownEvent(event) {
        let skillType = $(this).parent().attr('id');
        let skill = this.id;
        if(event.which === 1) {
            status.addSkillPoint(skillType, skill);
        }
        if(event.which === 3) {
            status.subSkillPoint(skillType, skill);
        }
        updateSkills();
        updateSkillLevelsValue();
        statisticsGenerator.refresh();
    }

    function updateSkillLevelsValue() {
        let dataSkills = data.getSkills();
        let seprom = 0;
        let credits = 0;
        let points = 0;
        for(let skillType in dataSkills) {
            for(let skill in dataSkills[skillType]) {
                if(data.getSkill(skillType, skill).levels != null) {
                    let amount = status.getSkillAmount(skill);
                    if(amount > 0) {
                        for(let i = 0; i < amount; i++) {
                            let skillLevel = data.getSkill(skillType, skill).levels[i];
                            seprom += skillLevel.seprom;
                            credits += skillLevel.credits;
                        }
                        points += amount;
                    }
                }
            }
        }
        $("#skill-points").text(points + "/50 Credits: " + credits + " Seprom: " + seprom);
    }

    function updateSkills() {
        let skills = status.getSkills();
        for(let skill in skills) {
            let cssClass = "";
            let color = "white";
            let skillType = $("div[id='" + skill + "']").parent().attr("id");
            if(!status.isSkillActive(skill)) {
                cssClass = "disabled";
                color = "grey";
                status.setSkill(skillType, skill, 0);
            }

            if(status.isMaxAmount(skillType, skill)) {
                color = "lightblue";
            }

            let description = skills[skill].amount === 0
                ? data.getSkill(skillType, skill).description
                : data.getSkill(skillType, skill).levels[skills[skill].amount - 1].description;

            $("div[id='" + skill + "'] img")
                .not(".frame-skill")
                .attr("class", cssClass);

             $("div[id='" + skill + "'] .frame-skill")
                 .prop("title", description);

            $("div[id='" + skill + "'] span")
                .css("color", color)
                .text(status.getSkillAmount(skill) + "/" + data.getSkill(skillType, skill).levels.length);

        }
    }

    function setData(dataSkill) {
        let dataSkills = data.getSkills()
        for(let skillType in dataSkills) {
            for (let skill in dataSkills[skillType]) {
                if(dataSkill[skill])
                    status.setSkillAmount(skillType, skill, dataSkill[skill].amount);
            }
        }
        updateSkills();
        updateSkillLevelsValue();
        statisticsGenerator.refresh();
    }
    
    return {
        create: create,
        updateSkills: updateSkills,
        setData: setData
    }
})();