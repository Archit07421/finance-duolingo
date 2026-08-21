import { useState } from "react";

export default function AICoach() {

  const [form, setForm] = useState({
    age: "",
    profession: "",
    monthlyIncome: "",
    monthlyExpenses: "",
    currentSavings: "",
    goal: "",
    goalAmount: "",
    goalYears: "",
    riskTolerance: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --------------------------------
  // HANDLE INPUT
  // --------------------------------

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  // --------------------------------
  // GENERATE ROADMAP
  // --------------------------------

  const handleGenerate = async (e) => {

    e.preventDefault();

    setError("");
    setResult(null);

    // Basic validation

    if (
      !form.age ||
      !form.profession ||
      !form.monthlyIncome ||
      !form.monthlyExpenses ||
      !form.goal ||
      !form.riskTolerance
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        "/api/ai-coach/generate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to generate roadmap."
        );
      }

      setResult(data);

    } catch (err) {

      console.error(err);

      setError(
        err.message ||
        "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  // --------------------------------
  // RESET
  // --------------------------------

  const handleReset = () => {

    setForm({
      age: "",
      profession: "",
      monthlyIncome: "",
      monthlyExpenses: "",
      currentSavings: "",
      goal: "",
      goalAmount: "",
      goalYears: "",
      riskTolerance: "",
    });

    setResult(null);
    setError("");

  };


  return (

    <div className="p-6 max-w-4xl mx-auto text-white">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          AI Financial Coach 🤖
        </h1>

        <p className="text-gray-400 mt-2">
          Tell us about yourself and we'll create a
          beginner-friendly financial roadmap.
        </p>

      </div>


      {/* FORM */}

      {!result && (

        <form
          onSubmit={handleGenerate}
          className="space-y-6"
        >

          {/* PERSONAL INFORMATION */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-semibold mb-5">
              👤 About You
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* AGE */}

              <div>

                <label className="block text-sm mb-2">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="e.g. 21"
                  className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                />

              </div>


              {/* PROFESSION */}

              <div>

                <label className="block text-sm mb-2">
                  Profession
                </label>

                <input
                  type="text"
                  name="profession"
                  value={form.profession}
                  onChange={handleChange}
                  placeholder="Student, Software Engineer..."
                  className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                />

              </div>

            </div>

          </div>


          {/* MONEY */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-semibold mb-5">
              💰 Your Finances
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* INCOME */}

              <div>

                <label className="block text-sm mb-2">
                  Approx. Monthly Income (₹)
                </label>

                <input
                  type="number"
                  name="monthlyIncome"
                  value={form.monthlyIncome}
                  onChange={handleChange}
                  placeholder="e.g. 50000"
                  className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                />

              </div>


              {/* EXPENSES */}

              <div>

                <label className="block text-sm mb-2">
                  Approx. Monthly Expenses (₹)
                </label>

                <input
                  type="number"
                  name="monthlyExpenses"
                  value={form.monthlyExpenses}
                  onChange={handleChange}
                  placeholder="e.g. 30000"
                  className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                />

              </div>


              {/* SAVINGS */}

              <div>

                <label className="block text-sm mb-2">
                  Current Savings (₹)
                </label>

                <input
                  type="number"
                  name="currentSavings"
                  value={form.currentSavings}
                  onChange={handleChange}
                  placeholder="e.g. 100000"
                  className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                />

              </div>

            </div>

          </div>


          {/* GOAL */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-semibold mb-5">
              🎯 Your Goal
            </h2>

            <div className="space-y-5">

              <div>

                <label className="block text-sm mb-2">
                  What are you investing for?
                </label>

                <select
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                >

                  <option value="">
                    Select a goal
                  </option>

                  <option value="Build an emergency fund">
                    Build an emergency fund
                  </option>

                  <option value="Start investing">
                    Start investing
                  </option>

                  <option value="Higher education">
                    Higher education
                  </option>

                  <option value="Buy a car">
                    Buy a car
                  </option>

                  <option value="Buy a house">
                    Buy a house
                  </option>

                  <option value="Retirement">
                    Retirement
                  </option>

                  <option value="Wealth building">
                    Long-term wealth building
                  </option>

                </select>

              </div>


              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm mb-2">
                    Goal Amount (₹)
                  </label>

                  <input
                    type="number"
                    name="goalAmount"
                    value={form.goalAmount}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                  />

                </div>


                <div>

                  <label className="block text-sm mb-2">
                    Goal Timeline (years)
                  </label>

                  <input
                    type="number"
                    name="goalYears"
                    value={form.goalYears}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700"
                  />

                </div>

              </div>

            </div>

          </div>


          {/* RISK */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-semibold mb-5">
              🧠 Risk Comfort
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              Imagine your investment temporarily falls by 20%.
              What would you most likely do?
            </p>

            <div className="space-y-3">

              <label className="flex gap-3 items-start p-4 rounded-lg border border-gray-700 cursor-pointer hover:border-blue-500">

                <input
                  type="radio"
                  name="riskTolerance"
                  value="Low"
                  checked={form.riskTolerance === "Low"}
                  onChange={handleChange}
                />

                <div>

                  <p className="font-medium">
                    😰 I'd probably sell
                  </p>

                  <p className="text-sm text-gray-400">
                    I prefer stability and lower risk.
                  </p>

                </div>

              </label>


              <label className="flex gap-3 items-start p-4 rounded-lg border border-gray-700 cursor-pointer hover:border-blue-500">

                <input
                  type="radio"
                  name="riskTolerance"
                  value="Medium"
                  checked={form.riskTolerance === "Medium"}
                  onChange={handleChange}
                />

                <div>

                  <p className="font-medium">
                    😐 I'd wait
                  </p>

                  <p className="text-sm text-gray-400">
                    I'm comfortable with some fluctuations.
                  </p>

                </div>

              </label>


              <label className="flex gap-3 items-start p-4 rounded-lg border border-gray-700 cursor-pointer hover:border-blue-500">

                <input
                  type="radio"
                  name="riskTolerance"
                  value="High"
                  checked={form.riskTolerance === "High"}
                  onChange={handleChange}
                />

                <div>

                  <p className="font-medium">
                    😎 I'd stay invested
                  </p>

                  <p className="text-sm text-gray-400">
                    I'm comfortable with higher fluctuations.
                  </p>

                </div>

              </label>

            </div>

          </div>


          {/* ERROR */}

          {error && (

            <div className="p-4 rounded-lg bg-red-950 border border-red-800 text-red-400">
              {error}
            </div>

          )}


          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 font-semibold"
          >

            {loading
              ? "Creating your roadmap..."
              : "Generate My Financial Roadmap →"}

          </button>


          <p className="text-xs text-gray-500 text-center">
            This tool provides educational guidance and
            does not guarantee investment returns.
          </p>

        </form>

      )}


      {/* RESULTS */}

      {result && (

        <div className="space-y-6">

          {/* SUMMARY */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-bold mb-3">
              🌱 Your Financial Roadmap
            </h2>

            <p className="text-gray-300">
              {result.summary}
            </p>

          </div>


          {/* FINANCIAL HEALTH */}

          {result.financialHealth && (

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

              <h2 className="text-xl font-semibold mb-4">
                📊 Your Starting Point
              </h2>

              <div className="grid md:grid-cols-3 gap-4">

                <div className="p-4 rounded-lg bg-gray-950">

                  <p className="text-gray-500 text-sm">
                    Monthly Surplus
                  </p>

                  <p className="text-xl font-bold mt-1">
                    ₹{result.financialHealth.monthlySurplus}
                  </p>

                </div>


                <div className="p-4 rounded-lg bg-gray-950">

                  <p className="text-gray-500 text-sm">
                    Savings Rate
                  </p>

                  <p className="text-xl font-bold mt-1">
                    {result.financialHealth.savingsRate}%
                  </p>

                </div>


                <div className="p-4 rounded-lg bg-gray-950">

                  <p className="text-gray-500 text-sm">
                    Priority
                  </p>

                  <p className="text-xl font-bold mt-1">
                    {result.financialHealth.priority}
                  </p>

                </div>

              </div>

            </div>

          )}


          {/* ROADMAP */}

          <div>

            <h2 className="text-xl font-bold mb-4">
              🛣️ Your Roadmap
            </h2>

            <div className="space-y-4">

              {result.roadmap?.map((phase, index) => (

                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900 border border-gray-700"
                >

                  <div className="flex justify-between gap-4">

                    <div>

                      <p className="text-blue-400 text-sm">
                        {phase.timeframe}
                      </p>

                      <h3 className="text-lg font-semibold">
                        {phase.title}
                      </h3>

                    </div>

                    <span className="text-gray-500">
                      Phase {index + 1}
                    </span>

                  </div>


                  <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">

                    {phase.actions?.map(
                      (action, i) => (
                        <li key={i}>
                          {action}
                        </li>
                      )
                    )}

                  </ul>


                  <div className="mt-4 p-3 rounded-lg bg-gray-950">

                    <p className="text-sm text-gray-400">
                      💡 Why this matters
                    </p>

                    <p className="text-sm text-gray-300 mt-1">
                      {phase.why}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* MONTHLY PLAN */}

          {result.monthlyPlan && (

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

              <h2 className="text-xl font-bold mb-5">
                💰 Suggested Monthly Plan
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="p-4 rounded-lg bg-gray-950">
                  <p className="text-gray-500 text-sm">
                    Emergency Fund
                  </p>
                  <p className="text-xl font-bold">
                    ₹{result.monthlyPlan.emergencyFund}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-950">
                  <p className="text-gray-500 text-sm">
                    Investing
                  </p>
                  <p className="text-xl font-bold">
                    ₹{result.monthlyPlan.investing}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-950">
                  <p className="text-gray-500 text-sm">
                    Goal Savings
                  </p>
                  <p className="text-xl font-bold">
                    ₹{result.monthlyPlan.goalSavings}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-950">
                  <p className="text-gray-500 text-sm">
                    Personal Expenses
                  </p>
                  <p className="text-xl font-bold">
                    ₹{result.monthlyPlan.personalExpenses}
                  </p>
                </div>

              </div>

            </div>

          )}


          {/* GOAL */}

          {result.goalPlan && (

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

              <h2 className="text-xl font-bold mb-4">
                🎯 Goal Plan
              </h2>

              <p className="text-gray-300">
                {result.goalPlan.goal}
              </p>

              <div className="mt-4">

                <p className="text-gray-500 text-sm">
                  Illustrative monthly contribution
                </p>

                <p className="text-2xl font-bold text-blue-400">
                  ₹{result.goalPlan.monthlyContribution}
                </p>

              </div>

              <p className="text-sm text-gray-400 mt-3">
                {result.goalPlan.note}
              </p>

            </div>

          )}


          {/* LEARNING */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-bold mb-4">
              📚 What You Should Learn Next
            </h2>

            <div className="space-y-3">

              {result.recommendedLessons?.map(
                (lesson, index) => (

                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gray-950"
                  >
                    {index + 1}. {lesson}
                  </div>

                )
              )}

            </div>

          </div>


          {/* MISTAKES */}

          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">

            <h2 className="text-xl font-bold mb-4">
              ⚠️ Beginner Mistakes to Avoid
            </h2>

            <ul className="list-disc list-inside text-gray-300 space-y-2">

              {result.beginnerMistakes?.map(
                (mistake, index) => (
                  <li key={index}>
                    {mistake}
                  </li>
                )
              )}

            </ul>

          </div>


          {/* NEXT STEP */}

          <div className="p-6 rounded-xl bg-blue-950 border border-blue-800">

            <h2 className="text-lg font-bold">
              🚀 Your Next Step
            </h2>

            <p className="text-gray-300 mt-2">
              {result.nextStep}
            </p>

          </div>


          {/* RESET */}

          <button
            onClick={handleReset}
            className="w-full py-3 rounded-lg border border-gray-700 hover:bg-gray-900"
          >
            ← Create Another Plan
          </button>


          {/* DISCLAIMER */}

          <p className="text-xs text-gray-500 text-center">
            Educational guidance only. The roadmap uses the
            information you provide and illustrative assumptions.
            It does not guarantee investment returns or replace
            professional financial advice.
          </p>

        </div>

      )}

    </div>
  );
}