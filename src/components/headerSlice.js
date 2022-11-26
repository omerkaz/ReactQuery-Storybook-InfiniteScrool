import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDark: false,
  },
  reducers: {
    switchDarkMode: (state, action) => {
      state.isDark = !state.isDark;
    },
  },
});

export const getDarkMode = (state) => state.darkMode.isDark;
export const { switchDarkMode } = headerSlice.actions;
export default headerSlice.reducer
