// Importing React and required hooks
import React, { useState, useEffect } from 'react';
// Importing CSS file for styling the TicketDisplay component
import './TicketDisplay.css'; 

function TicketDisplay() {
  // State to store the current number of tickets, initialized to 0
  const [tickets, setTickets] = useState(0); 

  // useEffect hook to handle periodic fetching of ticket data from the backend
  useEffect(() => {
    // Function to fetch ticket data from the backend
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/simulation/tickets'); // Backend API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); // Handle HTTP errors
        }
        const data = await response.json(); // Parse JSON response
        setTickets(data.remainingTickets); // Update state with the remaining tickets
      } catch (error) {
        console.error('Error fetching ticket data:', error); // Log any errors during fetch
      }
    };

    // Set an interval to poll ticket data every 0.01 seconds (100ms)
    const interval = setInterval(fetchTickets, 100);
    fetchTickets(); // Fetch data immediately on component mount

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  return (
    <div className="ticket-display"> {/* Container for the ticket display */}
      <h3>Real-Time Ticket Availability</h3> {/* Header for the ticket display */}
      <p>Remaining Tickets: <span>{tickets}</span></p> {/* Display current ticket count */}
      <div className="progress-bar-container"> {/* Progress bar container */}
        <div 
          className="progress-bar" 
          style={{ width: `${Math.min(tickets, 100)}%` }} // Dynamically set progress bar width based on tickets
        ></div>
      </div>
    </div>
  );
}

export default TicketDisplay; // Export the component for use in other parts of the application
