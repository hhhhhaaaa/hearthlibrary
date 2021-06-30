import React from "react";

function Categories(props){
  return(
    <div>
      <h2> The categories</h2>
      <ul>
  {props.recipe.map(item=>(
    // eslint-disable-next-line react/jsx-key
    <li>{item.category}</li>
  ))}
</ul>


    </div>

  )
}






export default Categories;
