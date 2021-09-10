/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SubmitFormErrors from "../../components/SubmitFormErrors/submitFormErrors";
import axios from "axios";
import history from "../../components/History/history";
import Container from "../../components/Container/Container";

/**
 *
 */
function Signup() {
  const recipe = useSelector((state) => state.recipe);
  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [formsValid, setFormsValid] = useState(false);

  const fieldErrors = (fieldName, value) => {
    const usernameLengthValid = value.length <= 20 && value.length >= 5;
    const usernameText = "Username Length Too Long/Too Short";
    const passwordLengthValid = value.length <= 20 && value.length >= 5;
    const passwordText = "Password Length Too Long/Too Short";
    const emailLengthValid = value.length <= 20 && value.length >= 5;
    const emailText = "Email Length Too Long/Too Short";

    const trueArray = [usernameValid, passwordValid, emailValid];

    const formValidation = () => {
      if (
        trueArray.every((item) => {
          if (item) {
            return true;
          }

          return false;
        })
      ) {
        setFormsValid(true);
      }
    };

    switch (fieldName) {
      case "username":
        if (!usernameLengthValid && !formErrors.includes(usernameText)) {
          setUsernameValid(false);

          return formErrors.push(usernameText);
        }
        if (usernameLengthValid && formErrors.includes(usernameText)) {
          const index = formErrors.indexOf(usernameText);

          setUsernameValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setUsernameValid(true);

        break;
      case "password":
        if (!passwordLengthValid && !formErrors.includes(passwordText)) {
          setPasswordValid(false);

          return formErrors.push(passwordText);
        }
        if (passwordLengthValid && formErrors.includes(passwordText)) {
          const index = formErrors.indexOf(passwordText);

          setPasswordValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setPasswordValid(true);

        break;
      case "email":
        if (!emailLengthValid && !formErrors.includes(emailText)) {
          setEmailValid(false);

          return formErrors.push(emailText);
        }
        if (emailLengthValid && formErrors.includes(emailText)) {
          const index = formErrors.indexOf(emailText);

          setEmailValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setEmailValid(true);

        break;
      default:
        formValidation();
        break;
    }

    return null;
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { name } = event.target;

    switch (name) {
      case "username":
        fieldErrors("username", value);
        setUsername(value);
        break;
      case "password":
        fieldErrors("password", value);
        setPassword(value);
        break;
      case "email":
        fieldErrors("email", value);
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const usernameArray = recipeArray.map((item) => {
      return item.username;
    });

    if (!usernameArray.includes(username)) {
      if (formsValid) {
        await axios
          .post("api/user/signup", {
            username,
            password,
            email
          })
          .catch((error) => {
            console.log(error);
          });
        history.push(`/recipes`);
      }
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
      <br />
      <label className="textColor">Email</label>
      <textarea
        className="textSubtle"
        name="email"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Your Email"
      ></textarea>
      <button className="btn btn-dark" onClick={handleFormSubmit}>
        Submit Recipe
      </button>
    </div>
  );

  if (formErrors.length >= 1) {
    return (
      <Container>
        <form>
          <h1 className="textColor">Create A New Recipe</h1>
          <div className="textColor">
            <SubmitFormErrors formErrors={formErrors} />
          </div>
          {formText}
        </form>
      </Container>
    );
  }

  return (
    <Container>
      <form>
        <h1 className="textColor">Signup</h1>
        <div>
          <h3 className="textColor">Requirements</h3>
          <p className="textSubtle">
            Username: Greater than/equal to 5 and less than/equal to 150
            characters
            <br />
            Password: Greater than 30 and less than 300 characters
            <br />
            Email: Greater than/equal to 1 and less than/equal to 150 characters
          </p>
        </div>
        {formText}
      </form>
    </Container>
  );
}

export default Signup;
