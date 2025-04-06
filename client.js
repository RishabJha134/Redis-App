const Redis = require("ioredis");

// Create a Redis client
const client = new Redis();

// Handle Redis errors
client.on('error', (err) => {
  console.error('Redis error:', err);
});

module.exports = { client };
