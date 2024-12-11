import React, { useState } from "react";
import "./TicketForm.css"; // Import the external CSS for styling

function TicketForm() {
  // State variables for form inputs and errors
  const [ticketReleaseRate, setTicketReleaseRate] = useState(""); // Release rate input value
  const [ticketRetrievalRate, setTicketRetrievalRate] = useState(""); // Retrieval rate input value
  const [maxTicketCapacity, setMaxTicketCapacity] = useState(""); // Max capacity input value
  const [errors, setErrors] = useState({}); // Object to track field validation errors

  // Function to validate input fields
  const validateField = (name, value) => {
    if (["ticketReleaseRate", "ticketRetrievalRate", "maxTicketCapacity"].includes(name)) {
      // Ensure value is a positive integer
      if (!value || value <= 0 || isNaN(value) || !Number.isInteger(Number(value))) {
        return "Must be a positive integer";
      }
    }
    return ""; // No error
  };

  // Handle changes in form inputs and validate them
  const handleChange = (e, setter) => {
    const { name, value } = e.target; // Extract name and value from the event
    setter(value); // Update the corresponding state

    // Validate the field and update the errors state
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Function to handle the start button click
  const handleStart = async () => {
    // Check if any required fields are missing or invalid
    if (!ticketReleaseRate || !ticketRetrievalRate || !maxTicketCapacity) {
      alert("Please fill out all fields with valid values.");
      return;
    }

    // Make a POST request to the backend to start the simulation
    try {
      const response = await fetch("http://localhost:8081/api/simulation/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticketReleaseRate: Number(ticketReleaseRate),
          ticketRetrievalRate: Number(ticketRetrievalRate),
          maxTicketCapacity: Number(maxTicketCapacity),
        }),
      });
      const result = await response.text(); // Get the response text
      alert(result); // Show the response in an alert
    } catch (error) {
      console.error("Error starting simulation:", error);
      alert("Failed to start simulation.");
    }
  };

  // Function to handle the stop button click
  const handleStop = async () => {
    // Make a POST request to stop the simulation
    try {
      const response = await fetch("http://localhost:8081/api/simulation/stop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.text(); // Get the response text
      alert(result); // Show the response in an alert
    } catch (error) {
      console.error("Error stopping simulation:", error);
      alert("Failed to stop simulation.");
    }
  };

  // Function to handle the reset button click
  const handleRefresh = () => {
    window.location.reload(); // Reload the page to reset the form
  };

  return (
    <div className="ticket-form">
      <h2>Ticket Configuration</h2>
      {/* Input for Ticket Release Rate */}
      <div className="form-group">
        <label>Ticket Release Rate: (in milliseconds)</label>
        <input
          type="text"
          name="ticketReleaseRate"
          value={ticketReleaseRate}
          onChange={(e) => handleChange(e, setTicketReleaseRate)}
          placeholder="Enter Ticket Release Rate"
        />
        {errors.ticketReleaseRate && <span className="error-message">{errors.ticketReleaseRate}</span>}
      </div>
      {/* Input for Ticket Retrieval Rate */}
      <div className="form-group">
        <label>Ticket Retrieval Rate: (in milliseconds)</label>
        <input
          type="text"
          name="ticketRetrievalRate"
          value={ticketRetrievalRate}
          onChange={(e) => handleChange(e, setTicketRetrievalRate)}
          placeholder="Enter Ticket Retrieval Rate"
        />
        {errors.ticketRetrievalRate && <span className="error-message">{errors.ticketRetrievalRate}</span>}
      </div>
      {/* Input for Maximum Ticket Capacity */}
      <div className="form-group">
        <label>Maximum Ticket Capacity:</label>
        <input
          type="text"
          name="maxTicketCapacity"
          value={maxTicketCapacity}
          onChange={(e) => handleChange(e, setMaxTicketCapacity)}
          placeholder="Enter Maximum Ticket Capacity"
        />
        {errors.maxTicketCapacity && <span className="error-message">{errors.maxTicketCapacity}</span>}
      </div>

      {/* Buttons Section */}
      <div className="form-buttons">
        <button className="start-btn" onClick={handleStart}>
          Start
        </button>
        <button className="stop-btn" onClick={handleStop}>
          Stop
        </button>
        <button className="refresh-btn" onClick={handleRefresh}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicketForm;
