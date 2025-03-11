import React, { useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";

const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleNumberOfEventsChange = (value) => {
    setNumberOfEvents(value); // Set the new number of events when it changes
  };

  return (
    <div>
      <CitySearch />
      <EventList />
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        onNumberOfEventsChange={handleNumberOfEventsChange}
      />
    </div>
  );
};

export default App;
