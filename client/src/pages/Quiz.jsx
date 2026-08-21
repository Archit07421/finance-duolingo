import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import quizData from "../data/quizData";

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const level = searchParams.get("level") || "easy";

  const questions = quizData[level] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const totalQuestions = questions.length;

  const question = questions[currentQuestion];

  const progress =
    totalQuestions > 0
      ? ((currentQuestion + 1) / totalQuestions) * 100
      : 0;


  // -------------------------
  // Answer selection
  // -------------------------

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === question.answer) {
      setScore((previous) => previous + 1);
    }
  };


  // -------------------------
  // Next question
  // -------------------------

  const handleNext = () => {

    if (currentQuestion === totalQuestions - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
  };


  // -------------------------
  // Restart
  // -------------------------

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };


  // -------------------------
  // Empty state
  // -------------------------

  if (!totalQuestions) {
    return (
      <div className="min-h-screen bg-[#080d18] px-4 py-10 text-white">

        <div className="mx-auto max-w-xl rounded-3xl border border-slate-800 bg-[#0d1424] p-8 text-center">

          <h1 className="text-xl font-semibold">
            No questions available
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            This quiz level doesn't have any questions yet.
          </p>

          <button
            onClick={() => navigate("/quizzes")}
            className="
              mt-6
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-sm
              font-semibold
              transition
              hover:bg-blue-500
            "
          >
            Back to quizzes
          </button>

        </div>

      </div>
    );
  }


  // -------------------------
  // Result screen
  // -------------------------

  if (finished) {

    const percentage =
      Math.round((score / totalQuestions) * 100);

    const earnedXP = score * 10;

    return (
      <div className="min-h-screen bg-[#080d18] px-4 py-8 text-white sm:py-12">

        <div className="mx-auto max-w-2xl">

          <div className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-[#0d1424]
          ">

            {/* Top */}
            <div className="p-7 text-center sm:p-10">

              <div className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-3xl
              ">
                🎉
              </div>

              <p className="mt-5 text-sm font-medium uppercase tracking-wider text-blue-400">
                Quiz complete
              </p>

              <h1 className="mt-2 text-3xl font-bold">
                Great work!
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                You completed the {level} level.
              </p>


              {/* Score */}
              <div className="mt-8">

                <p className="text-sm text-slate-500">
                  Your score
                </p>

                <p className="mt-1 text-5xl font-bold">
                  {score}
                  <span className="text-2xl text-slate-500">
                    /{totalQuestions}
                  </span>
                </p>

                <p className="mt-2 text-blue-400">
                  {percentage}% correct
                </p>

              </div>

            </div>


            {/* Stats */}
            <div className="
              grid
              grid-cols-2
              border-t
              border-slate-800
            ">

              <div className="p-5 text-center">

                <p className="text-xs text-slate-500">
                  XP earned
                </p>

                <p className="mt-1 text-xl font-semibold">
                  +{earnedXP} XP
                </p>

              </div>

              <div className="
                border-l
                border-slate-800
                p-5
                text-center
              ">

                <p className="text-xs text-slate-500">
                  Questions
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {totalQuestions}
                </p>

              </div>

            </div>


            {/* Actions */}
            <div className="
              flex
              flex-col
              gap-3
              border-t
              border-slate-800
              p-6
              sm:flex-row
            ">

              <button
                onClick={restartQuiz}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-slate-700
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition
                  hover:bg-slate-800
                "
              >
                Try again
              </button>

              <button
                onClick={() => navigate("/quizzes")}
                className="
                  flex-1
                  rounded-xl
                  bg-blue-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  transition
                  hover:bg-blue-500
                "
              >
                Choose another level
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }


  // -------------------------
  // Quiz screen
  // -------------------------

  return (
    <div className="min-h-screen bg-[#080d18] text-white">

      <main className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">


        {/* Header */}
        <div className="
          mb-7
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <button
            onClick={() => navigate("/quizzes")}
            className="
              w-fit
              text-sm
              text-slate-400
              transition
              hover:text-white
            "
          >
            ← Back to quizzes
          </button>

          <div className="
            flex
            items-center
            gap-3
            text-sm
          ">

            <span className="
              rounded-full
              border
              border-slate-800
              bg-[#0d1424]
              px-3
              py-1.5
              capitalize
              text-slate-300
            ">
              {level}
            </span>

            <span className="text-slate-500">
              {currentQuestion + 1} / {totalQuestions}
            </span>

          </div>

        </div>


        {/* Progress */}
        <div className="mb-8">

          <div className="
            mb-2
            flex
            items-center
            justify-between
            text-xs
            text-slate-500
          ">

            <span>
              Progress
            </span>

            <span>
              {Math.round(progress)}%
            </span>

          </div>

          <div className="
            h-1.5
            overflow-hidden
            rounded-full
            bg-slate-800
          ">

            <div
              className="
                h-full
                rounded-full
                bg-blue-500
                transition-all
                duration-300
              "
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>


        {/* Question card */}
        <section className="
          rounded-3xl
          border
          border-slate-800
          bg-[#0d1424]
          p-5
          sm:p-8
          lg:p-10
        ">

          {/* Question number */}
          <div className="
            flex
            items-center
            justify-between
          ">

            <span className="text-sm font-medium text-blue-400">
              Question {currentQuestion + 1}
            </span>

            <span className="text-xs text-slate-500">
              +10 XP
            </span>

          </div>


          {/* Question */}
          <h1 className="
            mt-5
            max-w-3xl
            text-2xl
            font-semibold
            leading-relaxed
            tracking-tight
            sm:text-3xl
          ">
            {question.question}
          </h1>


          {/* Options */}
          <div className="mt-8 space-y-3">

            {question.options.map((option, index) => {

              const selected =
                selectedAnswer === index;

              const correct =
                index === question.answer;

              let style = `
                border-slate-800
                bg-[#101827]
                hover:border-slate-600
                hover:bg-[#131e30]
              `;

              if (selectedAnswer !== null) {

                if (correct) {

                  style = `
                    border-emerald-500/70
                    bg-emerald-500/10
                  `;

                } else if (selected) {

                  style = `
                    border-red-500/70
                    bg-red-500/10
                  `;

                } else {

                  style = `
                    border-slate-800
                    bg-[#0d1424]
                    opacity-60
                  `;

                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    flex
                    w-full
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    p-4
                    text-left
                    transition-all
                    duration-200
                    sm:p-5
                    ${style}
                  `}
                >

                  <span className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-slate-800
                    text-xs
                    font-semibold
                    text-slate-300
                  ">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-slate-200 sm:text-base">
                    {option}
                  </span>

                </button>
              );
            })}

          </div>


          {/* Feedback */}
          {selectedAnswer !== null && (

            <div className={`
              mt-5
              rounded-2xl
              p-4
              text-sm
              ${
                selectedAnswer === question.answer
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-red-500/10 text-red-400"
              }
            `}>

              {selectedAnswer === question.answer
                ? "✓ Correct! Keep it up."
                : `The correct answer is: ${question.options[question.answer]}`}

            </div>

          )}


          {/* Next */}
          {selectedAnswer !== null && (

            <button
              onClick={handleNext}
              className="
                mt-5
                w-full
                rounded-xl
                bg-blue-600
                px-5
                py-3.5
                text-sm
                font-semibold
                transition
                hover:bg-blue-500
              "
            >
              {currentQuestion === totalQuestions - 1
                ? "Finish quiz"
                : "Continue →"}
            </button>

          )}

        </section>

      </main>

    </div>
  );
}