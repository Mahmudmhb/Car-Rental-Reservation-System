import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { CarState, Filters, TCar } from "../../../Component/Types/Types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: CarState = {
  car: [],
  updateCar: [],
  filteredCars: [],
  filters: {
    carType: "",
    priceRange: [0, 5000],
    color: "",
    features: [],
  },
};

export const CarSlice = createSlice({
  name: "Cars",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAllCar: (state, action: PayloadAction<TCar[]>) => {
      const totalCar = action.payload;
      const filterCar = totalCar?.filter(
        (item) => item.status !== "unavailable"
      );
      state.car = filterCar;
    },
    carUpdate: (state, action) => {
      state.updateCar = action.payload;
    },
    setFilters: (state, action) => {
      state.filteredCars = action.payload;
      console.log("filter car", action.payload);
    },
    filterCars: (state, action: PayloadAction<Partial<Filters>>) => {
      const fontendAction = action.payload;
      console.log("fontend action", fontendAction);

      const filterCarTye = state.car.filter(
        (item) => item.color == (fontendAction.color as unknown)
      );
      console.log(" filter car", state.filteredCars);
      console.log("click ", filterCarTye);
    },
    // filterCars: (state, action) => {
    //   const filterCarFromdb = action.payload;
    //   const
    //   state.filters = state.car.filter((item) => {
    //     const matchesType = statefilters.carType
    //       ? item.name
    //           .toLowerCase()
    //           .includes(filters.filters.carType.toLowerCase())
    //       : true;

    //     const matchesPrice =
    //       item.pricePerHour >= state.filters.priceRange[0] &&
    //       item.pricePerHour <= state.filters.priceRange[1];

    //     const matchesFeatures =
    //       Array.isArray(state.filters.features) &&
    //       state.filters.features.every((feature) =>
    //         item.features.includes(feature)
    //       );

    //     return matchesType && matchesPrice && matchesFeatures;
    //   });
    // },
  },
});

export const { getAllCar, carUpdate, setFilters, filterCars } =
  CarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const useCar = (state: RootState) => state.cars.car;
export const useUpdate = (state: RootState) => state.cars.updateCar;
export const filteredCars = (state: RootState) => state.cars.filteredCars;

export default CarSlice.reducer;
