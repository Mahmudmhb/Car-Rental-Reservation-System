/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import Car from "./car/Car";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import {
  filterCars,
  filteredCars,
  setFilters,
  useCar,
} from "../../redux/features/Car/CarSlice";

// Sample car types for the dropdown filter

// Sample price ranges for the dropdown filter

const CarListing = () => {
  // const { register, handleSubmit } = useForm<TFilter>();
  const dispatch = useAppDispatch();

  const AvailableCar = useAppSelector(useCar);
  const filterCarFromState = useAppSelector(filteredCars);
  console.log(filterCarFromState);

  const { register, handleSubmit } = useForm();

  const carTypes = ["SUV", "Sedan", "Hatchback", "Convertible"];
  const priceRanges = [100, 500, 1000, 2000, 5000];
  const colors = ["Red", "Blue", "Black", "White", "Gray"];
  const features = ["Sunroof", "Navigation", "Bluetooth", "Backup Camera"];

  const onSubmit = (filterCriteria: any) => {
    console.log(filterCriteria);
    // Handle form submission here
    dispatch(setFilters(filterCriteria));
    dispatch(filterCars());
  };

  return (
    <div className="grid lg:grid-cols-4 w-11/12 mx-auto gap-3">
      <div className="bg-cover w-full col-span-1 bg-center  sticky top-0">
        <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Filter Cars</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* Features Filter */}
            <div className="mb-4">
              <label
                htmlFor="features"
                className="block text-gray-700 font-semibold mb-2"
              >
                Features
              </label>
              {features.map((feature) => (
                <div key={feature} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={feature}
                    {...register(`features.${feature}`)}
                    className="mr-2"
                  />
                  <label htmlFor={feature} className="text-gray-700">
                    {feature}
                  </label>
                </div>
              ))}
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

      <div className="col-span-3 my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {AvailableCar?.map((car: any) => (
          <Car key={car._id} carItem={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListing;
