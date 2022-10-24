import React from "react";
import { useCallback } from "react";
import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    setCategories([...categories, "HunterXHunter", "Naruto"]);
    }

    




  return (
    <>
      <h1>GifExpertApp</h1>

      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

        <button onClick={onAddCategory}>Agregar</button>
    </>
  );
};
