import ChooseUs from "./ChooseUs/ChooseUs";
import FeaturedCars from "./FeaturedCars/FeaturedCars";
import Hero from "./Hero/Hero";
import LabelInfo from "./LabelInfo/LabelInfo";
import CustomerTestimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <ChooseUs />
      <LabelInfo />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
