import { IoChatbubbleEllipsesSharp, IoPricetagsOutline } from "react-icons/io5";
import Heading from "../../../Component/Heading/Heading";
import { PiSpeedometerBold } from "react-icons/pi";
import { MdOutlineSettingsApplications } from "react-icons/md";
import "./ChooseUs.css";
import { FaCarCrash } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
const ChooseUs = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <div>
          <div className=" min-h-screen bg-Choose my-20 text-white flex bg-fixed   items-center justify-center px-10 ">
            <div className="grid md:grid-cols-2 justify-between items-center gap-10">
              <div className="  bg-[#fab637] hover:bg-opacity-100 duration-500  bg-opacity-80 rounded-2xl h-80 py-10  mx-auto items-center justify-center">
                <div>
                  <div className="text-center flex justify-center">
                    <FaCarCrash className="text-7xl text-black  text-center" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center px-10 space-x-5 ">
                      <div>
                        <h1 className="text-3xl text-black font-bold">
                          Want to hire a economy car?
                        </h1>
                        <p className="">
                          We are offering you a wide range of vehicle e.g. cars,
                          micro bus, pick up, ambulance, truck, covered van and
                          commercial vehicles for rent. Whether you are a
                          traveler, moving home or planning a trip, zoom rent a
                          car has the right vehicle choice for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  bg-[#ff4848] hover:bg-opacity-100 duration-500  bg-opacity-80 rounded-2xl h-80 py-10   mx-auto items-center justify-center">
                <div>
                  <div className="text-center flex justify-center">
                    <FaCarSide className="text-7xl text-black  text-center" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center px-10 space-x-5 ">
                      <div>
                        <h1 className="text-3xl text-black font-bold">
                          Want to hire a luxurious car?
                        </h1>
                        <p className="">
                          If you want to hire a luxurious car, micro bus or any
                          other vehicle please make us call and schedule your
                          appointment today! We will arrange your desirable
                          vehicle with affordable price.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[100px] mt-[100px]">
        <Heading Heading="WHY CHOOSE US"></Heading>
        <div className="grid md:grid-cols-4 gap-5 my-10">
          <div className="flex gap-4">
            <div>
              <IoPricetagsOutline className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">We Offer Affordable Price</h1>
              <p>
                If you hire a car from zoom rent a car which would be affordable
                for you because there is no hidden charges. We are open to our
                clients.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <PiSpeedometerBold className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Wide Range of Services & Brands
              </h1>
              <p>
                In our fleet we have 100 premium cars, micro bus, pick up,
                ambulance as well as truck, covered van and commercial vehicles.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <IoChatbubbleEllipsesSharp className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Dedicated Support</h1>
              <p>
                rent a car driver will provide you the faithful support. They
                always have been committed to you. You can use the driver as you
                need.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <MdOutlineSettingsApplications className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Ensure Security</h1>
              <p>
                ent a car always try to ensure top security for the passengers.
                For ensuring security zoom car rental always track the vehicle
                by using devices across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
