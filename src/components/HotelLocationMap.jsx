import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SectionTitle from '../utilities/SectionTitle'

const HotelLocationMap = () => {
  const position = [22.63140755528538, 90.2691504562249]; // Replace with your desired latitude and longitude

  return (
    <>
        <SectionTitle title={"Explore Our Hotel Location"} description={"Find our hotel and nearby attractions easily with our interactive map, making your travel planning seamless and stress-free."}/>
      <div className="w-full h-56 md:h-96">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Kanam Homes, Holding No. 23, Ward No. 3, Hospital Road, Nalchity,
              Jhalokati, Bangladesh.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default HotelLocationMap;
