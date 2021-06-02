const data = (function () {
    let bonuses = {};

    let ships = {};

    let lasers = {};
    let generators = {};
    let shields = {};

    let droneDesigns = {};

    let boosters = {};
    let droneFormations = {};
    let modules = {};
    let ores = {};
    let others = {};

    let skills = {};

    let config = {};

    function setAsyncAjax(set) {
        $.ajaxSetup({
            async: set
        });
    }

    function getJSONData(url) {
        let data = null;
        $.getJSON(url, function(json) {
            data = json;
        });
        return data;
    }

    function loadAllData() {
        bonuses = getJSONData("./data/bonuses.json");

        loadShips();

        lasers = getJSONData("./data/lasers.json");
        generators = getJSONData("./data/generators.json");
        shields = getJSONData("./data/shields.json");
        droneDesigns = getJSONData("./data/droneDesigns.json");

        boosters = getJSONData("./data/boosters.json");
        droneFormations = getJSONData("./data/droneFormations.json");
        modules = getJSONData("./data/modules.json");
        ores = getJSONData("./data/ores.json");
        others = getJSONData("./data/others.json");

        skills = getJSONData("./data/skills.json");

        config = getJSONData("./data/config.json");
    }

    function loadShips() {
        ships = getJSONData("./data/ships.json");
    }

    function getBonuses() {
        return bonuses;
    }

    function getShips() {
        return ships;
    }

    function getShip(shipBase, ship) {
        return ships[shipBase][ship];
    }

    function getLasers() {
        return lasers;
    }

    function getGenerators() {
        return generators;
    }

    function getShields() {
        return shields;
    }

    function getDroneDesigns() {
        return droneDesigns;
    }

    function getDroneDesign(droneDesign) {
        return droneDesigns[droneDesign];
    }

    function getBoosters() {
        return boosters;
    }

    function getBooster(booster) {
        return boosters[booster];
    }

    function getDroneFormations() {
        return droneFormations;
    }

    function getDroneFormation(formation) {
        return droneFormations[formation];
    }

    function getModules() {
        return modules;
    }

    function getTypeModule(type) {
        return modules[type];
    }

    function getModule(type, module) {
        return modules[type][module];
    }

    function getOres() {
        return ores;
    }

    function getOre(ore) {
        return ores[ore];
    }

    function getOther(data) {
        return others[data];
    }

    function getSkills() {
        return skills;
    }

    function getTypeSkills(skillType) {
        return skills[skillType];
    }

    function getSkill(skillType, skill) {
        return skills[skillType][skill];
    }

    function getConfigData(data) {
        return config[data];
    }

    return {
        setAsyncAjax: setAsyncAjax,
        loadAllData: loadAllData,
        loadShips: loadShips,
        getBonuses: getBonuses,
        getShips: getShips,
        getShip: getShip,
        getLasers: getLasers,
        getGenerators: getGenerators,
        getShields: getShields,
        getDroneDesigns: getDroneDesigns,
        getDroneDesign: getDroneDesign,
        getBoosters: getBoosters,
        getBooster: getBooster,
        getDroneFormations: getDroneFormations,
        getDroneFormation: getDroneFormation,
        getModules: getModules,
        getTypeModule: getTypeModule,
        getModule: getModule,
        getOres: getOres,
        getOre: getOre,
        getOther: getOther,
        getSkills: getSkills,
        getTypeSkills: getTypeSkills,
        getSkill: getSkill,
        getConfigData: getConfigData
    }
})();