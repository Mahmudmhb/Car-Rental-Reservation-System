/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "../../../../redux/app/hook";
import { useBookedCar } from "../../../../redux/features/book/bookSlice";
import { Button } from "antd";
import FeaturedCars from "../../../../pages/Home/FeaturedCars/FeaturedCars";
import { useAddBookedMutation } from "../../../../redux/features/book/bookApi";

const BookingForm = () => {
  const [addBooked] = useAddBookedMutation();
  const useBooked: any = useAppSelector(useBookedCar);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("Form data:", data);
    const carId = useBooked?._id;
    const bookedInfo = {
      payment: { ...data, status: "Panding" },
      carId: carId,
    };
    const res = await addBooked(bookedInfo).unwrap();
    console.log(res);
    console.log(bookedInfo);
    // Implement form submission logic here
    // e.g., send data to an API endpoint
  };

  //   {
  //     "carId": "66dea312493f2b2ccacc4ac3",
  //     "date": "2024-01-15",
  //     "startTime": "17:00"
  //  }

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
                <img src={useBooked.image} alt="" className="h-40" />
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
