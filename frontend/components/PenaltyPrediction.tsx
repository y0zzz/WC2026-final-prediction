export default function PenaltyPrediction({
  prediction
}: {
  prediction: any;
}) {
  if (!prediction?.penalty_prediction) {
    return null;
  }

  const spainPct = prediction.penalty_prediction.Spain_penalties;
  const argentinaPct = prediction.penalty_prediction.Argentina_penalties;
  const spainFavored = spainPct > argentinaPct;

  return (
    <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
        Knockout Scenario
      </p>
      <h2 className="text-3xl font-black mb-6">
        🥅 Penalty Shootout Projection
      </h2>
      <p className="text-gray-300 mb-6 text-lg">
        If the final remains level after extra time,
        the model estimates the following penalty shootout outcome.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-black/30 rounded-2xl p-5 text-center border border-white/5">
          <p className="text-gray-400">Penalty Shootout Chance</p>
          <p className="text-4xl font-black mt-3">
            {prediction.penalty_shootout_probability}%
          </p>
        </div>

        <div
          className={`rounded-2xl p-5 text-center transition-all duration-300 ${
            spainFavored
              ? "bg-red-500/20 border border-red-400"
              : "bg-black/30 border border-white/5"
          }`}
        >
          <p className={spainFavored ? "text-red-300" : "text-gray-400"}>
            🇪🇸 Spain Penalties
          </p>
          <p className="text-4xl font-black mt-3">{spainPct}%</p>
        </div>

        <div
          className={`rounded-2xl p-5 text-center transition-all duration-300 ${
            !spainFavored
              ? "bg-sky-500/20 border border-sky-400"
              : "bg-black/30 border border-white/5"
          }`}
        >
          <p className={!spainFavored ? "text-sky-300" : "text-gray-400"}>
            🇦🇷 Argentina Penalties
          </p>
          <p className="text-4xl font-black mt-3">{argentinaPct}%</p>
        </div>
      </div>

      <div className="mt-6 bg-black/30 rounded-2xl p-5 border border-white/5">
        <p className="text-gray-300">
          Extra time probability:{" "}
          <span className="font-bold">{prediction.extra_time_probability}%</span>
        </p>
      </div>
    </div>
  );
}