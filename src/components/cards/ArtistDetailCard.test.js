import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ArtistDetailCard from "./ArtistDetailCard";

test("ArtistDetailCard renders correctly", () => {
  render(
    <Provider store={store}>
      <ArtistDetailCard />
    </Provider>
  );

  const artistDetailCardFirstEl = screen.getByTestId(/firstEl/i);
  const artistDetailCardSecondEl = screen.getByTestId(/secondEl/i);
  const artistDetailCardHeader = screen.getByText(/artist/i);

  expect(artistDetailCardFirstEl).toContainElement(artistDetailCardSecondEl);
  expect(artistDetailCardHeader).toHaveTextContent("Artist");
});
