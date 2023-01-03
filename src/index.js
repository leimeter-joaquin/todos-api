import express from "express";
import cors from "cors";
const fs = require("fs");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", async (req, res) => {
  fs.readFile("src/data/todos.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const jsonObject = JSON.parse(jsonString);
    setTimeout(() => {
      return res.json(jsonObject);
    }, 1000);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready on port ${port}`);
});
