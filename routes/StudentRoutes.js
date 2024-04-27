const express = require('express');
const router = express.Router();
const { addstudent, getstudent, deletestudent,updatestudent,login } = require('../controllers/StudentController');
router.post('/addstudent', addstudent);
router.get('/getstudent', getstudent);
router.delete('/deletestudent/:studentId', deletestudent);
router.put("/updatestudent/:studentId", updatestudent);
router.post('/login',login);
module.exports = router;
