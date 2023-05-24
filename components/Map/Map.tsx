// ./components/Map/Map.tsx
"use client";

// IMPORTS
import { useEffect, useState } from 'react';
import { icon }from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletControlGeocoder from './LeafletControlGeocoder';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

// Import custom CSS
import styles from "../../styles/Map.module.css"


// Icon for Food Truck
const TRUCK_ICON = icon({
  iconUrl: "marker.png",
  iconSize: [28, 36]
})

// This function formats an address properly before it's displayed in the Leaflet popup
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

    return (
        <div>
            <MapContainer
                center={[37.7749, -122.4194]} zoom={16} scrollWheelZoom={true}
                style={{ color: 'black', width: '100%', height: '620px', margin: '0 auto', border: '2.5px whitesmoke solid', borderRadius: '10px', marginBottom: '20px' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {foodTrucks.length > 0 ? foodTrucks.map((truck) => {
                    if (truck.address.toLowerCase() == "900 beach st"){
                        return null
                    } else {
                        return (
                            <Marker
                                position={[parseFloat(truck.latitude), parseFloat(truck.longitude)]}
                                key={Math.random()}
                                icon={TRUCK_ICON}
                            >
                                <Popup className={styles.item_popup}>
                                    <h3><b><u>{truck.applicant}</u></b></h3>
                                    <p><b>Location:</b> {addressFormatter(truck.address)}</p>
                                </Popup>
                            </Marker>
                        )
                    }
                }) : null}
                <LeafletControlGeocoder />
            </MapContainer>
        </div>
    )
}

export default Map


