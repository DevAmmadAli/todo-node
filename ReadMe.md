# Todo List API

This is a Todo List API built with Node.js, Express, and MySQL. The application includes user authentication and CRUD operations for managing todos. The project uses Express Router, middleware for error handling, and validation for secure and structured API calls.

## Table of Contents

-   [Features](#features)
-   [Technologies](#technologies)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Available Routes](#available-routes)
    -   [Auth Routes](#auth-routes)
    -   [Todo Routes](#todo-routes)
-   [Running the Application](#running-the-application)
-   [Health Check](#health-check)

---

## Features

-   User authentication (register and login).
-   Create, Read, Update, Delete (CRUD) operations for todos.
-   Validation and authentication middleware.
-   MySQL database integration with TypeORM.
-   Global error handling.
-   IP-based client request validation.

---

## Technologies

-   **Backend Framework**: Node.js, Express.js
-   **Database**: MySQL
-   **ORM**: TypeORM
-   **Authentication**: JWT
-   **Validation**: Custom Validators
-   **Middleware**: Error Handling, Route Protection
-   **Environment Management**: dotenv

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/DevAmmadAli/todo-node.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure the `.env` file with the required environment variables. See [Environment Variables](#environment-variables).

---

## Environment Variables

Create a `.env` file in the root of your project with the following variables:

```plaintext
DB_TYPE = "mysql"
DB_HOST = "localhost"
DB_USERNAME = "root"
DB_PASSWORD = ""
DB_PORT = 3306
DB_NAME = "todo_list"
PORT = 8000
SECRET_KEY = "todo_list"
EXPIRE_TIME = 3600
```

-   **DB_TYPE**: The type of database (e.g., MySQL).
-   **DB_HOST**: The host of the database.
-   **DB_USERNAME**: The database username.
-   **DB_PASSWORD**: The database password.
-   **DB_PORT**: The port for the database.
-   **DB_NAME**: The name of the database.
-   **PORT**: The port for the server.
-   **SECRET_KEY**: The secret key for JWT authentication.
-   **EXPIRE_TIME**: Expiration time for JWT tokens (in seconds).

---

## Available Routes

### Auth Routes

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | `/api/v1/register` | Register a user |
| POST   | `/api/v1/login`    | Login a user    |

### Todo Routes

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/api/v1/todos`     | Create a new todo       |
| GET    | `/api/v1/todos`     | Retrieve all todos      |
| PUT    | `/api/v1/todos/:id` | Update an existing todo |
| DELETE | `/api/v1/todos/:id` | Delete a todo           |

---

## Running the Application

1. Start the server:

    ```bash
    npm start
    ```

2. The application will run on `http://localhost:8000`.

---

## Health Check

To verify the server is running, access the `/health` endpoint:

```bash
GET /health
```

Response:

```json
{
    "msg": "Hello Get Zell"
}
```

---

## Notes

1. Make sure MySQL is installed and running locally or provide access to a hosted database.
2. All protected routes use `checkAuth` middleware to verify JWT tokens.
3. Proper validation is enforced using `TodoValidator` and `AuthValidator` to ensure valid inputs.

---
