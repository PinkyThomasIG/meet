// src/components/NumberOfEvents.js
import React from "react";

const NumberOfEvents = ({ numberOfEvents, onNumberOfEventsChange }) => {
  const handleChange = (event) => {
    onNumberOfEventsChange(event.target.value); // Calling the passed function
  };

  return (
    <div id="number-of-events" data-testid="number-of-events">
      <input type="number" value={numberOfEvents} onChange={handleChange} />
    </div>
  );
};

export default NumberOfEvents;
