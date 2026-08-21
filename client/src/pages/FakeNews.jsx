// import PlaceholderPage from "../components/PlaceholderPage";

// export default function FakeNews() {
//   return (
//     <PlaceholderPage
//       title="Scam Detector"
//       description="Paste financial headlines or messages to analyze credibility and red flags — coming soon."
//     />
//   );
// }

import { useState } from "react";

export default function FakeNews() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/scam-detector/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Scam Detector</h1>
      <p className="text-gray-400 mb-4">
        Paste financial headlines or messages to analyze credibility and red flags.
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        placeholder="Paste a suspicious message here..."
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-3 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p className="text-red-400 mt-3">{error}</p>}

      {result && (
        <div className="mt-6 p-4 rounded-lg bg-gray-900 border border-gray-700">
          <p className="text-lg font-semibold">
            Credibility Score:{" "}
            <span
              className={
                result.credibilityScore >= 70
                  ? "text-green-400"
                  : result.credibilityScore >= 40
                  ? "text-yellow-400"
                  : "text-red-400"
              }
            >
              {result.credibilityScore}/100
            </span>
          </p>

          <div className="mt-3">
            <p className="font-semibold">Red Flags:</p>
            <ul className="list-disc list-inside text-gray-300">
              {result.redFlags.length > 0 ? (
                result.redFlags.map((flag, i) => <li key={i}>{flag}</li>)
              ) : (
                <li>None detected</li>
              )}
            </ul>
          </div>

          <div className="mt-3">
            <p className="font-semibold">Explanation:</p>
            <p className="text-gray-300">{result.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
