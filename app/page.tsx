// ./app/page.tsx

import "../styles/globals.css";

import Map from "../components/Map";


export default function Home() {
    return (
        <div className="map_container">
            <h1 className="transition text-4xl font-bold underline hover:animate-psychedelic">
                TastyTrails SF
            </h1>
            <Map />
        </div>
    );
}