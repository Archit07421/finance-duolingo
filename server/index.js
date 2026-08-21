import "dotenv/config";
import express from "express";
import scamDetectorRouter from "./routes/scamDetector.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/scam-detector", scamDetectorRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});