import React, { Component } from "react";
import SearchRecipe from "../SearchRecipe/SearchRecipe";
import SearchResult from "../SearchResult/SearchResult";
import recipe from "../recipes/recipe.json";

class Search extends Component {
    state ={
        search:"",
        result:[],
        title: "",
        description:"",
        Ingredients:""

    }

    handleInputChange=(event)=>{
        this.setState({
            search:event.target.value
            
        })
        console.log(event.target.value)
    }

    function recipeSearch() {

        if (this.state.search===recipe[0].title){
           this.setState({
               title:recipe.title
               description:recipe.description
               Ingredients:recipe.Ingredients

           })
        }
        else {
            <h2>No page</h2>
        }

        
    }
    

    handleFormSubmitChange =event =>{
        event.preventDefault();

        recipeSearch();

    }
 

render(){
    return(<div>
        <SearchRecipe 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmitChange={this.handleFormSubmitChange}
        />

        <SearchResult   
        title={this.title}
        description={this.description}
        Ingredients={this.Ingredients}
        
        
         />
        
    </div>

    )

}


}



export default Search;