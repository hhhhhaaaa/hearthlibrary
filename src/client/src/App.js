/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";


 export default function App() {
     return (
         <Router>
             <div>
                 <Navbar />

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


