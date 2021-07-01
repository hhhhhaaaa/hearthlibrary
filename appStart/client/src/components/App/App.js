/* eslint-disable init-declarations */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Results from "../../pages/Results";
import Recipes from "../../pages/Recipes";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

let recipeResults;
const recipeResult = null;

/**
 *
 */
function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    recipeResults = event.target.value;
  };

  const handleFormSubmitChange = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Router>
        <div>
          <Switch>
            {recipeResult ? (
              <Redirect
                to={{
                  pathname: "/search",
                  recipe: result
                }}
              />
            ) : (
              <Route exact path="/">
                <div>
                  <Header
                    handleInputChange={handleInputChange}
                    handleFormSubmitChange={handleFormSubmitChange}
                  />
                </div>
                <Navbar />
                <Home />
                <Footer />
              </Route>
            )}
            <Route path="/categories">
              <div>
                <Header
                  handleInputChange={handleInputChange}
                  handleFormSubmitChange={handleFormSubmitChange}
                />
              </div>
              <Navbar />
              <Categories recipe={recipeResult} />
              <Footer />
            </Route>
            <Route path="/recipes">
              <div>
                <Header
                  handleFormSubmitChange={handleFormSubmitChange}
                  handleInputChange={handleInputChange}
                />
              </div>
              <Navbar />
              <Recipes recipe={recipeResult} />
              <Footer />
            </Route>
            <Route path="/login">
              <div>
                <Header
                  handleInputChange={handleInputChange}
                  handleFormSubmitChange={handleFormSubmitChange}
                />
              </div>
              <Navbar />
              <Login />
              <Footer />
            </Route>
            <Route path="/about">
              <div>
                <Header
                  handleInputChange={handleInputChange}
                  handleFormSubmitChange={handleFormSubmitChange}
                />
              </div>
              <Navbar />
              <About />
              <Footer />
            </Route>
            <Route path="/search">
              <div>
                <Header
                  handleInputChange={handleInputChange}
                  handleFormSubmitChange={handleFormSubmitChange}
                />
              </div>
              <Navbar />
              <Results recipe={result} />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
