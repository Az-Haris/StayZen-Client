import SectionTitle from "../utilities/SectionTitle";

const Amenities = () => {
  const amenities = [
    "Free High-Speed Wi-Fi",
    "24/7 Room Service",
    "Complimentary Breakfast",
    "Swimming Pool Access",
    "Fully Equipped Fitness Center",
    "Spa and Wellness Center",
    "Flat-Screen TV with Streaming Services",
    "Mini Bar and Coffee Maker in Rooms",
    "Daily Housekeeping",
    "Concierge Services",
    "Onsite Parking Facility",
    "Business Conference Rooms",
    "Airport Shuttle Service",
    "Pet-Friendly Rooms",
    "Kids’ Play Area and Activities",
  ];

  return (
    <div className="container mx-auto px-3">
      <SectionTitle
        title={"Exclusive Amenities"}
        description={
          "Discover the unique features and premium amenities that make your stay with us truly unforgettable, blending comfort with luxury."
        }
      ></SectionTitle>
      <div className="flex flex-wrap gap-5 justify-center">
      {
        amenities.map((amenity, idx)=> <span key={idx} className="p-3 md:p-5 rounded-full border border-primary hover:bg-primary hover:text-base-100 transition duration-300 transform hover:scale-105 cursor-wait">{amenity}</span>)
      }
      </div>
    </div>
  );
};

export default Amenities;
