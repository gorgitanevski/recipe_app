// import React from "react";
// import { useState, useEffect } from "react";
// import { HiOutlineSearch } from "react-icons/hi";

// import { fetchData } from "../utils/fetchData";

// const SearchBar = () => {
//   const [value, setValue] = useState("");
//   const [update, setUpdate] = useState(value);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     setUpdate(value);
//   };

//   useEffect(() => {
//     fetchData(
//       `https://forkify-api.herokuapp.com/api/v2/recipes?search=${update}`
//     ).then((data) => console.log(data.data.recipes));
//   }, [update]);

//   return (
//     <form
//       className="flex justify-center items-ceter relative"
//       onSubmit={HandleSubmit}
//     >
//       <input
//         className="bg-[#1E2225] rounded-[30px] w-[300px] h-[40px]"
//         value={value}
//         type="text"
//         onChange={handleChange}
//       />
//       <button className="text-[30px] absolute right-3 top-1">
//         <HiOutlineSearch className="bg-inherit" />
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
