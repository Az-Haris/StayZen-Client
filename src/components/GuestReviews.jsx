import SectionTitle from "../utilities/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const GuestReviews = () => {
  // Load booking data
  const {
    data: reviews = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("https://stay-zen.vercel.app/reviews");
      return res.data;
    },
  });

  console.log(reviews)

  if (isLoading) {
    return (
      <div className="mt-10 mb-24">
        <SectionTitle
          title={"Guest Experiences"}
          description={
            "Explore heartfelt reviews from our guests, sharing their memorable stays and highlighting the comfort, luxury, and exceptional service we offer."
          }
        ></SectionTitle>
        <div className="text-center mt-20">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-center mt-10  mb-24">
        <SectionTitle
          title={"Guest Experiences"}
          description={
            "Explore heartfelt reviews from our guests, sharing their memorable stays and highlighting the comfort, luxury, and exceptional service we offer."
          }
        ></SectionTitle>
        <p className=" text-red-500 mt-20">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        title={"Guest Experiences"}
        description={
          "Explore heartfelt reviews from our guests, sharing their memorable stays and highlighting the comfort, luxury, and exceptional service we offer."
        }
      ></SectionTitle>

      <Swiper
        modules={[Navigation]} // Use modules array to include Navigation
        slidesPerView={3}
        spaceBetween={40}
        navigation
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="review-card p-6 rounded-lg shadow-lg text-center border hover:shadow-2xl">
              <figure className="w-32 h-32 mx-auto mb-4">
                {review.photoURL && (
                  <img
                    src={review.photoURL}
                    alt={review.userName}
                    className="rounded-full border"
                  />
                )}
              </figure>
              <h3 className="text-xl font-semibold mb-2">{review.userName}</h3>
              <p className="text-gray-500 mb-3">{review.reviewDate}</p>
              <p className=" mb-4 italic">
                &quot;{review.review.slice(0, 70)}...&quot;
              </p>
              <div className="flex justify-center">
                <ReactStars
                  count={5}
                  size={30}
                  value={review.rating}
                  activeColor="#ffd700"
                  edit={false}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GuestReviews;
