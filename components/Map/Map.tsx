import {useEffect, useState} from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css"
import styles from "../../styles/Home.module.css";


const Map = () => {

    // State Hooks
    let [foodTrucks, setFoodTrucks] = useState([]);

    // Fetch data from sfgov.org
    useEffect(() => {
        fetch("https://data.sfgov.org/resource/rqzj-sfat.json")
          .then(response => response.json())
          .then(data => setFoodTrucks(data))
          .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <MapContainer center={[37.7749, -122.4194]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {foodTrucks ? foodTrucks.map(() => {})} */}
            </MapContainer>
        </div>
    )
}

export default Map