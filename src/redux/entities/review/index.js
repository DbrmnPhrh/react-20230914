import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/statuses";
import { getReviewsIfNotExist } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState({
    status: REQUEST_STATUS.idle,
  }),
  extraReducers: (builder) => builder
    .addCase(getReviewsIfNotExist.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    })
    .addCase(getReviewsIfNotExist.fulfilled, (state, {payload}) => {
      entityAdapter.setAll(state, payload);
      state.status = REQUEST_STATUS.fulfilled;
    })
    .addCase(getReviewsIfNotExist.rejected, (state) => {
      state.status = REQUEST_STATUS.rejected;
    }),
})

export default reducer;
