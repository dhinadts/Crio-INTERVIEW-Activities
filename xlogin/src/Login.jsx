import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (username === "user" && password === "password") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
    //   container
      style={{
        maxWidth: "320px",
        margin: "100px auto",

       /*  display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "left",
        alignItems: "left", */
      }}
    >
      <h1>Login Page</h1>
      {loggedIn ? (
        <h2>Welcome User!</h2>
      ) : (
        <form
          onSubmit={handleSubmit}
          >
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={{ padding: "8px", width: "100%" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ padding: "8px", width: "100%" }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              color: "black",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
