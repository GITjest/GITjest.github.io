const status = (function () {

    function save() {
        download(createData(), createFileName());
    }

    function createData() {
        return {
            "ship": shipStatus.getStatus(),
            "drones": dronesStatus.getStatus(),
            "otherItems": otherItemStatus.getStatus(),
            "skillTree": skillStatus.getStatus()
        }
    }

    function createFileName() {
        let now = new Date()
        let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate()
            + "_" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
        return shipStatus.getShip() + "_" + date;
    }

    function download(data, fileName) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
        element.setAttribute('download', fileName + ".json");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    function load(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            console.log(contents);
        };
        reader.readAsText(file);
    }

    return {
        setShip: shipStatus.setShip,
        getShip: shipStatus.getShip,
        getShipBase: shipStatus.getShipBase,
        setLaser: shipStatus.setLaser,
        setLaserUpgrade: shipStatus.setLaserUpgrade,
        getLaser: shipStatus.getLaser,
        setGenerator: shipStatus.setGenerator,
        setGeneratorUpgrade: shipStatus.setGeneratorUpgrade,
        getGenerator: shipStatus.getGenerator,
        setDroneDesign: dronesStatus.setDroneDesign,
        setDroneLevel: dronesStatus.setDroneLevel,
        setDroneUpgrade: dronesStatus.setDroneUpgrade,
        setDroneItem: dronesStatus.setDroneItem,
        setDroneItemUpgrade: dronesStatus.setDroneItemUpgrade,
        isDroneActive: dronesStatus.isDroneActive,
        setBoosters: otherItemStatus.setBoosters,
        setModules: otherItemStatus.setModules,
        setDroneFormation:otherItemStatus.setDroneFormation,
        setLaserOre: otherItemStatus.setLaserOre,
        setRocketOre: otherItemStatus.setRocketOre,
        setGeneratorOre: otherItemStatus.setGeneratorOre,
        setShieldOre: otherItemStatus.setShieldOre,
        setInfection: otherItemStatus.setInfection,
        setPremium: otherItemStatus.setPremium,
        getSkillAmount: skillStatus.getSkillAmount,
        getSkills: skillStatus.getSkills,
        isSkillActive: skillStatus.isSkillActive,
        addSkillPoint: skillStatus.addSkillPoint,
        subSkillPoint: skillStatus.subSkillPoint,
        isMaxAmount: skillStatus.isMaxAmount,
        setSkill: skillStatus.setSkill,
        save: save,
        load: load
    }
})();