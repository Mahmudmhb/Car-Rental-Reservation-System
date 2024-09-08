import { useGetAllCarQuery } from "../../../redux/features/Car/carApi";
import { CgSpinner } from "react-icons/cg";
import { TCar } from "../../Types/Types";
import { BiEdit, BiTrash } from "react-icons/bi";

const ManageCars = () => {
  const { data, isLoading } = useGetAllCarQuery(undefined);
  if (isLoading) {
    return (
      <>
        <CgSpinner />
      </>
    );
  }
  const totalCars = data?.data;

  const handleDelete = (id: string) => {
    console.log("deleted", id);
  };
  const handleUpdate = (id: string) => {
    console.log("updated", id);
  };
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
              <th>Featurs</th>
              <th>price Per Hour</th>

              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {totalCars ? (
              totalCars.map((item: TCar, idx: number) => (
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
                          {item.name || "Unknown Car"}
                        </div>
                        <div className="text-sm opacity-50">
                          {item.description || "No Description"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.features}</td>
                  <td>{item.pricePerHour}</td>

                  <td>{item.status}</td>
                  <td>
                    <div className="flex gap-3 items-center text-2xl">
                      <button onClick={() => handleUpdate(item._id)}>
                        <BiEdit className="text-red-600" />
                      </button>
                      <button onClick={() => handleDelete(item._id)}>
                        <BiTrash className="text-yellow-400 font-bold" />
                      </button>
                    </div>
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

export default ManageCars;
