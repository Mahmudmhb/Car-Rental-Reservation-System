import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import CarListing from "../pages/Car Listing/CarListing";
import CarDetails from "../pages/Car Listing/car/carDetails";
import AboutUs from "../pages/About us/AboutUs";
import Error404 from "../pages/error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car-listing",
        element: <CarListing />,
      },
      {
        path: "/car-details/:carId",
        element: <CarDetails />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
]);
