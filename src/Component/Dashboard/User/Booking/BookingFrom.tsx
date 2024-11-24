/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hook";
import {
  confiremBooking,
  useBookedCar,
} from "../../../../redux/features/book/bookSlice";
import { Button } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const BookingForm = () => {
  const useBooked: any = useAppSelector(useBookedCar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    // console.log("Form data:", data);
    navigate("/user/booking-confirmation");

    dispatch(confiremBooking({ ...data }));
  };
  console.log(useBooked);
  return (
    <div>
      {useBooked?.name ? (
        <>
          <div className="text-center space-y-4 ">
            <Helmet>
              <title>Booking from - Car Rental Reservation System</title>
            </Helmet>
            <motion.div
              className="min-h-screen bg-container mb-20 text-white flex bg-fixed items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                className="bg-[#fab637] bg-opacity-70 py-20 w-3/4 lg:w-1/2 mx-auto items-center justify-center text-center rounded-lg shadow-xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <motion.h1
                  className="text-4xl font-bold mb-8 text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-[#234896]">
                    {" "}
                    Car Rantal Rent in bangladesh
                  </h3>
                </motion.h1>
                <h1 className="text-[#050a15] text-5xl font-extrabold">
                  Book Your{" "}
                  <span className="text-[#234896]"> {useBooked?.name} </span>
                </h1>
              </motion.div>
            </motion.div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 bg-white rounded shadow-md"
          >
            <div className=" my-20 w-11/12 mx-auto grid md:grid-cols-2 items-center  gap-20">
              <div>
                <h2 className="text-xl font-bold mb-4">Booking Form</h2>

                <div className="mb-4">
                  <label
                    htmlFor="nidOrPassport"
                    className="block text-sm font-medium text-gray-700"
                  >
                    NID/Passport
                  </label>
                  <input
                    type="text"
                    id="nidOrPassport"
                    {...register("nidOrPassport", {
                      required: "NID/Passport is required",
                    })}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.nidOrPassport ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="drivingLicense"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Driving License
                  </label>
                  <input
                    type="text"
                    id="drivingLicense"
                    {...register("drivingLicense", {
                      required: "Driving License is required",
                    })}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.drivingLicense ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    {...register("cardNumber", {
                      required: "Card Number is required",
                    })}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.cardNumber ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="expirationDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="month"
                    id="expirationDate"
                    {...register("expirationDate", {
                      required: "Expiration Date is required",
                    })}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.expirationDate ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    {...register("cvv", { required: "CVV is required" })}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                      errors.cvv ? "border-red-500" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="border-2 p-10 ">
                <div className="   my-5 space-y-8">
                  <div>
                    <img src={useBooked.image} alt="" className="" />
                  </div>

                  <div className="space-y-3">
                    <h1 className="text-xl font-bold ">{useBooked.name}</h1>
                    <h1>
                      Price Per Hour:{" "}
                      <span className="badge">${useBooked.pricePerHour}</span>
                    </h1>
                    <h1>
                      Color: <span className="badge">{useBooked.color}</span>
                    </h1>
                    <h1>
                      Satus: <span className="badge">{useBooked.status}</span>
                    </h1>
                  </div>

                  <div>
                    <label
                      htmlFor="nidOrPassport"
                      className=" mr-10 text-sm font-medium text-gray-700"
                    >
                      Order Date and Time:
                    </label>
                    <input
                      className="border-2 px-2"
                      type="datetime-local"
                      {...register("startTime", {
                        required: "Time and date is required",
                      })}
                      id=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Button
                    className="bg-primary-color w-full text-white text-center rounded-lg"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Car Selected for Booking
            </h1>
            <p className="text-gray-600 mb-6">
              It looks like you haven't selected a car yet. Please select a car
              to proceed with your booking.
            </p>
            <Link to="/car-listing">
              <Button className="bg-primary-color text-white rounded-lg">
                Go to Car Selection
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingForm;
