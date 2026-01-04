// ...existing code...
import React from "react";
import "./SongCard.css";

export default function SongCard({ song }) {
  if (!song) return null;

  const seconds = Math.round((song.track_duration_ms ?? 0) / 1000);

  return (
    <div className="song-card">
      <div className="song-info">
        <h4 className="track-name">{song.track_name}</h4>
        <div className="artist-name">{song.artist_name}</div>
        <div className="track-duration">{seconds} sec</div>
      </div>

      {song.embed && (
        <div
          className="song-embed"
          // NOTE: embed is raw HTML (iframe). If you need sanitization, install DOMPurify.
          dangerouslySetInnerHTML={{ __html: song.embed }}
        />
      )}
    </div>
  );
}
// ...existing code...