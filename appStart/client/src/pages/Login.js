/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import history from "../components/History/history";
import Container from "../components/Container/Container";

/**
 *
 */
function Login() {
  const user = useSelector((state) => state.user);

  // eslint-disable-next-line prefer-destructuring
  const userArray = user[0];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { name } = event.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const usernameArray = userArray.map((item) => {
      return item.username;
    });

    if (usernameArray.includes(username)) {
      await axios
        .post("api/user/login", {
          username,
          password
        })
        .catch((error) => {
          console.log(error);
        });
      history.push(`/recipes`);
    }
  };

  const formText = (
    <div>
      <label className="textColor">Username</label>
      <textarea
        className="textSubtle"
        name="username"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Your Username"
      ></textarea>
      <br />
      <label className="textColor">Password</label>
      <textarea
        className="textSubtle"
        name="password"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Your Password"
      ></textarea>
      <button className="btn btn-dark" onClick={handleFormSubmit}>
        Submit Recipe
      </button>
    </div>
  );

  return (
    <Container>
      <form>{formText}</form>
    </Container>
  );
}

export default Login;
