import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { BsClock } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

const MainMenu = ({ selectRecipe }) => {
  const [recipe, setRecipe] = useState(null);
  const [bookMarkRecipe, setBookMarkRecipe] = useState([]);

  const handleBookMark = (recId) => {
    const newBookmarkRecipes = [...bookMarkRecipe, recId];
    setBookMarkRecipe(newBookmarkRecipes);
    localStorage.setItem(
      "bookmarkedRecipes",
      JSON.stringify(newBookmarkRecipes)
    );
  };

  useEffect(() => {
    fetchData(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${selectRecipe}`
    ).then((data) => setRecipe(data?.data?.recipe));
  }, [selectRecipe]);

  return (
    <div key={recipe?.id} className="text-white font-medium">
      <div>
        <img
          src={recipe?.image_url}
          alt="recipe-img"
          className="w-[650px] h-[300px]"
        />
        <div className=" m-w-[300px] m-h-[30px] pb-7">
          <h2 className="text-white text-[30px] font-bold text-center">
            {recipe?.title}
          </h2>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex items-center justify-center gap-2">
          <BsClock fontSize={27} />
          {recipe?.cooking_time} Minute
        </div>
        <div className="flex items-center justify-center gap-2">
          <IoIosPeople fontSize={27} /> {recipe?.servings} Servings
        </div>
        <div>
          {bookMarkRecipe.includes(recipe?.id) ? (
            <BsFillBookmarkFill
              fontSize={27}
              onClick={() => handleBookMark(recipe?.id)}
            />
          ) : (
            <BsBookmark
              fontSize={27}
              onClick={() => handleBookMark(recipe?.id)}
            />
          )}
        </div>
      </div>
      <div>
        <h4>Ingredients</h4>
        <ul className="grid grid-cols-3 overflow-auto">
          {recipe?.ingredients.map((ing) => {
            return (
              <li>
                ✔ {ing.quantity} {ing.unit || ""} {ing.description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
