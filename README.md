# 🏆 WC2026 Final Predictor

> AI-powered football analytics dashboard predicting the FIFA World Cup 2026 Final matchup between Spain and Argentina — with probability modeling, score simulation, and explainable AI insights.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

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

**Tooling**

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## Overview

WC2026 Final Predictor combines statistical modeling, football performance metrics, and probability simulation to forecast the outcome of the World Cup 2026 Final — not just *who wins*, but *why*, through interpretable analytics and AI-generated match reasoning.

Now that the tournament has concluded, the dashboard also compares the model's predictions against the actual final result — Spain 1–0 Argentina (AET) — turning it into a genuine model-evaluation showcase, not just a static forecast.

## 📸 Screenshots

![Dashboard overview](./screenshots/dashboard-overview.png)
![Match probability cards](./screenshots/prediction-cards.png)
![Team performance radar](./screenshots/radar-analysis.png)

## ✨ Features

- ⚽ Win/draw/loss probability modeling
- 🏁 Prediction vs. actual result comparison (post-final)
- 🎯 Most-likely score prediction with distribution breakdown
- 🥅 Penalty shootout simulation
- 📊 Radar-based team performance comparison (xG, xA, possession, shots)
- 🧠 AI-generated match explanations (strengths, weaknesses, risk factors)
- 📈 Confidence scoring for every prediction
- 🎨 Team-color-coded UI throughout (Spain red, Argentina sky-blue)

## 🏗️ Architecture

```mermaid
graph LR
    A[Next.js Client<br/>React + TypeScript] -->|HTTP/REST| B[FastAPI Backend<br/>main.py]
    B --> C[Prediction Engine<br/>prediction_engine.py]
    B --> E[Actual Result<br/>data/actual_result.json]
    C --> D[Team/Match Data<br/>data/tournament_stats.json]
```

## 📡 API Endpoints

### `GET /prediction`
Returns match outcome predictions.

```json
{
  "Spain_win": 45,
  "Draw": 25,
  "Argentina_win": 30,
  "confidence": 72
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
  "scorer": "Ferran Torres"
}
```

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

Visit `http://localhost:3000` to view the dashboard.

## 🗺️ Roadmap

- [x] Backend prediction API
- [x] Frontend dashboard (Next.js)
- [x] Probability, score, and penalty prediction visualization
- [x] AI team profile ratings (radar chart)
- [x] Full visual redesign — team-color-coded across all components
- [x] Post-final "prediction vs. reality" comparison
- [ ] Live data integration (FIFA / football-data APIs)
- [ ] Ensemble ML model (XGBoost, historical World Cup training data)
- [ ] Deployment (Vercel + Render)

## 📄 License

MIT