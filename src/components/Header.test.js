import { screen, render } from "@testing-library/react";
import Header from "./Header";
test("Header renders correctly", () => {
  render(<Header />);

  const headerFirstEl = screen.getByText(/neverland music library/i);
  const headerSecondEl = screen.getByTestId(/secondEl/i);
  const headerThirdEl = screen.getByTestId(/thirdEl/i);

  expect(headerFirstEl).toBeInTheDocument();
  expect(headerFirstEl).toHaveTextContent("Neverland Music Library");
  expect(headerFirstEl).toContainElement(headerSecondEl);
  expect(headerSecondEl).toContainElement(headerThirdEl);
});
