const boostersGenerator = (function () {

    function create() {
        let options = [];
        for(let booster in boosters) {
            options.push(selectGenerator.createItemOptionGroup(boosters[booster], booster));
        }

        let select = selectGenerator.createSelect(options, "boosters", "Boosters", boostersOnchangeEvent);
        select.attr({
            "class": "selectpicker",
            "data-live-search": true,
            "data-actions-box": true,
            "data-selected-text-format": "count > 3",
            "multiple": "multiple"
        });
        select.val([]);
        return select;

    }

    function boostersOnchangeEvent() {
        status.setBoosters($(this).val());
    }

    return {
        create: create
    }
})();