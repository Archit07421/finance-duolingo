import "dotenv/config";
import express from "express";
import cors from "cors";
import scamDetectorRouter from "./routes/scamDetector.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/scam-detector", scamDetectorRouter);

app.get("/", (req, res) => {
  res.send("Finance Duolingo server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});