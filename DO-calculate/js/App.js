$(function () {
    const url = new URL(window.location.href);
    const shipBase = url.searchParams.get("shipBase");
    const ship = url.searchParams.get("ship");

    if(shipBase === null || ship === null) {
        window.location.replace("index.html");
    }

    let v = [];         //TODO
    for(let b in bonuses) {
        v.push(b);
    }

    status.init(v);
    status.setShip(shipBase, ship);

    const shipData = ships[status.getShipBase()][status.getShip()];
    generator.generate(shipData);
});