import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

const feature = loadFeature(
  "./src/__tests__/features/showHideAnEventsDetails.feature"
);

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("An event element is collapsed by default", () => {});

    when("the event list is displayed", () => {
      AppComponent = render(<App />);
    });

    then("each event should have its details collapsed by default", () => {
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      const EventItems = within(EventListDOM).queryAllByRole("listitem");
      EventItems.forEach((event) => {
        expect(
          within(event).queryByTestId("event-details")
        ).not.toBeInTheDocument();
      });
    });
  });
  test("User can expand an event to see details", ({ given, when, then }) => {
    let AppComponent;
    given("User can expand an event to see details", () => {
      AppComponent = render(<App />);
    });

    when("the user clicks on an event", async () => {
      const user = userEvent.setup();
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      const firstEvent = within(EventListDOM).getAllByRole("listitem")[0];
      await user.click(within(firstEvent).getByRole("button"));
    });

    then("the event details should expand and become visible", () => {
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      const firstEvent = within(EventListDOM).getAllByRole("listitem")[0];
      expect(
        within(firstEvent).getByTestId("event-details")
      ).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user has expanded an event to view its details", async () => {
      AppComponent = render(<App />);
      const user = userEvent.setup();
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      const firstEvent = within(EventListDOM).getAllByRole("listitem")[0];
      await user.click(within(firstEvent).getByRole("button"));
    });

    when("the user clicks on the event again to collapse it", async () => {
      const user = userEvent.setup();
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      const firstEvent = within(EventListDOM).getAllByRole("listitem")[0];
      await user.click(within(firstEvent).getByRole("button"));
    });

    then(
      "the event details should be hidden, and only the summary should be visible",
      () => {
        const EventListDOM =
          AppComponent.container.querySelector("#event-list");
        const firstEvent = within(EventListDOM).getAllByRole("listitem")[0];
        expect(
          within(firstEvent).queryByTestId("event-details")
        ).not.toBeInTheDocument();
      }
    );
  });
});
