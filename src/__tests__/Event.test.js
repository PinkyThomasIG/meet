import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("Event Component", () => {
  // Test Case 1: Renders the event title
  test("renders event title", () => {
    render(<Event event={mockData[0]} />);
    // The title should be the summary field in the event data
    expect(screen.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  // Test Case 2: Renders the event start time
  test("renders event start time", () => {
    render(<Event event={mockData[0]} />);

    // Format the start time in the same way as in the component
    const startTime = new Date(mockData[0].start.dateTime).toLocaleString();

    // Check if the formatted start time is in the document
    expect(screen.queryByText(startTime)).toBeInTheDocument();
  });

  // Test Case 3: Renders the event location
  test("renders event location", () => {
    render(<Event event={mockData[0]} />);

    // The location should come from the location field in the event data
    expect(screen.queryByText(mockData[0].location)).toBeInTheDocument();
  });

  // Test Case 4: By default, event details section should be hidden
  test("by default, event's details section should be hidden", () => {
    render(<Event event={mockData[0]} />);

    // The details section should not be visible initially
    expect(screen.queryByText(mockData[0].description)).not.toBeInTheDocument();
    expect(screen.queryByText("Show details")).toBeInTheDocument();
  });

  // Test case 5:
  test("shows the details section when the user clicks on the 'Show Details' button", async () => {
    render(<Event event={mockData[1]} />);

    // Click the "Show Details" button
    fireEvent.click(screen.getByRole("button", { name: /show details/i }));

    // Use a function matcher to check if any element contains part of the description
    const descriptionElement = await screen.findByText((content) =>
      content.includes("Have you wondered how you can ask Google")
    );

    expect(descriptionElement).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /hide details/i })
    ).toBeInTheDocument();
  });
});
