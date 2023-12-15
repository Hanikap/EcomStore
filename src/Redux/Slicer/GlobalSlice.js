import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    search: {
      searchQuery: '',
    },
    price: {
      priceRange: [0, 1000],
    },
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.search.searchQuery = action.payload;
    },
    setPriceRange: (state, action) => {
      state.price.priceRange = action.payload;
    },
  },
});

export const { setSearchQuery, setPriceRange } = globalSlice.actions;
export default globalSlice.reducer;
