import { useContext, useState } from "react";
import RegisterImage from "../assets/register.json";
import Lottie from "lottie-react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { AuthContext } from "../contexts/contexts";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerNewUser, setLoading, updateUser, setUser, loginWithGoogle } =
    useContext(AuthContext);
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const name = form.get("name");
    if (name.length < 4) {
      setError((prevError) => ({
        ...prevError,
        name: "Name must be at least 4 character long.",
      }));
      return;
    } else {
      setError((prevError) => {
        ({ ...prevError, name: "" });
      });
    }
    const photo = form.get("photo");
    const password = form.get("password");
    if (!regex.test(password)) {
      setError((prevError) => ({
        ...prevError,
        pass: "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be 6 characters long.",
      }));
      return;
    } else {
      setError((prevError) => ({
        ...prevError,
        pass: "",
      }));
    }

    // Register User
    registerNewUser(email, password).then((result) => {
      const user = result.user;
      setLoading(true);
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          const updatedUser = {
            ...user,
            displayName: name,
            photoURL: photo,
          };
          setUser(updatedUser);
          setLoading(false);
          Swal.fire("Success!", "Successfully Registered!", "success");
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
        });
    });
  };
  return (
    <div className="hero bg-base-200 py-0 lg:py-10">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-10">
        <div className="text-center lg:text-left -mb-16 lg:mb-0">
          <Lottie className="w-80 lg:w-[450px]" animationData={RegisterImage} />
        </div>
        <div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className="text-2xl font-bold text-primary text-center ">
                Register Your Account
              </h2>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <IoMdPerson className="text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      className="grow"
                      placeholder="Name"
                    />
                  </label>
                  {error?.name && (
                    <label className="label">
                      <p className="label-text-alt text-red-500">
                        {error.name}
                      </p>
                    </label>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaLink className="text-gray-500" />
                    <input
                      type="text"
                      name="photo"
                      className="grow"
                      placeholder="Photo URL"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <MdEmail className="text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="grow"
                      placeholder="Email"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input pr-0 input-bordered flex items-center gap-2">
                    <FaKey className="text-gray-500" />
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      className="grow"
                      placeholder="Password"
                    />
                    <span
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      className="btn btn-sm text-xl bg-transparent border-none -ml-9"
                    >
                      {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <div className="divider">OR</div>
                <a
                  onClick={() => {
                    // Login with google
                    loginWithGoogle()
                      .then((result) => {
                        const user = result.user;
                        setUser(user);
                        setLoading(false);
                        Swal.fire("Success!", "Successfully Logged In!", "success");
                        navigate(location?.state ? location.state : "/");
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        Swal.fire(
                          "Error!",
                          `${errorCode} ${errorMessage}`,
                          "error"
                        );
                      });
                  }}
                  className="btn hover:text-white btn-outline btn-primary w-full"
                >
                  {" "}
                  Register with{" "}
                  <span className="text-lg">
                    <span className="text-blue-700">G</span>
                    <span className="text-red-600">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-700">g</span>
                    <span className="text-green-600">l</span>
                    <span className="text-red-600">e</span>
                  </span>
                </a>
              </div>
              <p>
                Already have an account?{" "}
                <Link to={"/auth/login"} className="text-primary">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
