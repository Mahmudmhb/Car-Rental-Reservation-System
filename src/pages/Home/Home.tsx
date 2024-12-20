import { useEffect } from "react";
import { useAppDispatch } from "../../redux/app/hook";
import { useGetAllCarQuery } from "../../redux/features/Car/carApi";
import { getAllCar } from "../../redux/features/Car/CarSlice";
import ChooseUs from "./ChooseUs/ChooseUs";
import FeaturedCars from "./FeaturedCars/FeaturedCars";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import LabelInfo from "./LabelInfo/LabelInfo";
import CustomerTestimonials from "./Testimonials/Testimonials";
import TrendingCars from "./TrendingCars/TrendingCars";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllCarQuery(undefined);

  useEffect(() => {
    if (data?.data) {
      dispatch(getAllCar(data.data));
    }
  }, [data, dispatch]);
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Helmet>
        <title>Home -Car Rental Reservation System</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Hero />
      <Info />
      <TrendingCars />
      <FeaturedCars />
      <ChooseUs />
      <LabelInfo />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
