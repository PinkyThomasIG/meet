import React, { useState } from "react";

const Event = ({ event }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const toggleDetails = () => {
    setIsDetailVisible((prev) => !prev);
  };
  return (
    <li className="event-item">
      <h3 className="event-title">{event.summary}</h3> {/* Event Title */}
      <p className="event-start-time">{event.start.dateTime}</p>{" "}
      {/* Event Start Time */}
      <p className="event-location">{event.location}</p> {/* Event Location */}
      <button className="show-details-btn" onClick={toggleDetails}>
        {isDetailVisible ? "Hide Details" : "Show Details"}
      </button>
      {isDetailVisible && (
        <p className="event-description">{event.description}</p>
      )}
    </li>
  );
};
export default Event;
