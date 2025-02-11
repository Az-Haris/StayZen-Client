import { Link } from "react-router-dom";
import SectionTitle from "../utilities/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Rooms = () => {
  const [sortOrder, setSortOrder] = useState("");

  const {
    data: rooms = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rooms", sortOrder],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        ...(sortOrder && { sort: sortOrder }),
      });
      const url = `https://stay-zen.vercel.app/rooms?${queryParams}`;
      const res = await axios.get(url);
      return res.data;
    },
  });

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };

  if (isLoading) {
    return (
      <div className="mt-10 mb-24">
        <SectionTitle
          title={"Explore Our Luxurious Accommodations"}
          description={
            "Discover the perfect room tailored to your needs, from cozy singles to opulent suites, all designed for ultimate comfort."
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
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Find your desired room | StayZen</title>
      </Helmet>
      <div className="mt-10">
        <SectionTitle
          title={"Explore Our Luxurious Accommodations"}
          description={
            "Discover the perfect room tailored to your needs, from cozy singles to opulent suites, all designed for ultimate comfort."
          }
        ></SectionTitle>

        {/* Sort Buttons */}
        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={() => handleSortOrder("desc")}
            className="btn btn-primary"
          >
            Price High to Low
          </button>
          <button
            onClick={() => handleSortOrder("asc")}
            className="btn btn-secondary"
          >
            Price Low to High
          </button>
        </div>

        <div className="mt-10 mb-20 container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {Array.isArray(rooms) &&
            rooms.map((room) => (
              <Link
                to={`/rooms/${room._id}`}
                key={room._id}
                className="card card-compact bg-base-100 shadow-xl transform hover:-translate-y-2 transition duration-500 border border-base-300"
              >
                <figure className="h-56">
                  <img
                    className="object-cover h-full w-full transform hover:scale-105 transition duration-500"
                    src={room.image}
                    alt={room.name}
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h2 className="text-primary font-bold text-2xl">
                      {room.name}
                    </h2>
                    <span>
                      <span className="font-bold text-xl">
                        {room.size.split(" ")[0]}
                      </span>{" "}
                      {room.size.split(" ")[1]}
                    </span>
                  </div>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center justify-between">
                      <p>{room.bedType}</p>
                      <span>
                        <span className="font-bold text-xl">
                          {room.capacity}
                        </span>{" "}
                        person
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="flex items-center gap-2 text-lg">
                      {`${room.rating}/${room.ratingCount}`}
                      <ReactStars
                        count={5}
                        key={room.rating}
                        value={room.rating}
                        size={30}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={true}
                      />
                    </span>
                    <span>
                      <span className="text-3xl font-bold text-primary">
                        $ {room.pricePerNight}
                      </span>{" "}
                      /Night
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
