const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const generateCoverLetter = async (req, res) => {
  const { jobDescription, userProfile } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "text-davinci-003",
      messages: [
        { role: "system", content: "You are an expert cover letter writer." },
        { role: "user", content: `Job Description: ${jobDescription}\nUser Profile: ${userProfile}\nWrite a cover letter for the user for this job.` }
      ],
      max_tokens: 30,
    });
    const coverLetter = response.data.choices[0].message.content;
    res.json({ coverLetter });
  } catch (error) {
    res.status(500).json({ message: 'Error generating cover letter' });
  }
};

module.exports = { generateCoverLetter };
