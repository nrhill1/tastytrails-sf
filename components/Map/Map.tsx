// ./components/Map/Map.tsx

"use client";
import { useEffect, useState } from 'react';
import { icon } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';


const ICON = icon({
  iconUrl: "marker.png",
  iconSize: [16, 16],
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
                center={[37.7749, -122.4194]} zoom={13} scrollWheelZoom={true}
                style={{ width: '100%', height: '600px', margin: '0 auto' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {foodTrucks.length > 0 ? foodTrucks.map((truck) => {
                    console.log([parseFloat(truck.longitude), parseFloat(truck.latitude)])
                    return (
                        <Marker
                            position={[parseFloat(truck.latitude), parseFloat(truck.longitude)]}
                            key={Math.random()}
                            icon={ICON}>
                            <Popup>
                                <h3>{truck.applicant}</h3> <br/>
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