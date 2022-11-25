import AlbumAndTrackCard from "../components/cards/AlbumAndTrackCard";

export default {
  title: "Components/AlbumAndTrackCard",
  component: AlbumAndTrackCard,
};

const Template = (args) => <AlbumAndTrackCard {...args} />;

export const withData = Template.bind({});
withData.args = {
  data: {
    name: "Fearless",
    playcount: 25228624,
    mbid: "6caf2472-3922-403e-90bf-19a45d98d065",
    url: "https://www.last.fm/music/Taylor+Swift/Fearless",
    artist: {
      name: "Taylor Swift",
      mbid: "20244d07-534f-4eff-b4d4-930878889970",
      url: "https://www.last.fm/music/Taylor+Swift",
    },
    image: [
      {
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/34s/d8888f990ce044e4c856550a7041c83e.png",
        size: "small",
      },
    ],
  },
  width: "25vw"
};

export const withOutData = Template.bind({});
withOutData.args = {
  data: {
    name: "",
    playcount: "",
    mbid: "",
    url: "",
    artist: {
      name: "",
      mbid: "",
      url: "",
    },
    image: [
      {
        "#text":
          "",
        size: "",
      },
    ],
  },
  width: "25vw"
};
