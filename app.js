const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// export date.js
// const {getDate, getDay} = require(__dirname+"/date.js");
const date = require(__dirname + "/date.js");


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

const items = ["Buy food", "Cook food", "Eat food"];
const workList = [];

app.get("/", (req, res) => {
  const day = date.getDay();
  //must provide both variables in ejs render
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work List") {
    workList.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workList });
});

app.get("/about", (req,res) => {
  res.render("about");
})

app.listen(3000, () => console.log("server is up and running"));
