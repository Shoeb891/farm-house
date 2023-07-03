import React, { useEffect } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const API_KEY = process.env.REACT_APP_API_KEY;

const MapContainer = (props) => {
  useEffect(() => {
    const initialize = () => {
      const hyderabad = { lat: 17.39737181307584, lng: 78.40050358184165 };
      const map = new props.google.maps.Map(document.getElementById("map"), {
        center: hyderabad,
        zoom: 14,
      });
      const panorama = new props.google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
          position: hyderabad,
          pov: {
            heading: 34,
            pitch: 10,
          },
        }
      );

      // const marker = new props.google.maps.Marker({
      //   position: hyderabad,
      //   animation: props.google.maps.Animation.DROP,
      //   title: "7 Tombs Road",
      // });
      // marker.addListener("click", toggleBounce);
      // marker.setMap(map);

      // function toggleBounce() {
      //   if (marker.getAnimation() !== null) {
      //     marker.setAnimation(null);
      //   } else {
      //     marker.setAnimation(props.google.maps.Animation.BOUNCE);
      //   }
      // }

      map.setStreetView(panorama);
    };

    window.initialize = initialize;
    initialize();
  }, []);

  return (
    <div className="map--container">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <div id="pano" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
