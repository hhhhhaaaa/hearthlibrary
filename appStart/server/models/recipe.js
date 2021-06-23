const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter the Title of the Recipe"
  },
  beforeyoubegin: {
    type: String,
    trim: true
  },
  time: {
    type: String,
    trim: true,
    required: "Enter the Amount of Time Needed to Create of the Recipe"
  },
  yields: {
    type: String,
    trim: true
  },
  ingredients: {
    type: String,
    trim: true,
    required: "Enter the Ingredients"
  },
  steps: {
    type: String,
    trim: true,
    required: "Enter the Steps of the Recipe"
  },
  notes: {
    type: String,
    trim: true
  },
  sources: {
    type: String,
    trim: true,
    required: "Enter Where the Recipe is From and or the Creator(s)"
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
