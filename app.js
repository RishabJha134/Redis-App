const express = require("express");

const app = express();

const axios = require("axios");

const { client } = require("./client");

app.get("/getUsers", async (req,res) => {
    const cacheValue = await client.get("users");
    if (cacheValue) {
      return res.json(JSON.parse(cacheValue));
    }
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(JSON.stringify(data));
    await client.set("users", JSON.stringify(data));
    client.expire("todos",30);
    return res.json(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
