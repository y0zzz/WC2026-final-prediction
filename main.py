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

def load_json_safe(path, fallback):
    """Load a JSON file, or return a fallback value if the file is missing/broken,
    so a single missing data file can't crash the whole server."""
    try:
        with open(path) as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Warning: couldn't load {path} ({e}). Using fallback data.")
        return fallback

# Load tournament data
teams = load_json_safe("data/tournament_stats.json", {})

# Load actual final result
actual_result = load_json_safe("data/actual_result.json", {
    "winner": None,
    "score": None,
    "result_type": None,
    "scorer": None,
    "player_of_the_match": None,
    "venue": None,
    "date": None,
})

# Load player stats
player_stats = load_json_safe("data/player_stats.json", {"Spain": [], "Argentina": []})


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
    argentina = teams.get("Argentina")
    spain = teams.get("Spain")
    if not argentina or not spain:
        return {"error": "Team data not available"}
    return predict_match(argentina, spain)

@app.get("/actual-result")
def get_actual_result():
    return actual_result

@app.get("/players")
def get_players():
    return player_stats