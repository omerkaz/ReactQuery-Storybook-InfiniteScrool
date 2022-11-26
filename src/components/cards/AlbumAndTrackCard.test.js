import { screen, render } from "@testing-library/react";
import AlbumAndTrackCard from "./AlbumAndTrackCard";

test("AlbumAndTrackCard renders correctly", () => {
  const data = {
    name: "Fearless",
    playcount: 25232746,
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
  };
  render(<AlbumAndTrackCard data={data} />);
  const albumAndTrackCardFirstEl = screen.getByTestId(/firstEl/i);
  const albumAndTrackCardSecondEl = screen.getByTestId(/secondEl/i);
  const albumAndTrackCardArtistName = screen.getByTestId(/artistName/i);

  expect(albumAndTrackCardFirstEl).toContainElement(albumAndTrackCardSecondEl);
  // artist name is taken from static data here
  expect(albumAndTrackCardArtistName).toHaveTextContent("Taylor Swift")
});
