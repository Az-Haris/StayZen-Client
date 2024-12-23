import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import HotelLocationMap from "../components/HotelLocationMap";
import SectionGap from "../utilities/SectionGap";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionGap></SectionGap>
      <HotelLocationMap></HotelLocationMap>
      <SectionGap></SectionGap>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default Home;
