import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given(
      "the user has not set a specific number of events to display",
      () => {}
    );

    when("the event list is displayed", () => {
      AppComponent = render(<App />);
    });

    then("32 events should be displayed by default", async () => {
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      expect(EventListItems.length).toBe(32);
    });
  });

  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("the user is viewing the event list", () => {
      AppComponent = render(<App />);
    });

    when(
      "the user specifies a different number of events (e.g., 10)",
      async () => {
        const user = userEvent.setup();
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const inputField = within(NumberOfEventsDOM).queryByRole("textbox");
        await user.clear(inputField);
        await user.type(inputField, "10");
      }
    );

    then(
      "the event list should update to show the specified number of events",
      async () => {
        const EventListDOM =
          AppComponent.container.querySelector("#event-list");
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(10);
      }
    );
  });
});
