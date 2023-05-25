// ./components/Map/Map.tsx
"use client";

// IMPORTS
import { useEffect, useState } from 'react';

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

    return (
        <div>
        </div>
    )
}

export default Map


