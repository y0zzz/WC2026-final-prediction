import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

export default function RadarAnalysis({
  teams,
  prediction
}: {
  teams: any;
  prediction: any;
}) {
  const profiles = prediction?.team_profiles;

  if (!profiles || !profiles.Spain || !profiles.Argentina) {
    return (
      <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h2 className="text-3xl font-black mb-6">AI Team Profile Comparison</h2>
        <p className="text-gray-400">Team profile data not available yet.</p>
      </div>
    );
  }

  const chartData = [
    { metric: "Attack", Spain: profiles.Spain.attack, Argentina: profiles.Argentina.attack },
    { metric: "Defense", Spain: profiles.Spain.defense, Argentina: profiles.Argentina.defense },
    { metric: "Control", Spain: profiles.Spain.control, Argentina: profiles.Argentina.control },
    { metric: "Creativity", Spain: profiles.Spain.creativity, Argentina: profiles.Argentina.creativity },
    { metric: "Efficiency", Spain: profiles.Spain.efficiency, Argentina: profiles.Argentina.efficiency },
    { metric: "Form", Spain: profiles.Spain.form, Argentina: profiles.Argentina.form }
  ];

  return (
    <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
        Statistical Profile
      </p>
      <h2 className="text-3xl font-black mb-6">
        AI Team Profile Comparison
      </h2>
      <div className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData}>
            <PolarGrid stroke="#ffffff20" />
            <PolarAngleAxis dataKey="metric" tick={{ fill: "#9ca3af" }} />
            <Radar
              name="Spain"
              dataKey="Spain"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.35}
            />
            <Radar
              name="Argentina"
              dataKey="Argentina"
              stroke="#38bdf8"
              fill="#38bdf8"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}