import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/statuses";
import { getReviews } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUS.idle,
  }),
  extraReducers: (builder) => builder
    .addCase(getReviews.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    })
    .addCase(getReviews.fulfilled, (state, {payload}) => {
      entityAdapter.setAll(state, payload);
      state.status = REQUEST_STATUS.fulfilled;
    })
    .addCase(getReviews.rejected, (state) => {
      state.status = REQUEST_STATUS.rejected;
    }),
})

export default reducer;
