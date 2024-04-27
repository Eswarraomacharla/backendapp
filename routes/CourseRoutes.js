const express = require("express");
const coursecontroller = require("../controllers/CourseController")

const router = express.Router();

router.post("/addcourse",coursecontroller.addcourse );
router.get("/getcourse",coursecontroller.getcourse);
router.delete('/deletecourse/:ccode', coursecontroller.deletecourse);

module.exports = router;
