// ...existing code...
import React, { useState } from "react";
import "./ApiDemo.css";
import SongCard from "../components/SongCard";

function ApiDemo() {
  const [genre, setGenre] = useState("");
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomSong = async () => {
    setLoading(true);
    setError(null);
    setSong(null);
    try {
      const res = await fetch(`http://localhost:3000/get-random-song-by-genre?genre=${encodeURIComponent(genre)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setSong(data);
    } catch (err) {
      setError(err.message || "Fetch error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Random Song Finder</h1>

      <div className="controls">
        <label>
          Genre:{" "}
          <input
            type="text"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            placeholder="Enter genre"
          />
        </label>
        <button onClick={fetchRandomSong} disabled={loading || !genre}>
          {loading ? "Loading..." : "Get Random Song"}
        </button>
        {error && <div className="error">Error: {error}</div>}
      </div>

      <div className="response-list">
        {!song && <div className="empty">No song fetched yet</div>}
        {song && <SongCard song={song} />}
      </div>
    </div>
  );
}

export default ApiDemo;
// ...existing code...