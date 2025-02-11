import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";
import {Link} from 'react-router-dom'

import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper  z-10"
    >
      <SwiperSlide
        id="slider1"
        className="min-h-[calc(50vh-64px)] md:min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-5 text-center px-3 py-10"
      >
        <h3 className="text-sm md:text-2xl font-bold text-gray-200">
          Explore{" "}
          <span className="text-accent underline underline-offset-8">
            <Typewriter words={["Destinations", "Adventures"]} loop={false} />
          </span>{" "}
          Worldwide
        </h3>

        <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-white">
          Discover Your Perfect Stay Today
        </h1>
        <p className="max-w-[700px] text-gray-300 text-sm md:text-lg">
          Explore luxurious rooms, unbeatable amenities, and seamless bookings.
          Find your dream hotel and start your adventure now.
        </p>
        <Link to={"/rooms"} className="btn btn-accent text-white">
        Explore Rooms
        </Link>
      </SwiperSlide>

      {/* Slide 2 */}

      <SwiperSlide
        id="slider2"
        className="min-h-[calc(50vh-64px)] md:min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-5 text-center px-3 py-10"
      >
        <h3 className="text-sm md:text-2xl font-bold text-gray-200">
          Discover{" "}
          <span className="text-accent underline underline-offset-8">
            <Typewriter words={["Hotels", "Suites"]} loop={false} />
          </span>{" "}
          You&apos;ll Love
        </h3>

        <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-white">
          Book Comfort, Enjoy Every Moment
        </h1>
        <p className="max-w-[700px] text-gray-300 text-sm md:text-lg">
          Experience tailored stays with top-rated service. Book now for an
          unforgettable journey with comfort and convenience at your fingertips.
        </p>
        <Link to={"/rooms"} className="btn btn-accent text-white">Book Now !</Link>
      </SwiperSlide>

      
    </Swiper>
  );
};

export default Banner;
