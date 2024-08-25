import { IoChatbubbleEllipsesSharp, IoPricetagsOutline } from "react-icons/io5";
import Heading from "../../../Component/Heading/Heading";
import { PiSpeedometerBold } from "react-icons/pi";
import { MdOutlineSettingsApplications } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <Heading Heading="WHY CHOOSE US"></Heading>
      <div className="grid md:grid-cols-4 gap-5">
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
              For ensuring security zoom car rental always track the vehicle by
              using devices across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
