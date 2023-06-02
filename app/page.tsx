// ./app/page.tsx
"use client";

// Component Imports
import AuthButton from '../components/AuthButton'
import Header from '../components/Header'
import Map from "../components/Map";
import Navbar from "../components/Navbar";
// Style Imports
import "../styles/globals.css";
import styles from "../styles/page.module.css"


export default function Home() {
  return (
    <div>
      <Header />
      {/* <AuthButton /> */}
      <div className="map_container">
        <Navbar />
        <Map />
      </div>
    </div>
  );
}