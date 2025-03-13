import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Event from "../components/Event";
import EventList from "../components/EventList";
import userEvent from "@testing-library/user-event";
import mockData from "../mock-data";
import { getEvents } from "../api";

describe("<Event /> Component", () => {
  //test to check if event details are collapsed by default.
  test("renders event collapsed by default", async () => {
    const allEvents = await getEvents();
    const event = allEvents[0];
    render(<Event event={event} />);
    const eventDetails = screen.queryByText(event.description);
    expect(eventDetails).not.toBeInTheDocument();
  });

  //test to check the event titile(summary) is displayed
  test("renders event title correctly", async () => {
    const allEvents = await getEvents(); // Fetch events using getEvents()
    const event = allEvents[0];
    render(<Event event={event} />); // Render the Event component with the event data
    expect(screen.queryByText(event.summary)).toBeInTheDocument();
  });

  //test to check if event start time is displayed
  test("renders event start time correctly", async () => {
    const allEvents = await getEvents();
    const event = allEvents[0];
    render(<Event event={event} />);
    expect(screen.queryByText(event.start.dateTime)).toBeInTheDocument();
  });

  //Test if the event location is displayed
  test("renders event location correctly", async () => {
    const allEvents = await getEvents();
    const event = allEvents[0];
    render(<Event event={event} />);
    expect(screen.queryByText(event.location)).toBeInTheDocument();
  });

  //test if the 'show details' button is displayed
  test("renders 'Show Details' button correctly", async () => {
    const allEvents = await getEvents();
    const event = allEvents[0];
    render(<Event event={event} />);
    expect(
      screen.getByRole("button", { name: /show details/i })
    ).toBeInTheDocument();
  });

  //test to check if event details are hidden by default.
  test("renders event collapsed by default", async () => {
    const allEvents = await getEvents();
    const event = allEvents[0];
    render(<Event event={event} />);
    const eventDetails = screen.queryByText(event.description);
    expect(eventDetails).not.toBeInTheDocument();
  });
  //test to check show details section displayed when user clicked on show details button
  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const event = mockData[0]; // Get the first event for the test

    render(<Event event={event} />);

    const user = userEvent.setup(); // Initialize user event interactions

    // Find the "Show Details" button
    const showDetailsButton = screen.getByText(/show details/i);

    // Initially, the event details (description) should not be visible
    const eventDetails = screen.queryByText(event.description);
    expect(eventDetails).not.toBeInTheDocument();

    // Click the "Show Details" button
    await user.click(showDetailsButton);

    // After clicking, the details should be visible
    const detailsAfterClick = screen.getByText(event.description);
    expect(detailsAfterClick).toBeInTheDocument();

    // The button text should change to "Hide Details"
    const hideDetailsButton = screen.getByText(/hide details/i);
    expect(hideDetailsButton).toBeInTheDocument();
  });

  // test to check when user clicks on hides button, details are hidden
  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const event = mockData[0]; // Get the first event for the test

    render(<Event event={event} />);

    const user = userEvent.setup(); // Initialize user event interactions

    // Find the "Show Details" button
    const showDetailsButton = screen.getByText(/show details/i);

    // Initially, the event details (description) should not be visible
    const eventDetails = screen.queryByText(event.description);
    expect(eventDetails).not.toBeInTheDocument();

    // Click the "Show Details" button to show the details
    await user.click(showDetailsButton);

    // After clicking, the details should be visible
    const detailsAfterClick = screen.getByText(event.description);
    expect(detailsAfterClick).toBeInTheDocument();

    // The button text should change to "Hide Details"
    const hideDetailsButton = screen.getByText(/hide details/i);
    expect(hideDetailsButton).toBeInTheDocument();

    // Click the "Hide Details" button
    await user.click(hideDetailsButton);

    // After clicking, the details should be hidden again
    const detailsAfterHideClick = screen.queryByText(event.description);
    expect(detailsAfterHideClick).not.toBeInTheDocument();

    // The button text should change back to "Show Details"
    const showDetailsButtonAgain = screen.getByText(/show details/i);
    expect(showDetailsButtonAgain).toBeInTheDocument();
  });
});
