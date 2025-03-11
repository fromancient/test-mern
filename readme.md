# MERNTasks

MERNTasks is a technical assessment project that demonstrates proficiency in the MERN stack (MongoDB, Express, React, Node.js). This application allows users to manage tasks and provides basic statistics.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

MERNTasks is a simple and responsive task management application. It allows users to register, log in, create tasks, mark them as complete, and view statistics on their tasks. The project is built using the MERN stack, providing a robust backend API with a seamless frontend experience.

## Features

- **User Authentication**:

  - Login using JWT (JSON Web Token).
  - User registration.

- **Task Management**:

  - List tasks with titles and statuses (pending/completed).
  - Add new tasks (initial status is "pending").
  - Mark tasks as completed.
  - Display summary statistics (e.g., "3 tasks completed out of 5").

- **Responsive Design**: Clean and responsive UI designed for ease of use across devices.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Documentation**: Swagger
- **Styling**: [Specify any libraries or frameworks used, e.g., CSS, Tailwind CSS, Material UI]

## Installation

To run the MERNTasks application locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/fromancient/test-mern
   cd test-mern
   ```

2. Configure environment variables in the **`node`** directory. Create a `.env` file with the necessary environment variables. An example `.env` configuration might include:

   ```
   MONGODB_URI=mongodb://mongo:27017/mern-tasks
   JWT_SECRET=your_jwt_secret
   ```

3. Start MongoDB using Docker:

   ```bash
   docker-compose up -d
   ```

4. Install the dependencies for both frontend and backend:

   ```bash
   npm install
   ```

5. Start the application:

   ```bash
   npm start
   ```

## Usage

- Access the frontend application at `http://localhost:5173`.
- The backend API is available at `http://localhost:5174`.
- MongoDB can be accessed at `mongodb://localhost:5175`.

## API Documentation

The API provides the following endpoints:

- `POST /login`: Authenticate a user and return a JWT.
- `POST /users`: Register a new user.
- `GET /tasks`: Retrieve the list of tasks.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Mark a task as completed.
- `GET /tasks/stats`: Retrieve basic statistics about the tasks.
- `GET /docs`: API documentation generated with Swagger.

To view the full API documentation, visit `http://localhost:5174/docs` after starting the backend server.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
