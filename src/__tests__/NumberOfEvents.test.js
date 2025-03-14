import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import mockData from "../mock-data";

describe("<NumberOfEvents /> component", () => {
  test("should contain an element with the role of textbox", () => {
    const { container } = render(
      <NumberOfEvents updateEventCount={() => {}} />
    );
    const inputElement = container.querySelector('input[type="number"]');
    expect(inputElement).toBeInTheDocument(); // Check if the input element is rendered
  });

  describe("<NumberOfEvents /> component", () => {
    test("NumberOfEvents component's input field has a default value of 32", () => {
      const { container } = render(
        <NumberOfEvents updateEventCount={() => {}} />
      );
      const inputElement = container.querySelector('input[type="number"]'); // Select the input element
      expect(inputElement).toHaveValue(32); // Assert that the value of the input is 32 by default
    });
  });
  test("NumberOfEvents component's input field value changes when user types", async () => {
    const updateEventCount = jest.fn(); // Mock the updateEventCount function
    const { container } = render(
      <NumberOfEvents updateEventCount={updateEventCount} />
    ); // Render the component

    const inputElement = container.querySelector('input[type="number"]'); // Get the input element

    const user = userEvent.setup(); // Initialize userEvent setup

    // Clear the current value of the input field
    await user.clear(inputElement);

    // Type in '10'
    await user.type(inputElement, "10");

    // Ensure the value of the input field is now '10'
    expect(inputElement).toHaveValue(10);

    // Optionally, check if the updateEventCount function was called with the correct value
    expect(updateEventCount).toHaveBeenCalledWith(10);
  });
});
