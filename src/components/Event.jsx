import React, { useState } from "react";

const Event = ({ event }) => {
  // State to toggle visibility of event details
  const [showDetails, setShowDetails] = useState(false);

  // Format the start time using toLocaleString for better readability
  const startTime = new Date(event.start.dateTime).toLocaleString();

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      {/* Rendering the event's title (summary) */}
      <h3>{event.summary}</h3>
      <p>{startTime}</p> {/* Render the start time */}
      <p>{event.location}</p> {/* Render the event location */}
      {/* Show the "Show Details" button or "Hide Details" based on state */}
      <button onClick={handleToggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {/* Render the event description if details are visible */}
      {showDetails && <p>{event.description}</p>}
    </li>
  );
};

export default Event;
