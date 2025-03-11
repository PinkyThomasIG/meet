import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<App /> component", () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test("renders list of events", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("render CitySearch", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test("renders NumberOfEvents component", () => {
    // Render the App component
    const { container } = render(<App />);

    // Find the NumberOfEvents component using querySelector and its id
    const numberOfEventsComponent =
      container.firstChild.querySelector("#number-of-events");

    // Check if the NumberOfEvents component is in the document
    expect(numberOfEventsComponent).toBeInTheDocument();
  });
});
