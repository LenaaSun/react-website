import React, { useState, useEffect } from "react";
import "./ApiDemo.css";
import SongCard from "../components/SongCard";
import Select from 'react-select'


function ApiDemo() {
  const [genre, setGenre] = useState(null);
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch("/api/get-genres");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const genreOptions = data.genres.map((g) => ({
          value: g,
          label: g.charAt(0).toUpperCase() + g.slice(1)
        }));
        setOptions(genreOptions);
      } catch (err) {
        console.error("Failed to fetch genres:", err);
      }
    };
    fetchGenres();
  }, []);

  const fetchRandomSong = async () => {
    setLoading(true);
    setError(null);
    setSong(null);
    try {
      const res = await fetch(`/api/get-random-song-by-genre?genre=${encodeURIComponent(genre.value)}`);
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
    <div className="title-card">
      <h1>Random Song Finder</h1>
    </div>
      <div className="controls">
        <Select 
          options={options} 
          value={genre}
          onChange={setGenre}
          placeholder="Select a genre..."
        />

        <button onClick={fetchRandomSong} disabled={loading || !genre}>
          {loading ? "Loading..." : "Get Random Song"}
        </button>
        {error && <div className="error">Error: {error}</div>}
      </div>      <div className="response-list">
        {!song && <div className="empty">No song fetched yet</div>}
        {song && <SongCard song={song} />}
      </div>
    </div>
  );
}

export default ApiDemo;
// ...existing code...