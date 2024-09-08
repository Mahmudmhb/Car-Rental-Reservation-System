import { useAppDispatch } from "../../redux/app/hook";
import { useGetAllCarQuery } from "../../redux/features/Car/carApi";
import { getAllCar } from "../../redux/features/Car/CarSlice";
import ChooseUs from "./ChooseUs/ChooseUs";
import FeaturedCars from "./FeaturedCars/FeaturedCars";
import Hero from "./Hero/Hero";
import LabelInfo from "./LabelInfo/LabelInfo";
import CustomerTestimonials from "./Testimonials/Testimonials";
import Work from "./Work/Work";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllCarQuery(undefined);
  const cars = data?.data;
  dispatch(getAllCar(cars));

  return (
    <div>
      <Hero />
      <Work />
      <FeaturedCars />
      <ChooseUs />
      <LabelInfo />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
