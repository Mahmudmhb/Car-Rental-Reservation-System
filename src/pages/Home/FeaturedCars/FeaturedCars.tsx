// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import Heading from "../../../Component/Heading/Heading";
const FeaturedCars = () => {
  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      price: "$79,990",
      image: "https://example.com/tesla-model-s.jpg",
    },
    {
      id: 2,
      name: "Ford Mustang",
      price: "$55,300",
      image: "https://example.com/ford-mustang.jpg",
    },
    {
      id: 3,
      name: "Audi Q7",
      price: "$71,900",
      image: "https://example.com/audi-q7.jpg",
    },
    {
      id: 4,
      name: "BMW 3 Series",
      price: "$45,600",
      image: "https://example.com/bmw-3-series.jpg",
    },
  ];
  return (
    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading
        center="center"
        Heading="Featured Cars"
        Text=" Featured Cars presents a selection of luxury, sporty, and reliablevehicles, highlighting their features, performance and style for discerning drivers"
      ></Heading>

      <div className="my-6">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // mousewheel={true}
            centeredSlides={true}
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard]}
          >
            {" "}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {cars.map((car) => (
                  <SwiperSlide>
                    {" "}
                    <div
                      key={car.id}
                      className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                      <img
                        className="w-full h-48 object-cover"
                        src={car.image}
                        alt={car.name}
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {car.name}
                        </h3>
                        <p className="text-gray-600">{car.price}</p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default FeaturedCars;
