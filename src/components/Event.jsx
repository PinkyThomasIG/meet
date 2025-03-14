import React, { useState } from "react";

const Event = ({ event }) => {
  const createdTime = new Date(event.created).toLocaleString();

  const location = event.location || "Location not specified";

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);
  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{createdTime}</p>
      <p>{location}</p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p>{event.description}</p>}
    </li>
  );
};

export default Event;
