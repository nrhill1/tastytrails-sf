// ./components/Map/Map.tsx
"use client";

// React Imports
import { useEffect, useState } from 'react';

// Leaflet Imports
import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletControlGeocoder from './LeafletControlGeocoder';
import data from "../../public/data.json"

// Style Imports
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import styles from "../../styles/Map.module.css"


// Icon for Food Truck
const TRUCK_ICON = icon({
  iconUrl: "truck.png",
  iconSize: [24, 32]
})

// This function formats an address properly before it's displayed in the Leaflet popup
function sfAddressFormatter(str: String) {

  if (str == "Assessors Block 7283/Lot004") {return "Lake Merced Park"}
  if (str == "Assessors Block 8732/Lot001") {return "Mission Bay Blvd. South & 4th St."}

  str =  str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())

  if (str.includes("01st")) {return str.replace("01st", "1st")}
  if (str.includes("02nd")) {return str.replace("02nd", "2nd")}
  if (str.includes("03rd")) {return str.replace("03rd", "3rd")}
  if (str.includes("04th")) {return str.replace("04th", "4th")}
  if (str.includes("05th")) {return str.replace("05th", "5th")}
  if (str.includes("06th")) {return str.replace("06th", "6th")}
  if (str.includes("07th")) {return str.replace("07th", "7th")}
  if (str.includes("08th")) {return str.replace("08th", "8th")}
  if (str.includes("09th")) {return str.replace("09th", "9th")}

  else {
    return str
  }
}

const Map: React.FC = () => {

  // State Hooks
  const [foodTrucks, setFoodTrucks] = useState<any[]>([]);

  // This block of code fetches data from sfgov.org -- APP TOKEN NO LONGER WORKING
  // useEffect(() => {
  //   fetch("https://data.sfgov.org/resource/rqzj-sfat.json", {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-App-Token": process.env.SFGOV_APP_TOKEN as string
  //     },
  //   })
  //   .then(response => (response.json()))
  //   .then(data => {
  //     console.log(data);
  //     setFoodTrucks(data);
  //   })
  //   .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    setFoodTrucks(data)
  }, [])

  return (
    <div className='mapcontainer_border'>
      <MapContainer
        center={[37.7749, -122.4194]} zoom={16} scrollWheelZoom={true}
        style={{ color: 'black', width: '100%', height: '78.5vh', margin: '0 auto', border: '2.5px whitesmoke solid', borderRadius: '10px' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {foodTrucks.length > 0 ? foodTrucks.map((truck) => {
          if (truck.address.toLowerCase() == "900 beach st") {
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
                  <p><b>Location:</b> {sfAddressFormatter(truck.address)}</p>
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


