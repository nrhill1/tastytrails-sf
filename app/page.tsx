// ./app/page.tsx
"use client";

// Component Imports
import Header from '../components/Header'
import Map from "../components/Map";
import Navbar from "../components/Navbar";

// Style Imports
import "../styles/globals.css";


export default function Home() {
  const {data: session} = useSession()
  return (
    <div>
      <Header />
      <div className="map_container">
        <Navbar />
        <Map />
      </div>
    </div>
  );
}