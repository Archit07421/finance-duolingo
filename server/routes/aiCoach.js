import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/generate", async (req, res) => {
  try {
    const {
      age,
      profession,
      monthlyIncome,
      monthlyExpenses,
      currentSavings,
      goal,
      goalAmount,
      goalYears,
      riskTolerance,
    } = req.body;

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (
      !age ||
      !profession ||
      !monthlyIncome ||
      !monthlyExpenses ||
      !goal ||
      !riskTolerance
    ) {
      return res.status(400).json({
        error: "Please provide all required information.",
      });
    }

    // -----------------------------
    // AI PROMPT
    // -----------------------------

    const prompt = `
You are an educational AI financial coach for beginner investors in India.

Your job is to create a simple, realistic and educational investment roadmap.

IMPORTANT RULES:

1. Do NOT guarantee returns.
2. Do NOT present predictions as facts.
3. Do NOT encourage risky or speculative investments.
4. Explain financial concepts in beginner-friendly language.
5. Prioritize emergency funds, budgeting and financial stability before investing.
6. Use the user's approximate information only.
7. Do not ask for bank account numbers, passwords, PAN, Aadhaar or other sensitive information.
8. Give educational guidance, not regulated personalized financial advice.
9. If the user's expenses are close to or greater than their income, prioritize budgeting and emergency savings instead of investing heavily.
10. Mention assumptions when making calculations.

USER PROFILE:

Age: ${age}

Profession: ${profession}

Monthly income: ₹${monthlyIncome}

Monthly expenses: ₹${monthlyExpenses}

Current savings: ₹${currentSavings || 0}

Financial goal: ${goal}

Goal amount: ₹${goalAmount || "Not specified"}

Goal timeline: ${goalYears || "Not specified"} years

Risk tolerance: ${riskTolerance}


Create a personalized beginner roadmap.

Return ONLY valid JSON in exactly this structure:

{
  "summary": "Short 2-3 sentence summary of the user's current situation.",

  "financialHealth": {
    "monthlySurplus": 0,
    "savingsRate": 0,
    "priority": "string"
  },

  "roadmap": [
    {
      "phase": "string",
      "timeframe": "string",
      "title": "string",
      "actions": [
        "string",
        "string",
        "string"
      ],
      "why": "Simple beginner explanation."
    }
  ],

  "monthlyPlan": {
    "emergencyFund": 0,
    "investing": 0,
    "goalSavings": 0,
    "personalExpenses": 0
  },

  "investmentEducation": [
    {
      "topic": "string",
      "explanation": "Simple explanation for a beginner."
    }
  ],

  "recommendedLessons": [
    "string",
    "string",
    "string"
  ],

  "goalPlan": {
    "goal": "string",
    "timeline": "string",
    "monthlyContribution": 0,
    "note": "Explain that this is an illustrative estimate and does not guarantee returns."
  },

  "beginnerMistakes": [
    "string",
    "string",
    "string"
  ],

  "nextStep": "One clear action the user should take next."
}
`;

    // -----------------------------
    // GROQ REQUEST
    // -----------------------------

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",

      messages: [
        {
          role: "system",
          content:
            "You are a careful educational financial coach. Always prioritize financial safety and beginner education.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      response_format: {
        type: "json_object",
      },

      include_reasoning: false,
    });

    // -----------------------------
    // PARSE RESPONSE
    // -----------------------------

    const text =
      completion.choices[0]?.message?.content?.trim();

    if (!text) {
      throw new Error("AI returned an empty response.");
    }

    const result = JSON.parse(text);

    res.json(result);

  } catch (error) {

    console.error("AI Coach Error:", error);

    res.status(500).json({
      error: "Failed to generate financial roadmap.",
      details: error.message,
    });
  }
});

export default router;