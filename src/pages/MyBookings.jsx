import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../utilities/SectionTitle";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/contexts";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get(
        `https://stay-zen.vercel.app/my-bookings?bookedBy=${user.email}`
      );
      return res.data;
    },
  });

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
    <div className="mt-10 px-3 container mx-auto">
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
                    className="btn btn-success text-base-100 btn-sm"
                  >
                    <MdRateReview />
                  </button>
                  <button
                    data-tooltip-id="action-tooltip"
                    data-tooltip-content="Edit Booking Date"
                    className="btn btn-warning text-base-100 btn-sm"
                  >
                    <FaEdit />
                  </button>
                  <button
                    data-tooltip-id="action-tooltip"
                    data-tooltip-content="Cancel Booking"
                    className="btn btn-error text-base-100 btn-sm"
                  >
                    <ImCross />
                  </button>
                  <Tooltip id="action-tooltip"/>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
