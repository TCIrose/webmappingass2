//leaflet map initializer
var nmap = document.getElementById("map");
var map = L.map(nmap, {
    center: [-1.358609, 36.656285],
    zoom: 17,
    trackResize: true,
    boxZoom: true,
    scrollWheelZoom: true,

});
//add tile (base map)
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);

//adding points
var milelem = L.marker([-1.358202, 36.65703]).addTo(map);
var pchurch = L.marker([-1.357293, 36.657686]).addTo(map);
var nba = L.marker([-1.358609, 36.656285]).addTo(map);
var naivas = L.marker([-1.360946, 36.656529]).addTo(map);
//adding interactivity with popups
milelem.bindPopup("<h3>Milele Mall</h3><p><img src='images/milele mall.jpg' align = 'left'><br clear ='left'/>Ample parking space available.</p>");
pchurch.bindPopup("<h3>PCEA Enchoro Emuny Church</h3><p><img src='images/pcea.jpg'>Sunday Services from 8:00am</p>");
nba.bindPopup("<h3>Ngong' Business Arcade</h3><p><img src='images/nba.jpg'></p>");
naivas.bindPopup("<h3>Naivas Supermarket</h3><p><img src='images/naivas.jpg'></p>");