const droneFormationGenerator = (function () {

    function create() {
        let options = `<option value="""></option>`;
        options = options + selectGenerator.createItemOptionsWithImageAndText(data.getDroneFormations(), "formations");
        let select = selectGenerator.createSelect(options, "drone-formation", "Drone formation", droneFormationOnchangeEvent);
        select.attr({
            "class": "selectpicker"
        });
        return select;
    }

    function droneFormationOnchangeEvent() {
        status.setDroneFormation($(this).val());
        statisticsGenerator.refresh();
    }

    function setData(data) {
        $("#drone-formation").selectpicker('val', data);
    }

    return {
        create: create,
        setData: setData
    }
})();