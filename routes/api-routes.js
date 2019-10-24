
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
console.log("hit routes")
  // GET route for getting all items in wants
  app.get("/api/want", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Want.findAll({}).then(function(dbWant) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbWant);
    });
  });
  
   // GET route for getting all of the items in have
   app.get("/api/have", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Have.findAll({}).then(function(dbHave) {
      // We have access to the items as an argument inside of the callback function
      res.json(dbHave);
    });
  });



  // POST route for saving a new item
  app.post("/api/user", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.User.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbUser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUser);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
  // Add a user
  app.post("/api/signup", function (req, res) {
    console.log("user data:");
    console.log("user info in api routes: " +req.body);
    console.log("user info in api routes: " + JSON.stringify(req.body));

    db.User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/have", function(req,res){
    db.Have.create({
      itemName: req.body.itemName,
      itemDescription: req.body.itemDescription,
      itemCategory: req.body.itemCategory,
      itemPhoto: "fixme",
      username: req.body.username
    }).then(function  (results){
      res.json(results);
    });
  });
  app.post("/api/want", function(req,res){
    db.Want.create({
      itemName: req.body.itemName,
      itemDescription: req.body.itemDescription,
      itemCategory: req.body.itemCategory,
      itemPhoto: "fixme",
      username: req.body.username
    }).then(function  (results){
      res.json(results);
    });
  });

  // Delete a product 
  app.delete("/api/items/:id", function(req, res) {
   
    db.item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWant) {
      res.json(dbWant);
    });
  });
};
