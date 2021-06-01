const otherItemsGenerator = (function () {

    function createInfection() {
        return  createLabel(
            "10% Damage&#10;-15% HP&#10;-10% Speed",
            "Infection",
            "infection",
            infectionOnChangeEvent
        );
    }
    
    function createPremium() {
        return createLabel(
            "50% shorter rocket reload time&#10;+100% repair robot efficiency&#10;500 extra units of cargo space",
            "Premium",
            "premium",
            premiumOnChangeEvent
        );
    }

    function infectionOnChangeEvent() {
        status.setInfection(this.checked);
        statisticsGenerator.refresh();
    }

    function premiumOnChangeEvent() {
        status.setPremium(this.checked);
        statisticsGenerator.refresh();
    }

    function createLabel(title, text, id, onChangeEvent) {
        let input = $("<input>", {"type": "checkbox", "id": id});
        input.on('change', onChangeEvent);
        return $("<label>", {"class": "checkmark-label", "text": text, "title": title})
            .append(input)
            .append($("<span>", {"class": "checkmark"}));
    }
    
    return {
        createInfection: createInfection,
        createPremium: createPremium
    }
})();