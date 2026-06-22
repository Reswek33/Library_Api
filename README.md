# Library Management System API

A RESTful Library Management System API built with NestJS, TypeScript, and PostgreSQL. This project provides functionality for managing books, users, and borrowing operations in a library environment.

## Features

* User authentication and authorization
* Book management (Create, Read, Update, Delete)
* User management
* Borrow and return books
* Book availability tracking
* RESTful API architecture
* Input validation and error handling

## Technologies Used

* NestJS
* TypeScript
* Node.js
* PostgreSQL
* TypeORM
* Docker
* JWT Authentication

## Project Structure

```bash
src/
├── auth/
├── users/
├── books/
├── borrow/
├── common/
├── app.module.ts
└── main.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Reswek33/Library_Api.git
cd Library_Api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=library_db
JWT_SECRET=your_secret_key
```

## Running the Application

Development mode:

```bash
npm run start:dev
```

Production mode:

```bash
npm run build
npm run start:prod
```

## API Endpoints

### Authentication

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | /auth/register | Register a new user |
| POST   | /auth/login    | User login          |

### Books

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| GET    | /books     | Get all books    |
| GET    | /books/:id | Get a book by ID |
| POST   | /books     | Add a new book   |
| PATCH  | /books/:id | Update a book    |
| DELETE | /books/:id | Delete a book    |

### Borrowing

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| POST   | /borrow         | Borrow a book          |
| POST   | /return         | Return a borrowed book |
| GET    | /borrow/history | Borrowing history      |

## Testing

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

## Author

**Sumeya Sabit**

* GitHub: https://github.com/sumsabit

## License

This project is licensed under the MIT License.


Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
