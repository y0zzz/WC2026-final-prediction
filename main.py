from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from prediction_engine import predict_match

app = FastAPI()

# Allow Next.js frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://wc-2026-final-prediction.vercel.app",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load tournament data
with open("data/tournament_stats.json") as file:
    teams = json.load(file)

# Load actual final result
with open("data/actual_result.json") as file:
    actual_result = json.load(file)

# Load player stats
with open("data/player_stats.json") as file:
    player_stats = json.load(file)

@app.get("/")
def home():
    return {
        "message": "World Cup Predictor API running"
    }

@app.get("/teams")
def get_teams():
    return teams

@app.get("/prediction")
def get_prediction():
    argentina = teams["Argentina"]
    spain = teams["Spain"]
    return predict_match(
        argentina,
        spain
    )

@app.get("/actual-result")
def get_actual_result():
    return actual_result

@app.get("/players")
def get_players():
    return player_stats