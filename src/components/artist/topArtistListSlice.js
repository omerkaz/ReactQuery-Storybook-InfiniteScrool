import { createSlice } from "@reduxjs/toolkit";

export const topArtistListSlice = createSlice({
  name: "topArtistList",
  initialState: {
    selectedArtist: {
      name: "Olivia Rodrigo",
      playcount: "124966124",
      listeners: "1288078",
      mbid: "",
      url: "https://www.last.fm/music/Olivia+Rodrigo",
      streamable: "0",
      image: [
        {
          "#text":
            "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
          size: "small",
        },
      ],
    },
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
