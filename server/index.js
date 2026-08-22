import "dotenv/config";

import express from "express";
import cors from "cors";

import scamDetectorRouter from "./routes/scamDetector.js";
import aiCoachRouter from "./routes/aiCoach.js";

import { verifyToken } from "./middleware/authMiddleware.js";

const app = express();




// -------------------------
// Middleware
// -------------------------

app.use(cors());

app.use(express.json());


// -------------------------
// Existing API routes
// -------------------------

app.use(
  "/api/scam-detector",
  scamDetectorRouter
);

app.use(
  "/api/ai-coach",
  aiCoachRouter
);


// -------------------------
// Public test route
// -------------------------

app.get("/", (req, res) => {

  res.send(
    "Finance Duolingo server is running!"
  );

});


// -------------------------
// Protected test route
// -------------------------

app.get(
  "/api/protected",
  verifyToken,
  (req, res) => {

    res.json({

      message: `Hello ${req.user.name || "User"}! You are authenticated.`,

      user: {
        uid: req.user.uid,
        email: req.user.email,
        name: req.user.name,
        picture: req.user.picture,
      },

    });

  }
);


// -------------------------
// Start server
// -------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});