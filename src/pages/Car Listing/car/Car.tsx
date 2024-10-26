import { Link } from "react-router-dom";
import { TCar } from "../../../Component/Types/Types";
import { motion } from "framer-motion";
import { Button } from "antd";

type TCarItem = {
  carItem: TCar;
};

const Car = ({ carItem }: TCarItem) => {
  return (
    <div className="p-6 rounded-xl transition-transform duration-300">
      <Link to={`/car-details/${carItem._id}`}>
        <div className="card rounded-xl overflow-hidden md:h-96 md:w-96">
          <figure className="relative">
            <motion.img
              src={carItem?.image}
              alt={carItem.name}
              className="w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
              ${carItem.pricePerHour}/hr
            </span>
          </figure>
          <div className="card-body px-8 py-6 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-2xl font-bold text-[#234896] mb-4">
              {carItem.name}
            </h2>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              {carItem.description.slice(0, 80)}...{" "}
              <span className="text-[#234896]">more</span>
            </p>
            <div className="card-actions">
              <Link
                to={`/car-details/${carItem._id}`}
                className="-mx-3 block rounded-lg px-3 py-2.5 hover:text-red-600 text-base font-semibold leading-7 text-gray-900"
              >
                <Button> More Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Car;
