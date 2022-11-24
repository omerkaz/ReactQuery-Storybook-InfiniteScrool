import { createSlice } from "@reduxjs/toolkit";

const staticData = {
  artists: {
    artist: [
      {
        name: "Taylor Swift",
        playcount: "1013477063",
        listeners: "3622298",
        mbid: "20244d07-534f-4eff-b4d4-930878889970",
        url: "https://www.last.fm/music/Taylor+Swift",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      },
      {
        name: "The Weeknd",
        playcount: "368781487",
        listeners: "2899993",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      },
      {
        name: "Drake",
        playcount: "383356848",
        listeners: "4665452",
        mbid: "b49b81cc-d5b7-4bdd-aadb-385df8de69a6",
        url: "https://www.last.fm/music/Drake",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      },
      {
        name: "Kanye West",
        playcount: "682749397",
        listeners: "5737283",
        mbid: "164f0d73-1234-4e2c-8743-d77bf2191051",
        url: "https://www.last.fm/music/Kanye+West",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      },
      {
        name: "Arctic Monkeys",
        playcount: "487227120",
        listeners: "4721019",
        mbid: "ada7a83c-e3e1-40f1-93f9-3e73dbc9298a",
        url: "https://www.last.fm/music/Arctic+Monkeys",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      },
      {
        name: "Rihanna",
        playcount: "290400624",
        listeners: "5817311",
        mbid: "db36a76f-4cdf-43ac-8cd0-5e48092d2bae",
        url: "https://www.last.fm/music/Rihanna",
        streamable: "0",
        image: [
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "small",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "medium",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "large",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "extralarge",
          },
          {
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            size: "mega",
          },
        ],
      },
    ],
    "@attr": {
      page: "2",
      perPage: "3",
      totalPages: "1446155",
      total: "4338464",
    },
  },
};

export const topArtistListSlice = createSlice({
  name: "topArtistList",
  initialState: {
    staticData,
    status: "idle",
    selectedArtist: "",
  },
  reducers: {
    addTopArtistList: (state, action) => {
      state.status = "loading";
      state.list = [...state.list, action.payload];
      state.status = "idle";
    },
    addselectedArtist: (state, action) => {
      state.selectedArtist = action.payload;
    },
  },
});

export const topArtistsList = (state) =>
  state.topArtistList.staticData.artists.artist;
export const getselectedArtistByMbid = (state, mbId) =>
  state.topArtistList.staticData.artists.artist.filter(
    (item) => item.mbid == mbId
  );
export const getSelecedArtist = (state) => state.topArtistList;
export const { addTopArtistList, addselectedArtist } = topArtistListSlice.actions;
export default topArtistListSlice.reducer;
