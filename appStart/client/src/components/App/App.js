/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars

// import Home from "./pages/Home";
// import Categories from "./pages/Categories";
// import Recipes from "./pages/Recipes";
// import Login from "./pages/Login";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login";
import About from "../../pages/About";

//import Navbar from "../Navbar";

import Recipes from "../../pages/Recipes";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import recipe from "../recipes/recipe.json";
import Footer from "../Footer/Footer";

/**
 *
 */
function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div>
      <div>
        <Header />
      </div>

      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/recipes">
              <Recipes recipe={recipe} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
