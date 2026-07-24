export default function MatchHeader() {
  return (
    <div className="relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
      {/* Ambient team-color glow */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl" />

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center flex-1">
          <div className="text-7xl drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">
            🇪🇸
          </div>
          <h2 className="text-3xl font-black mt-3 tracking-tight">
            Spain
          </h2>
         
        </div>

        <div className="text-center flex-1">
          <p className="text-6xl font-black tracking-tighter bg-gradient-to-r from-red-400 via-white to-sky-400 bg-clip-text text-transparent">
            VS
          </p>
          <p className="mt-5 text-gray-200 font-semibold uppercase tracking-widest text-sm">
            FIFA World Cup Final 2026
          </p>
          <p className="text-gray-400 mt-1">
            🏟️ MetLife Stadium
          </p>
        </div>

        <div className="text-center flex-1">
          <div className="text-7xl drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">
            🇦🇷
          </div>
          <h2 className="text-3xl font-black mt-3 tracking-tight">
            Argentina
          </h2>
         
        </div>
      </div>
    </div>
  );
}