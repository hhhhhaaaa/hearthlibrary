import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from "react-router-dom";

 export default function App() {
     return (
         <Router>
             <div>
                 <nav>
                     <ul>
                         <li>
                             <link to="/">Home</link>
                         </li>
                         <li>
                             <link to="/">Categories</link>
                         </li>
                         <li>
                             <link to="/">Popular Items</link>
                         </li>
                         <li>
                             <link to="/">Recent recipes</link>
                         </li>
                         <li>
                             <link to="/">Login</link>
                         </li>
                         <li>
                             <link to="/">About</link>
                         </li>
                     </ul>
                 </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
             </div>
         </Router>
     )
 }