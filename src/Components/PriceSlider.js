import React from "react";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { setPriceRange } from "../Redux/Slicer/GlobalSlice";

const PriceSlider = () => {

  /**
 * Retrieves the current price range from the Redux store using the useSelector hook.
 *
 * @constant {Array<number>}
 * @name priceRange
 * @memberof YourComponent
 */
  const priceRange = useSelector((state) => state.price.priceRange);
  const dispatch = useDispatch();


  /**
 * Handles changes in the price range by dispatching an action to update the price range in the Redux store.
 *
 * @function
 * @name handlePriceChange
 * @memberof YourComponent
 * @param {Event} event - The event object from the price change.
 * @param {Array<number>} newValue - The new price range values.
 * @returns {void}
 */
  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceRange(newValue));
  };

  return (
    <div style={{ width: "10rem", padding: "15px" }}>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        max={300}
      />
      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
    </div>
  );
};

export default PriceSlider;
