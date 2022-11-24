import { configureStore } from "@reduxjs/toolkit";
import topArtistListSlice from "../components/artist/topArtistListSlice";

export const store = configureStore({
  reducer: {
    topArtistList: topArtistListSlice,
  },
});
