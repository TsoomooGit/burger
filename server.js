var exphbs = require("express-handlebars");
var express = require("express");
var orm=require("./config/orm");
const path=require("path");



var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname +"/public"));
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, res) {
   orm.selectAll("*", "burgers", "deleted is null", function(data1){
    orm.selectAll("*", "burgers", "deleted='y'", function(data2){
        res.render("index", {burgers:data1, deletedBurgers: data2 });
       });
   });
});


app.post("/api/burgers", function(req, res) {
    orm.insertOne("burgers", "name", req.body.name, function(data){
        res.status(201).end();
    })
});


app.put("/api/burgers/:id", function(req, res) {
    orm.updateOne("burgers", "deleted","y", req.params.id, function(data){
        res.status(200).end();
    })
  });

  app.delete("/api/burgers/:id", function(req, res) {
    orm.delete("burgers", "id", req.params.id, function(data){
        res.status(200).end();
    })
  });


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});