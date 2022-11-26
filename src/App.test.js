import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const queryClient = new QueryClient();

test("App renders correctly", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );

  const header = screen.getByText(/neverland music library/i);
  const footer = screen.getByText(/NML ℗™ 2022/i)
  expect(header).toHaveTextContent("Neverland Music Library")
  expect(footer).toHaveTextContent("NML ℗™ 2022")
});
