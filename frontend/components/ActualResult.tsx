"use client";
import { useState, useEffect } from "react";

export default function ActualResult({
  prediction,
}: {
  prediction: any;
}) {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    fetch(`${API_BASE}/actual-result`)
      .then((res) => {
        if (!res.ok) throw new Error(`Actual result fetch failed: ${res.status}`);
        return res.json();
      })
      .then((data) => setResult(data))
      .catch((err) => console.error("Actual result fetch error:", err));
  }, []);

  if (!result || !prediction) {
    return null;
  }

  const modelPredictedWinner =
    prediction.Spain_win > prediction.Argentina_win
      ? "Spain"
      : prediction.Argentina_win > prediction.Spain_win
      ? "Argentina"
      : "Draw";

  const modelCorrect = modelPredictedWinner === result.winner;

  return (
    <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
        Final Whistle
      </p>
      <h2 className="text-3xl md:text-4xl font-black mb-6">
        Actual Result
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-400 text-sm mb-2">Final Score</p>
          <p className="text-5xl font-black">
            {result.score}
            {result.result_type === "extra_time" && (
              <span className="text-lg text-gray-400 ml-3">(AET)</span>
            )}
          </p>
          <p className="text-gray-300 mt-3">
            🏆 <span className="font-bold">{result.winner}</span> win
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Goal: {result.scorer}
            </p>
           <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mt-2">
  <span className="text-yellow-400">⭐</span>
  <span className="text-gray-300 text-sm">Player of the Match:</span>
  <span className="text-yellow-200 font-bold text-sm">{result.player_of_the_match}</span>
</div>
          <p className="text-gray-500 text-xs mt-3">
            {result.venue} — {result.date}
          </p>
        </div>

        <div
          className={`rounded-2xl p-6 flex flex-col justify-center items-center text-center ${
            modelCorrect
              ? "bg-green-500/20 border border-green-400"
              : "bg-red-500/20 border border-red-400"
          }`}
        >
          <p className="text-4xl mb-2">{modelCorrect ? "✅" : "❌"}</p>
          <p className="font-bold text-lg">
            {modelCorrect ? "Model called it correctly" : "Model missed this one"}
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Predicted: {modelPredictedWinner} ({prediction[`${modelPredictedWinner}_win`] ?? "—"}%)
          </p>
        </div>
      </div>
    </div>
  );
}