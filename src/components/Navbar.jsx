import { NavLink } from "react-router-dom";
import ThemeController from "../utilities/ThemeController";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import Logo from "./Logo";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}><MdHome />Home</NavLink>
      </li>
      <li>
        <NavLink to={"/rooms"}><BiSolidBuildingHouse />Rooms</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}><BsInfoCircleFill />About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}><BiSupport />Contact</NavLink>
      </li>
      <span className="flex  flex-row gap-2 lg:ml-10 mt-5 lg:mt-0">
      <li>
        <NavLink className="bg-base-300" to={"/auth/login"}><IoIosLogIn />Login</NavLink>
      </li>
      <li>
        <NavLink className="bg-base-300" to={"/auth/register"}><FiUserPlus />Register</NavLink>
      </li>
      </span>
    </>
  );
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
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border border-base-300 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
