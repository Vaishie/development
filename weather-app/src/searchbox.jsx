import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSearch(city);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-center">

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="
        w-full px-5 py-3
        rounded-2xl
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        text-white placeholder-white/80
        focus:outline-none
        "
      />

      <button
        type="submit"
        className="
        w-full py-3
        rounded-2xl
        bg-white/30
        hover:bg-white/40
        text-white font-medium
        border border-white/40
        transition
        "
      >
        Search
      </button>

      {error && (
        <p className="text-red-400 text-sm">
          No such place exists
        </p>
      )}
    </form>
  );
}