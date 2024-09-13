/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetMyBookQuery,
  usePaymentOfCustomerMutation,
} from "../../../../redux/features/book/bookApi";
import { Button } from "antd";

const Payment = () => {
  const { data } = useGetMyBookQuery(undefined);
  const booked = data?.data;
  const [orderPayment] = usePaymentOfCustomerMutation();

  const handlePayment = async (payment: string) => {
    const res = await orderPayment({ payment }).unwrap();
    if (res.success === true) {
      window.location.href = res.data.payment_url;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead>
            <tr className="text-sm text-black bg-slate-300">
              <th>Sl</th>
              <th>Car Name</th>

              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
              <th>Paymant</th>
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
                          <img src={item?.carId?.image} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item?.carId?.name || "Unknown Car"}
                        </div>
                        <div className="text-sm opacity-50">
                          {item?.description || "No Description"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.payment?.startTime}</td>

                  <td>{item?.endTime}</td>
                  <td>${item?.totalCost}</td>

                  <td>
                    {item?.isBooked === "confirmed" && (
                      <>
                        <p>
                          <Button onClick={() => handlePayment(item)}>
                            Proceed To Payment
                          </Button>
                        </p>
                      </>
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

export default Payment;
