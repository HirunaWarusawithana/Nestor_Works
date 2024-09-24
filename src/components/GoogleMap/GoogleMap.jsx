"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = () => {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "quarterly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");
      const { DirectionsService, DirectionsRenderer } = await loader.importLibrary("directions");

      const locationInMap = {
        lat: 6.235306978864374,
        lng: 80.0547176197697,
      };

      const options = {
        center: locationInMap,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new Map(mapRef.current, options);

      // Marker
      const marker = new Marker({
        position: locationInMap,
        map: map,
        title: "Our Location",
      });

      // Directions part
      const directionsService = new DirectionsService();
      const directionsRenderer = new DirectionsRenderer();

      directionsRenderer.setMap(map);

      const request = {
        origin: { lat: 6.927079, lng: 79.861244 }, // Starting point (example: Colombo, Sri Lanka)
        destination: locationInMap, // Destination: marker's location
        travelMode: "DRIVING", // You can also choose 'WALKING', 'BICYCLING', 'TRANSIT'
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      });
    };

    initializeMap();
  }, []);

  return <div className="h-[500px]" ref={mapRef}></div>;
};

export default GoogleMap;
