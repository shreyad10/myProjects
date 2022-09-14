const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")
const {collegeValidator, internValidator} = require("../middlewares/commonMiddleware")

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/functionup/colleges",collegeValidator, collegeController.createCollege)

router.post("/functionup/interns",internValidator, internController.createIntern)

router.get("/functionup/collegeDetails", internController.getCollege)


module.exports = router;