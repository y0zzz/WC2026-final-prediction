"use client";
import { useEffect, useState } from "react";
import PredictionCards from "@/components/PredictionCards";
import ScorePrediction from "@/components/ScorePrediction";
import PenaltyPrediction from "@/components/PenaltyPrediction";
import ConfidenceCard from "@/components/ConfidenceCard";
import RadarAnalysis from "@/components/RadarAnalysis";
import MatchHeader from "@/components/MatchHeader";
import InsightCard from "@/components/InsightCard";
import MetricCard from "@/components/MetricCard";
import TeamAnalysis from "@/components/TeamAnalysis";
import PredictionExplanation from "@/components/PredictionExplanation";

export default function Home() {
  const [prediction, setPrediction] = useState<any>(null);
  const [teams, setTeams] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_BASE = "http://127.0.0.1:8000";

    fetch(`${API_BASE}/prediction`)
      .then(res => {
        if (!res.ok) throw new Error(`Prediction fetch failed: ${res.status}`);
        return res.json();
      })
      .then(data => setPrediction(data))
      .catch(err => {
        console.error("Prediction fetch error:", err);
        setError(err.message);
      });

    fetch(`${API_BASE}/teams`)
      .then(res => {
        if (!res.ok) throw new Error(`Teams fetch failed: ${res.status}`);
        return res.json();
      })
      .then(data => setTeams(data))
      .catch(err => {
        console.error("Teams fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-5">⚠️</div>
          <h1 className="text-2xl font-bold mb-2">Couldn't reach the backend</h1>
          <p className="text-gray-400">{error}</p>
          <p className="text-gray-500 text-sm mt-4">
            Make sure your FastAPI server is running at http://127.0.0.1:8000
          </p>
        </div>
      </main>
    );
  }

  if (!prediction || !teams) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-5">⚽</div>
          <h1 className="text-2xl font-bold">Loading World Cup Analytics...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-blue-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
            World Cup Final Analytics
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-4">
            🏆 FIFA World Cup Final Predictor
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-4">
            AI-powered match prediction and performance analysis
          </p>
        </section>

        <section className="space-y-6 mb-14">
          <MatchHeader />
        </section>

        <section className="space-y-6 mb-14">
          <PredictionCards prediction={prediction} />
          <ScorePrediction prediction={prediction} />
          <PenaltyPrediction prediction={prediction} />
        </section>

        <section className="space-y-6 mb-14">
          <MetricCard teams={teams} />
          <RadarAnalysis teams={teams} prediction={prediction} />
          <TeamAnalysis prediction={prediction} />
        </section>

        <section className="space-y-6">
          <ConfidenceCard prediction={prediction} />
          <PredictionExplanation prediction={prediction} teams={teams} />
          <InsightCard prediction={prediction} teams={teams} />
        </section>
      </div>
    </main>
  );
}