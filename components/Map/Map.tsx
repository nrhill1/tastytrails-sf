// ./components/Map/Map.tsx
"use client";

// IMPORTS
import { useEffect, useState, useMemo } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

// Import custom CSS
import styles from "../../styles/Map.module.css"

// This function formats an address properly before it's displayed in the popup
function addressFormatter(str: String) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()) + "."
}

const Map: React.FC = (props) => {
  // State Hooks
  const [foodTrucks, setFoodTrucks] = useState<any[]>([]);

  // Fetch data from sfgov.org
  useEffect(() => {
    fetch("https://data.sfgov.org/resource/rqzj-sfat.json", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "X-App-Token": process.env.SFGOV_APP_TOKEN as string
      },
    })
    .then(response => (response.json()))
    .then(data => {
      console.log(data);
      setFoodTrucks(data);
    })
    .catch(err => console.log(err))
  }, [])

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: -122.4194, lng: 37.7749 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      clickableIcons: true,
      scrollwheel: false,
    }),
    [] 
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return(
      <h2 id="loading" className="animate-bounce text-3xl font-bold text-center align-middle">
        Loading...
      </h2>
    )
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '92.5%', height: '600px', margin: '0 auto' }}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        {foodTrucks.length > 0 ? foodTrucks.map((truck) => {
          if (truck.address.toLowerCase() == "900 beach st"){
            return null
          } else {
            return (
              <Marker
                position={{lat: parseFloat(truck.latitude), lng: parseFloat(truck.longitude)}}
                key={Math.random()}
                // icon={TRUCK_ICON}
              >
                {/* <Popup className={styles.item_popup}>
                  <h3><b><u>{truck.applicant}</u></b></h3>
                  <p><b>Location:</b> {addressFormatter(truck.address)}</p>
                </Popup> */}
              </Marker>
            )
          }
        }) : null}
      </GoogleMap>
    </div>
  )
}

export default Map


