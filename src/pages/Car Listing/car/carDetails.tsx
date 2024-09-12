/* eslint-disable @typescript-eslint/no-explicit-any */
// Define the Car type

import { Link, useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../../redux/features/Car/carApi";
import { TCar } from "../../../Component/Types/Types";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { bookedCar } from "../../../redux/features/book/bookSlice";
import { useAppDispatch } from "../../../redux/app/hook";
import { Button } from "antd";

const CarDetails = () => {
  const dispatch = useAppDispatch();
  const { carId } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(carId);
  if (isLoading) {
    return (
      <>
        <h1>Loading.......</h1>
      </>
    );
  }
  const car: TCar = data?.data;
  console.log(carId, car);
  const additionalFeatures = ["Insurance", "GPS", "Child Seat"];

  const AddFeatures = (data: any) => {
    const Features = { ...car, AdditionalFeatures: data };

    dispatch(bookedCar(Features));
  };
  return (
    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <figure>
        <InnerImageZoom
          src={car?.image}
          zoomSrc={car?.image}
          zoomType="hover"
          zoomScale={1.5}
        />
      </figure>
      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
      <p className="text-gray-600 mb-8">{car.description}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          {car.features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">
            Price per Hour: {car.pricePerHour}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Availability: {car.status}
          </p>
        </div>
      </div>

      {/* Customer Reviews */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {car.reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-semibold text-gray-800">{review.author}</p>
            <p className="text-gray-600">{review.content}</p>
            <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
          </div>
        ))}
      </div> */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Choose Additional Features</h2>
        <div className="flex flex-wrap gap-4">
          {additionalFeatures.map((feature) => (
            <label key={feature} className="inline-flex items-center">
              <input
                type="checkbox"
                required
                value={feature}
                onClick={() => AddFeatures(event.target.value)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-gray-700">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Book Now Button */}
      <Button>
        <Link
          to="/booking"
          className=" py-3 rounded-md  transition duration-300"
        >
          Book Now
        </Link>
      </Button>
    </div>
  );
};

export default CarDetails;
