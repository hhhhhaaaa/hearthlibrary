/* eslint-disable init-declarations */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Results from "../../pages/Results";
import Recipes from "../../pages/Recipes";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import history from "../History/history";

/**
 *
 */
function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/">
              <div>
                <Header />
              </div>
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route path="/categories">
              <div>
                <Header />;
              </div>
              <Navbar />
              <Categories recipe={result} />
              <Footer />
            </Route>
            <Route path="/recipes">
              <div>
                <Header />;
              </div>
              <Navbar />
              <Recipes recipe={result} />
              <Footer />
            </Route>
            <Route path="/login">
              <div>
                <Header />;
              </div>
              <Navbar />
              <Login />
              <Footer />
            </Route>
            <Route path="/about">
              <div>
                <Header />;
              </div>
              <Navbar />
              <About />
              <Footer />
            </Route>
            <Route path="/search">
              <div>
                <Header />;
              </div>
              <Navbar />
              <Results />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
