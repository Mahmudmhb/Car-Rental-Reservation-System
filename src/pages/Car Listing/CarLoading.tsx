import { Button } from "antd";

const CarLoading = () => {
  return (
    <div className="p-6 rounded-xl skeleton transition-transform duration-300">
      <div className="skeleton">
        <div className="card rounded-xl overflow-hidden md:h-96 md:w-96">
          <figure className="relative">
            <img src="/" className="w-full object-cover" />
            <span className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold"></span>
          </figure>
          <div className="card-body px-8 py-6 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-2xl font-bold text-[#234896] mb-4"></h2>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              <span className="text-[#234896]">more</span>
            </p>
            <div className="card-actions  duration-500 hover:translate-x-3 ">
              <div className="-mx-3 block rounded-lg px-3 py-2.5 hover:text-red-600 text-base font-semibold leading-7 text-gray-900">
                <Button>
                  More Details
                  <div className="">
                    <span aria-hidden="true"> &rarr;</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CarLoading;
