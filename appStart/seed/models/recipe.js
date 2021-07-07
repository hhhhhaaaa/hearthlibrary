const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter the Title of the Recipe"
  },
  description: {
    type: String,
    trim: true,
    required: "Enter the Description of the Recipe"
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
  },
  category: {
    type: String,
    trim: true,
    required: "Enter the Category of the Recipe"
  },
  tags: {
    type: String,
    trim: true
  },
  picture: {
    type: String,
    trim: true
  }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
