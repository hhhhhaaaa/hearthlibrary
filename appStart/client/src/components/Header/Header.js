import React from "react";

function Header(props) {
    // eslint-disable-next-line keyword-spacing
    return(
        <div className="App-header ">
             <h1 >Heart Library</h1>
             <div className="input-group  w-50">
  <input type="text" className="form-control" placeholder="Search For Recipe" />
  <div className="input-group-append">
   <button className="btn btn-dark">Search Recipe</button>
  </div>
</div>

        </div>
       
    )

}
export default Header;