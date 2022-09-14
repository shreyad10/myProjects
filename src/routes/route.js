const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

// ------------- Creating College ---------------------------------
router.post("/functionup/colleges", collegeController.createCollege)


// -------------- Creating Intern ---------------------------------
router.post("/functionup/interns", internController.createIntern)


module.exports = router;