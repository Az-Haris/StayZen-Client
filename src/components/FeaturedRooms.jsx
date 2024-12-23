import { Link } from "react-router-dom";
import SectionTitle from "../utilities/SectionTitle";

const FeaturedRooms = () => {
  return (
    <div>
      <SectionTitle
        title={"Featured Rooms"}
        description={
          "Discover our handpicked selection of featured rooms, offering premium comfort, modern amenities, and the perfect ambiance for your stay."
        }
      ></SectionTitle>
      <div className="mt-10 container mx-auto px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        <div className="card card-compact bg-base-100 shadow-xl transform hover:-translate-y-2 transition duration-500 border border-base-300">
          <figure className="h-44">
            <img className="object-cover h-full w-full transform hover:scale-105 transition duration-500" src="https://i.ibb.co.com/DbJhKb6/Hotel-1.webp" alt="{countryName}" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary font-bold text-2xl">
              {/* {name} */}
            </h2>
            <div className="space-y-2 text-lg">
              <p>
                <span className="font-bold">Capacity : </span>
                {/* {capacity} */}
              </p>
              <p>
                <span className="font-bold">Size : </span>
                {/* {size} */}
              </p>
              <p>
                <span className="font-bold">Bed Type : </span>
                {/* {bedType} */}
              </p>
              <p>
                <span className="font-bold">Price : </span>
                $ 800 /Night
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/`} className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;
