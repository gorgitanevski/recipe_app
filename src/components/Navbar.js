import React from "react";
import {
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiOutlineSearch,
} from "react-icons/hi";

import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import Bookmark from "./Bookmark";

const Navbar = ({ setAddRecipes, setSelectRecipe, selectRecipe }) => {
  const [value, setValue] = useState("");
  const [update, setUpdate] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setUpdate(value);
  };

  useEffect(() => {
    fetchData(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${update}`
    ).then((data) => setAddRecipes(data.data.recipes));
  }, [update, setAddRecipes]);

  return (
    <nav className="flex justify-between items-center pt-[40px] pb-[65px] px-10 ">
      <div className="text-color-white ">LOGO</div>
      <form
        className="flex justify-center items-ceter relative"
        onSubmit={HandleSubmit}
      >
        <input
          className="bg-[#1E2225] rounded-[30px] w-[300px] h-[40px] pl-3"
          value={value}
          type="text"
          placeholder="Search Recipe..."
          onChange={handleChange}
        />
        <button className="text-[30px] absolute right-3 top-1">
          <HiOutlineSearch className="bg-inherit" />
        </button>
      </form>
      <div className="text-[30px] flex gap-1">
        <div className="relative">
          <HiOutlineHeart onClick={handleClick} />
          {isOpen && (
            <div className="absolute right-3 mt-4">
              <Bookmark
                setSelectRecipe={setSelectRecipe}
                selectRecipe={selectRecipe}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
