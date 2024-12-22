import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, Slide } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-[34px]"></div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default Root;
