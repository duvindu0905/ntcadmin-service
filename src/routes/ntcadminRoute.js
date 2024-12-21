// ntcadminRoute.js
const express = require('express');
const router = express.Router();
const ntcadminController = require('../controllers/ntcadminController');  // Adjust the path if necessary

// Route to get all NTC admins
router.get('/ntcadmins', ntcadminController.getAllNtcadmins);

// Route to get a specific NTC admin by ntcadminId
router.get('/ntcadmins/:ntcadminId', ntcadminController.getNtcadminById);

module.exports = router;
