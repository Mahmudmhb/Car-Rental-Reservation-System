import { Button } from "antd";
import { TCar } from "../../Component/Types/Types";
import Car from "./car/Car";
import { motion } from "framer-motion";
import { filterCars, setFilters } from "../../redux/features/Car/CarSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppDispatch } from "../../redux/app/hook";
import { useGetAllCarQuery } from "../../redux/features/Car/carApi";
import CarLoading from "./CarLoading";

const CarListing = () => {
  const { data, isLoading } = useGetAllCarQuery(undefined);
  const [loadmore, setLoadmore] = useState(9);
  const [filterCar, setFilterCar] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const cars = data?.data;

  const carTypes = ["SUV", "Sedan", "Hatchback", "Convertible"];
  const priceRanges = [100, 500, 1000, 2000, 5000];
  const colors = ["Red", "Blue", "Black", "White", "Gray"];

  dispatch(setFilters(cars));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (filterCriteria: any) => {
    dispatch(filterCars(filterCriteria!));
    const filteredCars = cars.filter((car: TCar) => {
      if (filterCriteria.carType && car.carType !== filterCriteria.carType) {
        return false;
      }
      if (filterCriteria.color && car.color !== filterCriteria.color) {
        return false;
      }
      return true;
    });

    setFilterCar(filteredCars);
  };

  return (
    <div className="  mx-auto">
      {/* Hero Section */}
      {/* <HeroSection
        title="Explore Our Car Rental Services"
        subtitle=""
      /> */}
      <motion.div
        className="min-h-screen bg-container text-white flex bg-fixed items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="bg-[#fab637] bg-opacity-70 w-3/4 lg:w-1/2 mx-auto items-center justify-center text-center rounded-lg shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-4xl mt-5 font-bold mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Car Rental Services
          </motion.h1>
          <div className="text-center space-y-4 my-5">
            <h1 className="text-[#050a15] text-5xl font-extrabold">
              Types of<span className="text-[#234896]"> Car Rantal</span> Cars
            </h1>
            <p>
              At Car Rent BD, we offer a range of car rentals to cater to your
              specific needs:
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Listing Section */}
      {isLoading && (
        <>
          <CarLoading />
        </>
      )}

      <div className="bg-white w-11/12 bg-opacity-75 p-2 mt-10 rounded-lg shadow-lg  mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:grid grid-cols-4 gap-4 justify-center items-center"
        >
          {/* Car Type Filter */}
          <div className="mb-4">
            <label
              htmlFor="carType"
              className="block text-gray-700 font-semibold mb-2"
            >
              Car Type
            </label>
            <select
              id="carType"
              {...register("carType")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Car Type</option>
              {carTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter with Scroll Bar */}
          <div className="mb-4">
            <label
              htmlFor="priceRange"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price Range
            </label>
            <input
              type="range"
              id="priceRange"
              {...register("priceRange")}
              min={priceRanges[0]}
              max={priceRanges[priceRanges.length - 1]}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRanges[0]}</span>
              <span>{priceRanges[priceRanges.length - 1]}</span>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block text-gray-700 font-semibold mb-2"
            >
              Color
            </label>
            <select
              id="color"
              {...register("color")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Color</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className=" w-full mt-3 ">
            <Button
              className="w-full  items-center bg-blue-500 text-white  rounded-md hover:bg-blue-600 transition duration-300"
              htmlType="submit"
            >
              Filter
            </Button>
          </div>
        </form>
      </div>
      <div className=" my-10 grid md:grid-cols-3 gap-3 justify-center ">
        {(Array.isArray(filterCar) && filterCar.length > 0 ? filterCar : cars)
          ?.slice(0, loadmore)
          ?.map((car: TCar) => (
            <Car key={car._id} carItem={car} />
          ))}
      </div>
      <div className={`my-20 flex justify-center  `}>
        {loadmore === cars?.length ? (
          <></>
        ) : (
          <Button
            onClick={() => setLoadmore(cars.length)}
            className="bg-primary-color py-2  text-white"
          >
            More Rantel Cars <span aria-hidden="true"> &rarr;</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CarListing;
