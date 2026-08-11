import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map = () => {
  const handleGeorgeClick = () => {
    window.open("https://goo.gl/maps/KnRn8v5KF2K6QsGS8", "_blank");
  };

  const handleRipplesClick = () => {
    window.open("https://goo.gl/maps/gtyFRDZ1DN4huU2w6", "_blank");
  };

  return (
    <MapContainer
      className="w-full h-[500px] mt-4 "
      center={[-33.8367, 151.25901]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer url={url} attribution={attribution} />
      <Marker position={[-33.8367, 151.25901]}>
        <Popup>
          <div onClick={handleGeorgeClick} className="hover:cursor-pointer">
            <h1>Georges head</h1>
            <br /> Click to open google maps
          </div>
        </Popup>
      </Marker>
      <Marker position={[-33.83906, 151.25509]}>
        <Popup>
          <h1>Ripples</h1>
          <div onClick={handleRipplesClick} className="hover:cursor-pointer">
            <br /> Click to open google maps
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
