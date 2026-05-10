import { useMemo } from "react";

export default function MainCard({ data, forecast }) {
  const weather = data.weather[0].description;

  /* ------------------ REAL DAILY MIN / MAX ------------------ */
  const { minTemp, maxTemp } = useMemo(() => {
    if (!forecast || forecast.length === 0) {
      return {
        minTemp: Math.round(data.main.temp_min),
        maxTemp: Math.round(data.main.temp_max),
      };
    }

    const todayTemps = forecast.map((item) => item.main.temp);

    return {
      minTemp: Math.round(Math.min(...todayTemps)),
      maxTemp: Math.round(Math.max(...todayTemps)),
    };
  }, [forecast, data]);

  /* ------------------ RAIN % ------------------ */
  const rainPercent = data.rain
    ? Math.min(100, Math.round(data.rain["1h"] * 10))
    : 0;

  /* ------------------ FORMAT TIME ------------------ */
  const formatTime = (unix) =>
    new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="space-y-8">

      {/* CITY */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-wide">
          {data.name}
        </h2>
        <span className="text-base opacity-60 capitalize">
          {weather}
        </span>
      </div>

      {/* TEMPERATURE */}
      <div className="flex items-end gap-3">
        <span className="text-7xl font-light tracking-tight">
          {Math.round(data.main.temp)}
        </span>
        <span className="text-3xl opacity-80 mb-2">°C</span>
      </div>

      {/* RAIN BAR */}
      <div className="space-y-2">
        <div className="flex justify-between text-base opacity-80">
          <span>Rain Probability</span>
          <span>{rainPercent}%</span>
        </div>

        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-700"
            style={{ width: `${rainPercent}%` }}
          />
        </div>
      </div>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-base">

        <div>
          <p className="opacity-60">Humidity</p>
          <p className="font-medium">{data.main.humidity}%</p>
        </div>

        <div>
          <p className="opacity-60">Wind Speed</p>
          <p className="font-medium">{data.wind.speed} m/s</p>
        </div>

        <div>
          <p className="opacity-60">Minimum</p>
          <p className="font-medium">{minTemp}°C</p>
        </div>

        <div>
          <p className="opacity-60">Maximum</p>
          <p className="font-medium">{maxTemp}°C</p>
        </div>

        <div>
          <p className="opacity-60">Feels Like</p>
          <p className="font-medium">
            {Math.round(data.main.feels_like)}°C
          </p>
        </div>

        <div>
          <p className="opacity-60">Sunrise</p>
          <p className="font-medium">
            {formatTime(data.sys.sunrise)}
          </p>
        </div>

        <div>
          <p className="opacity-60">Sunset</p>
          <p className="font-medium">
            {formatTime(data.sys.sunset)}
          </p>
        </div>

      </div>
    </div>
  );
}