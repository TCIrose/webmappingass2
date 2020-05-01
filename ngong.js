//leaflet map initializer
var nmap = document.getElementById("map");
var map = L.map(nmap, {
    center: [-1.358609, 36.656285],
    zoom: 16,
    trackResize: true,
    boxZoom: true,
    scrollWheelZoom: true,

});
//add tile (base map)
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);

//
var banks, churches, petStations, schools, shopCntrs = null;


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
var bb = document.getElementById("sb");
$("#sb").click(function() {
    if (map.hasLayer(banks)) {
        map.removeLayer(banks);
    } else {
        $.getJSON("data/banks.geojson", function(data) {
            banks = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(feature.properties.name);

                }
            }).addTo(map);
        });
    }
});

$("#ch").click(function() {
    if (map.hasLayer(churches)) {
        map.removeLayer(churches);
    } else {
        $.getJSON("data/churches.geojson", function(data) {
            churches = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(`${feature.properties.name} <br/> <img src='images/pcea.jpg' alt = 'pcea'>`);
                }
            }).addTo(map);
        });
    }
});

$("#ps").click(function() {
    if (map.hasLayer(petStations)) {
        map.removeLayer(petStations);
    } else {
        $.getJSON("data/petrol_stations.geojson", function(data) {
            petStations = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(feature.properties.name);
                }
            }).addTo(map);
        });
    }
});

$("#sch").click(function() {
    if (map.hasLayer(schools)) {
        map.removeLayer(schools);
    } else {
        $.getJSON("data/schools.geojson", function(data) {
            schools = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(feature.properties.name);
                }
            }).addTo(map);
        });
    }
});

$("#shcs").click(function() {
    if (map.hasLayer(shopCntrs)) {
        map.removeLayer(shopCntrs);
    } else {
        $.getJSON("data/shopping_centres.geojson", function(data) {
            shopCntrs = L.geoJson(data, {
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(`${feature.properties.name} `);

                }
            }).addTo(map);
        });
    }
});