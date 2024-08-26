import bg from "../../../assets/image/a06e86e4-border_frame.png";

const Work = () => {
  return (
    <div className="w-11/12 mx-auto mt-20 space-y-10">
      <div className="text-center  space-y-5 ">
        <h1 className="text-3xl font-bold ">How It Works</h1>
        <p className="font-thin text-xl">
          Make it happens in 4 easy steps! Best Of Luck
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="my-10 bg-cover bg-center"
        >
          <div className="flex justify-evenly min-h-72">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/src/assets/image/532cdaf4-icon-3.png" alt="" />
              <h1>Select Car</h1>
            </div>
            <div className="flex flex-col justify-center items-center ml-24 ">
              <img src="/src/assets/image/5d1bce92-icon-4.png" alt="" />
              <h1 className="w-24 text-center pt-5">Define Your Booking</h1>
            </div>
          </div>
          <div></div>
        </div>
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="my-10 bg-cover bg-center "
        >
          <div className="flex justify-evenly min-h-72">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/src/assets/image/532cdaf4-icon-3.png" alt="" />
              <h1 className="w-24 text-center">Confirm Your Payment</h1>
            </div>
            <div className="flex flex-col justify-center items-center ml-24 ">
              <img src="/src/assets/image/5d1bce92-icon-4.png" alt="" />
              <h1>Enjoy Your Ride</h1>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
