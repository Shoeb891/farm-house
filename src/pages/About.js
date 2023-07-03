import React from "react";
import MapContainer from "../components/MapContainer";

export default function Home() {
  return (
    <div>
      <h1>About Page</h1>
      <div className="map--container">
        <MapContainer />
      </div>
    </div>
  );
}
