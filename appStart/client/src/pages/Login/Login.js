import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.css";

/**
 *
 */

async function loginUser(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
}

function useToken() {
  const getToken = () => {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);

      return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
      localStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken.token);
  };

  return {
      setToken: saveToken,
      token
  }
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });

    setToken(token)
  };

    return (
      <div className= "login-wrapper">
      <h2>Please Login!</h2>
      <form onSubmit={handleSubmit}>
        <label>
            <p>Username</p>
            <input type="text" onChange ={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange ={e => setPassword(e.target.value)} />
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
}