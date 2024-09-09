/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { TCar } from "../../../Types/Types";
import { BiEdit } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hook";
import { carUpdate, useUpdate } from "../../../../redux/features/Car/CarSlice";
import { useUpdateCarIntoDbMutation } from "../../../../redux/features/Car/carApi";
import { toast } from "sonner";

const UpdateCar = () => {
  const updateData: any = useAppSelector(useUpdate);
  const dispatch = useAppDispatch();
  const [handleUpdateData] = useUpdateCarIntoDbMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCar>();

  const onSubmitForm: SubmitHandler<TCar> = async (data) => {
    const id = updateData._id;
    if (typeof data.features === "string") {
      data.features = (data.features as string)
        ?.split(",")
        .map((feature: string) => feature.trim());
    }
    const res = await handleUpdateData({ id, data }).unwrap();
    dispatch(carUpdate(data));
    console.log("res data", res);
    if (res.susscess === false) {
      toast.error(res.message);
    }
    toast.success(res.message, {
      action: (
        <>
          <label htmlFor="my_modal_6" className="btn">
            X
          </label>
        </>
      ),
      duration: 3000,
    });
    // toast.success(res.message);
  };

  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="cursor-pointer flex gap-3 items-center"
      >
        <BiEdit className="" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-full max-w-3xl">
          <h3 className="text-md font-bold mb-4">Update Car Details</h3>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="bg-white rounded-lg text-left shadow-md p-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="mb-3">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Car Name
                </label>
                <input
                  {...register("name")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  id="name"
                  type="text"
                  defaultValue={updateData?.name}
                  placeholder="Car Name"
                />
              </div>

              <div className="flex  gap-5 items-center ">
                <div className="mb-3">
                  <label
                    className="block text-sm text-gray-700 mb-1"
                    htmlFor="color"
                  >
                    Color
                  </label>
                  <input
                    {...register("color")}
                    defaultValue={updateData?.color}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="color"
                    type="text"
                    placeholder="Car Color"
                  />
                </div>
                <div className="mb-3 ">
                  <label
                    className="block text-sm text-gray-700 mb-1"
                    htmlFor="pricePerHour"
                  >
                    Price Per Hour
                  </label>
                  <input
                    {...register("pricePerHour")}
                    defaultValue={updateData?.pricePerHour}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.pricePerHour ? "border-red-500" : ""
                    }`}
                    id="pricePerHour"
                    type="number"
                    placeholder="Price per hour"
                  />
                </div>
                <div className="mb-3 flex items-center">
                  <input
                    {...register("isElectric")}
                    className="mr-2 leading-tight"
                    id="isElectric"
                    type="checkbox"
                    defaultValue={updateData.isElectric}
                  />
                  <label className="text-sm text-gray-700" htmlFor="isElectric">
                    Electric
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="features"
                >
                  Features
                </label>
                <input
                  {...register("features")}
                  defaultValue={updateData.features}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.features ? "border-red-500" : ""
                  }`}
                  id="features"
                  type="text"
                  placeholder="Comma-separated features"
                />
              </div>

              <div className="mb-3">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  {...register("status")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="status"
                >
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.description ? "border-red-500" : ""
                  }`}
                  id="description"
                  defaultValue={updateData.description}
                  placeholder="Enter car description"
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-6"></div>

            <div className="modal-action">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCar;
