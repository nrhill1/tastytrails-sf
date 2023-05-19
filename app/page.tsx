// ./app/page.tsx

import "../styles/globals.css";

import Map from "../components/Map";


export default function Home() {
    return (
        <div className="map_container">
            <h1 className="text-6xl font-bold">
                TastyTrails SF
            </h1>
            <Map />
        </div>
    );
}