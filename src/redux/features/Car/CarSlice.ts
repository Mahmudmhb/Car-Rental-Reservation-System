import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { TCar } from "../../../types/types";

// Define a type for the slice state
type TCarSlice = {
  car: TCar[];
  updateCar: TCar[];
};

// Define the initial state using that type
const initialState: TCarSlice = {
  car: [],
  updateCar: [],
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
  },
});

export const { getAllCar, carUpdate } = CarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const useCar = (state: RootState) => state.cars.car;
export const useUpdate = (state: RootState) => state.cars.updateCar;

export default CarSlice.reducer;
