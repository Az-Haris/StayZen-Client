import Amenities from "../components/Amenities";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import GuestReviews from "../components/GuestReviews";
import HotelLocationMap from "../components/HotelLocationMap";
import Newsletter from "../components/ImageGallery";
import SectionGap from "../utilities/SectionGap";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionGap></SectionGap>
      <HotelLocationMap></HotelLocationMap>
      <SectionGap></SectionGap>
      <FeaturedRooms></FeaturedRooms>
      <SectionGap></SectionGap>
      <Amenities></Amenities>
      <SectionGap></SectionGap>
      <GuestReviews></GuestReviews>
      <SectionGap></SectionGap>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
