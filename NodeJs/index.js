const express = require("express");
const app = express();
const mongoose = require("./config/config");
const dotenv = require("dotenv");
dotenv.config();
const allData = require("./api");

app.use("/", allData);

app.get("/", (req, res) => {
  res.send("<h1>This is Express Home Page with HTML</h1>");
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="enter the text"/>

  `);
});

app.get("/contact", (req, res) => {
  res.send(
    `<h1>Send data in JSON Format</h1> <br> <a href="/about">About</a> ${req.query.name}` +
      JSON.stringify({
        name: "Bilal",
        email: "bilal@gmail.com",
      })
  );
});


let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server starting at : http://localhost:${port}`);
});
