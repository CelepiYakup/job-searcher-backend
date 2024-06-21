const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const checkQualification = async (req, res) => {
  const { jobDescription, userProfile } = req.body;
  try {
    const response = await openai.createChatCompletion({
      model: "text-davinci-003",
      messages: [
        { role: "system", content: "You are a highly qualified candidate for this job." },
        { role: "user", content: `Job Description: ${jobDescription}\nUser Profile: ${userProfile}\nIs the user qualified for this job?` }
      ]
    });
    const qualification = response.data.choices[0].message.content;
    res.json({ qualification });
  } catch (error) {
    res.status(500).json({ message: 'Error checking qualification' });
  }
};

module.exports = { checkQualification };
