# TicketingSystemFrontend                  
 Frontend of the real-time ticketing system

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Setup Instructions](#setup-instructions)
- [Usage Instructions](#usage-instructions)
- [UI Controls](#ui-controls)

## Introduction
The Ticketing System Frontend is a React-based user interface for managing and simulating ticketing operations. The system enables real-time interaction with a backend service, allowing users to configure ticketing settings, monitor live ticket availability, and review transaction logs.


## Prerequisites
Ensure the following tools are installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)

## Installation and Setup
Clone the repository:  https://github.com/RanindiFernando/TicketingSystemFrontend.git

Install dependencies:
npm install

Start the development server:
npm run dev

## Usage Instructions
Configuring and Starting the System

Set Vendor and Customer Counts:
Adjust the number of vendors and customers using "+" and "-" buttons.
Click Submit to save the settings, which will be sent to the backend.

Configure Ticketing Settings:
Enter values for:
Ticket Release Rate (in milliseconds)
Ticket Retrieval Rate (in milliseconds)
Maximum Ticket Capacity
Ensure all fields are filled with positive integers, and click Submit to apply the configuration.

Start the Simulation:
Click the Start button to initiate the simulation.
Monitor the real-time ticket pool status via the progress bar.

Stop the Simulation:
Halt the simulation at any time by clicking the Stop button.

Reset the System:
Click the Reset button to refresh the page and reset all configurations.

View Transaction Logs:
After stopping the simulation, click the View Logs button to access detailed transaction records, including ticket releases and purchases.

## UI Controls
Vendor and Customer Count Management:
"+" and "-" buttons adjust the respective counts.
Submit buttons save the current count to the backend.

Ticket Configuration Form:
Fields for release rate, retrieval rate, and max capacity.
Error messages are shown for invalid or missing inputs.

Simulation Control Buttons:
Start: Begins the simulation with the configured settings.
Stop: Stops the ongoing simulation.
Reset: Reloads the application to reset all inputs.

Progress Bar:
Displays the current status of the ticket pool in real-time.

Logs Modal:
Opens a modal showing transaction details in a readable format.



