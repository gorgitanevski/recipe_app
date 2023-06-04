import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Bookmark = ({ setSelectRecipe, selectRecipe }) => {
  const userData = JSON.parse(localStorage.getItem("bookmarkedRecipes"));
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    const promises = userData.map((recipe) =>
      fetchData(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipe}`)
    );
    Promise.all(promises).then((data) => setBookmark(data));
  }, []);

  useEffect(() => {
    if (selectRecipe) {
      fetchData(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${selectRecipe}`
      ).then((data) => setSelectRecipe(data.data.recipe.id));
    }
  }, [selectRecipe]);

  const handleBookmark = (recId) => {
    setSelectRecipe(recId);
  };

  const handleRemoveBookmark = (recId) => {
    const newBookmarks = bookmark.filter(
      (bookmark) => bookmark.data.recipe.id !== recId
    );

    setBookmark(newBookmarks);
    localStorage.setItem(
      "bookmarkedRecipes",
      JSON.stringify(newBookmarks.map((bookmark) => bookmark.data.recipe.id))
    );
  };

  return (
    <div>
      <div className="bg-[#1E2225] w-[280px] min-h-[71px] p-2 shadow-md">
        {bookmark.map((rec) => {
          return (
            <div
              onClick={() => handleBookmark(rec?.data?.recipe?.id)}
              key={rec?.data?.recipe?.id}
              className="text-white border mb-2 font-bold w-[245px] h-[71px] bg-[#4E5D6C] flex justify-between items-center gap-3 p-3 mx-auto relative cursor-pointer"
            >
              <img
                src={rec?.data?.recipe?.image_url}
                className="w-[38px] h-[29px] rounded-[50px] "
                alt="imagerec"
              />
              <h2 className="text-[11px] flex-1 bg-inherit">
                {rec?.data?.recipe?.title}
              </h2>
              <AiOutlineCloseCircle
                fontSize={20}
                className="bg-inherit absolute right-2 top-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveBookmark(rec?.data?.recipe?.id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmark;
