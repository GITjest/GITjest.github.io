const bonuses = (function () {
    let bonuses = {};

    function setBonuses(bonus) {
        bonuses = bonus;
    }

    function setBonus(bonus, value) {
        bonuses[bonus] = value;
    }

    function addBonus(bonus, value) {
        bonuses[bonus] += value;
    }

    function addBonuses(bonus) {
        for(let b in bonus) {
            addBonus(b, bonus[b]);
        }
    }

    function addBonusesMultiValue(itemBonuses, multi, source) {
        for(let bonus in itemBonuses) {
            let bonusName = bonus + "_" + source;
            multi = bonus.search("%") > 0 ? 1 : multi;
            addBonus(bonusName, itemBonuses[bonus] * multi);
        }
    }

    function subBonusesMultiValue(itemBonuses, multi, source) {
        for(let bonus in itemBonuses) {
            let bonusName = bonus + "_" + source;
            multi = bonus.search("%") > 0 ? 1 : multi;
            addBonus(bonusName, itemBonuses[bonus] * multi * (-1));
        }
    }

    function getBonuses() {
        return bonuses;
    }

    function getBonus(bonus) {
        return bonuses[bonus];
    }

    function resetBonuses(item) {
        for (let bonus in bonuses)  {
            bonuses[bonus] = bonus.search(item) > 0 ? 0 : bonuses[bonus];
        }
    }

    return {
        setBonuses: setBonuses,
        setBonus: setBonus,
        addBonus: addBonus,
        addBonuses: addBonuses,
        getBonuses: getBonuses,
        getBonus: getBonus,
        addBonusesMultiValue: addBonusesMultiValue,
        subBonusesMultiValue: subBonusesMultiValue,
        resetBonuses: resetBonuses
    }
})();