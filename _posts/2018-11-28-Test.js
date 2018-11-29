

<div id="mapid" style="width: 600px; height: 400px;"></div>


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
