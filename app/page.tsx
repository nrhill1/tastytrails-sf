// ./app/page.tsx

import "./globals.css";

import Map from "../components/Map";


export default function Home() {
    return (
        <div className="foodtruck_map">
            <Map />
        </div>
    );
}