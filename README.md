# To-Do List Application

## Overview

This is a simple To-Do List application built with React for the frontend and Node.js with Express for the backend. Users can add, edit, delete, and mark tasks as completed. The application uses MongoDB for data storage.

## Setup Instructions

### Frontend
Navigate to the frontend directory by changing into the frontend folder.
Install the necessary dependencies using the appropriate package manager.
Add the "Architects Daughter" font by editing the index.html file. Insert the required link to the Google Fonts in the <head> section of the HTML.
Start the frontend server to run the React application.

### Backend
Navigate to the backend directory by changing into the backend folder.
Install all backend dependencies.
Create a .env file in the root of the backend folder, adding environment variables for the MongoDB URI and the port (e.g., MONGODB_URI and PORT).
Start the backend server to launch the Express API.
API Endpoints
GET /api/todos - Fetch all to-do items
POST /api/todos - Create a new to-do item
PUT /api/todos/:id - Update an existing to-do item
DELETE /api/todos/:id - Delete a to-do item
Tools and Libraries Used
Frontend:

React
Axios (for making API requests)
React Router (for routing)
Backend:

Node.js
Express (web framework)
Mongoose (object data modeling for MongoDB)
MongoDB (NoSQL database)
Styling:

CSS
Font: Architects Daughter

Challenges Faced and Decisions Made
Handling State: Managing the state of the application using React's useState and useEffect hooks was crucial to ensure that the UI was responsive to user actions.
API Integration: Implementing CRUD operations required careful handling of API requests and responses.
Error Handling: Ensuring proper error handling both in the frontend and backend to provide user-friendly messages.
Security Considerations
Implement validation on the backend to ensure that data is clean and correct.
Use environment variables for sensitive information like MongoDB connection strings.
