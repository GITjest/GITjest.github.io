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

        $("#skill-tree-container")
            .on("contextmenu", function (e) {return false;})
            .append(skillTreeGenerator.create());
        skillTreeGenerator.updateSkills();

        $("#ship").on("change", function () {
            $("#ship-container").css("display", "inline-block");
            $("#skill-container").css("display", "none");
            $("#statistic-details-container").css("display", "none");
        })

        $("#skill-tree").on("change", function () {
            $("#ship-container").css("display", "none");
            $("#skill-container").css("display", "inline-block");
            $("#statistic-details-container").css("display", "none");
        })

        $("#statistic-details").on("change", function () {
            $("#ship-container").css("display", "none");
            $("#skill-container").css("display", "none");
            $("#statistic-details-container").css("display", "inline-block");
        })

    }

    return {
        generate: generate
    }
})();