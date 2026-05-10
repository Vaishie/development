export default function InfoBox({ info }) {

  const getEmoji = (weather) => {
    const w = weather.toLowerCase();
    if (w.includes("rain")) return "🌧️";
    if (w.includes("cloud")) return "☁️";
    if (w.includes("clear")) return "☀️";
    if (w.includes("snow")) return "❄️";
    if (w.includes("thunder")) return "⛈️";
    if (w.includes("mist") || w.includes("fog")) return "🌫️";
    return "🌤️";
  };

  return (
    <div
      className="
        relative
        p-7
        rounded-[28px]
        bg-white/10
        backdrop-blur-3xl
        border border-white/20
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        text-white
        space-y-6
        transition-all duration-500
        hover:scale-[1.02]
        hover:shadow-[0_12px_60px_rgba(255,255,255,0.12)]
        overflow-hidden
      "
    >
      {/* ✨ Gradient Shine Overlay */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/25 to-white/5 opacity-25 pointer-events-none" />

      {/* 🌍 City + Emoji */}
      <div className="relative flex justify-center items-center gap-3">
        <h2 className="text-2xl font-semibold tracking-wide">
          {info.city}
        </h2>
        <span className="text-3xl animate-pulse">
          {getEmoji(info.weather)}
        </span>
      </div>

      {/* 🌡 Temperature */}
      <div className="relative flex justify-center items-end gap-2">
        <span className="text-6xl font-light tracking-tight">
          {info.temp}
        </span>
        <span className="text-3xl opacity-80 mb-1">°C</span>
      </div>

      {/* 🌧 Weather Pill */}
      <div className="relative flex justify-center">
        <div className="
          px-4 py-1.5
          rounded-full
          bg-emerald-900/40
          backdrop-blur-md
          border border-white/10
          text-base
          text-white/80
        ">
          {info.weather}
        </div>
      </div>

      {/* 📊 Details Grid */}
      <div className="relative grid grid-cols-2 gap-5 text-base text-white/80 pt-2">
        <div className="flex items-center gap-2">
          <span>💧</span>
          <span>Humidity: {info.humidity}%</span>
        </div>

        <div className="flex items-center gap-2">
          <span>🌬</span>
          <span>Wind: {info.wind} m/s</span>
        </div>

        <div className="flex items-center gap-2">
          <span>⬇️</span>
          <span>Min: {info.tempMin}°C</span>
        </div>

        <div className="flex items-center gap-2">
          <span>⬆️</span>
          <span>Max: {info.tempMax}°C</span>
        </div>
      </div>

    </div>
  );
}