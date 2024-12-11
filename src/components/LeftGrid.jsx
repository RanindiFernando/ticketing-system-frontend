/* LeftGrid.jsx */

// Import React to create components
import React from 'react';
// Import the TicketForm component
import TicketForm from './TicketForm'; 
// Import CSS file for styling the LeftGrid component
import './LeftGrid.css'; 
// Import the TicketDisplay component
import TicketDisplay from './TicketDisplay';

/**
 * LeftGrid Component
 * This component serves as the container for the left side of the layout.
 * It includes the TicketForm and TicketDisplay components arranged in a grid.
 */
function LeftGrid() {
  return (
    <div className="left-grid"> {/* Main container for the left grid layout */}
      <div className="ticket-form-grid"> {/* Area for the TicketForm */}
        <TicketForm /> {/* Render the TicketForm component */}
      </div>
      <div className="ticketpoolmain"> {/* Area for the TicketDisplay */}
        <TicketDisplay /> {/* Render the TicketDisplay component */}
      </div>
    </div>
  );
}

// Export the LeftGrid component to be used in other parts of the application
export default LeftGrid;
