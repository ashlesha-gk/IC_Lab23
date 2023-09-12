import React, { useState, useEffect } from 'react';
import './RecipeManager.css';

const RecipeManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    editIndex: null
  });

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    if (savedRecipes) {
      setRecipes(savedRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateRecipe = () => {
    const { title, ingredients, instructions } = formData;
    const newRecipe = { title, ingredients, instructions };
    setRecipes([...recipes, newRecipe]);
    setFormData({ title: '', ingredients: '', instructions: '', editIndex: null });
  };

  const handleEditRecipe = (index) => {
    const recipeToEdit = recipes[index];
    setFormData({ ...recipeToEdit, editIndex: index });
  };

  const handleUpdateRecipe = () => {
    const { title, ingredients, instructions, editIndex } = formData;
    const updatedRecipe = { title, ingredients, instructions };
    const updatedRecipes = [...recipes];
    updatedRecipes[editIndex] = updatedRecipe;
    setRecipes(updatedRecipes);
    setFormData({ title: '', ingredients: '', instructions: '', editIndex: null });
  };

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  const handleShareRecipe = (recipe) => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.ingredients + '\n\n' + recipe.instructions,
      })
      .then(() => console.log('Recipe shared successfully'))
      .catch((error) => console.error('Error sharing recipe:', error));
    } else {
      alert('Sharing not supported on this browser.');
    }
  };

  const handleSaveRecipe = () => {
    const { title, ingredients, instructions } = formData;
    const newRecipe = { title, ingredients, instructions };
    setRecipes([...recipes, newRecipe]);
    setFormData({ title: '', ingredients: '', instructions: '', editIndex: null });
    alert('Recipe saved!');
  };

  return (
    <div className="recipe-manager">
      <h2><b>Recipe Manager👩‍🍳</b></h2>

      <div className="recipe-form">
        <label>Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>Ingredients:
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>Instructions:
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {formData.editIndex !== null ? (
          <button onClick={handleUpdateRecipe}>Update Recipe</button>
        ) : (
          <>
            <button onClick={handleCreateRecipe}>Create Recipe</button>
            <button onClick={handleSaveRecipe}>Save Recipe</button>
          </>
        )}
      </div>

      <h3>Your Recipes:</h3>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <li key={index} className="recipe-item">
            <h4>{recipe.title}</h4>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={() => handleEditRecipe(index)} className="edit-button">Edit</button>
            <button onClick={() => handleDeleteRecipe(index)} className="delete-button">Delete</button>
            <button onClick={() => handleShareRecipe(recipe)} className="share-button">Share</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeManager;