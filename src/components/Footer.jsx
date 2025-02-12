import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub} from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import Swal from "sweetalert2";

const Footer = () => {
  const handleSubscribe = e =>{
    e.preventDefault();
    const form = e.target;
    Swal.fire("Success!", "Successfully Subscribed!", "success");
    form.reset()
  }
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="divider pt-10 my-0">Reach Out</div>
      <div className="footer  lg:justify-between container mx-auto py-10 px-3">
        <aside className="w-full">
          <Logo></Logo>
          <p>
            Az Industries BD
            <br />
            Kanam Homes, Hospital Road,<br />Nalchity, Jhalokati.
          </p>
          <div className="grid grid-flow-col gap-3 mt-2">
            <a
              className="hover:text-primary"
              href="https://facebook.com/alimuzzaman.haris"
              target="_blank"
            >
              <FaFacebook className="text-3xl translate transition duration-300 hover:scale-105" />
            </a>
            <a
              className="hover:text-primary"
              href="https://www.linkedin.com/in/alimuzzaman-haris/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl translate transition duration-300 hover:scale-105" />
            </a>
            <a
              className="hover:text-primary"
              href="https://github.com/Az-Haris"
              target="_blank"
            >
              <FaSquareGithub className="text-3xl translate transition duration-300 hover:scale-105" />
            </a>
            <a
              className="hover:text-primary"
              href="https://wa.me/+8801405742311"
              target="_blank"
            >
              <FaWhatsappSquare className="text-3xl translate transition duration-300 hover:scale-105" />
            </a>
          </div>
        </aside>
        <nav className="w-full">
          <h6 className="footer-title">Services</h6>
          <Link
            to={"/privacy"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            to={"/terms"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary"
          >
            Terms
          </Link>
          <Link
            to={"/help"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary"
          >
            Help
          </Link>
          <Link
            to={"/faq"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary"
          >
            FAQ
          </Link>
        </nav>
        <nav className="w-full">
          <h6 className="footer-title">Links</h6>
          <Link
            to={"/"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary flex items-center gap-2"
          >
            <MdHome />Home
          </Link>
          <Link
            to={"/rooms"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary flex items-center gap-2"
          >
            <BiSolidBuildingHouse />Rooms
          </Link>
          <Link
            to={"/about"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary flex items-center gap-2"
          >
            <BsInfoCircleFill />About
          </Link>
          <Link
            to={"/contact"}
            className="transform hover:translate-x-1 transition duration-300 hover:text-primary flex items-center gap-2"
          >
            <BiSupport />Contact
          </Link>
          
        </nav>
        <form onSubmit={handleSubscribe} className="w-full">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control ">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join w-full">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="divider pb-8 my-0">Copyright</div>
      <aside className="container mx-auto text-center px-3 pb-8">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <a
            href="https://facebook.com/az.industries.bd"
            target="_blank"
            className="text-primary"
          >
            Az Industries BD.
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
