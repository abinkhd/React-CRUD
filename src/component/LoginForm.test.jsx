import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import React from "react";

test("Check All elements Present", () => {
  render(<LoginForm />);
  const username = screen.getByRole("textbox", { name: /username/i });
  const submitBtn = screen.getByRole("button", { name: /Submit/i });
  const password = screen.getByLabelText(/password/i);
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

test("Check Button Submit Enabled", () => {
  render(<LoginForm />);
  const username = screen.getByRole("textbox", { name: /username/i });
  const submitBtn = screen.getByRole("button", { name: /Submit/i });
  const password = screen.getByLabelText(/password/i);
  userEvent.click(username);
  userEvent.keyboard("admin");
  userEvent.click(password);
  userEvent.keyboard("Admin@123");
  expect(submitBtn).toBeEnabled();
});
