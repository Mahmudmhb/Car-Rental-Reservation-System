import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark" | "system";

const initialState: ThemeState =
  (localStorage.getItem("theme") as ThemeState) || "system";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      const newTheme = action.payload;
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
