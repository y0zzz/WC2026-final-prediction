export default function PredictionCards({
  prediction
}: {
  prediction: any;
}) {
  if (!prediction) {
    return null;
  }

  const winner =
    prediction.Spain_win > prediction.Argentina_win
      ? "Spain"
      : prediction.Argentina_win > prediction.Spain_win
      ? "Argentina"
      : "Draw";

  return (
    <div className="mt-12">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
          AI Match Model
        </p>
        <h2 className="text-3xl md:text-4xl font-black">Match Probability</h2>
        <p className="text-gray-400 mt-2">
          Predicted outcome based on team performance statistics
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <PredictionCard
          title="Spain"
          flag="🇪🇸"
          value={prediction.Spain_win}
          winner={winner === "Spain"}
          team="spain"
        />
        <PredictionCard
          title="Draw"
          value={prediction.Draw}
          winner={winner === "Draw"}
          team="draw"
        />
        <PredictionCard
          title="Argentina"
          flag="🇦🇷"
          value={prediction.Argentina_win}
          winner={winner === "Argentina"}
          team="argentina"
        />
      </div>
    </div>
  );
}

const TEAM_STYLES = {
  spain: {
    winnerBg: "bg-gradient-to-br from-red-600/30 to-yellow-500/20",
    winnerBorder: "border border-red-400",
    winnerShadow: "shadow-xl shadow-red-500/20",
    badgeBg: "bg-red-500/20",
    badgeText: "text-red-200",
    bar: "bg-gradient-to-r from-red-500 to-yellow-400",
  },
  argentina: {
    winnerBg: "bg-gradient-to-br from-sky-400/30 to-white/10",
    winnerBorder: "border border-sky-300",
    winnerShadow: "shadow-xl shadow-sky-400/20",
    badgeBg: "bg-sky-400/20",
    badgeText: "text-sky-100",
    bar: "bg-gradient-to-r from-sky-400 to-white",
  },
  draw: {
    winnerBg: "bg-gradient-to-br from-gray-400/30 to-gray-200/10",
    winnerBorder: "border border-gray-300",
    winnerShadow: "shadow-xl shadow-gray-400/20",
    badgeBg: "bg-gray-400/20",
    badgeText: "text-gray-100",
    bar: "bg-gradient-to-r from-gray-400 to-gray-300",
  },
} as const;

function PredictionCard({
  title,
  flag,
  value,
  winner,
  team,
}: {
  title: string;
  flag?: string;
  value: number;
  winner: boolean;
  team: keyof typeof TEAM_STYLES;
}) {
  const styles = TEAM_STYLES[team];

  return (
    <div
      className={`
        relative
        overflow-hidden
        backdrop-blur-xl
        rounded-3xl
        p-7
        text-center
        transition-all
        duration-300
        hover:scale-[1.03]
        ${
          winner
            ? `${styles.winnerBg} ${styles.winnerBorder} ${styles.winnerShadow}`
            : "bg-white/10 border border-white/10"
        }
      `}
    >
      {winner && (
        <div className={`absolute top-0 left-0 right-0 ${styles.badgeBg} py-2`}>
          <p className={`text-xs uppercase tracking-widest ${styles.badgeText} font-bold`}>
            Model favorite
          </p>
        </div>
      )}
      <div className={winner ? "mt-8" : ""}>
        <h3 className="text-lg text-gray-300 flex items-center justify-center gap-2">
          {flag && <span className="text-2xl">{flag}</span>}
          {title}
        </h3>
        <p className="text-6xl font-black mt-4">{value}%</p>
        <div className="mt-6 bg-black/30 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              winner ? styles.bar : "bg-gray-500"
            }`}
            style={{ width: `${value}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-4">Win probability</p>
      </div>
    </div>
  );
}