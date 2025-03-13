import React from "react";
import { render } from "@testing-library/react";
import CitySearch from "../components/CitySearch";
import userEvent from "@testing-library/user-event";
import { extractLocations, getEvents } from "../api";

describe("<CitySearch /> component", () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });

  // checks whether an element with the role textbox is in the document.
  test("renders text input", () => {
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass("city");
  });

  //Test that no list (i.e., the suggestion list) is shown within the CitySearch component by default
  test("suggestion list is hidden by default", () => {
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  //ensures that the suggestion list appears when the city input field “gains focus” (i.e., when the input field is clicked).
  test("renders a list of suggestions when city textbox gains focus", async () => {
    /* to simulate user interactions in a test,  have 
    const user = userEvent.setup(); placed as the first line in the test. */
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    await user.dblClick(cityTextBox);
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass("suggestions");
  });

  //that will verify that the list of suggestions is correctly rendered according to the query typed by the user in the city input field
  test("updates list of suggestions correctly when user types in city textbox", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    //user types "Berlin" in city textbox
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    await user.type(cityTextBox, "Berlin");

    // filter allLocations to locations matching "Berlin"
    const suggestions = allLocations
      ? allLocations.filter((location) => {
          return (
            location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1
          );
        })
      : [];

    // get all <li> elements inside the suggestions list
    const suggestionListItems = CitySearchComponent.queryAllByRole("listitem");
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });

  //test:  checks whether the value of query’s state changes when the user clicks on a suggestion
  test("renders the suggestion text in the textbox upon clicking on the suggestion", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    const cityTextBox = CitySearchComponent.queryByRole("textboy");
    await user.type(cityTextBox, "Berlin");

    // the suggestions's textContent look like this: "Berlin, Germany"
    const BerlinGernmaySuggestion =
      CitySearchComponent.queryAllByRole("listitem")[0];

    await user.click(BerlinGernmaySuggestion);

    expect(cityTextBox).toHaveValue(BerlinGernmaySuggestion.textContent);
  });
});
