import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const initialState = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUser: (state, action) => {
      const { user, token } = action.payload;
      // console.log(user, token);
      state.user = user;
      state.token = token;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { signUser, logoutUser } = authSlice.actions;
export const useCurrnetToken = (state: RootState) => state.auth.token;
export const useCurrnetUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
