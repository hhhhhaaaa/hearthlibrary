/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
<<<<<<< HEAD:src/client/src/App.js
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

=======
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login";
import About from "../../pages/About";
<<<<<<< HEAD
import Navbar from "../Navbar";
>>>>>>> d8d4b51bf6956bd50d6ee2272d9f09b464dcd793:appStart/client/src/components/App/App.js
=======
import Recipes from "../../pages/Recipes";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import recipe from "../recipes/recipe.json";
import Footer from "../Footer/Footer";
>>>>>>> 553bba39302feafc87ee5ddbba7538bf83daab55

/**
 *
 */
function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

<<<<<<< HEAD
                <Switch>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                    <Route path="/recipes">
                        <Recipes />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
             </div>
         </Router>
     );
 }
=======
      <Router>
        <div>
          <Navbar />
>>>>>>> 553bba39302feafc87ee5ddbba7538bf83daab55

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
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
