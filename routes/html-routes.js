var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

<<<<<<< HEAD
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        res.render("mainpage")
    })


    // add route loads the profilepage.html page where users can enter profile info
    app.get("/signup", function(req, res) {
        res.render("signup");
    });

    // all route loads the barter.html page, where user posts products
    app.get("/barter", function(req, res) {
        res.sendFile("barter");
    });

    // short route loads the short.html page, where short books in the db are displayed
    app.get("/dashboard", function(req, res) {
        res.sendFile(path.join(__dirname, "../dashboard.handlebars"));
    });


=======
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("mainpage")
  })
  
  // add route loads the profilepage.html page where users can enter profile info
  app.get("/signup", function(req, res) {
    res.render("sign-up");
  });

  app.get("/login", function(req,res){
res.render("login");
  })

  // all route loads the barter.html page, where user posts products
  app.get("/barter", function(req, res) {
    res.render("barter");
  });

  
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  
>>>>>>> 776786de6d8cc77b89fc1e76ef83e54c6d9d1205

};