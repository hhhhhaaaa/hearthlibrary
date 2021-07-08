/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SubmitFormErrors from "../components/SubmitFormErrors/submitFormErrors";
import axios from "axios";
import history from "../components/History/history";
import imageValidation from "../tools/imageValidation.js";

/**
 *
 */
function RecipeForm() {
  const recipe = useSelector((state) => state.recipe);
  // eslint-disable-next-line prefer-destructuring
  const recipeArray = recipe[0];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [before, setBefore] = useState("");
  const [time, setTime] = useState("");
  const [yeld, setYeld] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [notes, setNotes] = useState("");
  const [sources, setSources] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [titleValid, setTitleValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);
  const [ingredientsValid, setIngredientsValid] = useState(false);
  const [stepsValid, setStepsValid] = useState(false);
  const [sourcesValid, setSourcesValid] = useState(false);
  const [categoryValid, setCategoryValid] = useState(false);
  const [formsValid, setFormsValid] = useState(false);

  const fieldErrors = (fieldName, value) => {
    const categoryArray = [
      "Appetizers",
      "Beverages",
      "Bread",
      "Casserole",
      "Dessert",
      "Entree",
      "Meat",
      "Miscellaneous",
      "Poultry",
      "Salad",
      "Seafood",
      "Sides",
      "Soup",
      "Veggies"
    ];

    const titleLengthValid = value.length <= 150 && value.length >= 5;
    const titleText = "Title Length Too Long/Too Short";
    const descriptionLengthValid = value.length <= 300 && value.length >= 30;
    const descriptionText = "Description Length Too Long/Too Short";
    const timeLengthValid = value.length <= 150 && value.length >= 1;
    const timeText = "Time Length Too Long/Too Short";
    const miscLengthValid = value.length >= 10;
    const ingredientsText = "Ingredients Length Too Short";
    const stepsText = "Steps Length Too Short";
    const sourcesText = "Sources Length Too Short";
    const categoryIncluded = categoryArray.indexOf(value) !== -1;
    const categoryText =
      "Invalid Category (Appetizers, Beverages, Bread, Casserole, Dessert, Entree, Meat, Miscellaneous, Poultry, Salad, Seafood, Sides, Soup, Veggies)";

    const trueArray = [
      titleValid,
      descriptionValid,
      timeValid,
      ingredientsValid,
      stepsValid,
      sourcesValid,
      categoryValid
    ];

    const formValidation = () => {
      console.log(trueArray);
      if (
        trueArray.every((item) => {
          console.log("test");
          console.log(item);
          if (item) {
            return true;
          }

          return false;
        })
      ) {
        setFormsValid(true);
      }
    };

    switch (fieldName) {
      case "title":
        if (!titleLengthValid && !formErrors.includes(titleText)) {
          setTitleValid(false);

          return formErrors.push(titleText);
        }
        if (titleLengthValid && formErrors.includes(titleText)) {
          const index = formErrors.indexOf(titleText);

          setTitleValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setTitleValid(true);

        break;
      case "description":
        if (!descriptionLengthValid && !formErrors.includes(descriptionText)) {
          setDescriptionValid(false);

          return formErrors.push(descriptionText);
        }
        if (descriptionLengthValid && formErrors.includes(descriptionText)) {
          const index = formErrors.indexOf(descriptionText);

          setDescriptionValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setDescriptionValid(true);

        break;
      case "time":
        if (!timeLengthValid && !formErrors.includes(timeText)) {
          setTimeValid(false);

          return formErrors.push(timeText);
        }
        if (timeLengthValid && formErrors.includes(timeText)) {
          const index = formErrors.indexOf(timeText);

          setTimeValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setTimeValid(true);

        break;
      case "ingredients":
        if (!miscLengthValid && !formErrors.includes(ingredientsText)) {
          setIngredientsValid(false);

          return formErrors.push(ingredientsText);
        }
        if (miscLengthValid && formErrors.includes(ingredientsText)) {
          const index = formErrors.indexOf(ingredientsText);

          setIngredientsValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setIngredientsValid(true);

        break;
      case "steps":
        if (!miscLengthValid && !formErrors.includes(stepsText)) {
          setStepsValid(false);

          return formErrors.push(stepsText);
        }
        if (miscLengthValid && formErrors.includes(stepsText)) {
          const index = formErrors.indexOf(stepsText);

          setStepsValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setStepsValid(true);

        break;
      case "sources":
        if (!miscLengthValid && !formErrors.includes(sourcesText)) {
          setSourcesValid(false);

          return formErrors.push(sourcesText);
        }
        if (miscLengthValid && formErrors.includes(sourcesText)) {
          const index = formErrors.indexOf(sourcesText);

          setSourcesValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setSourcesValid(true);

        break;
      case "category":
        if (!categoryIncluded && !formErrors.includes(categoryText)) {
          setCategoryValid(false);

          return formErrors.push(categoryText);
        }
        if (categoryIncluded && formErrors.includes(categoryText)) {
          const index = formErrors.indexOf(categoryText);

          setCategoryValid(true);
          formValidation();

          return formErrors.splice(index, 1);
        }

        setCategoryValid(true);

        break;
      default:
        formValidation();
        break;
    }

    return null;
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { name } = event.target;

    switch (name) {
      case "title":
        fieldErrors("title", value);
        setTitle(value);
        break;
      case "description":
        fieldErrors("description", value);
        setDescription(value);
        break;
      case "before":
        setBefore(value);
        break;
      case "time":
        fieldErrors("time", value);
        setTime(value);
        break;
      case "yeld":
        setYeld(value);
        break;
      case "ingredients":
        fieldErrors("ingredients", value);
        setIngredients(value);
        break;
      case "steps":
        fieldErrors("steps", value);
        setSteps(value);
        break;
      case "notes":
        setNotes(value);
        break;
      case "sources":
        fieldErrors("sources", value);
        setSources(value);
        break;
      case "category":
        fieldErrors("category", value);
        setCategory(value);
        break;
      case "picture":
        // eslint-disable-next-line no-case-declarations
        const image = imageValidation(value);

        setPicture(image);

        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const recipeTitleArray = recipeArray.map((item) => {
      return item.title;
    });

    if (!recipeTitleArray.includes(title)) {
      if (formsValid) {
        const formatB = before.valueOf().replace(/\r\n|\r|\n/gu, "<br />");
        const formatT = time.valueOf().replace(/\r\n|\r|\n/gu, "<br />");
        const formatI = ingredients.valueOf().replace(/\r\n|\r|\n/gu, "<br />");
        const formatSt = steps.valueOf().replace(/\r\n|\r|\n/gu, "<br />");
        const formatN = notes.valueOf().replace(/\r\n|\r|\n/gu, "<br />");
        const formatSo = sources.valueOf().replace(/\r\n|\r|\n/gu, "<br />");

        await axios
          .post("api/recipe", {
            title,
            description,
            beforeyoubegin: formatB,
            time: formatT,
            yields: yeld,
            ingredients: formatI,
            steps: formatSt,
            notes: formatN,
            sources: formatSo,
            category,
            picture
          })
          .catch((error) => {
            console.log(error);
          });
        history.push(`/recipes/${title}`);
      }
    }
  };

  const formText = (
    <div>
      <label>Title</label>
      <textarea
        name="title"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Title of the Recipe"
      ></textarea>
      <br />
      <label>Description</label>
      <textarea
        name="description"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Description of the Recipe"
      ></textarea>
      <br />
      <label>Before You Begin</label>
      <textarea
        name="before"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Any Pressing Details"
      ></textarea>
      <br />
      <label>Time</label>
      <textarea
        name="time"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Title of the Recipe"
      ></textarea>
      <br />
      <label>Yields</label>
      <textarea
        name="yeld"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Approximate Output of the Recipe"
      ></textarea>
      <br />
      <label>Ingredients</label>
      <textarea
        name="ingredients"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Ingredients"
      ></textarea>
      <br />
      <label>Steps</label>
      <textarea
        name="steps"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Steps of the Recipe"
      ></textarea>
      <br />
      <label>Notes</label>
      <textarea
        name="notes"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Any Notes Or Cool Information"
      ></textarea>
      <br />
      <label>Sources</label>
      <textarea
        name="sources"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter Where the Recipe is From and/or the Creator(s)"
      ></textarea>
      <br />
      <label>Category</label>
      <textarea
        name="category"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter the Category of the Recipe"
      ></textarea>
      <br />
      <label>Picture</label>
      <textarea
        name="picture"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter A Link To The Picture of the Recipe"
      ></textarea>
      <button className="btn btn-dark" onClick={handleFormSubmit}>
        Submit Recipe
      </button>
    </div>
  );

  if (formErrors.length >= 1) {
    return (
      <div>
        <form>
          <h1>Create A New Recipe</h1>
          <div>
            <SubmitFormErrors formErrors={formErrors} />
          </div>
          {formText}
        </form>
      </div>
    );
  }

  return (
    <div>
      <form>
        <h1>Create A New Recipe</h1>
        <div>
          <h3>Requirements</h3>
          <p>
            Title: Greater than/equal to 5 and less than/equal to 150 characters
            <br />
            Description: Greater than 30 and less than 300 characters
            <br />
            Time: Greater than/equal to 1 and less than/equal to 150 characters
            <br />
            Ingredients/Steps/Sources: Greater than/equal to 10 characters
            <br />
            Category: One of the following Categories: Appetizers, Beverages,
            <br />
            Bread, Casserole, Dessert, Entree, Meat, Miscellaneous, Poultry,
            <br />
            Salad, Seafood, Sides, Soup, Veggies
            <br />
            Picture: Link from Imgur
          </p>
        </div>
        {formText}
      </form>
    </div>
  );
}

export default RecipeForm;
