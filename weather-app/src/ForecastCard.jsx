export default function ForecastCard({ day }) {
  const weather = day.weather[0].main;
  const description = day.weather[0].description;

  const getDay = () =>
    new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });

  return (
    <div
      className="
        relative
        p-4
        rounded-3xl
        bg-white/8
        backdrop-blur-xl
        border border-white/15
        flex justify-between items-center
        transition-all duration-300
        hover:bg-white/15
        hover:scale-[1.02]
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      {/* Left Section */}
      <div className="space-y-1">
        <p className="text-base font-medium opacity-80">
          {getDay()}
        </p>
        <p className="text-xs opacity-60 capitalize">
          {description}
        </p>
      </div>

      {/* Right Section */}
      <div className="text-right space-y-1">
        <p className="text-base font-semibold">
          {Math.round(day.main.temp_max)}°
        </p>
        <p className="text-xs opacity-60">
          {Math.round(day.main.temp_min)}°
        </p>
      </div>

      {/* Subtle Glass Shine */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none" />
    </div>
  );
}