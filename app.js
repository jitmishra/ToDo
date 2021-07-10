const bodyParser = require("body-parser");
const express = require("express");
const date= require(__dirname + "/date.js");

const app = express();
const items = ["Buying Food", "Cook Food", "Intake"];
const workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
 let day = date.getDate();
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
});



app.post("/", (req, res) => {
  let item = req.body.newItem;
if(req.body.list ==="Work"){
  workItems.push(item);
  res.redirect("/work")
}else{
  items.push(item);
  res.redirect("/")
}

  items.push(item);
  res.redirect("/");
});


app.get("/work",(req, res)=>{
  res.render("list", {listTitle: "Work List", newListItems: workItems });
});

app.get("/about",(req, res)=>{
  res.render("about");
})

app.post("/work",()=>{
  let item= req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})


app.listen("3000", () => {
  console.log("server is running on port 3000");
});
