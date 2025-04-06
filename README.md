# 🚀 Redis Caching with Node.js API

This project demonstrates how to implement **Redis caching** in a **Node.js + Express** API to significantly improve performance and reduce response time.

> ✅ Achieved **~221x faster** responses by caching frequent data using Redis.

---

## 📸 Before & After (Real Results)

| Without Redis        | With Redis        |
|----------------------|-------------------|
| ⏱️ 1.77 seconds (1770 ms) | ⚡ 8 milliseconds      |
| 📡 200 OK             | 📡 200 OK           |

---

## 🧠 How It Works

Whenever the API is called:

1. It first checks Redis for cached data.
2. If found – it instantly returns the cached data.
3. If not – it fetches from MongoDB, stores it in Redis, and then responds.

This avoids repetitive database hits and drastically improves API response times.

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Atlas)**
- **Redis**
- **Postman** (for testing)

---

## 🚦 Installation

```bash
# Clone the repository
git clone https://github.com/RishabJha134/Redis-App.git

cd Redis-App

# Install dependencies
npm install

# Make sure Redis server is running (localhost:6379)
# You can install Redis locally or use Docker

# Start the server
npm start
