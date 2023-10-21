import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantsIfNotExist } from "./thunks/get-restaurant";

const restaurantEntityAdapter = createEntityAdapter();

const { reducer, actions } = createSlice({
  name: 'restaurant',
  initialState: restaurantEntityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder.addCase(
      getRestaurantsIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        restaurantEntityAdapter.setAll(state, payload);
      }
    )
})

export default reducer;
export { actions as restaurantActions };

