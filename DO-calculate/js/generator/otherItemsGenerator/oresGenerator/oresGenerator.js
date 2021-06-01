const oresGenerator = (function () {
    
    function createLaserOre() {
        let laserOres = [];
        for (let ore in data.getOres()) {
            if (data.getOre(ore).laser > 0) {
                laserOres[ore] = data.getOre(ore);
            }
        }
        return createOre(laserOres, "ore-laser", "Laser", laserOresOnchangeEvent);
    }

    function createRocketOre() {
        let rocketOres = [];
        for (let ore in data.getOres()) {
            if (data.getOre(ore).rocket > 0) {
                rocketOres[ore] = data.getOre(ore);
            }
        }
        return createOre(rocketOres, "ore-rocket", "Rocket", rocketOresOnchangeEvent);
    }

    function createGeneratorOre() {
        let generatorOres = [];
        for (let ore in data.getOres()) {
            if (data.getOre(ore).generator > 0) {
                generatorOres[ore] = data.getOre(ore);
            }
        }
        return createOre(generatorOres, "ore-generator", "Generator", generatorOresOnchangeEvent);
    }

    function createShieldOre() {
        let shieldOres = [];
        for (let ore in data.getOres()) {
            if (data.getOre(ore).shield > 0) {
                shieldOres[ore] = data.getOre(ore);
            }
        }
        return createOre(shieldOres, "ore-shield", "Shield", shieldOresOnchangeEvent);
    }

    function createOre(ores, id, groupName, onChangeEvent) {
        let options = `<option value="""></option>` + selectGenerator.createItemOptionsWithImageAndText(ores, groupName);
        let select = selectGenerator.createSelect(options, id, groupName, onChangeEvent);
        select.attr({
            "class": "selectpicker"
        });
        select.val([]);
        return select;
    }

    function laserOresOnchangeEvent() {
        status.setLaserOre($(this).val());
        statisticsGenerator.refresh();
    }

    function rocketOresOnchangeEvent() {
        status.setRocketOre($(this).val());
        statisticsGenerator.refresh();
    }

    function generatorOresOnchangeEvent() {
        status.setGeneratorOre($(this).val());
        statisticsGenerator.refresh();
    }

    function shieldOresOnchangeEvent() {
        status.setShieldOre($(this).val());
        statisticsGenerator.refresh();
    }
    
    return {
        createLaserOre: createLaserOre,
        createRocketOre: createRocketOre,
        createGeneratorOre: createGeneratorOre,
        createShieldOre: createShieldOre
    }
})();