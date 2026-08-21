import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";
import Quiz from "./pages/Quiz";
import RiskAssessment from "./pages/RiskAssessment";
import FakeNews from "./pages/FakeNews";
import AICoach from "./pages/AICoach";
import InvestmentPlanner from "./pages/InvestmentPlanner";
import Profile from "./pages/Profile";
import Quizzes from "./pages/Quizzes";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/risk" element={<RiskAssessment />} />
        <Route path="/fake-news" element={<FakeNews />} />
        <Route path="/ai-coach" element={<AICoach />} />
        <Route path="/planner" element={<InvestmentPlanner />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
