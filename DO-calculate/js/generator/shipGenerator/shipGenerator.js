const shipGenerator = (function () {

    function generate(ship, shipData, droneData) {
        $("#laser-slots-container")
            .append(shipLasersGenerator.create(ship.lasers))
            .append(shipLasersGenerator.createSetterForAllItems());

        if(shipData)
            shipLasersGenerator.setData(shipData.shipLasers);

        $("#generator-slots-container")
            .append(shipGeneratorsGenerator.create(ship.generators))
            .append(shipGeneratorsGenerator.createSetterForAllItems());

        if(shipData)
            shipGeneratorsGenerator.setData(shipData.shipGenerators);

        $("#drone-slots-container")
            .append(dronesGenerator.create(data.getConfigData("numberOfDrones")))
            .append(dronesGenerator.createSetterForAllItems());

        if(droneData)
            dronesGenerator.setData(droneData);
    }

    return {
        generate: generate
    }
})();