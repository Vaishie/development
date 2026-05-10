import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [time, setTime] = useState(new Date());

  /* CLOCK — no seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  /* Load default city */
  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  const fetchWeather = async (city) => {
    try {
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!currentRes.ok) throw new Error("City not found");

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Forecast error");

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      setWeather(currentData);

      const daily = forecastData.list.filter((_, i) => i % 8 === 0);
      setForecast(daily.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  };

  /* YOUR EXACT IMAGE LINKS MAPPED PROPERLY */
  const getBackground = () => {
    if (!weather)
      return "linear-gradient(135deg,#0f172a,#1e293b)";

    const temp = weather.main.temp;
    const condition = weather.weather[0].main.toLowerCase();

    if (condition.includes("thunder"))
      return "url('https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7')"; // thunder

    if (condition.includes("snow"))
      return "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66')"; // snow

    if (condition.includes("rain"))
      return "url('https://images.unsplash.com/photo-1501696461415-6bd6660c6742')"; // rain

    if (temp >= 40)
      return "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')"; // very hot

    if (temp >= 30)
      return "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')"; // hot

    if (temp >= 20)
      return "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429')"; // warm

    if (temp >= 10)
      return "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')"; // cool

    if (temp >= 0)
      return "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66')"; // cold

    return "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66')"; // very cold
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: getBackground(),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl w-full space-y-8 text-white">

        {/* CLOCK + DATE */}
        <div className="text-center">
          <div className="text-4xl font-light tracking-wide">
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className="text-white/70">
            {time.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <SearchBox onSearch={fetchWeather} />

        {weather && (
          <>
            {/* MAIN GLASS CARD */}
            <div
              className="
              backdrop-blur-3xl
              bg-white/10
              border border-white/20
              rounded-3xl
              p-8
              shadow-[0_0_40px_rgba(255,255,255,0.15)]
              transition-all duration-500
              "
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">
                  {weather.name}
                </h2>
                <span className="text-white/70 text-lg capitalize">
                  {weather.weather[0].description}
                </span>
              </div>

              <div className="flex items-end gap-6 mb-6">
                <h1 className="text-7xl font-extralight">
                  {Math.round(weather.main.temp)}°C
                </h1>
                <span className="text-2xl text-white/70">
                  Feels {Math.round(weather.main.feels_like)}°C
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 text-[17px]">
                <div>Humidity: {weather.main.humidity}%</div>
                <div>Wind Speed: {weather.wind.speed} m/s</div>
                <div>Minimum: {Math.round(weather.main.temp_min)}°C</div>
                <div>Maximum: {Math.round(weather.main.temp_max)}°C</div>
                <div>
                  Sunrise:{" "}
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div>
                  Sunset:{" "}
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>

            {/* FORECAST SLIDER */}
            <div
              className="
              backdrop-blur-3xl
              bg-white/10
              border border-white/20
              rounded-3xl
              p-6
              shadow-[0_0_40px_rgba(255,255,255,0.1)]
              "
            >
              <h3 className="mb-4 text-lg font-semibold">5 Day Forecast</h3>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {forecast.map((day, index) => (
                  <div
                    key={index}
                    className="
                    min-w-[150px]
                    backdrop-blur-xl
                    bg-white/10
                    border border-white/20
                    rounded-2xl
                    p-4
                    text-center
                    hover:scale-105
                    transition-all duration-300
                    "
                  >
                    <div className="font-medium">
                      {new Date(day.dt_txt).toLocaleDateString("en-US", {
                        weekday: "short",
                      })}
                    </div>
                    <div className="text-sm text-white/70 capitalize">
                      {day.weather[0].description}
                    </div>
                    <div className="mt-2 text-lg">
                      {Math.round(day.main.temp)}°C
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}