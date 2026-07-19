"""
Prediction Engine v4

Responsible for football match prediction calculations.
Includes:
- Match probability
- Score prediction
- Extra time possibility
- Penalty shootout projection
- Team profile ratings (radar chart metrics)
"""


def calculate_attack_rating(team):
    return (
        team["xg"] * 0.35
        + team["goals_scored"] * 0.25
        + team["shots_on_target"] * 0.15
        + team["shots_per_game"] * 0.15
        + team["xa"] * 0.10
    )


def calculate_control_rating(team):
    return (
        team["possession"] * 0.70
        + team["xa"] * 0.30
    )


def calculate_overall_rating(team):
    attack = calculate_attack_rating(team)
    control = calculate_control_rating(team)
    return (
        attack * 0.75
        + control * 0.25
    )


def calculate_confidence(team1_rating, team2_rating):
    difference = abs(team1_rating - team2_rating)
    confidence = round(50 + difference * 8)
    return min(90, max(50, confidence))


def predict_scores(team1_rating, team2_rating):
    difference = team1_rating - team2_rating

    if difference > 1:
        scores = {"2-1": 18, "1-0": 14, "2-0": 10, "1-1": 12}
    elif difference < -1:
        scores = {"1-2": 18, "0-1": 14, "0-2": 10, "1-1": 12}
    else:
        scores = {"1-1": 16, "2-1": 12, "1-2": 12, "0-0": 10}

    most_likely = max(scores, key=scores.get)

    return {
        "most_likely_score": most_likely,
        "score_probabilities": scores
    }


def predict_penalties(spain_rating, argentina_rating):
    difference = spain_rating - argentina_rating

    spain_penalty = round(50 + difference * 3)
    spain_penalty = min(60, max(40, spain_penalty))
    argentina_penalty = 100 - spain_penalty

    return {
        "Spain_penalties": spain_penalty,
        "Argentina_penalties": argentina_penalty
    }


# --- Team profile ratings (used by RadarAnalysis) ---
# All metrics scaled to roughly 0-100 so they can be plotted together.

def calculate_attack_profile(team):
    xg_per_game = team["xg"] / team["matches"]
    goals_per_game = team["goals_scored"] / team["matches"]

    rating = (
        xg_per_game * 8
        + team["shots_on_target"] * 6
        + goals_per_game * 4
    )
    return round(min(100, max(0, rating)), 1)


def calculate_defense_profile(team):
    conceded_per_game = team["goals_conceded"] / team["matches"]
    rating = 100 - conceded_per_game * 25
    return round(min(100, max(0, rating)), 1)


def calculate_control_profile(team):
    rating = team["possession"] * 0.6 + team["pass_accuracy"] * 0.4
    return round(min(100, max(0, rating)), 1)


def calculate_creativity_profile(team):
    xa_per_game = team["xa"] / team["matches"]
    assists_per_game = team["assists"] / team["matches"]

    rating = xa_per_game * 20 + assists_per_game * 10
    return round(min(100, max(0, rating)), 1)


def calculate_efficiency_profile(team):
    total_shots_on_target = team["shots_on_target"] * team["matches"]
    if total_shots_on_target == 0:
        return 0.0

    rating = (team["goals_scored"] / total_shots_on_target) * 100
    return round(min(100, max(0, rating)), 1)


def calculate_form_profile(team):
    win_pct = team["wins"] / team["matches"]
    draw_pct = team["draws"] / team["matches"]

    rating = win_pct * 100 + draw_pct * 50
    return round(min(100, max(0, rating)), 1)


def build_team_profile(team):
    return {
        "attack": calculate_attack_profile(team),
        "defense": calculate_defense_profile(team),
        "control": calculate_control_profile(team),
        "creativity": calculate_creativity_profile(team),
        "efficiency": calculate_efficiency_profile(team),
        "form": calculate_form_profile(team),
    }


def predict_match(argentina, spain):
    argentina_rating = calculate_overall_rating(argentina)
    spain_rating = calculate_overall_rating(spain)

    total_rating = argentina_rating + spain_rating

    argentina_strength = argentina_rating / total_rating
    spain_strength = spain_rating / total_rating

    # Final match draw probability
    draw_probability = 25
    remaining_probability = 100 - draw_probability

    argentina_win = round(argentina_strength * remaining_probability)
    spain_win = round(spain_strength * remaining_probability)

    # Knockout final logic
    penalty_probability = round(draw_probability * 0.65)
    extra_time_probability = round(draw_probability * 0.35)

    penalties = predict_penalties(spain_rating, argentina_rating)

    return {
        "Argentina_win": argentina_win,
        "Spain_win": spain_win,
        "Draw": draw_probability,
        "extra_time_probability": extra_time_probability,
        "penalty_shootout_probability": penalty_probability,
        "penalty_prediction": penalties,
        "score_prediction": predict_scores(argentina_rating, spain_rating),
        "confidence": calculate_confidence(argentina_rating, spain_rating),
        "argentina_rating": round(argentina_rating, 2),
        "spain_rating": round(spain_rating, 2),
        "team_profiles": {
            "Argentina": build_team_profile(argentina),
            "Spain": build_team_profile(spain),
        },
    }