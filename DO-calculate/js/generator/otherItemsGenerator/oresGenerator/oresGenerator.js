const oresGenerator = (function () {
    
    function createLaserOre() {
        let laserOres = [];
        for (let ore in ores) {
            if (ores[ore].laser > 0) {
                laserOres[ore] = ores[ore];
            }
        }
        return createOre(laserOres, "ore-laser", "Laser", laserOresOnchangeEvent);
    }

    function createRocketOre() {
        let rocketOres = [];
        for (let ore in ores) {
            if (ores[ore].rocket > 0) {
                rocketOres[ore] = ores[ore];
            }
        }
        return createOre(rocketOres, "ore-rocket", "Rocket", rocketOresOnchangeEvent);
    }

    function createGeneratorOre() {
        let generatorOres = [];
        for (let ore in ores) {
            if (ores[ore].generator > 0) {
                generatorOres[ore] = ores[ore];
            }
        }
        return createOre(generatorOres, "ore-generator", "Generator", generatorOresOnchangeEvent);
    }

    function createShieldOre() {
        let shieldOres = [];
        for (let ore in ores) {
            if (ores[ore].shield > 0) {
                shieldOres[ore] = ores[ore];
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
    }

    function rocketOresOnchangeEvent() {
        status.setRocketOre($(this).val());
    }

    function generatorOresOnchangeEvent() {
        status.setGeneratorOre($(this).val());
    }

    function shieldOresOnchangeEvent() {
        status.setShieldOre($(this).val());
    }
    
    return {
        createLaserOre: createLaserOre,
        createRocketOre: createRocketOre,
        createGeneratorOre: createGeneratorOre,
        createShieldOre: createShieldOre
    }
})();