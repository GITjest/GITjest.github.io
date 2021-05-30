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

    const shipData = data.getShip(shipBase, ship);
    generator.generate(shipData);

    // let json = JSON.stringify(ships, null, 1);
    // console.log(json);
});

