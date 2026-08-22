import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
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

        {/* ========================= */}
        {/* PUBLIC ROUTES */}
        {/* ========================= */}

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* ========================= */}
        {/* PROTECTED ROUTES */}
        {/* ========================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lessons"
          element={
            <ProtectedRoute>
              <Lessons />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lessons/:id"
          element={
            <ProtectedRoute>
              <LessonDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <Quizzes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/risk"
          element={
            <ProtectedRoute>
              <RiskAssessment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fake-news"
          element={
            <ProtectedRoute>
              <FakeNews />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-coach"
          element={
            <ProtectedRoute>
              <AICoach />
            </ProtectedRoute>
          }
        />

        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <InvestmentPlanner />
            </ProtectedRoute>
          }
        />

        <Route
          path="/achievements"
          element={
            <ProtectedRoute>
              <Achievements />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;


