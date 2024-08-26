import ChooseUs from "./ChooseUs/ChooseUs";
import FeaturedCars from "./FeaturedCars/FeaturedCars";
import Hero from "./Hero/Hero";
import LabelInfo from "./LabelInfo/LabelInfo";
import CustomerTestimonials from "./Testimonials/Testimonials";
import Work from "./Work/Work";

const Home = () => {
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
