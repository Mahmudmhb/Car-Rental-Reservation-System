import { Link } from "react-router-dom";
import { TCar } from "../../../Component/Types/Types";
type TCarItem = {
  carItem: TCar;
};
const Car = ({ carItem }: TCarItem) => {
  return (
    <div>
      <div className="card bg-base-100 h-96 w-[300px] shadow-xl">
        <figure>
          <img src="/src/assets/image/image.png" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {carItem.name}
            <div className="badge badge-outline">
              {" "}
              price: {carItem.pricePerHour}
            </div>
          </h2>
          <p>{carItem.description}</p>
          <div className="card-actions justify-end">
            <div className="bg-primary-color w-full text-white text-center rounded-lg">
              <Link to={`/car-details/${carItem._id}`}>
                <button>More Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
