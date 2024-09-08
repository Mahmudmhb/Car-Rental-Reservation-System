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
}

const initialState: BookingState = {
  booked: [],
  bookings: [],
};
export const bookSlice = createSlice({
  name: "booked",
  initialState: initialState,
  reducers: {
    gettAllbookedHsitory: (state, action) => {
      console.log("state ", action.payload);
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
  },
});
export const {
  gettAllbookedHsitory,

  FilterBooked,
} = bookSlice.actions;
export const useBookhitory = (state: RootState) => state.booked.booked;
export const useAllBooked = (state: RootState) => state.booked.booked;
// export const useFilterBooked = (state: RootState)=> state.booked.booked
export default bookSlice.reducer;
