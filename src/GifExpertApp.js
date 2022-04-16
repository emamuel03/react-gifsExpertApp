import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Dragon Ball", "Samurai X"];
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAdd = () => {
    setCategories([...categories, "Pokemon"]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      <h3>Categorias</h3>
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
      <hr />
      {/* <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol> */}

      {/* <button onClick={handleAdd}>Agregar</button> */}
    </>
  );
};

export default GifExpertApp;
