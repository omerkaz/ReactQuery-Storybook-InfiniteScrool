import ArtistCard from "../components/cards/ArtistCard";

export default { 
    title: "Components/ArtistCard", 
    component: ArtistCard 
};

const Template = (args) => <ArtistCard {...args} />;

export const withData = Template.bind({});
withData.args = {
  data: {
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
  imageBackgroundColor: "purple" || "blue",
  width: "25vw"

};

export const withOutData = Template.bind({});
withOutData.args = {
  data: {
    name: "",
    playcount: "",
    listeners: "",
    mbid: "",
    url: "",
    streamable: "",
    image: [
      {
        "#text":
          "",
        size: "",
      },
    ],
  },
  imageBackgroundColor: "purple" || "blue",
  width: "25vw"
};