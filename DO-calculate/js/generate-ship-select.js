$(function () {
    const url = new URL(window.location.href);

    for (let shipBase in data.getShips()) {
        let shipSelect = $("<optgroup>", {"label": shipBase});
        for (let ship in data.getShips()[shipBase]) {
            let option = $("<option>", {
                "value": "calculate.html?shipBase=" + shipBase + "&ship=" + ship,
                "data-tokens": shipBase
              //  "data-content": `<span title='${ships[shipBase][ship].description()}'>${ship}<span/>`
            });

            if (url.searchParams.get("ship") === ship) option.attr("selected", "true");

            shipSelect.append(option);
        }
        $("#select-ship").append(shipSelect);
    }
});