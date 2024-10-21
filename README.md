# To-Do List Application

## Overview

This is a simple To-Do List application built with React for the frontend and Node.js with Express for the backend. Users can add, edit, delete, and mark tasks as completed. The application uses MongoDB for data storage.

## Features

- Add new tasks to the list
- Edit existing tasks
- Mark tasks as completed with a strike-through effect
- Delete tasks from the list
- Responsive design

## Setup Instructions

### Frontend

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd todolist
2. Navigate to the frontend directory:
   ```bash
   cd frontend
3. Install dependencies:
   ```bash
   npm install
4. Add the font to your project: In your index.html, add the following line in the <head> section to load the "Architects Daughter" font from Google Fonts:
    ```bash
   <link href="https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap" rel="stylesheet" />
5. Start the frontend application:
     ```bash
   npm start

### Backend

1. Navigate to the backend directory:
   ```bash
   cd ../backend
2. Install backend dependencies:
   ```bash
   npm install
3. Create a .env file in the backend directory with the following content:
   ```bash
   MONGODB_URI=<your-mongodb-uri>
4. Start the backend server:
    ```bash
   node server.js

## API Endpoints

1. GET /api/todos - Fetch all to-do items
2. POST /api/todos - Create a new to-do item
3. PUT /api/todos/:id - Update an existing to-do item
4. DELETE /api/todos/:id - Delete a to-do item

## Tools and Libraries Used

Frontend: ReactJS
Backend: Node.js, Express, Mongoose, MongoDB
Styling: CSS

## Challenges Faced and Decisions Made

1. Handling State: Managing the state of the application using React's useState and useEffect hooks was crucial to ensure that the UI was responsive to user actions.
2. API Integration: Implementing CRUD operations required careful handling of API requests and responses.
