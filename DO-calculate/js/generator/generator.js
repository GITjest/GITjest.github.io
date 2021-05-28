const generator = (function () {

    function generate(ship) {
        shipGenerator.generate(ship);

        $("#boosters-container")
            .append(boostersGenerator.create());

        $("#modules-container")
            .append(modulesGenerator.create(ship));

        $("#drone-formations-container")
            .append(droneFormationGeneration.create());

        $("#ores-container")
            .append(oresGenerator.createLaserOre())
            .append(oresGenerator.createRocketOre())
            .append(oresGenerator.createGeneratorOre())
            .append(oresGenerator.createShieldOre());

        $("#other-items-container")
            .append(otherItemsGenerator.createInfection())
            .append(otherItemsGenerator.createPremium());
    }

    return {
        generate: generate
    }
})();