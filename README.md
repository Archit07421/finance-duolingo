# finance-duolingo

# InvestQuest 💰📈

### Learn Finance. Build Confidence.

InvestQuest is an interactive financial learning platform designed to help beginners understand personal finance and investing in a simple, engaging, and practical way.

Instead of overwhelming beginners with complex financial terminology, InvestQuest provides structured learning, quizzes, daily challenges, risk assessment, and AI-powered tools to help users develop better financial awareness and decision-making skills.

---

## 🚀 Problem Statement

Many beginners want to learn about investing and personal finance but struggle to understand where to start. Financial concepts such as stocks, ETFs, mutual funds, risk, scams, and investment decisions can be confusing.

InvestQuest addresses this problem by providing a beginner-friendly platform where users can learn financial concepts step-by-step and test their understanding through interactive activities.

---

## 💡 Solution

InvestQuest combines financial education with interactive learning and AI-powered assistance.

The platform allows users to:

- Learn fundamental financial concepts
- Follow a structured learning path
- Take finance quizzes
- Complete daily challenges
- Assess their financial risk profile
- Get assistance from an AI Finance Coach
- Detect potential financial scams
- Track achievements and learning progress
- Sign in securely using Google

---

## ✨ Features

### 📚 Learning Path

A structured learning journey covering important beginner-level financial concepts such as:

- Stocks
- ETFs
- Mutual Funds
- Investing fundamentals
- Risk and returns
- Financial decision-making

### 🧠 Quizzes

Interactive quizzes help users test their understanding of financial concepts and reinforce what they have learned.

### ⚡ Daily Challenge

Users can complete daily finance-related challenges and earn experience points (XP), encouraging consistent learning.

### 📊 Risk Assessment

The platform provides a risk assessment experience to help users understand their general risk tolerance and relationship with financial risk.

### 🤖 AI Finance Coach

An AI-powered assistant helps users understand financial concepts and provides educational guidance in a conversational manner.

> The AI Coach is intended for financial education and does not provide personalized financial advice.

### 🛡️ Scam Detector

Users can paste a suspicious financial message or upload a screenshot/PDF to identify potential scam indicators.

The feature is designed to help users recognize common warning signs in suspicious financial communications.

### 🏆 Achievements

Users can earn achievements as they progress through the learning experience.

### 🔐 Google Authentication

Users can securely sign in using Google Authentication through Firebase.

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js

### Authentication & Database

- Firebase Authentication
- Firebase Firestore
- Firebase Admin SDK

### AI

- Groq API

### Deployment

- Vercel – Frontend
- Render – Backend

### Development Tools

- Git
- GitHub
- VS Code

---

## 🏗️ Project Structure

```text
finance-duolingo/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── Middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── firebaseAdmin.js
│   └── index.js
│
├── package.json
├── README.md
└── .gitignore