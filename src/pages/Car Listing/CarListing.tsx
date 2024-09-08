/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import { TFilter } from "../../Component/Types/Types";
import { useGetAllCarQuery } from "../../redux/features/Car/carApi";
import Car from "./car/Car";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { getAllCar, useCar } from "../../redux/features/Car/CarSlice";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

// Sample car types for the dropdown filter
const carTypes = ["SUV", "Hybrid", "Sedan", "Convertible", "Truck"];

// Sample price ranges for the dropdown filter
const priceRanges = [
  "Under $20,000",
  "$20,000 - $40,000",
  "$40,000 - $60,000",
  "Above $60,000",
];

const CarListing = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TFilter>();
  const { data, isLoading } = useGetAllCarQuery(undefined);
  const cars = data?.data;

  useEffect(() => {
    if (cars?.length) {
      dispatch(getAllCar(cars));
    }
  }, [cars, dispatch]);
  const AvailableCar = useAppSelector(useCar);
  if (isLoading) {
    return (
      <>
        <CgSpinner />
      </>
    );
  }

  const onSubmit: SubmitHandler<TFilter> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid lg:grid-cols-4 w-11/12 mx-auto gap-3">
      <div
        className="bg-cover w-full col-span-1 bg-center p-8"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1200x800')",
        }}
      >
        <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Filter Cars</h2>

          <form onClick={handleSubmit(onSubmit)}>
            {/* Car Type Filter */}
            <div className="mb-4">
              <label
                htmlFor="carType"
                className="block text-gray-700  font-semibold mb-2"
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
            {/* Price Range Filter */}
            <div className="mb-4">
              <label
                htmlFor="priceRange"
                className="block text-gray-700 font-semibold mb-2"
              >
                Price Range
              </label>
              <select
                id="priceRange"
                {...register("priceRange")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Price Range</option>
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
      <div className="col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {AvailableCar.map((car: any) => (
          <Car key={car._id} carItem={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListing;
