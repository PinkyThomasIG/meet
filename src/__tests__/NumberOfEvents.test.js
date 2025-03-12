import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

const handleNumberOfEventsChange = jest.fn();

describe("<NumberOfEvents /> component", () => {
  test('contains an input element with the role "spinbutton"', () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        onNumberOfEventsChange={handleNumberOfEventsChange}
      />
    );
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  test("has the default value of 32 in the input field", () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        onNumberOfEventsChange={handleNumberOfEventsChange}
      />
    );
    const input = screen.getByRole("spinbutton");
    expect(input.value).toBe("32");
  });

  test("updates the number of events when user types in input", async () => {
    render(
      <NumberOfEvents
        numberOfEvents={32}
        onNumberOfEventsChange={handleNumberOfEventsChange}
      />
    );

    const inputElement = screen.getByRole("spinbutton");

    // Simulate typing: backspace twice and then type 10
    await userEvent.type(inputElement, "{backspace}{backspace}10");

    // Wait for the value to update before checking
    await waitFor(() => {
      expect(inputElement.value).toBe("10");
    });

    // Ensure the function is called
    expect(handleNumberOfEventsChange).toHaveBeenCalledWith("10");
  });
});
