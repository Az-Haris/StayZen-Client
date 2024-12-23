import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../utilities/SectionTitle";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const param = useParams();
  const id = param.id;
  const {
    data: roomInfo = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const res = await axios.get(`https://stay-zen.vercel.app/rooms/${id}`);
      return res.data;
    },
  });

  const { name, image, capacity, size, bedType, pricePerNight, description, amenities, rating, ratingCount, availability } = roomInfo;

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
      <div className="mt-10 mb-24 px-3">
        <SectionTitle
          title={"Explore Our Luxurious Accommodations"}
          description={
            "Discover the perfect room tailored to your needs, from cozy singles to opulent suites, all designed for ultimate comfort."
          }
        ></SectionTitle>
        <div className="text-center mt-20">
          <span className="text-red-500">Error: {error.message}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-3 mt-5 mb-20">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <figure className="rounded-xl">
                <img
                  className="transition duration-500 transform hover:scale-105"
                  src={image}
                  alt={name}
                />
              </figure>
            </div>
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <h2 className="card-title text-primary text-3xl md:text-4xl font-bold pb-3">
                {name}
              </h2>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-bold">Capacity : </span>
                  {capacity}
                </p>
                <p>
                  <span className="font-bold">Size : </span>
                  {size}
                </p>
                <p>
                  <span className="font-bold">Bed Type : </span>
                  {bedType}
                </p>
                <p>
                  <span className="font-bold">Availability : </span>
                  {availability? "Available" : "Not Available"}
                </p>
                <p>
                  <span className="font-bold">Rating : </span>
                  {`${rating}/${ratingCount}`}
                </p>
                <p>
                  <span className="font-bold">Price : </span>${pricePerNight} /night
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <h2 className="text-2xl font-bold text-accent mb-5">
                Amenities
              </h2>
              <ul className="list-disc ml-5 text-lg space-y-2">
                  {amenities?.map((amenity, idx) => (
                    <li
                      className="hover:text-primary transition duration-500 ease-in-out"
                      key={idx}
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
            </div>
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <h2 className="text-2xl font-bold text-accent mb-5">
                Description
              </h2>
              <p className="text-lg">
                {description}
                </p>
            </div>
          </div>

          
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary px-20"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
