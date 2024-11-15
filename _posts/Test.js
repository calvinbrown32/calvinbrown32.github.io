<!DOCTYPE html>
<html>
<head>

	<title>First Web Map</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js" integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==" crossorigin=""></script>

    <script src="https://calvinbrown32.github.io/geojson/NYC/Projects.js" type="text/javascript"></script>

<style>
.center {
  margin: auto;
  width: 60%;
  padding: 10px;
}
</style>

</head>



<body>


<div id="mapid" class="center" style="width: 600px; height: 400px;"></div>


<script>

var mymap = L.map('mapid').setView([40.74, -73.95], 13);

    L.geoJson(ThomsonVanBuren,).addTo(mymap);
    L.geoJson(skycenter,).addTo(mymap);
       L.geoJson(licpedmap,).addTo(mymap);
        L.geoJson(mtaroutet,).addTo(mymap);
        L.geoJson(zoningareamap,).addTo(mymap);

// --Carto Tile Layer--
	var mymap = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd'
	}).addTo(mymap);




</script>



</body>
