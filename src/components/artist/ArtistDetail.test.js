import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import ArtistDetail from "./ArtistDetail";
const queryClient = new QueryClient();

test("ArtistDetail renders correctly", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ArtistDetail />
      </Provider>
    </QueryClientProvider>
  );

  const artistDetailFirstEl = screen.getByTestId(/firstEl/i);
  expect(artistDetailFirstEl).toHaveTextContent("Loading");
});
