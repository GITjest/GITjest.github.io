$(function () {
    data.setAsyncAjax(false);
    data.loadShips();
    $("#ship-select-container").append(shipSelectGenerator.create(data.getShips(), null));
});