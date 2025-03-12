import React, { useState } from "react";

const NumberOfEvents = ({ numberOfEvents, onNumberOfEventsChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onNumberOfEventsChange(newValue); // Calling the passed function
  };

  return (
    <div id="number-of-events" data-testid="number-of-events">
      <input type="number" value={numberOfEvents} onChange={handleChange} />
    </div>
  );
};

export default NumberOfEvents;
