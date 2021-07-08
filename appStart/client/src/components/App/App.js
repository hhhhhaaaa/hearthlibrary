/* eslint-disable init-declarations */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recipeFound } from "../../features/Recipes/recipeSlice";
import axios from "axios";
// Only visible when logged in
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login/Login";
import Category from "../../pages/Category";
// Import Login from "../../pages/Login";
import About from "../../pages/About";
import Results from "../../pages/Results";
import Recipes from "../../pages/Recipes";
import Recipe from "../../pages/Recipe";
import RecipeForm from "../../pages/RecipeForm";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

import history from "../History/history";

/**
 *
 */

/**
 *
 */
function App() {
  const dispatch = useDispatch();

  /**
   *
   */
  function useToken() {
    const getToken = () => {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);

      return userToken?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
      localStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken.token);
    };

    return {
      setToken: saveToken,
      token
    };
  }
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

  if (!token) {
    return <Login setToken={setToken} />;
  }

  /**
   *
   */
  async function dispatchAPISet() {
    await axios
      .get("/api/recipe")
      .then(({ data }) => {
        return data;
      })
      .then((morsePower) => {
        dispatch(recipeFound(morsePower));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    dispatchAPISet();
  });

  return (
    <Router history={history}>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:category" component={Category} />;
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/recipes/:title" component={Recipe} />;
        <Route exact path="/login">
          {" "}
          <Login setToken={useToken}> </Login>
        </Route>
        <Route exact path="/newRecipe" component={RecipeForm} />
        <Route exact path="/search" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
