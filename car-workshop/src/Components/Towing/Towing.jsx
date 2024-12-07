import { useEffect, useRef, useState } from "react";
import leaflet from "leaflet";
import useLocalStorage from "./hooks/useLocalStorage";
import useGeolocation from "./hooks/useGeolocation";
import "./Towing.css";

export default function Map() {
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const userMarkerRef = useRef(null);

  const [userPosition] = useLocalStorage("USER_MARKER", {
    latitude: 51.505,
    longitude: -0.09,
  });

  const location = useGeolocation();

  // State to display latitude and longitude
  const [coords, setCoords] = useState({
    latitude: userPosition.latitude,
    longitude: userPosition.longitude,
  });

  // Effect to initialize or update the map
  useEffect(() => {
    // Destroy existing map instance if it exists
    if (leafletMap.current) {
      leafletMap.current.remove();
    }

    // Initialize Leaflet map
    leafletMap.current = leaflet
      .map(mapRef.current)
      .setView(
        [userPosition.latitude || 51.505, userPosition.longitude || -0.09],
        13
      );

    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(leafletMap.current);

    return () => {
      // Cleanup map instance on unmount
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [userPosition]);

  // Effect to update user marker and coordinates
  useEffect(() => {
    if (location.latitude && location.longitude && leafletMap.current) {
      // Remove old marker if it exists
      if (userMarkerRef.current) {
        leafletMap.current.removeLayer(userMarkerRef.current);
      }

      // Add user location marker
      userMarkerRef.current = leaflet
        .marker([location.latitude, location.longitude])
        .addTo(leafletMap.current)
        .bindPopup("You are here")
        .openPopup();

      // Update the coordinates in the state
      setCoords({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location]);

  // Handle "send location" button click
  const handleSendLocation = () => {
    alert(`Location sent: Latitude ${coords.latitude}, Longitude ${coords.longitude}`);
    // Replace alert with actual logic to send the coordinates to a server or API
  };

  return (
    <div id="towing-section" className="map-container">
      {/* Header section */}
      <header className="map-header">
        <h1>Require towing services? Send your location with a click!</h1>
        <p>A towing truck will be dispatched to your location (Feature coming really soon!)</p>
      </header>

      {/* Map container */}
      <div id="map" ref={mapRef} className="map" />

      {/* Latitude and Longitude display */}
      <div className="coords-display">
        <p>Latitude: {coords.latitude.toFixed(6)}</p>
        <p>Longitude: {coords.longitude.toFixed(6)}</p>
      </div>

      {/* Send Location button */}
      <button onClick={handleSendLocation} className="send-location-button">
        Send Location
      </button>
    </div>
  );
}
