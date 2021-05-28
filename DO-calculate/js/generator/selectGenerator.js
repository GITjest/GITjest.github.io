const selectGenerator = (function () {
    function updateItemUpgradeSelect(id, maxUpgrade) {
        let lastUpgradeValue = $("#upgrade-" + id).val();
        $("#upgrade-" + id).empty()
            .append(createNumberOptions(maxUpgrade))
            .selectpicker('refresh')
            .selectpicker('val', lastUpgradeValue > maxUpgrade ? maxUpgrade : lastUpgradeValue);
    }

    function createSelect(options, id, title, onChangeEvent) {
        let select = $("<select>", {
            "class": "selectpicker form-control",
            "id": id,
            "title": title
        }).append(options);
        select.on('change', onChangeEvent);
        return select;
    }

    function createItemOptionGroup(items, groupName) {
        return `<optgroup label="${groupName}">${createItemOptions(items, groupName)}</optgroup>`;
    }

    function createItemOptions(items, groupName) {
        let output = [];
        for (let item in items) {
            let dataContent = items[item].image
                ? `<img src='images/${items[item].image}' alt='${item}' title='${items[item].description}'/>`
                : `<span title='${items[item].description}'>${item}<span/>`;
            output.push(`<option 
                    value="${item}" 
                    data-tokens="${groupName}" 
                    data-content="${dataContent}">
                </option>`);
        }
        return output.join("\n");
    }

    function createItemOptionsWithImageAndText(items, groupName) {
        let output = [];
        for (let item in items) {
            let dataContent =
                `<img src='images/${items[item].image}' alt='${item}' title='${items[item].description}'/> ${item}`;
            output.push(`<option 
                    value="${item}" 
                    data-tokens="${groupName}" 
                    data-content="${dataContent}">
                </option>`);
        }
        return output.join("\n");
    }

    function createNumberOptions(max) {
        let output = [];
        output.push('<option value="1" selected>1</option>');
        for (let i = 2; i <= max; i++) {
            output.push('<option value="' + i + '">' + i + '</option>');
        }
        return output.join("\n");
    }

    function setLimitSelectedItem(object, limit) {
        $(object).find('optgroup').each(function () {
            let count = 0;
            $(this).find('option').each(function () {
                if ($(this).prop('selected')) {
                    count++;
                    if (count > limit) {
                        $(this).attr("selected", false);
                    }
                }
            });
        });
        $(object).selectpicker('refresh');
    }

    return {
        updateItemUpgradeSelect: updateItemUpgradeSelect,
        createSelect: createSelect,
        createItemOptionGroup: createItemOptionGroup,
        createItemOptions: createItemOptions,
        createItemOptionsWithImageAndText: createItemOptionsWithImageAndText,
        createNumberOptions: createNumberOptions,
        setLimitSelectedItem: setLimitSelectedItem
    }
})();