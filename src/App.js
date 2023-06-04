import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import MainMenu from "./components/MainMenu";

const App = () => {
  const [addRecipes, setAddRecipes] = useState([]);

  const [selectRecipe, setSelectRecipe] = useState(null);
  return (
    <div className="mt-[5rem] text-white">
      <div className="main-con m-auto pb-4">
        <Navbar
          setAddRecipes={setAddRecipes}
          setSelectRecipe={setSelectRecipe}
          selectRecipe={selectRecipe}
        />
        <div className="flex gap-4">
          <div>
            <SideMenu
              addRecipes={addRecipes}
              setSelectRecipe={setSelectRecipe}
              selectRecipe={selectRecipe}
            />
          </div>
          {(selectRecipe && <MainMenu selectRecipe={selectRecipe} />) ||
            "Recepti"}
        </div>
      </div>
    </div>
  );
};

export default App;

// od bookmark da se uklucat da vidime od sidecard
// da mozime od bookmark da se izbrisat
// pagination da se style
