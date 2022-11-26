import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("Header renders correctly", () => {
  render(
    
    <Provider store={store}>
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    </Provider>
  );

  const headerFirstEl = screen.getByText(/neverland music library/i);
  const headerSecondEl = screen.getByTestId(/secondEl/i);
  const headerThirdEl = screen.getByTestId(/thirdEl/i);

  expect(headerFirstEl).toBeInTheDocument();
  expect(headerFirstEl).toHaveTextContent("Neverland Music Library");
  expect(headerFirstEl).toContainElement(headerSecondEl);
  expect(headerSecondEl).toContainElement(headerThirdEl);
});
