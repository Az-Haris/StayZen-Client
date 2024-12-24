import { Link, NavLink } from "react-router-dom";
import ThemeController from "../utilities/ThemeController";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { TbContract } from "react-icons/tb";
import Logo from "./Logo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isImageValid, setIsImageValid] = useState(false);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <MdHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/rooms"}>
          <BiSolidBuildingHouse />
          Rooms
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/bookings"}>
            <TbContract />
            My Bookings
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/about"}>
          <BsInfoCircleFill />
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>
          <BiSupport />
          Contact
        </NavLink>
      </li>
      {
        !user && <span className="flex  flex-row gap-2 lg:ml-10 mt-5 lg:mt-0">
        <li>
          <NavLink className="bg-base-300" to={"/auth/login"}>
            <IoIosLogIn />
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="bg-base-300" to={"/auth/register"}>
            <FiUserPlus />
            Register
          </NavLink>
        </li>
      </span>
      }
    </>
  );

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsImageValid(true);
    img.onerror = () => setIsImageValid(false);
    img.src = user?.photoURL;
  }, [user?.photoURL]);

  console.log(user)

  return (
    <div className="fixed top-0 backdrop-blur-2xl shadow-lg w-full z-10  bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
      <div className="navbar px-3 container mx-auto inset-x-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1border border-base-300"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-1 md:gap-3">
          <ThemeController></ThemeController>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
              >
                <div className=" flex justify-center items-center rounded-full">
                  {isImageValid ? (
                    <img
                    className="w-full btn btn-ghost btn-circle avatar"
                      alt={user?.displayName}
                      src={user?.photoURL}
                    />
                  ) : (
                    <FaUserCircle className="text-4xl text-accent" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content border border-base-300 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <div className="text-lg">
                <p>Welcome,</p>
                <p className="font-semibold text-primary">
                  {user?.displayName}
                </p>
              </div>
              <button
                onClick={() => {
                  logOut()
                    .then(() => Swal.fire("Success!", "You're Logged Out Successfully", "success"))
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
                    });
                }}
                className="btn btn-primary text-white btn-sm w-full mt-5"
              >
                Log Out
              </button>
              </ul>
            </div>
          ) : (
            <Link to={"/auth/login"}>
              <FaRegUserCircle className="text-4xl" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
