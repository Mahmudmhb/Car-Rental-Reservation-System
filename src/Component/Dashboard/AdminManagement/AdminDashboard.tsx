import { useGetAllBookedQuery } from "../../../redux/features/book/bookApi";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hook";
import {
  gettAllbookedHsitory,
  returnCar,
  useAllBooked,
} from "../../../redux/features/book/bookSlice";
import { useCar } from "../../../redux/features/Car/CarSlice";
import { useCurrnetUser } from "../../../redux/features/auth/authSlice";

const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrnetUser);
  const totalBooked = useAppSelector(useAllBooked);
  const availableCars = useAppSelector(useCar);
  const { data, isLoading } = useGetAllBookedQuery(undefined);
  const { data: bookData } = useGetAllBookedQuery(undefined);
  const booked = bookData?.data;
  if (isLoading) {
    return <>loading....</>;
  }
  if (booked) {
    dispatch(returnCar(booked));
  }

  const bookedData = data?.data;
  if (bookedData) {
    dispatch(gettAllbookedHsitory(bookedData));
  }

  const totalRevenue = totalBooked.reduce(
    (arr, item) => arr + Number(item?.totalCost),
    0
  );

  return (
    <div>
      <div className="p-6  bg-gray-50 min-h-screen">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-800">
            Good Morning, <span className="text-[#234896]">{user?.name}</span>
          </h1>
          <span className="mb-6 ">
            Here's what's happening with your store today.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-200 shadow-md h-44 flex flex-col justify-center items-center rounded-lg p-4">
            {" "}
            {/* Green background for this card */}
            <h2 className="text-xl font-semibold text-gray-700">
              Total Bookings
            </h2>
            <p className="text-5xl font-bold text-green-900">
              {totalBooked?.length}
            </p>
          </div>
          <div className="bg-yellow-200 shadow-md h-44 flex flex-col justify-center items-center rounded-lg p-4">
            {" "}
            {/* Yellow background for this card */}
            <h2 className="text-xl font-semibold text-gray-700">
              Available Cars
            </h2>
            <p className="text-5xl font-bold text-yellow-900">
              {availableCars?.length}
            </p>
          </div>
          <div className="bg-red-200 shadow-md h-44 flex flex-col justify-center items-center rounded-lg p-4">
            {" "}
            {/* Red background for this card */}
            <h2 className="text-xl font-semibold text-gray-700">
              Total Revenue
            </h2>
            <p className="text-5xl font-bold text-red-900">
              ${totalRevenue?.toFixed(2)}
            </p>
          </div>
          {/* Add more statistics as needed, each with a different background color */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
