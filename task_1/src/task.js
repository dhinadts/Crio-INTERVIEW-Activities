import React, { useState } from "react";

const FetchJokeCard = () => {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setJoke({
        setup: data.setup || "",
        punchline: data.punchline || ""
      });
    } catch (error) {
      setError(true);
      setJoke({ setup: "", punchline: "" });
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Random Joke</h1>
        <p style={styles.subtitle}>Click the button to fetch a fresh one.</p>

        <button
          onClick={fetchJoke}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch joke"}
        </button>

        <p style={styles.jokeText}>
          {error ? (
            "Could not fetch a joke. Try again."
          ) : joke.setup ? (
            <>
              <strong>{joke.setup}</strong>
              <br />
              <br />
              {joke.punchline}
            </>
          ) : (
            "No joke yet."
          )}
        </p>

        {error && (
          <span
            style={styles.underlineText}
            onClick={fetchJoke}
          >
            Try again
          </span>
        )}
      </div>
    </div>
  );
};

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
    lineHeight: "1.5",
    minHeight: "60px",
  },
  underlineText: {
    display: "block",
    textDecoration: "underline",
    color: "#0d6efd",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "15px",
  },
};

export default FetchJokeCard;