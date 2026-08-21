import express from "express";
import multer from "multer";
import fs from "fs";
import Groq from "groq-sdk";

import { extractTextFromImage } from "../utils/imageOCR.js";
import { extractTextFromPDF } from "../utils/pdfText.js";

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});

async function analyzeText(message) {
  const prompt = `
You are a financial scam detector.

Analyze the following message and respond ONLY with valid JSON.
Do not use markdown or code fences.

Return exactly this structure:

{
  "credibilityScore": 0,
  "riskLevel": "LOW",
  "redFlags": [],
  "explanation": "",
  "recommendedAction": ""
}

Rules:

- credibilityScore must be a number from 0 to 100.
- 0 means highly suspicious.
- 100 means highly credible.
- riskLevel must be LOW, MEDIUM, or HIGH.
- redFlags must be an array of short strings.
- explanation must be a simple 2-3 sentence explanation for a beginner.
- recommendedAction must give a short practical safety recommendation.

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

  return JSON.parse(text);
}


// ------------------------------------
// TEXT ANALYSIS
// POST /api/scam-detector/analyze
// ------------------------------------

router.post("/analyze", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const result = await analyzeText(message);

    res.json(result);

  } catch (err) {
    console.error("Text analysis error:", err);

    res.status(500).json({
      error: "Failed to analyze message",
      details: err.message
    });
  }
});


// ------------------------------------
// FILE ANALYSIS
// POST /api/scam-detector/analyze-file
// ------------------------------------

router.post(
  "/analyze-file",
  upload.single("file"),
  async (req, res) => {

    let filePath = null;

    try {

      if (!req.file) {
        return res.status(400).json({
          error: "Please upload an image or PDF"
        });
      }

      filePath = req.file.path;

      const fileType = req.file.mimetype;

      let extractedText = "";

      // IMAGE
      if (fileType.startsWith("image/")) {

        extractedText = await extractTextFromImage(filePath);

      }

      // PDF
      else if (fileType === "application/pdf") {

        extractedText = await extractTextFromPDF(filePath);

      }

      // UNSUPPORTED FILE
      else {

        return res.status(400).json({
          error: "Only images and PDF files are supported"
        });
      }

      if (!extractedText.trim()) {
        return res.status(400).json({
          error: "Could not extract any text from the uploaded file"
        });
      }

      const result = await analyzeText(extractedText);

      res.json({
        ...result,
        extractedText
      });

    } catch (err) {

      console.error("File analysis error:", err);

      res.status(500).json({
        error: "Failed to analyze uploaded file",
        details: err.message
      });

    } finally {

      // Delete uploaded file after processing
      if (filePath && fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

    }
  }
);

export default router;