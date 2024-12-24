import { useContext, useState } from "react";
import LoginImage from "../assets/login.json";
import Lottie from "lottie-react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/contexts";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { loginUser, setUser, setLoading, loginWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // Login User
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
      });
  };
  return (
    <div className="hero bg-base-200 py-0 lg:py-10">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-10">
        <div className="text-center lg:text-left -mb-16 lg:mb-0">
          <Lottie className="w-80 lg:w-[450px]" animationData={LoginImage} />
        </div>
        <div className="w-80 lg:w-96">
          <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-2xl font-bold text-primary text-center ">
                Login Your Account
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
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
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                    className="btn btn-sm text-xl bg-transparent border-none"
                  >
                    {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </label>
                <label className="label">
                  <Link
                    to={"/auth/forgot-password"}
                    className="label-text-alt link link-hover hover:link-primary"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
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
                  Login with{" "}
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
                Don&apos;t have an account?{" "}
                <Link to={"/auth/register"} className="text-primary">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
