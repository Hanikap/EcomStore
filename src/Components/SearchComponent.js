import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Redux/Slicer/GlobalSlice";

const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleSearchInputChange} />
    </div>
  );
};

export default SearchComponent;
