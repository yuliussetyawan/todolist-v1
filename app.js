const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  if (new Date().getDay() === 6 || new Date().getDay() === 0) {
    res.write("It's a weekend");
  } else {
    res.write("Today is working day");
  }
  res.send();
});

app.listen(3000, () => console.log("server is up and running"));
