/* eslint-disable init-declarations */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
import Recipes from "../../pages/Recipes";
import Recipe from "../../pages/Recipe";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import history from "../History/history";

/**
 *
 */
function App() {
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
