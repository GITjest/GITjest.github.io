const statusConverter = (function () {

    function convertObjectToLinkParameters(object) {
        return "?shipBase=" + object.ship.shipBase
            + "&ship=" + object.ship.ship
            + shipLaserParameters(object.ship.shipLasers)
            + shipGeneratorsParameters(object.ship.shipGenerators)
            + dronesParameters(object.drones)
            + boostersParameters(object.otherItems.boosters)
            + modulesParameters(object.otherItems.modules)
            + formationParameters(object.otherItems.formation)
            + oresParameters(object.otherItems.ores)
            + otherParameters(object.otherItems.other)
            + skillTreeParameters(object.skillTree);
    }

    function shipLaserParameters(shipLasers) {
        let sl = "";
        for(let laser of shipLasers) {
            sl += "&sl=";
            if(laser) sl += laser.name + "|" + laser.upgrade;
        }
        return sl;
    }

    function shipGeneratorsParameters(shipGenerators) {
        let sg = "";
        for(let generator of shipGenerators) {
            sg += "&sg=";
            if(generator) sg += generator.name + "|" + generator.upgrade;
        }
        return sg;
    }

    function dronesParameters(drones) {
        let dr = "";
        for(let drone of drones) {
            dr += "&dr=";
            if(drone) {
                dr += drone.design + "|" + drone.level + "|" + drone.upgrade;
                for(let item of drone.items) {
                    dr += "|" + item.name + "|" + item.upgrade;
                }
            }
        }
        return dr;
    }

    function boostersParameters(boosters) {
        let bo = "";
        for(let boost of boosters) {
            bo += "&bo=" + boost;
        }
        return bo;
    }

    function modulesParameters(modules) {
        let mo = "";
        for(let module of modules) {
            mo += "&mo=" + module;
        }
        return mo;
    }

    function formationParameters(formation) {
        return "&fo=" + formation;
    }

    function oresParameters(ores) {
        return "&lo=" + ores.laserOre
            + "&ro=" + ores.rocketOre
            + "&so=" + ores.shieldOre
            + "&go=" + ores.generatorOre;
    }

    function otherParameters(other) {
        return  "&inf=" + other.infection
            + "&pre=" + other.premium;
    }

    function skillTreeParameters(skillTree) {
        let st = "";
        for(let skill in skillTree) {
            st += "&st=" + skill + "|" + skillTree[skill].amount;
        }
        return st;
    }

    function convertLinkParametersToObject(url) {
        return {
            "ship": {
                "shipLasers" : shipLaserObject(url.searchParams.getAll("sl")),
                "shipGenerators": shipGeneratorsObject(url.searchParams.getAll("sg"))
            },
            "drones": dronesObject(url.searchParams.getAll("dr")),
             "otherItems": {
                 "boosters": url.searchParams.getAll("bo"),
                 "modules": url.searchParams.getAll("mo"),
                 "formation": url.searchParams.get("fo"),
                 "ores": {
                     "laserOre": url.searchParams.get("lo"),
                     "rocketOre": url.searchParams.get("ro"),
                     "generatorOre": url.searchParams.get("go"),
                     "shieldOre": url.searchParams.get("so")
                 },
                 "other": {
                     "infection": url.searchParams.get("inf"),
                     "premium": url.searchParams.get("pre")
                 }
             },
             "skillTree": skillTreeObject(url.searchParams.getAll("st"))
       }
    }

    function shipLaserObject(objects) {
        let lasers = [];
        for(let laser of objects) {
            let split = laser.split("|");
            lasers.push({"name": split[0], "upgrade": split[1]});
        }
        return lasers;
    }

    function shipGeneratorsObject(objects) {
        let generators = [];
        for(let generator of objects) {
            let split = generator.split("|");
            generators.push({"name": split[0], "upgrade": split[1]});
        }
        return generators;
    }

    function dronesObject(objects) {
        let drones = [];
        for(let drone of objects) {
            let split = drone.split("|");
            drones.push({
                "design": split[0],
                "level": split[1],
                "upgrade": split[2],
                "items": [
                    {"name": split[3], "upgrade": split[4]},
                    {"name": split[5], "upgrade": split[6]}
                ]
            });
        }
        return drones;
    }

    function skillTreeObject(objects) {
        let skillTree = {};
        for(let skill of objects) {
            let split = skill.split("|");
            skillTree[split[0]] = {"amount": parseInt(split[1])};
        }
        return skillTree;
    }

    return {
        convertObjectToLinkParameters: convertObjectToLinkParameters,
        convertLinkParametersToObject: convertLinkParametersToObject
    }
})();