/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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

let par;

function App() {

    const [search, setSearch] = useState("");
    // const[result , setResult]=useState([]);

    const handleInputChange = (event) => {
        setSearch( event.target.value);
        console.log(event.target.value);
       par = event.target.value;

    }



const handleFormSubmitChange =(event)=>{
    event.preventDefault();
    if(par===recipe[0].title){
    console.log(recipe [0]);
   } 
else{
        console.log("check");
        
    }
}



return (

    <div>
        <div>
  {/* search={search} */}
            <Header handleInputChange={handleInputChange} 
            handleFormSubmitChange={handleFormSubmitChange} />
        </div>

        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route path="/categories">
                        <Categories recipe={recipe} />
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
                    {/* <Route path ="/result">
                        <Result  ={result} />
                    </Route> */}

                </Switch>
            </div>
        </Router>
        <Footer />
    </div>
);
 }

export default App;