/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useGetMyBookQuery } from "../../../../redux/features/book/bookApi";

const BookingHistory: React.FC = () => {
  const { data, error, isLoading } = useGetMyBookQuery(undefined);
  const bookingData = data?.data;

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching bookings.</p>;

  return (
    <div className="my-5">
      <div>
        <h1 className="text-2xl border-b-2 text-center uppercase my-4 py-5">
          Booking History
        </h1>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Car Name</th>
              <th>Booking Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookingData && bookingData.length > 0 ? (
              bookingData.map((item: any, idx: any) => (
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
                    <span
                      className={`badge ${
                        item.isBooked === "confirmed"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {item.isBooked}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Details</button>
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

export default BookingHistory;
