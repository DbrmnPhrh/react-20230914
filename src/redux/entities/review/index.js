import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsIfNotExist } from "./thunks/get-reviews";
import { postReview } from "./thunks/post-review";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder
    .addCase(postReview.fulfilled, (state, {payload} = {}) => {
      entityAdapter.addOne(state, payload);
    })
    .addCase(getReviewsIfNotExist.fulfilled, (state, {payload} = {}) => {
      entityAdapter.setMany(state, payload);
    }),
})

export default reducer;
