import { BiEdit } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";
import { TCar } from "../../../Types/Types";

const UpdateCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCar>();

  const onSubmitForm: SubmitHandler<TCar> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <label htmlFor="my_modal_6" className="">
        <BiEdit className="text-red-600" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Car Name
              </label>
              <input
                {...register("name", { required: "Car name is required" })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Car Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.description ? "border-red-500" : ""
                }`}
                id="description"
                placeholder="Enter car description"
              />
              {errors.description && (
                <p className="text-red-500 text-xs italic">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="color"
              >
                Color
              </label>
              <input
                {...register("color", { required: "Color is required" })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.color ? "border-red-500" : ""
                }`}
                id="color"
                type="text"
                placeholder="Car Color"
              />
              {errors.color && (
                <p className="text-red-500 text-xs italic">
                  {errors.color.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="isElectric"
              >
                Is Electric
              </label>
              <input
                {...register("isElectric")}
                className="mr-2 leading-tight"
                id="isElectric"
                type="checkbox"
              />
              <span className="text-gray-700">Electric</span>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="features"
              >
                Features
              </label>
              <input
                {...register("features", {
                  required: "At least one feature is required",
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.features ? "border-red-500" : ""
                }`}
                id="features"
                type="text"
                placeholder="Comma-separated features"
              />
              {errors.features && (
                <p className="text-red-500 text-xs italic">
                  {errors.features.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="pricePerHour"
              >
                Price Per Hour
              </label>
              <input
                {...register("pricePerHour", {
                  required: "Price per hour is required",
                  valueAsNumber: true,
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.pricePerHour ? "border-red-500" : ""
                }`}
                id="pricePerHour"
                type="number"
                placeholder="Price per hour"
              />
              {errors.pricePerHour && (
                <p className="text-red-500 text-xs italic">
                  {errors.pricePerHour.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                {...register("status")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="isDeleted"
              >
                Is Deleted
              </label>
              <input
                {...register("isDeleted")}
                className="mr-2 leading-tight"
                id="isDeleted"
                type="checkbox"
              />
              <span className="text-gray-700">Deleted</span>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Car
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCar;
