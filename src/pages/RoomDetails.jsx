import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../utilities/SectionTitle";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import ReactStars from "react-rating-stars-component";

const RoomDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [bookingDays, setBookingDays] = useState(1); // Default 1 day
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD")); // Default today

  const handleIncreaseDays = () => setBookingDays(bookingDays + 1);
  const handleDecreaseDays = () => {
    if (bookingDays > 1) setBookingDays(bookingDays - 1);
  };
  const handleDateChange = (e) => setStartDate(e.target.value);

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

  const {
    name,
    image,
    capacity,
    size,
    bedType,
    pricePerNight,
    description,
    amenities,
    availability,
  } = roomInfo;

  // Fetch booked room dates
  const {
    data: bookedDates = [],
    // isLoading: isDatesLoading,
    // isError: isDatesError,
    // error: datesError,
  } = useQuery({
    queryKey: ["bookedDates", id],
    queryFn: async () => {
      const res = await axios.get(`https://stay-zen.vercel.app/bookings/${id}`);
      return res.data;
    },
  });

  const isDateBooked = (date) => {
    return bookedDates.includes(moment(date).format("YYYY-MM-DD"));
  };

  // Fetch reviews
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(
        `https://stay-zen.vercel.app/review?roomId=${id}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      setRating((totalRating / reviews.length).toFixed(1));
    } else{
      setRating(0)
    }
  }, [reviews]);

  // const ratingCalculate = ()=>{
  //   let totalRating = 0;
  //   for(const review of reviews){
  //     totalRating= totalRating + review.rating;
  //   }
  //   setRating(totalRating / reviews.length)
  // }
  // ratingCalculate()

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

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingData = {
      roomId: id,
      name,
      image,
      bedType,
      size,
      pricePerNight,
      startDate,
      endDate: moment(startDate)
        .add(bookingDays - 1, "days")
        .format("YYYY-MM-DD"),
      bookedBy: user?.email,
    };

    axios
      .post("https://stay-zen.vercel.app/bookings", bookingData)
      .then(() => {
        Swal.fire("Success!", "Successfully Booked Room", "success");
        navigate("/rooms");
      })
      .catch((error) => {
        Swal.fire("Error!", `${error}`, "error");
      });
  };

  const handleBookingClick = () => {
    if (user) {
      document.getElementById("my_modal_5").showModal();
    } else {
      navigate("/auth/login", { state: location.pathname });
    }
  };


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
                  {availability ? "Available" : "Not Available"}
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold">Rating : </span>
                  <span className="flex items-center gap-5">
                    {`${rating}/${reviews.length}`}
                    {rating ? (
                      <ReactStars
                        count={5}
                        value={rating}
                        size={30}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={true}
                      />
                    ) : ""}
                  </span>
                </div>
                <p>
                  <span className="font-bold">Price : </span>${pricePerNight}{" "}
                  /night
                </p>
              </div>
              <button
                className={`btn btn-primary px-20 mt-5 ${
                  isLoading ? "btn-disabled" : ""
                }`}
                onClick={handleBookingClick}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="rounded-xl shadow-xl p-5 border border-base-300 w-full">
              <h2 className="text-2xl font-bold text-accent mb-5">Amenities</h2>
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
              <p className="text-lg">{description}</p>
            </div>
          </div>

          <div className="mb-5 p-5 border border-base-300 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-accent mb-5">Reviews</h2>
            {
              reviews.length>0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="rounded-xl shadow-xl border border-base-300 p-5 transition duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={review.photoURL}
                      className="w-12 rounded-full"
                      alt="Guest Avatar"
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
              ))}
            </div> : <p className="font-bold text-lg">No reviews for this room</p>
            }
          </div>

          <div className="card-actions justify-center">
            <button
              className={`btn btn-primary px-20 ${
                isLoading ? "btn-disabled" : ""
              }`}
              onClick={handleBookingClick}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Apply Form */}

      {isLoading ? (
        ""
      ) : (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl text-center mb-3">
              Book This Room
            </h3>
            <form onSubmit={handleBooking}>
              <h2 className="card-title text-primary text-3xl md:text-4xl font-bold pb-3">
                {name}
              </h2>

              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-bold">Capacity : </span>
                  {capacity}
                </p>
                <p>
                  <span className="font-bold">Bed Type : </span>
                  {bedType}
                </p>
                <p>
                  <span className="font-bold">Price : </span>${pricePerNight}{" "}
                  /night
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text">Select Date of Booking</span>
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleDateChange}
                    className={`input input-bordered input-primary ${
                      isDateBooked(startDate) ? "input-error" : ""
                    }`}
                    required
                  />
                  <p className="text-red-500 mt-2">
                    {isDateBooked(startDate) &&
                      "Selected date is already booked."}
                  </p>
                </div>

                <div className="form-control w-full mt-5">
                  <label className="label">
                    <span className="label-text">Number of Days</span>
                  </label>
                  <div className="flex items-center gap-3 mt-2 ml-1">
                    <button
                      type="button"
                      className="btn btn-sm rounded-full btn-accent text-white"
                      onClick={handleDecreaseDays}
                    >
                      -
                    </button>
                    <span>{bookingDays}</span>
                    <button
                      type="button"
                      className="btn btn-sm rounded-full btn-accent text-white"
                      onClick={handleIncreaseDays}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal-action space-x-3" method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  type="button"
                  className="btn px-8"
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className={`btn px-8 btn-primary ${
                    isDateBooked(startDate) ? "btn-disabled" : ""
                  }`}
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}

      {/* Apply form end */}
    </div>
  );
};

export default RoomDetails;
