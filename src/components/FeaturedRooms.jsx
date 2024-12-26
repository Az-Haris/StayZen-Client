import { Link } from "react-router-dom";
import SectionTitle from "../utilities/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const FeaturedRooms = () => {
  const {
    data: topRooms = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["topRooms"],
    queryFn: async () => {
      const res = await axios.get("https://stay-zen.vercel.app/top-rooms");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <SectionTitle
          title={"Featured Rooms"}
          description={
            "Discover our handpicked selection of featured rooms, offering premium comfort, modern amenities, and the perfect ambiance for your stay."
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
      <div>
        <SectionTitle
          title={"Featured Rooms"}
          description={
            "Discover our handpicked selection of featured rooms, offering premium comfort, modern amenities, and the perfect ambiance for your stay."
          }
        ></SectionTitle>
        <p className="text-center mt-10 text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        title={"Featured Rooms"}
        description={
          "Discover our handpicked selection of featured rooms, offering premium comfort, modern amenities, and the perfect ambiance for your stay."
        }
      ></SectionTitle>
      <div className="mt-10 container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {topRooms.map((topRoom) => (
          <div
            key={topRoom._id}
            className="card card-compact bg-base-100 shadow-xl transform hover:-translate-y-2 transition duration-500 border border-base-300"
          >
            <figure className="h-56">
              <img
                className="object-cover h-full w-full transform hover:scale-105 transition duration-500"
                src={topRoom.image}
                alt={topRoom.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary font-bold text-2xl">
                {topRoom.name}
              </h2>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-bold">Capacity : </span>
                  {topRoom.capacity}
                </p>
                <p>
                  <span className="font-bold">Size : </span>
                  {topRoom.size}
                </p>
                <p>
                  <span className="font-bold">Bed Type : </span>
                  {topRoom.bedType}
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Rating : </span>
                  <span className="flex items-center gap-5">
                    {`${topRoom.rating}/${topRoom.ratingCount}`}
                    <ReactStars
                      count={5}
                      key={topRoom.rating}
                      value={topRoom.rating}
                      size={30}
                      activeColor="#ffd700"
                      edit={false}
                      isHalf={true}
                    />
                  </span>
                </div>
                <p>
                  <span className="font-bold">Price : </span>${" "}
                  {topRoom.pricePerNight} /Night
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/rooms/${topRoom._id}`} className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
