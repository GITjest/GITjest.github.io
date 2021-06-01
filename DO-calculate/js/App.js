$(function () {
    const url = new URL(window.location.href);
    const shipBase = url.searchParams.get("shipBase");
    const ship = url.searchParams.get("ship");

    if(shipBase === null || ship === null) {
        window.location.replace("index.html");
    }

    $("#ship").on("change", function () {
        $("#ship-container").css("display", "inline-block");
        $("#skill-container").css("display", "none");
        $("#statistic-details-container").css("display", "none");
    })

    $("#skill-tree").on("change", function () {
        $("#ship-container").css("display", "none");
        $("#skill-container").css("display", "inline-block");
        $("#statistic-details-container").css("display", "none");
    })

    $("#statistic-details").on("change", function () {
        $("#ship-container").css("display", "none");
        $("#skill-container").css("display", "none");
        $("#statistic-details-container").css("display", "inline-block");
    })

    data.setAsyncAjax(false);
    data.loadAllData();

    bonuses.setBonuses(data.getBonuses());

    status.setShip(shipBase, ship);

    const shipData = data.getShip(shipBase, ship);
    $("#ship-select-container").append(shipSelectGenerator.create(data.getShips(), ship));
    generator.generate(shipData);
    statisticsGenerator.refresh();
});

