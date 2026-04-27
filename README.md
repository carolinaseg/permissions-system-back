# Permissions API

REST API for managing permissions, built with Node.js, Express, Prisma, and PostgreSQL.

---

## 🚀 Overview

This project provides a basic permissions management system with full CRUD operations and centralized error handling. It is designed as a backend practice project focused on clean architecture and best practices.

---

## 🧱 Tech Stack

* Node.js
* Express
* Prisma ORM
* PostgreSQL

---

## ⚙️ Setup

1. Install dependencies

```bash id="a1"
npm install
```

2. Configure environment variables

Create a `.env` file:

```env id="a2"
DATABASE_URL="postgresql://user:password@localhost:5432/permissions"
```

3. Run migrations

```bash id="a3"
npx prisma migrate dev
```

4. Start the server

```bash id="a4"
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | /permissions     | Get all permissions |
| POST   | /permissions     | Create a permission |
| PUT    | /permissions/:id | Update a permission |
| DELETE | /permissions/:id | Delete a permission |

---

## ⚠️ Error Handling

The API uses centralized error handling to ensure consistent responses:

* **400 Bad Request**

  * Duplicate resource (Prisma `P2002`)
* **404 Not Found**

  * Resource does not exist
* **500 Internal Server Error**

  * Unexpected errors

---

## 🧠 Technical Decisions

* **Prisma ORM** for database interaction and schema management
* **Singleton Prisma Client** to avoid multiple database connections
* **Layered architecture** (controllers, services, routes)
* **Centralized error handling** using Express middleware

---

## 📂 Project Structure

```bash id="a5"
src/
  controllers/
  services/
  routes/
  middlewares/
  lib/
```

---

## ✅ Status

Backend MVP completed:

* CRUD operations
* Database integration
* Error handling
* Clean architecture

---

## 📈 Next Steps (optional)

* Input validation
* Authentication & authorization
* Unit testing
* Role-based permissions
