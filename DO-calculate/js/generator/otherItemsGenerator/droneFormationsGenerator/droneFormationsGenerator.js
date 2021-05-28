const droneFormationGeneration = (function () {

    function create() {
        let options = `<option value="""></option>`;
        options = options + selectGenerator.createItemOptionsWithImageAndText(formations, "formations");
        let select = selectGenerator.createSelect(options, "drone-formation", "Drone formation", droneFormationOnchangeEvent);
        select.attr({
            "class": "selectpicker"
        });
        return select;
    }

    function droneFormationOnchangeEvent() {
        status.setDroneFormation($(this).val());
    }

    return {
        create: create
    }
})();