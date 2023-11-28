import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

test("Button renders children text", () => {
  render(<Button>Hello</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Hello");
});

test("Button handles click events", () => {
  let i = 0;
  render(
    <Button
      onClick={() => {
        i++;
      }}
    />
  );
  const button = screen.getByRole("button");
  // simuler clic du bouton
  fireEvent.click(button);
  // voir si le clic a eu effet (i est incrementé par 1)
  expect(i).toBe(1);
});

test("Button is red by default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("Button accepts custom color", () => {
  render(<Button backgroundColor="yellow" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: yellow");
});
