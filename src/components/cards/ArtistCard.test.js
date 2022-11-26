import { screen, render } from "@testing-library/react";
import ArtistCard from "./ArtistCard";

test("ArtistCard renders correctly", () => {
  const data = {
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
  };

  render(<ArtistCard data={data} />);
  const artistCardFirstEl = screen.getByTestId(/firstEl/i);
  const artistCardSecondEl = screen.getByTestId(/secondEl/i);
  const artistCardHeader = screen.getByText(/artist/i);

  expect(artistCardFirstEl).toContainElement(artistCardSecondEl);
  expect(artistCardHeader).toHaveTextContent("Artist");
});
