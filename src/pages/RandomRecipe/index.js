import React, { useState, useEffect } from "react";

import "./index.css";

const url = "http://recipes.wordpresssites.host/wp-json/wp/v2/recipes/";

const defaultRecipe = {
  name: "",
  duration: "",
  course: "",
  image_url: "",
  category: "",
  type: "",
  ingredients: "",
  instructions: "",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(defaultRecipe);
  const [text, setText] = useState("random recipe");

  const getRecipe = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const randomNumber = Math.floor(Math.random() * (data.length + 1));

    const randomRecipe = data[randomNumber];

    const {
      name,
      duration,
      image_url,
      category,
      type,
      ingredients,
      instructions,
    } = randomRecipe.acf;

    const newRecipe = {
      name,
      image_url,
      type,
      ingredients,
      instructions,
      info: `<div><strong>Bereidtijd:</strong> ${duration}</div>
        <div><strong>Categorie:</strong> ${category}</div>`,
    };

    setRecipe(newRecipe);
    setLoading(false);
    setText(newRecipe.info);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const handleValue = (e) => {
    //if e.target is a button
    if (e.target.classList.contains("btn")) {
      const newValue = e.target.dataset.label;
      const allButtons = e.target.parentElement.children;

      // Because allButtons is an Object
      Object.keys(allButtons).forEach((key) => {
        if (allButtons[key].classList.contains("active")) {
          allButtons[key].classList.remove("active");
        }
      });

      e.target.classList.add("active");

      setText(recipe[newValue]);
    }
  };

  return (
    <main>
      <div className='recipe-container'>
        <div className='recipe-img-container'>
          <img
            src={(recipe && recipe.image_url) || defaultRecipe.image_url}
            alt={recipe.name}
            className='recipe-img'
          />
        </div>
        <div className='recipe-title'>
          <h2>{recipe.name}</h2>
        </div>
        <div className='btn-menu-container'>
          <button
            className='btn btn-menu'
            data-label='info'
            onClick={handleValue}
          >
            Informatie
          </button>
          <button
            className='btn btn-menu'
            data-label='ingredients'
            onClick={handleValue}
          >
            Ingredienten
          </button>
          <button
            className='btn btn-menu'
            data-label='instructions'
            onClick={handleValue}
          >
            Instructies
          </button>
        </div>
        <div
          className='recipe-text'
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className='random-btn-container'>
          <button className='btn' type='button' onClick={getRecipe}>
            {loading ? "loading..." : "Nieuw recept"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
