import { createSlice } from "@reduxjs/toolkit";


export const topArtistListSlice = createSlice({
  name: "topArtistList",
  initialState: {
    data: {},
    selectedArtist: {},
  },
  reducers: {
    // addTopArtistList: (state, action) => {
    //   state.status = "loading";
    //   state.list = [...state.list, action.payload];
    //   state.status = "idle";
    // },
    addselectedArtist: (state, action) => {
      state.selectedArtist = action.payload;
      console.log(action.payload)
    },
  },
});

// export const getselectedArtistByMbid = (state, mbId) =>
//   state.topArtistList.data.artists.artist.filter(
//     (item) => item.mbid == mbId
//   );
export const getSelecedArtist = (state) => state.topArtistList.selectedArtist;
export const { addselectedArtist } = topArtistListSlice.actions;
export default topArtistListSlice.reducer;
