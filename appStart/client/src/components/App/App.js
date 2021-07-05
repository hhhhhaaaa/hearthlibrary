/* eslint-disable init-declarations */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//old version
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars

// import Home from "./pages/Home";
// import Categories from "./pages/Categories";
// import Recipes from "./pages/Recipes";
// import Login from "./pages/Login";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";

// Only visible when logged in
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";

import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login/Login";
import About from "../../pages/About";
// import Navbar from "../Navbar";
//end of old code

//new version
import { Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { recipeFound } from "../../features/Recipes/recipeSlice";
import axios from "axios";
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Category from "../../pages/Category";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Results from "../../pages/Results";
//end of new code

import Recipes from "../../pages/Recipes";
import Recipe from "../../pages/Recipe";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useToken from "./useToken";

import history from "../History/history";

/**
 *
 */


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <div>
        <Header />
      </div>
  const dispatch = useDispatch();

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
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:category" component={Category} />;
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/recipes/:title" component={Recipe} />;
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Results} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
