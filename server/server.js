const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "world" });
});

app.get("/User", (req, res) => {
  res.send("User List")
});

app.get("/user/new", (req, res) => {
  res.send("User New Form")
});

app.listen(5000);
