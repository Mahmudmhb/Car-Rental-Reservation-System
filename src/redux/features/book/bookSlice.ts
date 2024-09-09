import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { TBooked } from "../../../types/types";

interface Booking {
  id: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "canceled";
  approved: boolean;
}

interface BookingState {
  bookings: Booking[];
  booked: TBooked[];
  returnCar: TBooked[];
}

const initialState: BookingState = {
  booked: [],
  bookings: [],
  returnCar: [],
};
export const bookSlice = createSlice({
  name: "booked",
  initialState: initialState,
  reducers: {
    gettAllbookedHsitory: (state, action) => {
      state.booked = action.payload;
    },
    // getAllBooked: (state, action: PayloadAction<Booking[]>) => {
    //   state.booked = action.payload;
    // },

    FilterBooked: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      console.log("booking id", id);
      state.booked = state?.booked?.filter((item) => item._id !== id);
      console.log(state.booked);
    },
    returnCar: (state, action: PayloadAction<TBooked[]>) => {
      console.log(action.payload);
      const totalBookedCar = action.payload;
      state.returnCar = totalBookedCar.filter(
        (item) => item.isBooked === "confirmed"
      );
    },
  },
});
export const { gettAllbookedHsitory, FilterBooked, returnCar } =
  bookSlice.actions;
export const useBookhitory = (state: RootState) => state.booked.booked;
export const useAllBooked = (state: RootState) => state.booked.booked;
export const useReturnCar = (state: RootState) => state.booked.returnCar;
// export const useFilterBooked = (state: RootState)=> state.booked.booked
export default bookSlice.reducer;
