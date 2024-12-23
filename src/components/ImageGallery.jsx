import { Gallery } from "react-grid-gallery";
import SectionTitle from "../utilities/SectionTitle"; // Import your section title component

const images = [
  {
    src: "https://i.ibb.co.com/QMRrhhs/Bungalow-Suite.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/GtJ8MJf/Classic-Double-Room.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/fpD5gNs/Deluxe-King-Room.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/NmDrHMM/Economy-Room.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/grJwF0R/Executive-Suite.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/0rM8prx/Family-Room.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/2WfSLXz/Junior-Suite.jpg",
    width: 320,
    height: 200,
  },
  {
    src: "https://i.ibb.co.com/pJB37GK/Honeymoon-Suite.jpg",
    width: 320,
    height: 200,
  },
];

const ImageGallery = () => {
  return (
    <div className="mt-10 container mx-auto px-3">
      <SectionTitle
        title="Local Attractions"
        description="Explore nearby attractions, cultural landmarks, and must-visit destinations to enhance your travel experience."
      />
      <Gallery className="" images={images} enableImageSelection={false} />
    </div>
  );
};

export default ImageGallery;
