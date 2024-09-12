import { useForm, SubmitHandler } from "react-hook-form";
import { IBookingForm, TCar } from "../../../Types/Types";
import { useAppSelector } from "../../../../redux/app/hook";
import { useBookedCar } from "../../../../redux/features/book/bookSlice";
import { Button } from "antd";
import FeaturedCars from "../../../../pages/Home/FeaturedCars/FeaturedCars";

const BookingForm = () => {
  const useBooked: TCar = useAppSelector(useBookedCar);
  console.log(useBooked);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookingForm>();

  const onSubmit: SubmitHandler<IBookingForm> = async (data) => {
    console.log("Form data:", data);
    // Implement form submission logic here
    // e.g., send data to an API endpoint
  };

  return (
    <div>
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
              {errors.nidOrPassport && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.nidOrPassport.message}
                </p>
              )}
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
              {errors.drivingLicense && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.drivingLicense.message}
                </p>
              )}
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
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cardNumber.message}
                </p>
              )}
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
              {errors.expirationDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.expirationDate.message}
                </p>
              )}
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
              {errors.cvv && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cvv.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gps"
                  {...register("gps")}
                  className="mr-2"
                />
                <label
                  htmlFor="gps"
                  className="text-sm font-medium text-gray-700"
                >
                  GPS
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="childSeat"
                  {...register("childSeat")}
                  className="mr-2"
                />
                <label
                  htmlFor="childSeat"
                  className="text-sm font-medium text-gray-700"
                >
                  Child Seat
                </label>
              </div>
            </div>
          </div>

          <div className="border-2 p-10 ">
            <div className="   my-5 space-y-8">
              <div>
                <img src={useBooked.image} alt="" className="h-40" />
              </div>

              <div className="space-y-3">
                <h1 className="text-xl ">{useBooked.name}</h1>
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
                  type="datetime-local"
                  {...register("startTime", {
                    required: "Time and date is required",
                  })}
                  id=""
                />
              </div>
            </div>
            <div className="w-full">
              <Button className="w-full" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
      <FeaturedCars />
    </div>
  );
};

export default BookingForm;
