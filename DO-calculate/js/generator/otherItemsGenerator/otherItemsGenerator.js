const otherItemsGenerator = (function () {

    function createInfection() {
        return  createLabel(
            data.getOther("infection").description,
            "Infection",
            "infection",
            infectionOnChangeEvent
        );
    }
    
    function createPremium() {
        return createLabel(
            data.getOther("premium").description,
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

    function setData(data) {
        $("#infection").prop('checked', data.infection).change();
        $("#premium").prop('checked', data.premium).change();
    }
    
    return {
        createInfection: createInfection,
        createPremium: createPremium,
        setData: setData
    }
})();