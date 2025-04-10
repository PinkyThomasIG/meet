import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents } from "./api";
import { extractLocations } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";

import "./App.css";

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningText, setWarningText] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningText("");
    } else {
      setWarningText(
        "You are offline. The displayed list has been loaded from the cache and may not be up to date"
      );
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningText.length ? <WarningAlert text={warningText} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container">
        <CityEventsChart allLocations={allLocations} events={events} />
        <EventGenresChart events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
