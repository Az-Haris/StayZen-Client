import { Link } from "react-router-dom";
import SectionTitle from "../utilities/SectionTitle";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

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
      <Marquee pauseOnHover={true} speed={50}>
        {reviews.map((review) => (
          <Link
            key={review._id}
            to={`/rooms/${review.roomId}`}
            className="mr-10 flex min-h-56 max-h-56 overflow-y-hidden"
          >
            <div className="rounded-xl shadow-xl border border-base-300 p-5">
              <div className="flex items-center gap-3">
                <img
                  src={review.photoURL}
                  className="w-12 h-12 rounded-full border border-base-300"
                  alt="Avatar"
                />
                <div>
                  <h2 className="font-bold text-xl">{review.userName}</h2>
                  <p>{review.reviewDate}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mt-5 gap-5">
                  <h3 className="font-semibold text-md">Review :</h3>
                  <ReactStars
                    count={5}
                    size={30}
                    value={review.rating}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
              <div>
                <p className="max-w-72">{review.review}</p>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default GuestReviews;
