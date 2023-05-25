// ./components/Map/LeafletControlGeocoder.ts

// React imports
import { useEffect } from 'react';

// Leaflet, Leaflet Control Geocoder & react-leaflet imports
import * as L from 'leaflet';
import { Geocoder, geocoders }from 'leaflet-control-geocoder';
import { useMap } from 'react-leaflet'

// LCG CSS imports
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";


function LeafletControlGeocoder() {
  const map = useMap();

  useEffect(() => {
    var gc = new Geocoder({
      geocoder: new geocoders.Nominatim(),
      position: "topleft",
      placeholder: "Type an address here & press enter...",
      defaultMarkGeocode: false,
      showUniqueResult: true
    })
    .on("markgeocode", function (e) {
      var latlng = e.geocode.center;
      L.marker(latlng)
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
      map.fitBounds(e.geocode.bbox);
    })
    gc.addTo(map);
  }, [map]);

  return null;
}

export default LeafletControlGeocoder;