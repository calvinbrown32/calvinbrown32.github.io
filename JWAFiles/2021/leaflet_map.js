
var map = L.map('map');
map.createPane('lirr');
    map.getPane('lirr').style.zIndex = 640;

map.createPane('stops');
    map.getPane('stops').style.zIndex = 660;

map.createPane('bus');
    map.getPane('bus').style.zIndex = 650;


    var route2outboundline = L.geoJson(route2outboundline, {
               color: "#9595e2",
             weight: 2,
                  opacity: 6,
                  pane: 'bus'
       }).addTo(map);

   var route2inboundline = L.geoJson(route2inboundline, {
    color: "#2b2bc4",
        weight: 1.5,
        opacity: 6,
        pane: 'bus'
    }).addTo(map);

   var maxline = L.geoJson(maxline, {
    color: "#f9d831",
        weight: 4.5,
        opacity: 6,
        pane: 'lirr'
    }).addTo(map);

    var geojsonMarkerOptions = {
    radius: 3.5,
    fillColor: "#ffffff",
    color: "#000",
    pane: "stops",
    weight: .5,
    opacity: 1,
    fillOpacity: 0.8
    };
       var geojsonMarkerOptionsOutbound = {
    radius: 3,
    fillColor: "#9595e2",
    color: "#000",
    pane: "stops",
    weight: .5,
    opacity: 1,
    fillOpacity: 0.8
    };
       var geojsonMarkerOptionsInbound = {
    radius: 3,
    fillColor: "#2b2bc4",
    color: "#000",
    pane: "stops",
    weight: .5,
    opacity: 1,
    fillOpacity: 0.8
};

function onEachFeature(feature, layer) {
		var popupContent = "" ;

		if (feature.properties && feature.properties.STATION ) {
			popupContent += feature.properties.STATION;
		}

        	if (feature.properties && feature.properties.stop_name) {
			popupContent += feature.properties.stop_name;
		}

		if (feature.properties && feature.properties.SumByStati) {
			popupContent += "<h6>" + (feature.properties.SumByStati) + " people live in the residential coverage area for this station</h6>";
		}

		if (feature.properties && feature.properties.vorbguni_1) {
			popupContent += "<h6>" + (feature.properties.vorbguni_1) + " people live in the residential coverage area for this bus stop. </h6>";
		}

		if (feature.properties && feature.properties.outPopSum) {
			popupContent += "<h6>" + (feature.properties.outPopSum) + " people live in the residential coverage area for this bus stop </h6>";
		}

		layer.bindPopup(popupContent);
	}

L.geoJSON(maxstops, {

	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);

L.geoJSON(route2outboundstops, {

	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptionsOutbound);
    }
}).addTo(map);

L.geoJSON(route2inboundstops, {

	onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptionsInbound);
    }
}).addTo(map);


map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: cartodbAttribution
}).addTo(map);
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
attribution: cartodbAttribution,
pane: 'labels'
}).addTo(map);

map.setView([45.55733331588203, -122.53807067871094], 12);




// control that shows state info on hover


var info = L.control();
    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };
    info.update = function (props) {
        this._div.innerHTML = '<b>Click on features for more info</b>';
    };
    info.addTo(map);


var legend = L.control({position: 'bottomright'});


legend.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info legend');


div.innerHTML = 'TriMet ' + '<br>' + '<span style="color:#2b2bc4;">──</span>  Route 2 Inbound' + '<br>' + '<span style="color:#9595e2;">──</span>  Route 2 Outbound'+ '<br>' + '<span style="color:#f9d831;">──</span>  MAX Yellow Line' ;
return div;
};

legend.addTo(map);


map.setView([45.55733331588203, -122.53807067871094], 12);
