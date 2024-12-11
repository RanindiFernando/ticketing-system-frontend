// App.jsx

// Import React for building the component
import React from 'react';

// Import LeftGrid and RightGrid components for the respective sections of the layout
import LeftGrid from './components/LeftGrid'; 
import RightGrid from './components/RightGrid';

// Import the Header component for the header section
import Header from './components/Header';

// Import the external CSS file for styling
import './App.css'; 

// Main application component
function App() {
  return (
    // Main container for the application layout
    <div className="containermain">
      
      {/* Header Section */}
      <div className="headermain">
        <Header />
      </div>
      
      {/* Right Grid Section */}
      <div className="rightmain">
        <RightGrid />
      </div>
      
      {/* Left Grid Section */}
      <div className="leftmain">
        <LeftGrid />
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
