const puppeteer = require('puppeteer');

const scrapeLinkedInJobs = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.linkedin.com/jobs/search/?keywords=software%20developer');

  const jobs = await page.evaluate(() => {
    let jobElements = document.querySelectorAll('.job-card-container');
    let jobList = [];
    jobElements.forEach(job => {
      let title = job.querySelector('.job-card-list__title').innerText;
      let company = job.querySelector('.job-card-container__company-name').innerText;
      let location = job.querySelector('.job-card-container__metadata-item').innerText;
      jobList.push({title, company, location});
    });
    return jobList;
  });

  await browser.close();
  return jobs;
};

module.exports = { scrapeLinkedInJobs };
