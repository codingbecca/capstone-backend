# Backend API For Stocking Pattern Generator

## Description 
This is the backend for my Per Scholas capstone project, a web app that generates a custom-sized, toe-up, thigh-high stocking pattern. It provides API endpoints for managing patterns and projects and is integrated with my personal Ravelry account to add projects.

API documentation can be found [here](https://capstone-backend-i1us.onrender.com/)

## Features
- **Pattern Management:** Full CRUD functionality for creating, retrieving, updating, and deleting custom-generated knitting patterns.
- **Project Tracking:** Full CRUD functionality for managing knitting projects, including project name, notes, and recipient.
- **Ravelry Integration:** Add projects directly to my personal Ravelry account.

## Technologies Used
- Express (backend framework)
- MongoDB & Mongoose (database & ODM)
- Pug (templating engine)

## Future Work
- **OAuth for Ravelry:** Implement authentication so users can sign in and save projects to their own Ravelry accounts.
- **User Authentication:** Implement user accounts with signup and login functionality.
- **Frontend Integration:** Connect project management endpoints to the frontend to allow users to create, update, and delete projects from the UI.

