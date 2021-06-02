const item = (function () {

    function addBonusesFromItems(items, itemsNameToAdd) {
        if(itemsNameToAdd == null) return;
        for(let itemType in items) {
            for(let name of itemsNameToAdd) {
                let item = items[itemType][name];
                if(item != null) {
                    bonuses.addBonuses(item.bonuses);
                }
            }
        }
    }

    function findItem(itemNameToFind, items) {
        for(let i of items) {
            let item = i[itemNameToFind];
            if(item != null) {
                return item;
            }
        }
        return null;
    }

    function countItems(itemsToCount, items) {
        let count = 0;
        for(let item of itemsToCount) {
            if(item != null) {
                let i = items[item.name];
                if(i != null) count++;
            }
        }
        return count;
    }

    function setItem(slot, name, upgrade, items, source) {
        if(slot != null && slot.name !== "" && source !== "") {
            let item = findItem(slot.name, items);
            let multi = 1 + slot.upgrade * item.upgradePercentValue - item.upgradePercentValue;
            bonuses.subBonusesMultiValue(item.bonuses, multi, source);
        }
        if(upgrade > 0) {
            if(slot != null) {
                name = slot.name;
            }
        } else {
            upgrade = 1;
        }
        if(name !== "" && source !== "") {
            let item = findItem(name, items);
            let multi = 1 + upgrade * item.upgradePercentValue - item.upgradePercentValue;
            bonuses.addBonusesMultiValue(item.bonuses, multi, source);
        }
        return {name: name, upgrade: upgrade};
    }

    return {
        addBonusesFromItems: addBonusesFromItems,
        findItem: findItem,
        countItems: countItems,
        setItem: setItem
    }
})();