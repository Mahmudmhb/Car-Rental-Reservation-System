import car from "../../../assets/image/2025-audi-e-tron-gt-lineup-range.jpeg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { IoSearchSharp } from "react-icons/io5";
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh] "
        style={{
          backgroundImage: `url(${car})`,
        }}
      >
        <div className="  hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Book Now</h1>
            <h1 className="mb-5 text-2xl uppercase font-bold">
              check now car availability
            </h1>
            <div>
              <div className="flex flex-col items-center p-6 ">
                <div className="md:flex items-center space-x-4  duration-500 hover:translate-x-3 uppercase">
                  <Link to="/car-listing">
                    <Button className="text-xl flex justify-center uppercase">
                      <IoSearchSharp />
                      Find Your Favorite Car
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
