import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IBookingForm, TBooked } from "../../../Component/Types/Types";

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
  bookedCar: IBookingForm[];
}

const initialState: BookingState = {
  booked: [],
  bookings: [],
  returnCar: [],
  bookedCar: [],
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
        (item) => item.isBooked === "confirmed" && item.totalCost == 0
      );
    },
    bookedCar: (state, action: PayloadAction<IBookingForm[]>) => {
      console.log(action.payload);
      state.bookedCar = action.payload;
    },
  },
});
export const { gettAllbookedHsitory, bookedCar, FilterBooked, returnCar } =
  bookSlice.actions;
export const useBookhitory = (state: RootState) => state.booked.booked;
export const useAllBooked = (state: RootState) => state.booked.booked;
export const useReturnCar = (state: RootState) => state.booked.returnCar;
export const useBookedCar = (state: RootState) => state.booked.bookedCar;
// export const useFilterBooked = (state: RootState)=> state.booked.booked
export default bookSlice.reducer;
