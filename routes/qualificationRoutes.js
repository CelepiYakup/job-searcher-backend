const express = require('express');
const { checkQualification } = require('../controllers/qualificationController');
const router = express.Router();

router.post('/check-qualification', checkQualification);

module.exports = router;
