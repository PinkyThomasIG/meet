import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import mockData from "../mock-data";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  const mockSetCurrentNOE = jest.fn();
  const mockSetErrorAlert = jest.fn();

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents
        setCurrentNOE={mockSetCurrentNOE}
        setErrorAlert={mockSetErrorAlert}
      />
    );
  });

  test("renders number of events text input", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-of-events-input");
  });

  test("default number is 32", async () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextBox).toHaveValue("32");
  });

  test("calls setCurrentNOE when user changes input", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");

    await user.type(numberTextBox, "{backspace}{backspace}10");

    expect(mockSetCurrentNOE).toHaveBeenCalledWith(10);
  });

  test("shows error message when a non-numeric value is entered", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");

    await user.type(numberTextBox, "abc");
    expect(mockSetErrorAlert).toHaveBeenCalledWith(
      "Please enter a valid number of events (positive number and less than 1000)."
    );
  });

  test("shows error message when number is less than or equal to 0", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");

    await user.type(numberTextBox, "-1");

    // Check that setErrorAlert was called with an error message
    expect(mockSetErrorAlert).toHaveBeenCalledWith(
      "Please enter a valid number of events (positive number and less than 1000)."
    );
  });

  test("clears error message when valid number is entered", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");

    // First, enter an invalid value
    await user.type(numberTextBox, "abc");

    // Check that the error message is set
    expect(mockSetErrorAlert).toHaveBeenCalledWith(
      "Please enter a valid number of events (positive number and less than 1000)."
    );

    // Now, enter a valid value
    await user.type(numberTextBox, "{backspace}{backspace}50");

    // Check that the error message is cleared
    expect(mockSetErrorAlert).toHaveBeenCalledWith("");
  });

  /* test("number of events text box value changes when the user types in it", async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(numberTextBox, "123");

    // 32 (the default value already written) + 123
    expect(numberTextBox).toHaveValue("32123");
  }); */
});
