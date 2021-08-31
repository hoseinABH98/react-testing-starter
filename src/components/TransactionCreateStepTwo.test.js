import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render , the pay button is disable", async () => {
  render(<TransactionCreateStepTwo sender="1" receiver="2" />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if amount and note entered , the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender="1" receiver="2" />);
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
