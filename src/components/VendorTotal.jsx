import React, { useState } from 'react'; // Import React and useState hook for managing state
import './VendorTotal.css'; // Import the CSS file for styling the component

// VendorTotal component definition
function VendorTotal() {
  const [vendorTotal, setVendorTotal] = useState(1); // State to store the total number of vendors, initialized to 1

  // Function to increment the vendor total
  const handleVendorIncrease = () => {
    setVendorTotal((prev) => prev + 1); // Increment the current vendor total by 1
  };

  // Function to decrement the vendor total
  const handleVendorDecrease = () => {
    setVendorTotal((prev) => Math.max(0, prev - 1)); // Decrement vendor total but ensure it doesn't go below 0
  };

  // Function to submit the vendor total to the backend API
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/simulation/setVendorTotal', {
        method: 'POST', // HTTP POST request
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(vendorTotal), // Send the vendor total as the request body
      });
      const result = await response.text(); // Parse the response as plain text
      alert(result); // Show the response message as an alert
    } catch (error) {
      console.error('Error setting vendor total:', error); // Log any errors to the console
      alert('Failed to set vendor total.'); // Show an alert if the request fails
    }
  };

  return (
    <div className="vendor-total">
      {/* Heading for the vendor total section */}
      <h4>Vendor Total</h4>
      
      {/* Controls for incrementing and decrementing the vendor total */}
      <div className="vendor-controls">
        <button onClick={handleVendorDecrease}>-</button> {/* Decrease button */}
        <input type="number" value={vendorTotal} readOnly /> {/* Display the current vendor total */}
        <button onClick={handleVendorIncrease}>+</button> {/* Increase button */}
      </div>
      
      {/* Submit button to send the vendor total to the backend */}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default VendorTotal; // Export the component for use in other parts of the application
