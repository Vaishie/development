import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = () => {
    return time.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative text-center space-y-1 pb-4">

      <div className="text-3xl font-light tracking-wide">
        {formatTime()}
      </div>

      <div className="text-base opacity-70">
        {formatDate()}
      </div>

      {/* Subtle Divider */}
      <div className="mt-3 h-[1px] w-full bg-white/20" />

    </div>
  );
}