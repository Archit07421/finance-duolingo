import { useState } from "react";

export default function FakeNews() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -----------------------------
  // TEXT ANALYSIS
  // -----------------------------
  const handleAnalyzeText = async () => {
    if (!message.trim()) {
      setError("Please enter a message to analyze.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/scam-detector/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // FILE ANALYSIS
  // -----------------------------
  const handleAnalyzeFile = async () => {
    if (!file) {
      setError("Please select an image or PDF first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const res = await fetch("/api/scam-detector/analyze-file", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "File analysis failed");
      }

      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // FILE SELECTION
  // -----------------------------
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // 10 MB limit
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10 MB.");
      setFile(null);
      return;
    }

    setError(null);
    setFile(selectedFile);
  };

  // -----------------------------
  // SCORE COLOR
  // -----------------------------
  const getScoreColor = (score) => {
    if (score >= 70) return "text-green-400";
    if (score >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-2">
        Scam Detector
      </h1>

      <p className="text-gray-400 mb-6">
        Paste a suspicious financial message or upload a screenshot or PDF
        to check for scam indicators.
      </p>

      {/* TEXT INPUT */}
      <div className="mb-6">

        <label className="block font-semibold mb-2">
          Paste a message
        </label>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="Paste a suspicious message, financial headline, SMS, email, etc."
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={handleAnalyzeText}
          disabled={loading}
          className="mt-3 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Message"}
        </button>

      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-700"></div>

        <span className="text-gray-500 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* FILE UPLOAD */}
      <div className="mb-6">

        <label className="block font-semibold mb-2">
          Upload screenshot or PDF
        </label>

        <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center bg-gray-900">

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-400
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-blue-600 file:text-white
              hover:file:bg-blue-700"
          />

          <p className="text-xs text-gray-500 mt-3">
            Supported: JPG, PNG, WEBP and PDF • Maximum 10 MB
          </p>

        </div>

        {/* SELECTED FILE */}
        {file && (
          <div className="mt-3 p-3 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-between">

            <div>
              <p className="text-sm font-medium">
                {file.name}
              </p>

              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              onClick={() => setFile(null)}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Remove
            </button>

          </div>
        )}

        <button
          onClick={handleAnalyzeFile}
          disabled={loading || !file}
          className="mt-3 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze File"}
        </button>

      </div>

      {/* ERROR */}
      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-950 border border-red-800 text-red-400">
          {error}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="mt-6 p-5 rounded-xl bg-gray-900 border border-gray-700">

          <h2 className="text-xl font-bold mb-4">
            Analysis Result
          </h2>

          {/* SCORE */}
          <div className="mb-5">

            <p className="font-semibold">
              Credibility Score
            </p>

            <p className={`text-3xl font-bold ${getScoreColor(result.credibilityScore)}`}>
              {result.credibilityScore}/100
            </p>

          </div>

          {/* RISK LEVEL */}
          {result.riskLevel && (
            <div className="mb-5">

              <p className="font-semibold mb-1">
                Risk Level
              </p>

              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  result.riskLevel === "HIGH"
                    ? "bg-red-900 text-red-300"
                    : result.riskLevel === "MEDIUM"
                    ? "bg-yellow-900 text-yellow-300"
                    : "bg-green-900 text-green-300"
                }`}
              >
                {result.riskLevel}
              </span>

            </div>
          )}

          {/* RED FLAGS */}
          <div className="mb-5">

            <p className="font-semibold mb-2">
              Red Flags
            </p>

            {result.redFlags?.length > 0 ? (
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {result.redFlags.map((flag, index) => (
                  <li key={index}>
                    {flag}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-green-400">
                No obvious red flags detected.
              </p>
            )}

          </div>

          {/* EXPLANATION */}
          <div className="mb-5">

            <p className="font-semibold mb-1">
              Explanation
            </p>

            <p className="text-gray-300">
              {result.explanation}
            </p>

          </div>

          {/* RECOMMENDED ACTION */}
          {result.recommendedAction && (
            <div className="mb-5">

              <p className="font-semibold mb-1">
                Recommended Action
              </p>

              <p className="text-gray-300">
                {result.recommendedAction}
              </p>

            </div>
          )}

          {/* EXTRACTED TEXT */}
          {result.extractedText && (
            <div className="mt-5 pt-5 border-t border-gray-700">

              <p className="font-semibold mb-2">
                Extracted Text
              </p>

              <div className="p-3 rounded-lg bg-gray-950 text-gray-400 text-sm whitespace-pre-wrap max-h-64 overflow-y-auto">
                {result.extractedText}
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}