import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test('contains an input element with the role "spinbutton"', () => {
    render(
      <NumberOfEvents numberOfEvents={32} onNumberOfEventsChange={() => {}} />
    );
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  test("has the default value of 32 in the input field", () => {
    render(
      <NumberOfEvents numberOfEvents={32} onNumberOfEventsChange={() => {}} />
    );
    const input = screen.getByRole("spinbutton");
    expect(input.value).toBe("32");
  });
});
