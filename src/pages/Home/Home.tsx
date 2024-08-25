import ChooseUs from "./ChooseUs/ChooseUs";
import FeaturedCars from "./FeaturedCars/FeaturedCars";
import Hero from "./Hero/Hero";
import LabelInfo from "./LabelInfo/LabelInfo";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <ChooseUs />
      <LabelInfo />
    </div>
  );
};

export default Home;
