// ...existing code...
import React, { useState } from "react";
import "./ApiDemo.css";
import KebabCard from "../components/KebabCard";

function ApiDemo() {
  const [items, setItems] = useState([]); // items is a flat array of kebab objects
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/get-kebabs");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      // if the API returns an array, append its elements; otherwise append the single object
      if (Array.isArray(data)) {
        setItems((prev) => [...prev, ...data]);
      } else {
        setItems((prev) => [...prev, data]);
      }
    } catch (err) {
      setError(err.message || "Fetch error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>API Demo</h1>

      <div className="controls">
        <button onClick={fetchData} disabled={loading}>
          {loading ? "Loading..." : "Fetch from API"}
        </button>
        {error && <div className="error">Error: {error}</div>}
      </div>

      <p>Response from backend:</p>
      <div className="response-list">
        {items.length === 0 && <div className="empty">No responses yet</div>}
        {items.map((kebab) => (
          <KebabCard key={kebab._id || kebab.name} kebab={kebab} />
        ))}
      </div>
    </div>
  );
}

export default ApiDemo;
// ...existing code...