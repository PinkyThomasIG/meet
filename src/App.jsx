import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { extractLocations, getEvents } from "./api";

import "./App.css";

const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  const handleNumberOfEventsChange = (value) => {
    setNumberOfEvents(value); // Set the new number of events when it changes
  };

  return (
    <div className=" App">
      <CitySearch allLocations={allLocations} />
      <EventList events={events} />
      <NumberOfEvents
        numberOfEvents={numberOfEvents}
        onNumberOfEventsChange={handleNumberOfEventsChange}
      />
    </div>
  );
};

export default App;
