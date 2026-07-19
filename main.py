from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

from prediction_engine import predict_match


app = FastAPI()


# Allow Next.js frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load tournament data
with open("data/tournament_stats.json") as file:
    teams = json.load(file)



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