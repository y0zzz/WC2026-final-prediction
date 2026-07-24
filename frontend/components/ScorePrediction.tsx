export default function ScorePrediction({
  prediction
}: {
  prediction: any;
}) {
  if (!prediction?.score_prediction) {
    return null;
  }

  const scores = prediction.score_prediction.score_probabilities;
  const mostLikely = prediction.score_prediction.most_likely_score;

  const getFavoredTeam = (score: string) => {
    const [spain, argentina] = score.split("-").map(Number);
    if (spain > argentina) return "spain";
    if (argentina > spain) return "argentina";
    return "draw";
  };

  const CARD_STYLES = {
    spain: {
      bg: "bg-red-500/20 border border-red-400",
      label: "text-red-300",
      bar: "bg-red-400",
      text: "text-red-300",
    },
    argentina: {
      bg: "bg-sky-500/20 border border-sky-400",
      label: "text-sky-300",
      bar: "bg-sky-400",
      text: "text-sky-300",
    },
    draw: {
      bg: "bg-gray-500/20 border border-gray-400",
      label: "text-gray-300",
      bar: "bg-gray-400",
      text: "text-gray-300",
    },
  } as const;

  const mostLikelyTeam = getFavoredTeam(mostLikely);

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mt-8 border border-white/10">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
  Poisson Distribution Model
</p>
<h2 className="text-3xl font-black mb-6">
  Estimated Scoreline Probabilities
</h2>

      <div className="text-center mb-10">
        <p className="text-gray-400 text-lg">
          Most likely final score
        </p>
        <h3
          className={`text-7xl font-black mt-3 ${CARD_STYLES[mostLikelyTeam].text}`}
        >
          {mostLikely}
        </h3>
        <p className="text-gray-400 mt-3">
          Based on attacking strength, defensive rating, and team form
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-5">
        {Object.entries(scores)
          .sort(([, a]: any, [, b]: any) => b - a)
          .map(([score, probability]: any, index) => {
            const team = getFavoredTeam(score);
            const styles = CARD_STYLES[team];

            return (
              <div
                key={score}
                className={`
                  rounded-2xl p-5 text-center transition-all duration-300
                  ${index === 0 ? styles.bg : "bg-black/30 border border-white/5"}
                `}
              >
                {index === 0 && (
                  <p className={`text-xs font-bold mb-2 ${styles.label}`}>
                    MOST LIKELY
                  </p>
                )}
                <p className="text-3xl font-black">{score}</p>
                <p className="text-gray-300 mt-3">{probability}%</p>
                <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${index === 0 ? styles.bar : "bg-gray-500"}`}
                    style={{ width: `${probability}%` }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}