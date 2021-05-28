const shipGenerator = (function () {

    function generate(ship) {
        $("#laser-slots-container")
            .append(shipLasersGenerator.create(ship.lasers))
            .append(shipLasersGenerator.createSetterForAllItems());

        $("#generator-slots-container")
            .append(shipGeneratorsGenerator.create(ship.generators))
            .append(shipGeneratorsGenerator.createSetterForAllItems());

        $("#drone-slots-container")
            .append(dronesGenerator.create(config.numberOfDrones))
            .append(dronesGenerator.createSetterForAllItems());
    }

    return {
        generate: generate
    }
})();