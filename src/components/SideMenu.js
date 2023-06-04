import React, { useState } from "react";
const SideMenu = ({ addRecipes, setSelectRecipe }) => {
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const startIndex = (currPage - 1) * pageSize;
  const currRecipes = addRecipes.slice(startIndex, startIndex + pageSize);

  const pageCount = Math.ceil(addRecipes.length / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handleRecipeClickId = (recId) => {
    setSelectRecipe(recId);
  };

  return (
    <div className="w-[263px] h-[85px] flex flex-col gap-4 relative">
      {currRecipes.map((recipe) => {
        return (
          <div
            key={recipe.id}
            onClick={() => {
              handleRecipeClickId(recipe.id);
            }}
            className="myShadow rounded-[30px] flex justify-between items-center p-2 cursor-pointer"
          >
            <div className="w-[46px]  rounded-[50px]">
              <img
                className="w-[46px] h-[43px] rounded-[50px]"
                src={recipe.image_url}
                alt="imageside"
              />
            </div>
            <div className="flex flex-col flex-1 ml-4 text-white ">
              <h5 className="text-[11px]">{recipe.title}</h5>
              <p className="text-[8px]">{recipe.publisher}</p>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-[-540px]">
        {pages.map((page) => (
          <button key={page} onClick={() => setCurrPage(page)}>
            <span className="bg-white text-black ml-1 rounded-full py-1 px-2 ">
              {page}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
