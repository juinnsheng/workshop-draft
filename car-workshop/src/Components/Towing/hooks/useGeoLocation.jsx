import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    function onSuccess(position) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function onError(error) {
      console.error("Error retrieving geolocation:", error);
    }

    const watcher = geo.watchPosition(onSuccess, onError);

    // Cleanup watcher on unmount
    return () => geo.clearWatch(watcher);
  }, []);

  return position;
}
