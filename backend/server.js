// import app from "./app.js";

import express from "express";
import cors from "cors";
const _data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
const app = express();
app.use(cors());
app.use(express.json());
app.get("/getData", (req, res) => {
  console.log(req);
  res.send(_data);
});

app.post("/setData", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
});
app.listen(4000, () => {
  // app.listen(process.env.PORT, () => {
  console.log("server running on port " + process.env.PORT + 4000);
});
