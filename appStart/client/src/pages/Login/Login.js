import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.css";

/**
 *
 */

/**
 * @param credentials
 */
function loginUser(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }).then((data) => data.json());
}

/**
 * @param root0
 * @param root0.setToken
 */
function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h2>Please Login!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
          <button type="login">Login</button>
        </div>
        <div>
          <button type="createAccount">Create Account</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
