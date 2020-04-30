//leaflet map initializer
var nmap = document.getElementById("map");
var map = L.map(nmap, {
    center: [-1.358609, 36.656285],
    zoom: 15,
    trackResize: true,
    boxZoom: true,
    scrollWheelZoom: true,

});
//add tile (base map)
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);

//display longitude and latitude onclick 
var longlat = L.popup();

function onMapClick(e) {
    longlat
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on("click", onMapClick);

//adding GeoJSON points and binding them with popups