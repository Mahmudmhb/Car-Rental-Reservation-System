/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import {
  useDeleteBookedMutation,
  useGetAllBookedQuery,
  useIsApproveBookedMutation,
} from "../../../redux/features/book/bookApi";
import { Button } from "antd";
import { TBooked } from "../../../types/types";
import { useAppDispatch } from "../../../redux/app/hook";
import { returnCar } from "../../../redux/features/book/bookSlice";

const ManageBookings = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllBookedQuery(undefined);
  const booked = data?.data;
  dispatch(returnCar(booked));
  const [deletedBooked] = useDeleteBookedMutation();
  const [isBookedAprroved] = useIsApproveBookedMutation();

  const handleCancel = async (bookedId: string) => {
    const res = await deletedBooked({ bookedId }).unwrap();
    if (res.success === true) {
      toast.success(res.message, { duration: 1000 });
    }
  };
  const handleApprove = async (bookedId: TBooked) => {
    const res = await isBookedAprroved({ bookedId }).unwrap();
    if (res.success === true) {
      toast.success(res.message, { duration: 1000 });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead>
            <tr className="text-sm text-red-500">
              <th>Sl</th>
              <th>Car Name</th>
              <th>Booking Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {booked ? (
              booked?.map((item: any, idx: any) => (
                <tr key={item._id}>
                  <th>
                    <h1>{idx + 1}</h1>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src="/src/assets/image/image.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item.carId?.name || "Unknown Car"}
                        </div>
                        <div className="text-sm opacity-50">
                          {item.carId?.description || "No Description"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.date}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>${item.totalCost}</td>

                  <td>
                    {item.isBooked === "confirmed" ? (
                      <>
                        <p className="bg-blue-700 text-white px-3 text-center py-1 rounded">
                          approval
                        </p>
                      </>
                    ) : (
                      <div className="flex gap-3">
                        <div>
                          <Button onClick={() => handleApprove(item._id)}>
                            approve
                          </Button>
                        </div>
                        <div>
                          <Button onClick={() => handleCancel(item._id)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
