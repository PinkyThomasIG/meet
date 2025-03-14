import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  test("renders the event title correctly", () => {
    const event = mockData[0];
    const { container } = render(<Event event={event} />);
    const title = container.querySelector("h2");

    // Assert that the event's summary (title) appears in the document
    expect(title).toHaveTextContent(event.summary);
  });

  test("renders the event time correctly", () => {
    const event = mockData[0];

    const { container } = render(<Event event={event} />);
    const time = container.querySelector("p");

    const createdTime = new Date(event.created).toLocaleString();

    expect(time).toHaveTextContent(createdTime);
  });

  test("renders the event location correctly", () => {
    const event = mockData[0];
    const { container } = render(<Event event={event} />);
    const location = container.querySelectorAll("p")[1];

    expect(location).toHaveTextContent(event.location);
  });

  test("renders event details button with the title (Show Details)", () => {
    const event = mockData[0];
    const { container } = render(<Event event={event} />);
    const button = container.querySelector("button");

    expect(button).toHaveTextContent("Show Details");
  });

  test("by default, event section details should be hidden", () => {
    const event = mockData[0];
    const { container } = render(<Event event={event} />);

    const description = container.querySelector("li p:last-child");
    expect(description).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks on the "Show Details" button', async () => {
    const event = mockData[0];

    const { container } = render(<Event event={event} />);
    const descriptionBeforeClick = container.querySelector("li p:last-child");
    expect(descriptionBeforeClick).not.toBeInTheDocument();

    const showDetailsButton = container.querySelector("button");

    const user = userEvent.setup();
    await user.click(showDetailsButton);

    const descriptionAfterClick = container.querySelector("li p:last-child");

    const normalizedDescription = event.description.trim().replace(/\s+/g, " ");

    expect(descriptionAfterClick).toHaveTextContent(normalizedDescription);
  });

  test('hides the details section when the user clicks on the "Hide Details" button', async () => {
    const event = mockData[0];
    const { container } = render(<Event event={event} />);

    const showDetailsButton = container.querySelector("button");
    const user = userEvent.setup();
    await user.click(showDetailsButton);

    let descriptionAfterShow = container.querySelector("li p:last-child");
    expect(descriptionAfterShow).toHaveTextContent(
      event.description.trim().replace(/\s+/g, " ")
    );

    await user.click(showDetailsButton);

    descriptionAfterShow = container.querySelector("li p:last-child");
    expect(descriptionAfterShow).not.toBeInTheDocument();
  });
});
