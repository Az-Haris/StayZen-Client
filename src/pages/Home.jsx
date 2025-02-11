import { Helmet } from "react-helmet-async";
import Amenities from "../components/Amenities";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import GuestReviews from "../components/GuestReviews";
import HotelLocationMap from "../components/HotelLocationMap";
import Newsletter from "../components/ImageGallery";
import SectionGap from "../utilities/SectionGap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setIsModalOpen(true);
      localStorage.setItem("hasSeenModal", "true");
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  window.addEventListener('beforeunload', () => {
    localStorage.clear(); 
});

  return (
    <div>
      <Helmet>
        <title>StayZen | Find Your Desired Hotel</title>
      </Helmet>
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

      <div>
        {/* Special Offers Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">
                Special Offers
              </h2>
              <img
                src="https://i.ibb.co.com/Yk6TxYH/Penthouse-Suite.jpg" // Replace with your promotional image
                alt="Special Offer"
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-center text-gray-700">
                Enjoy up to 30% off on your first booking! Book now and make
                your stay unforgettable.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  to={"/rooms"}
                  onClick={closeModal}
                  className="btn btn-primary px-6 py-2 rounded-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
