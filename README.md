# 🏆 WC2026 Final Predictor

An AI-powered football analytics engine that models the FIFA World Cup 2026 Final matchup using team performance statistics — built and run ahead of the Spain vs. Argentina Final, then evaluated against the actual result.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**🔗 Live demo:** [wc-2026-final-prediction.vercel.app](https://wc-2026-final-prediction.vercel.app)
**🔗 API:** [wc2026-final-prediction.onrender.com](https://wc2026-final-prediction.onrender.com)

> Note: the backend runs on Render's free tier, so the first request after a period of inactivity may take 30–60 seconds to respond while the server wakes up.

---

## 🧱 Tech Stack

**Frontend**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-8884d8?style=for-the-badge&logo=chartdotjs&logoColor=white)

**Backend**

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

**Deployment**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

**Tooling**

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## Overview

WC2026 Final Predictor is a statistical prediction engine that models match outcomes — win/draw/loss probability, score distribution (via a Poisson distribution model), and penalty shootout odds — from team performance data (xG, xA, possession, form).

The model was run before the 2026 Final between Spain and Argentina. Now that the match has been played, the dashboard also shows the actual result (Spain 1–0 Argentina, AET) alongside the model's original prediction, so you can see exactly how the forecast held up against reality.

## 📸 Screenshots

![Dashboard overview](./screenshots/dashboard-overview.png)
![Match probability cards](./screenshots/prediction-cards.png)
![Team performance radar](./screenshots/radar-analysis.png)

## ✨ Features

- ⚽ Win/draw/loss probability modeling
- 🏁 Prediction vs. actual result comparison (post-final)
- 🎯 Poisson-based score prediction, mathematically consistent with the win probability model
- 🥅 Penalty shootout simulation
- 📊 Radar-based team performance comparison (xG, xA, possession, shots)
- ⭐ Tournament top scorers & assists leaderboard, plus Player of the Match
- 🧠 AI-generated match explanations (strengths, weaknesses, risk factors)
- 📈 Confidence scoring for every prediction
- 🎨 Team-color-coded UI throughout (Spain red, Argentina sky-blue)

## 🏗️ Architecture

```mermaid
graph LR
    A[Next.js Client<br/>React + TypeScript] -->|HTTP/REST| B[FastAPI Backend<br/>main.py]
    B --> C[Prediction Engine<br/>prediction_engine.py]
    B --> E[Actual Result<br/>data/actual_result.json]
    B --> F[Player Stats<br/>data/player_stats.json]
    C --> D[Team/Match Data<br/>data/tournament_stats.json]
```

**Deployment:** Next.js frontend on Vercel, FastAPI backend on Render, communicating over REST with CORS configured between the two.

## 📡 API Endpoints

### `GET /prediction`
Returns match outcome predictions.

```json
{
  "Spain_win": 38,
  "Argentina_win": 37,
  "Draw": 25,
  "confidence": 53,
  "score_prediction": {
    "most_likely_score": "1-1",
    "score_probabilities": { "1-1": 12.3, "1-0": 9.2, "0-1": 9.0, "2-1": 8.4 }
  }
}
```

### `GET /teams`
Returns team performance statistics — possession, shots per game, shots on target, xG, xA.

### `GET /actual-result`
Returns the real final result for post-match comparison.

```json
{
  "winner": "Spain",
  "score": "1-0",
  "result_type": "extra_time",
  "scorer": "Ferran Torres",
  "player_of_the_match": "Ferran Torres"
}
```

### `GET /players`
Returns tournament top scorers and assists for both finalists.

## 🚀 Getting Started

### Backend
```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Set `NEXT_PUBLIC_API_URL` in a `.env.local` file inside `frontend/` if pointing at a deployed backend instead of localhost.

Visit `http://localhost:3000` to view the dashboard.

## 🗺️ Roadmap

- [x] Backend prediction API
- [x] Frontend dashboard (Next.js)
- [x] Probability, score, and penalty prediction visualization
- [x] AI team profile ratings (radar chart)
- [x] Full visual redesign — team-color-coded across all components
- [x] Post-final "prediction vs. reality" comparison
- [x] Poisson-based score model, consistent with win probability
- [x] Player stats & Player of the Match
- [x] Deployment (Vercel + Render)
- [ ] Live data integration (FIFA / football-data APIs)
- [ ] Ensemble ML model (XGBoost, historical World Cup training data)

## 📄 License

MIT