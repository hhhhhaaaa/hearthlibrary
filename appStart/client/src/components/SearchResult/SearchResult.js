import React from "react";

function SearchResult (props){


    return(
        <ul>
           {props.results.map(result=> (
               <li>
                   {props.title}
               </li>
               <li>
               {props.description}
               </li>
               <li>
               {props.Ingredients}
               </li>
           ))}
        </ul>
    )
}


export default SearchResult;