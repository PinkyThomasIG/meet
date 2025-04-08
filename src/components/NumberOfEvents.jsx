import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    //setNumber(value);
    //setCurrentNOE(Number(value));
    // Check for invalid input
    if (isNaN(value) || value <= 0 || value > 1000) {
      setErrorAlert(
        "Please enter a valid number of events (positive number and less than 1000)."
      );
      setCurrentNOE(32); // Reset the number of events if invalid
    } else {
      setErrorAlert(""); // Clear the error alert if the input is valid
      setCurrentNOE(Number(value));
    }

    setNumber(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
