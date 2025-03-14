import React, { useState } from "react";

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32); // Default value is 32

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value); // Convert value to number
    if (value === "" || numericValue >= 1) {
      // Allow empty string for clearing and numeric value >= 1
      setEventCount(numericValue); // Update state with numeric value
      updateEventCount(numericValue); // Pass the new event count to the parent component
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of Events</label>
      <input
        type="number"
        id="event-count"
        value={eventCount}
        onChange={handleChange}
        aria-label="Number of events"
      />
    </div>
  );
};

export default NumberOfEvents;
