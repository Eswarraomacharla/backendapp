const express = require("express");
const facultycontroller = require("../controllers/FacultyController")
const router = express.Router();
router.post('/login', facultycontroller.login);
router.post("/addfaculty",facultycontroller.addfaculty );
router.get("/getfaculty",facultycontroller.getfaculty);
router.delete('/deletefaculty/:facultyId', facultycontroller.deletefaculty);
router.put("/updatefaculty/:facultyId", facultycontroller.updatefaculty);

module.exports = router;
