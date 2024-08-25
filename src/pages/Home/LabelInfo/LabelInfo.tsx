import "./LabelInfo.css";
const LabelInfo = () => {
  return (
    <div>
      <div className=" min-h-screen bg-container my-20 text-white flex bg-fixed   items-center justify-center ">
        <div className="  bg-[#fab637] bg-opacity-70 py-20 w-1/2  mx-auto items-center justify-center">
          <div>
            <div className="flex items-center justify-center px-32 space-x-5 ">
              <div>
                <h1 className="text-3xl text-black font-bold">
                  WELCOME TO THE
                </h1>
                <h1 className="text-3xl text-white font-bold">
                  Car Rent A Car in Dhaka
                </h1>
                <p className="">
                  Car rent a car is popular in Bangladesh for quality service.
                  We are offering a wide range of vehicle e.g. cars, micro bus,
                  pick up, ambulance, truck, covered van and commercial vehicles
                  for rent. Whether you are a traveler, moving home or planning
                  a trip, zoom rent a car has the right vehicle choice for you.
                </p>
                <div className=" my-10 text-2xl ">
                  <button className="uppercase text-center rounded-xl border-white text-white  border-b-4 py-2 px-5 ">
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelInfo;
