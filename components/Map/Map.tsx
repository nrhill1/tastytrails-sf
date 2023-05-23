// ./components/Map/Map.tsx
"use client";

import { useEffect, useState } from 'react';
import { icon } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

import styles from "../../styles/Map.module.css"


const ICON = icon({
  iconUrl: "marker.png",
  iconSize: [14, 10]
})


const Map: React.FC = () => {

    // State Hooks
    const [foodTrucks, setFoodTrucks] = useState<any[]>([]);

    // Fetch data from sfgov.org
    useEffect(() => {
        fetch("https://data.sfgov.org/resource/rqzj-sfat.json", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "X-App-Token": "hm9tRHSsO3Rwiveun3u02Wath"
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
                style={{ width: '100%', height: '600px', margin: '0 auto', border: '1.5px whitesmoke solid', borderRadius: '10px', marginBottom: '20px' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {foodTrucks.length > 0 ? foodTrucks.map((truck) => {
                    return (
                        <Marker
                            position={[parseFloat(truck.latitude), parseFloat(truck.longitude)]}
                            key={Math.random()}
                            icon={ICON}
                        >
                            <Popup>
                                <h3>{truck.applicant}</h3>
                                <p>{truck.address}</p>
                            </Popup>
                        </Marker>
                    )
                }) : null}
            </MapContainer>
        </div>
    )
}

export default Map


