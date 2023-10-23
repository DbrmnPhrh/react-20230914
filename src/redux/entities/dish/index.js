import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantIfNotExist } from "./thunks/get-dishes";

/** Подробнее по entityAdapter тут: https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions */
const dishEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder.addCase(
      getDishesByRestaurantIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        dishEntityAdapter.setMany(state, payload);
      }
    ),
})

export default reducer;
