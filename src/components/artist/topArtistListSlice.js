import { createSlice } from "@reduxjs/toolkit";

export const topArtistListSlice = createSlice({
  name: "topArtistList",
  initialState: {
    selectedArtist: {},
  },
  reducers: {
    addselectedArtist: (state, action) => {
      state.selectedArtist = action.payload;
      console.log(action.payload)
    },
  },
});

export const getSelecedArtist = (state) => state.topArtistList.selectedArtist;
export const { addselectedArtist } = topArtistListSlice.actions;
export default topArtistListSlice.reducer;
