const skillStatus = (function () {
    let skills = {
        "Ship hull I": {
            amount: 0,
            active: function() {return true}
        },
        "Engineering": {
            amount: 0,
            active: function() {
                return skills["Ship hull I"].amount > 0
                    || skills["Tactics"].amount > 0
                    || skills["Detonation I"].amount > 0
            }
        },
        "Shield engineering": {
            amount: 0,
            active: function() {
                return skills["Engineering"].amount > 0
                    || skills["Logistics"].amount > 0
                    || skills["Explosives"].amount > 0
            }
        },
        "Evasive maneuvers I": {
            amount: 0,
            active: function() {
                return (skills["Heat-seeking missiles"].amount + skills["Shield engineering"].amount) > 1
            }
        },
        "Ship hull II": {
            amount: 0,
            active: function() {
                return skills["Ship hull I"].amount > 1
                    && (skills["Bounty Hunter I"].amount + skills["Luck I"].amount + skills["Evasive maneuvers I"].amount) > 1
            }
        },
        "Shield mechanics": {
            amount: 0,
            active: function() {
                return skills["Ship hull II"].amount > 2
            }
        },
        "Evasive maneuvers II": {
            amount: 0,
            active: function() {
                return skills["Evasive maneuvers I"].amount > 1
                    && skills["Shield mechanics"].amount > 2
            }
        },
        "Tactics": {
            amount: 0,
            active: function() {return true}
        },
        "Logistics": {
            amount: 0,
            active: function() {
                return skills["Ship hull I"].amount > 0
                    || skills["Tactics"].amount > 0
                    || skills["Detonation I"].amount > 0
            }
        },
        "Luck I": {
            amount: 0,
            active: function() {
                return skills["Logistics"].amount > 1
            }
        },
        "Cruelty I": {
            amount: 0,
            active: function() {
                return (skills["Luck I"].amount + skills["Evasive maneuvers I"].amount + skills["Bounty Hunter I"].amount) > 1
            }
        },
        "Tractor beam I": {
            amount: 0,
            active: function() {
                return (skills["Ship hull II"].amount + skills["Cruelty I"].amount + skills["Rocket fusion"].amount) > 1
            }
        },
        "Greed": {
            amount: 0,
            active: function() {
                return (skills["Tractor beam I"].amount + skills["Alien hunter"].amount) > 2
            }
        },
        "Tractor beam II": {
            amount: 0,
            active: function() {
                return (skills["Shield mechanics"].amount + skills["Greed"].amount + skills["Detonation II"].amount) > 4
            }
        },
        "Cruelty II": {
            amount: 0,
            active: function() {
                return skills["Cruelty I"].amount > 1
                    && (skills["Tractor beam II"].amount + skills["Electro-optics"].amount) > 2
            }
        },
        "Luck II": {
            amount: 0,
            active: function() {
                return skills["Luck I"].amount > 1
                    && skills["Bounty Hunter II"].amount > 2
                    && skills["Evasive maneuvers II"].amount > 2
            }
        },
        "Detonation I": {
            amount: 0,
            active: function() {return true}
        },
        "Explosives": {
            amount: 0,
            active: function() {
                return (skills["Ship hull I"].amount + skills["Tactics"].amount + skills["Detonation I"].amount) > 0
            }
        },
        "Heat-seeking missiles": {
            amount: 0,
            active: function() {
                return (skills["Engineering"].amount + skills["Logistics"].amount + skills["Explosives"].amount) > 0
            }
        },
        "Bounty Hunter I": {
            amount: 0,
            active: function() {
                return (skills["Shield engineering"].amount + skills["Heat-seeking missiles"].amount) > 1
            }
        },
        "Rocket fusion": {
            amount: 0,
            active: function() {
                return (skills["Ship hull II"].amount + skills["Luck I"].amount + skills["Bounty Hunter I"].amount) > 1
            }
        },
        "Alien hunter": {
            amount: 0,
            active: function() {
                return skills["Cruelty I"].amount > 1
                    && skills["Rocket fusion"].amount > 1
            }
        },
        "Detonation II": {
            amount: 0,
            active: function() {
                return skills["Detonation I"].amount > 1
                    && (skills["Tractor beam I"].amount + skills["Alien hunter"].amount) > 2
            }
        },
        "Electro-optics": {
            amount: 0,
            active: function() {
                return (skills["Greed"].amount + skills["Shield mechanics"].amount + skills["Detonation II"].amount) > 4
            }
        },
        "Bounty Hunter II": {
            amount: 0,
            active: function() {
                return skills["Bounty Hunter I"].amount > 1
                    && (skills["Electro-optics"].amount + skills["Tractor beam II"].amount) > 2
            }
        }
    };

    function setSkill(skillType, skillName, value) {
        skills[skillName].amount = value;
        addSkillBonus(skillType, skillName, value);
    }

    function addSkillPoint(skillType, skillName) {
        if(!isMaxAmount(skillType, skillName)) {
            skills[skillName].amount++;
            addSkillBonus(skillType, skillName, skills[skillName].amount);
        }
    }

    function subSkillPoint(skillType, skillName) {
        if(skills[skillName].amount > 0) {
            skills[skillName].amount--;
            addSkillBonus(skillType, skillName, skills[skillName].amount);
        }
    }

    function isMaxAmount(skillType, skillName) {
        let currentAmount = skills[skillName].amount;
        let maxAmount = data.getSkill(skillType, skillName).levels.length;
        let maxSkillPoints = data.getConfigData("maxSkillPoints");
        let sumPoints = 0;
        for (let skill in skills) {
            sumPoints += skills[skill].amount;
        }
        return currentAmount >= maxAmount || maxSkillPoints <= sumPoints;
    }

    function addSkillBonus(skillType, skill, amount) {
        let dataSkillLevels = data.getSkill(skillType, skill).levels;
        if(amount < 1) {
            bonuses.setBonus(dataSkillLevels[0].bonus, 0);
        } else {
            bonuses.setBonus(dataSkillLevels[amount - 1].bonus, dataSkillLevels[amount - 1].value);
        }
    }

    // function calculateSkillBonuses() {
    //     bonuses.resetBonuses("skill");
    //     let dataSkills = data.getSkills();
    //     for(let skillType in dataSkills) {
    //         for(let skill in dataSkills[skillType]) {
    //             if(data.getSkill(skillType, skill).levels != null) {
    //                 let amount = getSkillAmount(skill);
    //                 if(amount > 0) {
    //                     let skillLevel = data.getSkill(skillType, skill).levels[amount - 1];
    //                     bonuses.addBonus(skillLevel.bonus, skillLevel.value);
    //                 }
    //             }
    //         }
    //     }
    // }

    function isSkillActive(skillName) {
        return skills[skillName].active();
    }

    function getSkillAmount(skillName) {
        return skills[skillName].amount;
    }

    function getSkills() {
        return skills;
    }

    return {
        isSkillActive: isSkillActive,
        getSkillAmount: getSkillAmount,
        getSkills: getSkills,
        addSkillPoint: addSkillPoint,
        subSkillPoint: subSkillPoint,
        isMaxAmount: isMaxAmount,
        setSkill: setSkill
    }
})();