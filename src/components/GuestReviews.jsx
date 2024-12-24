import { Link } from "react-router-dom";
import SectionTitle from "../utilities/SectionTitle";
import Marquee from "react-fast-marquee";

const GuestReviews = () => {
  return (
    <div>
      <SectionTitle
        title={"Guest Experiences"}
        description={
          "Explore heartfelt reviews from our guests, sharing their memorable stays and highlighting the comfort, luxury, and exceptional service we offer."
        }
      ></SectionTitle>
      <Marquee pauseOnHover={true} speed={50} className="space-x-10">
        <div className="space-x-10 flex">
          <div className="rounded-xl shadow-xl border border-base-300 p-5">
            <div className="flex items-center gap-3">
              <img src="" className="w-20 rounded-full" alt="Guest Avatar" />
              <div>
                <h2 className="font-bold text-xl">Guest Name</h2>
                <p>date</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-5">
                <h3 className="font-semibold text-lg">Name of room</h3>
                <p>star</p>
              </div>
            </div>
            <div>
              <p className="max-w-72">
                <span className="font-semibold">Review :</span> Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quibusdam
                perspiciatis minima soluta debitis illum, quae iure porro
              </p>
              <Link className="text-primary link">Read More</Link>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default GuestReviews;
