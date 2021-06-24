import React from "react";
//import './login.css';

export default function login() {
    return(
      <form>
        <label>
            <p>Username</p>
            <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )  
}