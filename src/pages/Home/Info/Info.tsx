import bg from "../../../assets/image/handsome-customer-checking-the-car-interior-e1631573837115.jpg";
import { FaCar, FaMapMarkedAlt, FaPencilRuler, FaRoad } from "react-icons/fa";
import Work from "../Work/Work";
const Info = () => {
  return (
    <div className="bg-slate-50 ">
      <div className="pt-20 mb-10 w-11/12 mx-auto p-3 rounded-2xl">
        <div className="text-center space-y-4">
          <h3 className="text-[#234896]"> Car rent in bangladesh</h3>
          <h1 className="text-[#050a15] text-5xl font-extrabold">
            Simple <span className="text-[#234896]"> Steps </span>
            to Car Rantal Rent
          </h1>
          <p>Make it happens in 4 easy steps! Best Of Luck</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:min-h-[90vh] my-10 ">
          <div>
            <div
              className="hero h-full  md:min-h-[80vh]  rounded-2xl"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="hero-overlay bg-opacity-90"></div>
              <div className="hero-content   ">
                <div className="max-w-md space-y-10">
                  <p className="text-[#ffd046]">
                    Online hiace rent in bangladesh
                  </p>
                  <h1 className="mb-5 text-5xl text-white font-bold">
                    4 Simple <span className="text-[#ffd046]">Steps</span> To
                    Car Rantal Rent
                  </h1>
                  <p className="mb-5 text-white">
                    Booking a Hiace rental with Car Rent BD is convenient and
                    straightforward. You can reserve your preferred Hiace online
                    or get in touch with our customer service team to assist you
                    with the booking process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-l-2 h-[420px] border-dashed md:relative  ml-10">
              <div className="space-y-10  -left-8 top-0 md:absolute ">
                <div className="flex gap-5  ">
                  <div className="   flex">
                    <FaPencilRuler className="text-7xl  bg-[#234896] text-white p-5 rounded-full" />
                    <div className="badge badge-warning -ml-5 ">1.</div>
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-xl font-bold">Choose Your Hiace</h1>
                    <p className="font-thin">
                      Select the Hiace that suits your needs, whether it's a
                      compact, midsize, or full-size option.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 ">
                  <div className=" flex">
                    <FaCar className="text-7xl bg-[#234896] text-white p-5 rounded-full" />
                    <div className="badge badge-warning -ml-5 ">2.</div>
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-xl font-bold">
                      Pick Your Rental Package
                    </h1>
                    <p className="font-thin">
                      Decide on your rental duration, whether it's a kilometre,
                      daily, weekly, or monthly rental, to match your project or
                      adventure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 ">
                  <div className=" flex">
                    <FaRoad className="text-7xl bg-[#234896] text-white p-5 rounded-full" />
                    <div className="badge badge-warning -ml-5 ">3.</div>
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-xl font-bold">
                      20% Advance Payment Requirement
                    </h1>
                    <p className="font-thin">
                      When renting with us, ensure a smooth process by making a
                      20% advance payment, a necessary step in reserving your
                      desired vehicle.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 ">
                  <div className=" flex">
                    <FaMapMarkedAlt className="text-7xl bg-[#234896] text-white p-5 rounded-full" />
                    <div className="badge badge-warning -ml-5 ">4.</div>
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-xl font-bold">Pick Up and Go</h1>
                    <p className="font-thin">
                      Head to our rental office at your scheduled time, complete
                      the necessary paperwork, and drive away with your rented
                      Hiace ready for your task or adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Info;
