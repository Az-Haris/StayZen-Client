import { useContext, useEffect, useRef, useState } from "react";
import LoginImage from "../assets/login.json";
import Lottie from "lottie-react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../contexts/contexts";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { MdEmail, MdVerified } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const Login = () => {
  const captchaRef = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const { loginUser, setUser, loading, setLoading, loginWithGoogle, setEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // Captcha Verify
    const captcha_value = captchaRef.current.value;
    if (validateCaptcha(captcha_value) == true) {
      // Login User
      loginUser(email, password)
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
          Swal.fire("Error!", `${errorCode} ${errorMessage}`, "error");
          setLoading(false);
        });
    } else {
      Swal.fire("Captcha Error!", "Enter Valid Captcha", "error");
      e.target.captcha.value = "";
      setLoading(false);
    }
  };

  const handleForgotPass = () => {
    setEmail(emailRef.current.value);
    navigate("/auth/forgot-password");
  };

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  return (
    <>
      <Helmet>
        <title>Login to your account | StayZen</title>
      </Helmet>
      <div className="hero bg-base-200 py-10">
        <div className="flex lg:flex-row-reverse justify-center items-start gap-10 container mx-auto">
          <div className="hidden w-1/2 lg:flex text-center lg:text-left">
            <Lottie animationData={LoginImage} />
          </div>
          <div className="lg:w-1/2 mx-3 w-full card bg-base-100 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-2xl font-bold text-primary text-center ">
                Login Your Account
              </h2>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 ">
                  <MdEmail />
                  <input
                    required
                    type="email"
                    name="email"
                    ref={emailRef}
                    autoComplete="email"
                    defaultValue="example@stayzen.com"
                    className="grow w-full"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="relative input input-bordered flex items-center gap-2">
                  <FaKey />
                  <input
                    required
                    type={showPass ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    defaultValue="ExamplePass123"
                    className="grow w-full"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                    className="absolute btn btn-sm text-xl bg-transparent border-none right-0"
                  >
                    {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </label>
                <label className="label">
                  <Link
                    onClick={handleForgotPass}
                    to={"/auth/forgot-password"}
                    className="label-text-alt link link-hover hover:link-primary"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>

              {/* Captcha Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Captcha</span>
                </label>
                <LoadCanvasTemplate />
                <label className="input input-bordered flex items-center gap-2">
                  <MdVerified />
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    className="grow w-full"
                    placeholder="Type the captcha"
                  />
                </label>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : (
                    "Login"
                  )}
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
                        Swal.fire(
                          "Success!",
                          "Successfully Logged In!",
                          "success",
                        );
                        navigate(location?.state ? location.state : "/");
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        Swal.fire(
                          "Error!",
                          `${errorCode} ${errorMessage}`,
                          "error",
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
    </>
  );
};

export default Login;
