import { Link } from "react-router-dom";
import logo from '/home.png'

const Logo = () => {
    return (
        <Link to={"/"} className="select-none flex items-center gap-1 w-full">
            <img className="w-10" src={logo} alt="Logo" />
            <span className="text-2xl font-bold">StayZen</span>
          </Link>
    );
};

export default Logo;