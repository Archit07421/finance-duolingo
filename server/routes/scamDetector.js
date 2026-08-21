// import express from "express";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const router = express.Router();
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// router.post("/analyze", async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message || !message.trim()) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

//     const prompt = `You are a financial scam detector. Analyze the following message and respond ONLY with valid JSON, no markdown, no backticks, in this exact shape:

// {
//   "credibilityScore": <number 0-100>,
//   "redFlags": [<array of short strings>],
//   "explanation": "<simple 2-3 sentence explanation for a beginner>"
// }

// Message to analyze:
// """${message}"""`;

//     const result = await model.generateContent(prompt);
//     let text = result.response.text().trim();

//     // Gemini sometimes wraps JSON in ```json fences — strip them
//     text = text.replace(/^```json\s*/i, "").replace(/```$/, "").trim();

//     const parsed = JSON.parse(text);
//     res.json(parsed);
//   } catch (err) {
//     console.error("Scam detector error:", err);
//     res.status(500).json({
//         error: "Failed to analyze message",
//         details: err.message
//       });
//   }
// });

// export default router;

import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/analyze", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const prompt = `You are a financial scam detector.

Analyze the following message and respond ONLY with valid JSON.

Return exactly this structure:

{
  "credibilityScore": 0,
  "redFlags": [],
  "explanation": ""
}

credibilityScore must be a number from 0 to 100.

redFlags must be an array of short strings.

explanation must be a simple 2-3 sentence explanation for a beginner.

Message to analyze:

"""${message}"""
`;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    let text = completion.choices[0].message.content.trim();

    text = text
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    const parsed = JSON.parse(text);

    res.json(parsed);

  } catch (err) {
    console.error("SCAM DETECTOR ERROR:", err);

    res.status(500).json({
      error: "Failed to analyze message",
      details: err.message
    });
  }
});

export default router;