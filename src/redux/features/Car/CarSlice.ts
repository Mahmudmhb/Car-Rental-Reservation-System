import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { TCar } from "../../../types/types";

// Define a type for the slice state
type TCarSlice = {
  car: TCar[];
};

// Define the initial state using that type
const initialState: TCarSlice = {
  car: [],
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
  },
});

export const { getAllCar } = CarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const useCar = (state: RootState) => state.cars.car;

export default CarSlice.reducer;
