const generator = (function () {

    function generate(ship, data) {
        shipGenerator.generate(ship, data?.ship, data?.drones);

        $("#boosters-container")
            .append(boostersGenerator.create());

        $("#modules-container")
            .append(modulesGenerator.create(ship));

        $("#drone-formations-container")
            .append(droneFormationGenerator.create());

        $("#ores-container")
            .append(oresGenerator.createLaserOre())
            .append(oresGenerator.createRocketOre())
            .append(oresGenerator.createGeneratorOre())
            .append(oresGenerator.createShieldOre());

        $("#other-items-container")
            .append(otherItemsGenerator.createInfection())
            .append(otherItemsGenerator.createPremium());

        if(data?.otherItems) {
            if(data.otherItems.boosters) boostersGenerator.setData(data.otherItems.boosters);
            if(data.otherItems.modules) modulesGenerator.setData(data.otherItems.modules);
            if(data.otherItems.formation) droneFormationGenerator.setData(data.otherItems.formation);
            if(data.otherItems.ores) oresGenerator.setData(data.otherItems.ores);
            if(data.otherItems.other) otherItemsGenerator.setData(data.otherItems.other);
        }

        $("#skill-tree-container")
            .on("contextmenu", function (e) {return false;})
            .append(skillTreeGenerator.create());
        skillTreeGenerator.updateSkills();

        if(data?.skillTree) skillTreeGenerator.setData(data.skillTree);

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