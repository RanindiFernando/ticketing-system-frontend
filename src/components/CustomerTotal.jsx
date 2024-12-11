// React component for managing the total number of customers.
import React, { useState } from 'react';
import './CustomerTotal.css'; // Importing styles for Customer Total component

function CustomerTotal() {
  // State to manage the total number of customers
  const [customerTotal, setCustomerTotal] = useState(1);

  // Function to increase the customer total by 1
  const handleCustomerIncrease = () => {
    setCustomerTotal((prev) => prev + 1);
  };

  // Function to decrease the customer total by 1, ensuring it doesn't go below 0
  const handleCustomerDecrease = () => {
    setCustomerTotal((prev) => Math.max(0, prev - 1));
  };

  // Function to submit the customer total to the backend
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/simulation/setCustomerTotal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerTotal), // Send the customer total as JSON
      });
      const result = await response.text(); // Get the response text from the server
      alert(result); // Display the server's response
    } catch (error) {
      console.error('Error setting customer total:', error); // Log any errors
      alert('Failed to set customer total.'); // Display an error message to the user
    }
  };

  return (
    <div className="customer-total">
      {/* Heading for the component */}
      <h4>Customer Total</h4>

      {/* Controls for increasing and decreasing customer total */}
      <div className="customer-controls">
        <button onClick={handleCustomerDecrease}>-</button>
        <input type="number" value={customerTotal} readOnly /> {/* Display the current customer total */}
        <button onClick={handleCustomerIncrease}>+</button>
      </div>

      {/* Submit button to send the customer total to the backend */}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CustomerTotal;
