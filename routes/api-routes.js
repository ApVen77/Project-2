// Routes
// =============================================================
module.exports = function(app) {
  // Gets home page
  app.get("/api/template", function(req, res) {
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
//Get all products
  app.get("/api/dashboard", function(req, res) {
    var dbQuery = "SELECT * FROM products";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

   // Add a user
   app.post("/api/sign-up", function(req, res) {
    console.log("user data:");
    console.log(req.body);
    user.create({
      email: req.body.email,
      password: req.body.passowrd
    }).then(function(results) {
      res.json(results);
    });
  });

    // Delete a product 
    app.delete("/api/product/:id", function(req, res) {
        console.log("wants ID:");
        console.log(req.params.id);
        product.destroy({
          where: {
            id: req.params.id
          }
        }).then(function() {
          res.end();
        });
      });
    };
