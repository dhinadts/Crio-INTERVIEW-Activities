import React, { useState } from "react";

const FetchJokeCard = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setJoke(`${data.setup} — ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch joke.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Random Joke</h1>
        <p style={styles.subtitle}>Click the button to fetch a fresh one.</p>

        <button onClick={fetchJoke} style={styles.button}>
          {loading ? "Fetching..." : "Fetch Joke"}
        </button>

        <p style={styles.jokeText}>{joke || "No joke yet."}</p>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  card: {
    width: "380px",
    padding: "24px",
    background: "white",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600",
  },
  subtitle: {
    marginTop: "4px",
    fontSize: "14px",
    color: "#777",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
  jokeText: {
    marginTop: "20px",
    fontSize: "15px",
    color: "#555",
  },
};

export default FetchJokeCard;
