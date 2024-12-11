// Import necessary libraries and components
import React from 'react';
import VendorTotal from './VendorTotal'; // Import the VendorTotal component
import CustomerTotal from './CustomerTotal'; // Import the CustomerTotal component
import LogDisplay from './LogDisplay'; // Import the LogDisplay component
import './RightGrid.css'; // Import the CSS file for styling the RightGrid component

/**
 * The RightGrid component organizes three main sections: VendorTotal, CustomerTotal, and LogDisplay.
 * These sections are displayed vertically, with each section styled according to the RightGrid.css file.
 */
function RightGrid() {
  return (
    <div className="right-grid">
      {/* Vendor section */}
      <div className="vendor-grid">
        <VendorTotal /> {/* Displays the VendorTotal component */}
      </div>

      {/* Customer section */}
      <div className="customer-grid">
        <CustomerTotal /> {/* Displays the CustomerTotal component */}
      </div>

      {/* Logs section */}
      <div className="logs-grid">
        <LogDisplay /> {/* Displays the LogDisplay component */}
      </div>
    </div>
  );
}

export default RightGrid; // Export the RightGrid component for use in other parts of the application
