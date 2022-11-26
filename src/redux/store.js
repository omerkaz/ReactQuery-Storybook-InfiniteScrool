import { configureStore } from "@reduxjs/toolkit";
import topArtistListSlice from "../components/artist/topArtistListSlice";
import headerSlice from "../components/headerSlice";

export const store = configureStore({
  reducer: {
    topArtistList: topArtistListSlice,
    darkMode: headerSlice,
  },
});
