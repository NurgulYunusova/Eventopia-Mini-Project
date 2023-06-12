import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVzdGVkd2ViIiwiYSI6ImNsNzBjMmFwbTAybzgzb215MHlyYjByNm8ifQ.eO3J7fzXbqmaHLw3_CQI0w";

const EventMap = ({ mapLink }) => {
  useEffect(() => {
    const [longitude, latitude] = mapLink;

    const map = new mapboxgl.Map({
      container: "event-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    return () => map.remove(); // Clean up the map instance when the component is unmounted
  }, [mapLink]);

  return (
    <div
      id="event-map"
      style={{ width: "100%", height: "100%", border: "0" }}
    ></div>
  );
};

export default EventMap;
