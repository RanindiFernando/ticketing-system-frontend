// Importing React library to create the component
import React from 'react';

// Importing the CSS file for styling the header component
import './Header.css';

// Function component for the Header
function Header() {
  return (
    // Header container with class "header" for styling
    <div className="header">
      {/* Main heading with decorative symbols and welcome text */}
      <h1>◻◇ &nbsp;&nbsp;&nbsp;&nbsp;Welcome to the Ticketing System&nbsp;&nbsp; &nbsp;&nbsp;◇◻ </h1>
    </div>
  );
}

// Exporting the Header component for use in other parts of the application
export default Header;
