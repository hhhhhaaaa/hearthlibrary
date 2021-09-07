/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuthenticated } from "../features/Authenticate/authenticateSlice";
import { useSignIn } from "react-auth-kit";
import auth from "../tools/auth";
import axios from "axios";
import history from "../components/History/history";
import Container from "../components/Container/Container";

/**
 *
 */
function Login() {
  const user = useSelector((state) => state.user);
  const authenticate = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();

  const signIn = useSignIn();

  // eslint-disable-next-line prefer-destructuring
  const userArray = user[0];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const login = () => auth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

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
    console.log("Submit");
    const usernameArray = userArray.map((item) => {
      return item.username;
    });

    const { value } = event.target;
    const { name } = event.target;

    if (usernameArray.includes(username)) {
      dispatch(userAuthenticated());
      console.log("Test");
      console.log(authenticate);
      await axios
        .post("api/user/login", {
          username,
          password
        })
        .then((res) => {
          console.log("response");
          console.log(res);
          if (res.status === 200) {
            if (
              signIn({
                token: res.data.token,
                expiresIn: res.data.expiresIn,
                tokenType: "Bearer",
                authState: res.data.authUserState
              })
            ) {
              login();
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
            } else {
              console.log("Incorrect Login Credentials");
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });

      history.push(`/newRecipe`);
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
