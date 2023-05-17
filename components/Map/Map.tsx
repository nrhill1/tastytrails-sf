import { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css"
import styles from "../../styles/Home.module.css";


const Map: React.FC = () => {

    // State Hooks
    let [foodTrucks, setFoodTrucks] = useState<any[]>([]);

    // Fetch data from sfgov.org
    useEffect(() => {
        fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
            .then(response => response.json())
            .then(data => setFoodTrucks(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <MapContainer center={[37.7749, -122.4194]} zoom={13} className="foodtruck-map" scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {foodTrucks ? foodTrucks.map((truck) => {
                    return (
                        <Marker position={[truck.longitude, truck.latitude]} key={Math.random()}>
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