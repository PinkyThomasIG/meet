import React from "react";
import { render, screen } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents"; // Adjust the path accordingly

describe("NumberOfEvents component", () => {
  // Test to ensure that the default value of the input field is 32
  test("default value of the input field is 32", () => {
    render(<NumberOfEvents updateNumberOfEvents={() => {}} />);
    // Access the input field by role
    const input = screen.getByRole("textbox");
    // Check if the input's value is '32' by default
    expect(input.value).toBe("32");
  });

  test("input field value changes when user types", async () => {
    render(<NumberOfEvents updateNumberOfEvents={() => {}} />);

    // Access the input field
    const inputField = screen.getByRole("textbox");

    // Simulate user typing backspace twice and then typing '10'
    await userEvent.type(inputField, "{backspace}{backspace}10");

    // Check that the input field's value has been updated to '10'
    expect(inputField.value).toBe("10");
  });
});
