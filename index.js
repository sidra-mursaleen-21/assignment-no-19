const express = require("express");
const app = express();

app.use(express.json());

// get request

app.get("/", (req, res) => {
  console.log("this is home");
  res.send("this is home");
});

// post request

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("post request");
});

// put request

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("update request");
});

// delete request

app.delete("/:_id", (req, res) => {
  const params = req.params;
  console.log(params);
  res.send("delete request");
});

// server

app.listen(5000, () => {
  console.log("hello ");
});
