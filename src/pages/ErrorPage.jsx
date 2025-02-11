import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import Lottie from "lottie-react";
import animation404 from '../assets/404.json'
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
      <title>Error 404 Not Found | StayZen</title>
    </Helmet>
    <div className="flex flex-col items-center min-h-screen justify-center">
      <Lottie className="w-52" animationData={animation404} />

      <h3 className="text-5xl font-bold mb-2">Opps!...</h3>
      <p className="text-center text-lg font-semibold mb-5">
        The page or content you&apos;re looking for was
        <br />
        not found on this site.
      </p>
      <div className="flex gap-5 justify-center">
        <Link
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 btn btn-primary"
        >
          <IoArrowBackCircleSharp className="text-xl" /> Go Back
        </Link>
        <Link
          to={"/"}
          className="flex items-center gap-2 btn btn-outline btn-primary"
        >
          <MdHome className="text-xl" /> Go Home
        </Link>
      </div>
    </div>
    </>
    
  );
};

export default ErrorPage;
