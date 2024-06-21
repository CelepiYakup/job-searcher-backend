const express = require('express');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const coverLetterRoutes = require('./routes/coverLetterRoutes');
const qualificationRoutes = require('./routes/qualificationRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', jobRoutes);
app.use('/api', coverLetterRoutes);
app.use('/api', qualificationRoutes);

module.exports = app;