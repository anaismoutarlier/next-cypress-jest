import { render, screen } from "@testing-library/react";
import Home from "./page";

test("Home page title displayed", () => {
  render(<Home />);
  const title = screen.getByText(/welcome to nextjs/i);
  expect(title).toBeInTheDocument();
});
