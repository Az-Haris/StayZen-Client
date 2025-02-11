import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../utilities/SectionTitle";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import moment from "moment";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  const [id, setId] = useState(null);
  const [rating, setRating] = useState(0);
  const [ratingStars, setRatingStars] = useState(true);
  const [bookingDays, setBookingDays] = useState(1); // Default 1 day
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD")); // Default today
  const today = moment().format("YYYY-MM-DD");

  const handleIncreaseDays = () => setBookingDays(bookingDays + 1);
  const handleDecreaseDays = () => {
    if (bookingDays > 1) setBookingDays(bookingDays - 1);
  };
  const handleDateChange = (e) => setStartDate(e.target.value);

  // Fetch booked room dates
  const {
    data: bookedDates = [],
    // isLoading: isDatesLoading,
    // isError: isDatesError,
    // error: datesError,
    refetch: refetchDates,
  } = useQuery({
    queryKey: ["bookedDates", id],
    queryFn: async () => {
      const res = await axios.get(`https://stay-zen.vercel.app/bookings/${id}`);
      return res.data;
    },
  });

  console.log(bookedDates)

  const isDateBooked = (date) => {
    return bookedDates.includes(moment(date).format("YYYY-MM-DD"));
  };

  // Load booking data
  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get(
        `https://stay-zen.vercel.app/my-bookings?bookedBy=${user.email}`
      );
      return res.data;
    },
  });

  // Cancel booking
  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Close",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://stay-zen.vercel.app/cancel-booking/${id}`)
          .then(() => {
            refetch();
            Swal.fire("Success!", "Successfully Canceled Booking", "success");
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "An error occurred. Please try again later.",
              "error"
            );
          });
      }
    });
  };

  // Update Booking Date
  const handleUpdate = (e) => {
    e.preventDefault();

    const bookingData = {
      id,
      startDate,
      endDate: moment(startDate)
        .add(bookingDays - 1, "days")
        .format("YYYY-MM-DD"),
    };

    axios
      .put(`https://stay-zen.vercel.app/update-booking`, bookingData)
      .then(() => {
        refetch(); // Refresh bookings after updating
        refetchDates();
        Swal.fire("Success!", "Booking date updated successfully.", "success");
      })
      .catch((error) => {
        Swal.fire(
          "Error!",
          `Failed to update booking: ${error.message}`,
          "error"
        );
      });
  };

  // Review Handler
  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const reviewData = {
      roomId: id,
      userName: user.displayName,
      photoURL: user.photoURL,
      reviewDate: today,
      rating,
      review,
    };

    axios
      .post("https://stay-zen.vercel.app/review", reviewData)
      .then(() => {
        Swal.fire("Success!", "Successfully Submitted Review", "success");
        setRating(0);
        setRatingStars(false);
      })
      .catch((error) => {
        Swal.fire("Error!", `${error}`, "error");
      });
  };

  if (isLoading) {
    return (
      <div className="mt-10 mb-24">
        <SectionTitle
          title={"My Bookings - StayZen"}
          description={
            "Manage your reservations, track booking details, and check dates effortlessly on StayZen's user-friendly My Bookings page."
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
          title={"My Bookings - StayZen"}
          description={
            "Manage your reservations, track booking details, and check dates effortlessly on StayZen's user-friendly My Bookings page."
          }
        ></SectionTitle>
        <p className=" text-red-500 mt-20">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Find all your bookings here.</title>
      </Helmet>
      <div className="mt-10 px-3 pb-20 container mx-auto">
        <SectionTitle
          title={"My Bookings - StayZen"}
          description={
            "Manage your reservations, track booking details, and check dates effortlessly on StayZen's user-friendly My Bookings page."
          }
        ></SectionTitle>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Bed Type and Size</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                          <img
                            src={
                              booking.image || "https://via.placeholder.com/150"
                            }
                            alt={booking.roomType || "Room Image"}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xl mb-1">
                          {booking.name}
                        </div>
                        <div className="text-lg opacity-50">
                          {`$ ${booking.pricePerNight}`}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {booking.bedType || "N/A"}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {booking.size || "N/A"}
                    </span>
                  </td>
                  <td>
                    From : {booking.startDate} <br />
                    To : {booking.endDate}
                  </td>
                  <th className="space-x-3">
                    <button
                      data-tooltip-id="action-tooltip"
                      data-tooltip-content="Review This Room"
                      onClick={() => {
                        setId(booking.roomId);
                        setRatingStars(true);
                        document.getElementById("review_modal").showModal();
                      }}
                      className="btn btn-success text-base-100 btn-sm"
                    >
                      <MdRateReview />
                    </button>
                    <button
                      data-tooltip-id="action-tooltip"
                      data-tooltip-content="Edit Booking Date"
                      onClick={() => {
                        setId(booking.roomId);
                        document.getElementById("my_modal_5").showModal();
                      }}
                      className="btn btn-warning text-base-100 btn-sm"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      data-tooltip-id="action-tooltip"
                      data-tooltip-content="Cancel Booking"
                      className="btn btn-error text-base-100 btn-sm"
                    >
                      <ImCross />
                    </button>
                    <Tooltip id="action-tooltip" />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Apply Form */}

        {isLoading ? (
          ""
        ) : (
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-2xl text-center mb-3">
                Update Booking Date
              </h3>
              <form onSubmit={handleUpdate}>
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
                    <span className="text-red-500 mt-2">
                      {isDateBooked(startDate) &&
                        "Selected date is already booked."}
                    </span>
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
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={`btn px-8 btn-primary ${
                      isDateBooked(startDate) ? "btn-disabled" : ""
                    }`}
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}

        {/* Apply form end */}

        {/* Review Form */}

        {isLoading ? (
          ""
        ) : (
          <dialog
            id="review_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-2xl text-center mb-3">
                Write a Review
              </h3>
              <form onSubmit={handleReview}>
                <p className="font-bold text-xl mt-10 flex gap-3">
                  <span>Rating : </span>

                  <span>
                    {ratingStars && (
                      <ReactStars
                        count={5}
                        onChange={(newRating) => {
                          setRating(newRating);
                        }}
                        size={30}
                        activeColor="#ffd700"
                      />
                    )}
                  </span>
                </p>
                <p className="mt-5 font-bold text-xl">Review :</p>
                <textarea
                  rows={4}
                  name="review"
                  className="textarea textarea-bordered w-full mt-2"
                  placeholder="Write a review ..."
                  required
                ></textarea>

                <div className="modal-action space-x-3" method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    type="button"
                    className="btn px-8"
                    onClick={() => {
                      setRating(0);
                      setRatingStars(false);
                      document.getElementById("review_modal").close();
                    }}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("review_modal").close();
                    }}
                    type="submit"
                    className={`btn px-8 btn-primary`}
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}

        {/* Review form end */}
      </div>
    </>
  );
};

export default MyBookings;
