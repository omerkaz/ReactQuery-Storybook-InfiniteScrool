import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import TopArtistList from "./TopArtistList";
const queryClient = new QueryClient();

test("TopArtistList renders correctly", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <TopArtistList />
      </Provider>
    </QueryClientProvider>
  );

  const topArtistListFirstEl = screen.getByTestId(/firstEl/i);
  const topArtistListSecondEl = screen.getByTestId(/secondEl/i);
  expect(topArtistListFirstEl).toContainElement(topArtistListSecondEl);
  expect(topArtistListSecondEl).toBeInTheDocument()
});
