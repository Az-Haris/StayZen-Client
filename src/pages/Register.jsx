import { useContext, useEffect, useState } from "react";
import RegisterImage from "../assets/register.json";
import Lottie from "lottie-react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { AuthContext } from "../contexts/contexts";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { imageUpload } from "../utilities/imageUpload";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerNewUser, setLoading, updateUser, loading, setUser, loginWithGoogle } =
    useContext(AuthContext);
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
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
    const photo = e.target.photo.files[0];
    const photoURL = await imageUpload(photo);

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
      updateUser({ displayName: name, photoURL })
        .then(() => {
          const updatedUser = {
            ...user,
            displayName: name,
            photoURL: photo,
          };
          setUser(updatedUser);
          axios
            .post("https://stay-zen.vercel.app/users", {
              email,
              displayName: name,
              photoURL,
              authMethod: "email-password",
            })
            .catch(function (error) {
              Swal.fire("Error!", `${error}`, "error");
            });
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

  useEffect(() => {
    if (error.name) {
      Swal.fire("Name Error!", error.name, "error");
      setError((prevError) => ({
        ...prevError,
        name: "",
      }));
    }
  }, [error?.name]);
  useEffect(() => {
    if (error.pass) {
      Swal.fire("Password Error!", error.pass, "error");
      setError((prevError) => ({
        ...prevError,
        pass: "",
      }));
    }
  }, [error?.pass]);
  return (
    <>
      <Helmet>
        <title>Register your account | StayZen</title>
      </Helmet>
      <div className="hero bg-base-200 py-10">
        <div className="flex flex-row-reverse justify-center gap-10 container mx-auto">
          <div className="w-1/2 hidden lg:flex text-center lg:text-left -mb-16 lg:mb-0">
            <Lottie animationData={RegisterImage} />
          </div>
          <div className="lg:w-1/2 mx-3 w-full">
            <div className=" card w-full bg-base-100 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <h2 className="text-2xl font-bold text-primary text-center ">
                  Register Your Account
                </h2>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <IoMdPerson className="text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        className="grow w-full"
                        placeholder="Name"
                      />
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>

                    <input
                      required
                      name="photo"
                      type="file"
                      accept="image/*"
                      className="file-input file-input-bordered w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <MdEmail className="text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="grow w-full"
                        placeholder="Email"
                      />
                    </label>
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <label className="relative input pr-0 input-bordered flex items-center gap-2">
                      <FaKey className="text-gray-500" />
                      <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        autoComplete="current-password"
                        className="grow w-full"
                        placeholder="Password"
                      />
                      <span
                        onClick={() => {
                          setShowPass(!showPass);
                        }}
                        className="absolute right-0 btn btn-sm text-xl bg-transparent border-none"
                      >
                        {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : (
                    "Register"
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
                          axios
                            .post("https://stay-zen.vercel.app/users", {
                              email: user?.email,
                              displayName: user?.displayName,
                              photoURL: user?.photoURL,
                              authMethod: "google",
                            })
                            .catch(function (error) {
                              Swal.fire("Error!", `${error}`, "error");
                            });
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
    </>
  );
};

export default Register;
