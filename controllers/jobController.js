const { scrapeLinkedInJobs } = require('../scrapers/linkedinScraper');

const getJobs = async (req, res) => {
  try {
    const jobs = await scrapeLinkedInJobs();
    res.json(jobs);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getJobs };
