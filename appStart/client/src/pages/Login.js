import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 *
 */
export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
    return(
      <div className= "login-wrapper">
      <h1>Please Login!</h1>
      <form>
        <label>
            <p>Username</p>
            <input type="text" onChange ={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange ={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )  
}

Login.propTypes = {
  setToken:propTypes.func.isRequired
}