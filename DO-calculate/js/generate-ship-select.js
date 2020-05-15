$(function () {
    const url = new URL(window.location.href);

    for (let shipBase in ships) {
        let shipSelect = $("<optgroup>", {"label": shipBase});
        for (let ship in ships[shipBase]) {
            let option = $("<option>", {
                "value": "calculate.html?shipBase=" + shipBase + "&ship=" + ship,
                "data-tokens": shipBase,
                "data-content": `<span title='${ships[shipBase][ship].description()}'>${ship}<span/>`
            });

            if (url.searchParams.get("ship") === ship) option.attr("selected", "true");

            shipSelect.append(option);
        }
        $("#select-ship").append(shipSelect);
    }
});