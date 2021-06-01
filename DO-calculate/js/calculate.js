function resetBonus(item) {
    for (let bonus in bonuses)  {
        bonuses[bonus] = bonus.search(item) > 0 ? 0 : bonuses[bonus];
    }
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
}