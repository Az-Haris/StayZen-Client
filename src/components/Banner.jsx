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
      className="mySwiper"
    >
      <SwiperSlide
        id="slider1"
        className="py-20 flex-col items-center justify-center gap-5 text-center px-3"
      >
        <h3 className="text-sm md:text-2xl font-bold text-gray-200">
          Explore{" "}
          <span className="text-accent underline underline-offset-8">
            <Typewriter words={["Destinations", "Adventures"]} loop={false} />
          </span>{" "}
          Worldwide
        </h3>

        <h1 className="text-4xl font-bold font-poppins text-white">
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
        className="py-20 flex-col items-center justify-center gap-5 text-center px-3"
      >
        <h3 className="text-sm md:text-2xl font-bold text-gray-200">
          Discover{" "}
          <span className="text-accent underline underline-offset-8">
            <Typewriter words={["Hotels", "Suites"]} loop={false} />
          </span>{" "}
          You&apos;ll Love
        </h3>

        <h1 className="text-4xl font-bold font-poppins text-white">
          Book Comfort, Enjoy Every Moment
        </h1>
        <p className="max-w-[700px] text-gray-300 text-sm md:text-lg">
          Experience tailored stays with top-rated service. Book now for an
          unforgettable journey with comfort and convenience at your fingertips.
        </p>
        <Link to={"/rooms"} className="btn btn-accent text-white">Book Now !</Link>
      </SwiperSlide>

      {/* Slide 3 */}

      {/* <SwiperSlide id="slider3" className="py-20 flex-col items-center justify-center gap-5 text-center px-3">
            <h3 className="text-2xl font-extrabold text-gray-200"><span className="text-accent underline underline-offset-8"> <Typewriter words={["Fast", "Reliable"]} loop={false} /></span> Processing</h3>
            <h1 className="text-4xl font-bold font-poppins text-white">Get Your Visa in Record Time</h1>
            <p className="max-w-[700px] text-gray-300">We ensure fast, accurate visa processing to keep your travel plans on schedule effortlessly.</p>
            <button className="btn btn-accent text-white">Check Processing Time</button>
        </SwiperSlide> */}

      {/* Slide 4 */}

      {/* <SwiperSlide id="slider4" className="py-20 flex-col items-center justify-center gap-5 text-center px-3">
            <h3 className="text-2xl font-extrabold text-gray-200">Document Preparation <span className="text-accent underline underline-offset-8"> <Typewriter words={["Easy", "Quick"]} loop={false} /></span></h3>
            <h1 className="text-4xl font-bold font-poppins text-white">Never Miss a Document Again</h1>
            <p className="max-w-[700px] text-gray-300">Our platform guides you step by step through the required documents to ensure success.</p>
            <button className="btn btn-accent text-white">Learn More</button>
        </SwiperSlide> */}

      {/* Slide 5 */}

      {/* <SwiperSlide id="slider5" className="py-20 flex-col items-center justify-center gap-5 text-center px-3">
            <h3 className="text-2xl font-extrabold text-gray-200">Dedicated <span className="text-accent underline underline-offset-8"> <Typewriter words={["Support"]} loop={false} /></span> Team</h3>
            <h1 className="text-4xl font-bold font-poppins text-white">We’re Here for You</h1>
            <p className="max-w-[700px] text-gray-300">Have questions? Our dedicated visa experts are available 24/7 to provide guidance and assistance anytime.</p>
            <button className="btn btn-accent text-white">Contact Us Now</button>
        </SwiperSlide> */}
    </Swiper>
  );
};

export default Banner;
