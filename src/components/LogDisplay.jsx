// Importing necessary React hooks and components
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // Modal component for displaying logs
import './LogDisplay.css'; // Importing CSS for styling

function LogDisplay() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store logs fetched from the backend
  const [logs, setLogs] = useState([]);

  // Function to fetch logs from the backend
  const fetchLogs = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/simulation/transactions'); // Backend API endpoint
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`); // Handle HTTP errors
      const data = await response.json(); // Parse response as JSON
      setLogs(data); // Update state with fetched logs
    } catch (error) {
      console.error('Error fetching logs:', error); // Log any errors during fetch
    }
  };

  // Function to open the modal and fetch logs
  const openModal = () => {
    fetchLogs(); // Fetch logs when modal is opened
    setIsModalOpen(true); // Set modal state to open
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Set modal state to closed
  };

  return (
    <div className="log-display">
      {/* Heading for the log display section */}
      <h3>Transaction Logs</h3>
      
      {/* Button to open the modal */}
      <button onClick={openModal}>View Logs</button>
      
      {/* Modal component to display logs */}
      <Modal
        isOpen={isModalOpen} // Control modal visibility
        onRequestClose={closeModal} // Close modal on user request
        contentLabel="Transaction Logs" // ARIA label for accessibility
        ariaHideApp={false} // Disable app hiding for accessibility
      >
        <h2>Logs</h2>
        {/* Button to close the modal */}
        <button onClick={closeModal}>Close</button>
        
        {/* Display fetched logs or a message if no logs are available */}
        <ul>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <li key={index}>
                {/* Display log details */}
                Action: {log.actionType}, Entity: {log.entityName}, Tickets: {log.ticketCount}, Remaining: {log.remainingTickets}
              </li>
            ))
          ) : (
            <li>No logs available</li> // Message for empty logs
          )}
        </ul>
      </Modal>
    </div>
  );
}

export default LogDisplay;
