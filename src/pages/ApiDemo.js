import { useEffect, useState } from "react";
import "./ApiDemo.css";

function ApiDemo() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("API error");
      });
  }, []);

  return (
    <div className="page">
      <h1>API Demo</h1>
      <p>Response from backend:</p>
      <strong>{message}</strong>
    </div>
  );
}

export default ApiDemo;
