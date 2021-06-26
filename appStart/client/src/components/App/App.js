/* eslint-disable no-unused-vars */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Recipes from "../../pages/Recipes";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import recipe from "../recipes/recipe.json";
import Footer from "../Footer/Footer";




   function App() {

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
                </Switch>
             </div>
         </Router>
         <Footer/>
         </div>
     );
 }

export default App;