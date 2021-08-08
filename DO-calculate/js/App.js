$(function () {
    const url = new URL(window.location.href);
    const shipBase = url.searchParams.get("shipBase");
    const ship = url.searchParams.get("ship");

    if(shipBase === null || ship === null) {
        window.location.replace("index.html");
    }

    data.setAsyncAjax(false);
    data.loadAllData();

    bonuses.setBonuses(data.getBonuses());

    status.setShip(shipBase, ship);

    document.getElementById('file-output').addEventListener('click', status.save, false);
    document.getElementById('share').addEventListener('click', status.share, false);
    document.getElementById('file-input').addEventListener('change', status.load, false);

    const shipData = data.getShip(shipBase, ship);
    $("#ship-select-container").append(shipSelectGenerator.create(data.getShips(), ship));
    generator.generate(shipData, statusConverter.convertLinkParametersToObject(url));
    statisticsGenerator.refresh();
});