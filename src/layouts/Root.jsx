import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, Slide } from "react-toastify";
import ScrollToTop from "../utilities/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <header>
      <Navbar></Navbar>

      </header>
      <div className="py-[32px]"></div>
      <main>
        <Outlet></Outlet>
      </main>
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
