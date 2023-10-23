import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/statuses";
import { getUsersIfNotExist } from "./thunks/get-users";

const userEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState({
    status: REQUEST_STATUS.idle,
  }),
  extraReducers: (builder) =>
    builder.addCase(
      getUsersIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        userEntityAdapter.setAll(state, payload);
      }
    )
})

export default reducer;
