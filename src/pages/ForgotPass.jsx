import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../contexts/contexts";

const ForgetPass = () => {
  const { email, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const emailValue = form.get("email");

    passwordReset(emailValue)
      .then(() => {
        navigate("/auth/login");
        window.open("https://mail.google.com/mail/u/0/", "_blank");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };
  return (
    <>
    <Helmet>
      <title>Reset Password</title>
    </Helmet>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleReset} className="card-body">
            <h2 className="font-semibold text-center text-2xl pb-5">
              Reset Your Account
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email && email}
                placeholder="email"
                autoComplete="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Reset Password</button>
            </div>

            <label className="label">
              <span className="label-text">
                Remember password?{" "}
                <Link
                  state={location?.state}
                  to={"/auth/login"}
                  className="text-primary link"
                >
                  Login
                </Link>
              </span>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
