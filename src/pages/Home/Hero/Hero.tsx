import { useState } from "react";
import car from "../../../assets/image/2025-audi-e-tron-gt-lineup-range.jpeg";
const Hero = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBookNow = () => {
    alert(`Booking from ${startDate} to ${endDate} at ${location}`);
    console.log("object");
    // You can add more logic here to handle the booking action
  };

  const handleSearch = () => {
    console.log(
      `Searching cars from ${startDate} to ${endDate} at ${location}`
    );
    // Add your search logic here
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${car})`,
        }}
      >
        <div className=" hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Book Now</h1>
            <h1 className="mb-5 text-2xl uppercase font-bold">
              {" "}
              check now car availability
            </h1>
            <div>
              <div className="flex flex-col items-center p-6">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                <div className="w-full mt-5  flex justify-center items-center mb-6">
                  <button
                    className="bg-orange-500 text-white w-full py-2 px-6 rounded-lg text-lg hover:bg-orange-600 transition duration-300"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
