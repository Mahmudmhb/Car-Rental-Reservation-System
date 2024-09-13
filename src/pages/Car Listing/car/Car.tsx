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
          <img src={carItem?.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{carItem.name}</h2>

          <div className="">
            Price:
            <div className="badge">$ {carItem.pricePerHour}</div>
          </div>

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
