var router = require("express").Router();
var apiRoutes = require("./api");

// main route
router.get("/", function(req, res) {
    res.render("index", { successMsg: res.locals.successMsg });
});

// API routes (add files/routes within '/api' to run CRUD operations against your
// database and to query external APIs)...
router.use("/api", apiRoutes);

module.exports = router;