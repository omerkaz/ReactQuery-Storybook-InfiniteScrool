import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

test("Footer renders correctly", () => {
  render(<Footer />);

  const footerFirstEl = screen.getByTestId(/firstEl/i)
  expect(footerFirstEl).toHaveTextContent("NML ℗™ 2022")
});
