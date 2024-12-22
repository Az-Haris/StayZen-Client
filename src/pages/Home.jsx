import Banner from "../components/Banner";
import HotelLocationMap from "../components/HotelLocationMap";
import SectionGap from "../utilities/SectionGap";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionGap></SectionGap>
      <HotelLocationMap></HotelLocationMap>
    </div>
  );
};

export default Home;
