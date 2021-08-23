/* eslint-disable init-declarations */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recipeFound } from "../../features/Recipes/recipeSlice";
import { userFound } from "../../features/Users/userSlice";
import axios from "axios";
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Category from "../../pages/Category";
import About from "../../pages/About";
import Results from "../../pages/Results";
import Recipes from "../../pages/Recipes";
import Recipe from "../../pages/Recipe";
import RecipeForm from "../../pages/RecipeForm";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import { AuthProvider } from "react-auth-kit";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import history from "../History/history";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

/**
 *
 */
function App() {
  const dispatch = useDispatch();

  const [isAuthenticated, userHasAuthenticated] = useState(false);

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
    await axios
      .get("/api/user")
      .then(({ data }) => {
        return data;
      })
      .then((morsePower) => {
        dispatch(userFound(morsePower));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    dispatchAPISet();
  });

  return (
    <AuthProvider
      authType={"cookie"}
      authName={"auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
      refreshToken
    >
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/about">
            <Header />
            <Navbar />
            <About />
          </Route>
          <Route exact path="/categories">
            <Header />
            <Navbar />
            <Categories />
          </Route>
          <Route exact path="/categories/:category">
            <Header />
            <Navbar />
            <Category />
          </Route>
          <Route exact path="/recipes">
            <Header />
            <Navbar />
            <Recipes />
          </Route>
          <Route exact path="/recipes/:title">
            <Header />
            <Navbar />
            <Recipe />
          </Route>
          <Route exact path="/login">
            <Header />
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/signup">
            <Header />
            <Navbar />
            <Signup />
          </Route>
          <PrivateRoute path={"/newRecipe"} loginPath={"/login"} exact>
            <Header />
            <Navbar />
            <RecipeForm />
          </PrivateRoute>
          <Route exact path="/search">
            <Header />
            <Navbar />
            <Results />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
