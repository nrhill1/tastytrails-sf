// ./app/page.tsx

import "../styles/globals.css";

import Map from "../components/Map";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <div className="map_container">
        <h1 className="transition text-5xl font-bold underline hover:animate-psychedelic">
          TastyTrails SF
        </h1>
        <Navbar />
        <Map />
      </div>
    </div>
  );
}