import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css'

import { Typewriter } from 'react-simple-typewriter'

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
        <SwiperSlide id="slider1" className="py-20 flex-col items-center justify-center gap-5 text-center px-3">
            <h3 className="text-2xl font-extrabold text-gray-200">Welcome to <span className="text-accent underline underline-offset-8"><Typewriter words={["Globe Visa", "Visa Navigator"]} loop={false} /></span></h3>
            <h1 className="text-4xl font-bold font-poppins text-white">Simplify Your Travel Plans with GlobeVisa</h1>
            <p className="max-w-[700px] text-gray-300">Discover a hassle-free way to explore the world. We assist you in obtaining the right visa for every journey.</p>
            <button className="btn btn-accent text-white">Get Started Today !</button>
        </SwiperSlide>


        {/* Slide 2 */}

        <SwiperSlide id="slider2" className="py-20 flex-col items-center justify-center gap-5 text-center px-3">
            <h3 className="text-2xl font-extrabold text-gray-200">Global  <span className="text-accent underline underline-offset-8"> <Typewriter words={["Visa", "Travel"]} loop={false} /></span> Assistance</h3>
            <h1 className="text-4xl font-bold font-poppins text-white">Visa Solutions for Over 50 Countries</h1>
            <p className="max-w-[700px] text-gray-300">From tourist visas to work permits, we offer comprehensive assistance for global destinations.</p>
            <button className="btn btn-accent text-white">Explore Countries</button>
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
