import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl font-extrabold text-primary mb-10">
        <Typewriter words={["Oops!"]} typeSpeed={600} />
      </h1>

      <h3 className="text-2xl font-bold mb-2">404-PAGE NOT FOUND</h3>
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
  );
};

export default ErrorPage;
