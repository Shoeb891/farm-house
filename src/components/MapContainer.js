import React, { useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const MapContainer = () => {
  useEffect(() => {
    const initialize = () => {
      const hyderabad = { lat: 17.39737181307584, lng: 78.40050358184165 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: hyderabad,
        zoom: 14,
      });

      const streetViewService = new window.google.maps.StreetViewService();
      const STREET_VIEW_MAX_DISTANCE = 50;
      const panorama = new window.google.maps.StreetViewPanorama(
        document.getElementById("pano")
      );

      streetViewService.getPanorama(
        { location: hyderabad, radius: STREET_VIEW_MAX_DISTANCE },
        (data, status) => {
          if (status === "OK") {
            panorama.setPano(data.location.pano);
            panorama.setPov({
              heading: 270,
              pitch: 0,
            });
            panorama.setVisible(true);
          } else {
            console.error("Street View data not found for this location.");
          }
        }
      );

      const marker = new window.google.maps.Marker({
        position: hyderabad,
        map: map,
        title: "Universal Farms",
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: "<h4>Universal Farms</h4>",
      });

      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    };

    if (window.google) {
      initialize();
    } else {
      // Load the Google Maps JavaScript API script dynamically
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initialize&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="map--container">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <div id="pano" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MapContainer;
