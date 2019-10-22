var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
    
          res.render("file", {
            msg: "Welcome!",
          });
        });
}
// app.get("/signup", function(req, res) {
    
//   res.render("signup", {
//     msg: "Welcome!",
//   });
// });