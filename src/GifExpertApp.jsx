import React from "react";
import { useState } from "react";
import {AddCategory, GifGrid} from "./index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch"
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    /* categories.push(newCategory); */

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <hr />
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
