import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/statuses";
import { getRestaurant } from "./thunks/get-restaurant";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUS.idle,
  }),
  extraReducers: (builder) => builder
    .addCase(getRestaurant.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    })
    .addCase(getRestaurant.fulfilled, (state, {payload}) => {
      entityAdapter.setAll(state, payload);
      state.status = REQUEST_STATUS.fulfilled;
    })
    .addCase(getRestaurant.rejected, (state) => {
      state.status = REQUEST_STATUS.rejected;
    }),
})

export default reducer;
