import React, { useState } from "react";

const NumberOfEvents = ({ updateNumberOfEvents }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
    updateNumberOfEvents(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of Events: </label>
      <input
        id="event-count"
        type="number"
        role="textbox"
        value={numberOfEvents}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
