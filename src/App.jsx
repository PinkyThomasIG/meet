import React from "react";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import Event from "./components/Event";
import NumberOfEvents from "./components/NumberOfEvents";

const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const updateNumberOfEvents = (value) => {
    setNumberOfEvents(value);
  };

  return (
    <div className="App">
      <NumberOfEvents updateNumberOfEvents={updateNumberOfEvents} />
      <EventList />
      <CitySearch />
    </div>
  );
};

export default App;
