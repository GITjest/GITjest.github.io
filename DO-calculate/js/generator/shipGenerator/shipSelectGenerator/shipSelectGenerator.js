const shipSelectGenerator = (function () {

    function create(ships, selectShip) {
        let optgroups = [];
        for (let shipBase in ships) {
            let optgroup = $("<optgroup>", {"label": shipBase});
            for (let ship in ships[shipBase]) {
                let option = $("<option>", {
                    "value": "calculate.html?shipBase=" + shipBase + "&ship=" + ship,
                    "data-tokens": shipBase,
                    "data-content": `<span title="${createShipDescribe(ships[shipBase][ship])}">${ship}<span/>`
                });

                if (selectShip === ship) option.attr("selected", "true");

                optgroup.append(option);
                optgroups.push(optgroup);
            }
        }
        let select = selectGenerator.createSelect(optgroups, "select-ship", "Select ship", onChangeEvent);
        select.attr({
            "class": "selectpicker form-control bg-transparent",
            "data-live-search": true
        });
        return select;
    }

    function onChangeEvent() {
        location = this.value;
    }

    function createShipDescribe(ship) {
        return `Laser: ${ship.lasers}&#10;`
            + `Generators: ${ship.generators}&#10;`
            + `Modules: ${ship.modulesSlot}&#10;`
            + describeBonuses(ship.bonuses);
    }

    function describeBonuses(bonuses) {
        let describe = "";
        for(let bonus in bonuses) {
            let res = bonus.replace("_ship", "")
                .replace("_", " ");
            res = res.charAt(0).toUpperCase() + res.slice(1);

            let parent = res.search("%");
            if(parent > -1) {
                res = res.substr(0, parent - 1);
                res += `: ${bonuses[bonus]}%&#10;`;
            } else {
                res += `: ${bonuses[bonus]}&#10;`;
            }
            describe += res;
        }
        return describe;
    }

    return {
        create: create
    }
})();