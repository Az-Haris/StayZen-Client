import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../pages/MyBookings";
import ForgetPass from "../pages/ForgotPass";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Help from "../pages/Help";
import FAQ from "../pages/FAQ";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/help",
        element: <Help></Help>
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails></RoomDetails>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgetPass></ForgetPass>,
      },
    ],
  },
]);

export default Router;
