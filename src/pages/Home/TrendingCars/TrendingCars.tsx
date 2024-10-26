import { useAppSelector } from "../../../redux/app/hook";
import { useCar } from "../../../redux/features/Car/CarSlice";
import { TCar } from "../../../Component/Types/Types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrendingCars = () => {
  const useGetAllCar = useAppSelector(useCar);

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center space-y-4 my-5">
        <h1 className="text-[#050a15] text-5xl font-extrabold">
          <span className="text-[#234896]">Trending </span>Cars
        </h1>
        <h3 className="text-[#234896]">
          Most popular choices for travellers from Bangladesh
        </h3>
        <div className="flex gap-5 ">
          {useGetAllCar?.slice(0, 2).map((carItem: TCar, index) => (
            <motion.div
              key={carItem._id}
              className="card rounded-xl overflow-hidden w-1/2 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Link to={`/car-details/${carItem._id}`}>
                <figure className="relative">
                  <img
                    src={carItem?.image}
                    alt={carItem.name}
                    className="w-full h-56 object-cover"
                  />
                  {/* Car name overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-lg font-bold">
                    {carItem.name}
                  </div>
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    ${carItem.pricePerHour}/hr
                  </span>
                </figure>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-between">
          {useGetAllCar?.slice(0, 3).map((carItem: TCar, index) => (
            <motion.div
              key={carItem._id}
              className="card rounded-xl overflow-hidden md:w-[400px] shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Link to={`/car-details/${carItem._id}`}>
                <figure className="relative">
                  <img
                    src={carItem?.image}
                    alt={carItem.name}
                    className="w-full h-56 object-cover"
                  />
                  {/* Car name overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-lg font-bold">
                    {carItem.name}
                  </div>
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    ${carItem.pricePerHour}/hr
                  </span>
                </figure>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCars;
