import React from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line space-before-blocks
function Navbar(){
  const location = useLocation();

return (
  <nav className="navbar  navbar-expand-sm navbar-light bg-light">
   <a className="navbar-brand" href="#">Navbar</a>
   <ul className = "navbar-nav">
   <li className="nav-item">
    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
   Home
</Link>
 </li>
 <li className="nav-item">
 <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
   About
</Link>

</li>

<li className="nav-item ">
 <Link to="/categories" className={location.pathname === "/categories" ? "nav-link active" : "nav-link"}>
   Categories
</Link>
</li>
<li className="nav-item ">
<Link to="/recipes" className={location.pathname === "/recipes" ? "nav-link active" : "nav-link"}>
  Recipes
</Link>
</li>

{/* <li className="nav-item ">
<Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
  Search
</Link>
</li> */}



  </ul>





  {/* <div className= "collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    
 
 

</ul> */}


{/* <form className="form-inline " >
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
</button>
</form> */}

  {/* </div> */}

  </nav>

);
}

{/* <ul className=" nav nav-tabs">

<li className="nav-item" >

</li>

<li className="nav-item" >
<Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
   About
</Link>
</li>
<li className="nav-item" >
<Link to="/categories" className={location.pathname === "/categories" ? "nav-link active" : "nav-link"}>
   Categories
</Link>
</li>  
<li className="nav-item" >
<Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
   Search
</Link>
</li>
</ul> */}



        
       
      

export default Navbar;



 {/* <li className="nav-item">
          <Link to="/popularitems">Popular Items</Link>
        </li>
        <li className="nav-item">
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li> */}
