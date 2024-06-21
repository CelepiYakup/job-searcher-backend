const express = require('express');
const { generateCoverLetter } = require('../controllers/coverLetterController');
const router = express.Router();

router.post('/generate-cover-letter', generateCoverLetter);

module.exports = router;
