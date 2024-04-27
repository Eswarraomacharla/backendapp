const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post("/checkadminlogin", adminController.checkadminlogin);
router.post("/insertfcm", adminController.fcmapping);
router.get("/viewfcmapping", adminController.viewfcmapping);

module.exports = router;
