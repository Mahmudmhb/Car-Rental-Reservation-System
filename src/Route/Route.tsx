import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import CarListing from "../pages/Car Listing/CarListing";
import CarDetails from "../pages/Car Listing/car/carDetails";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
    ],
  },
]);
