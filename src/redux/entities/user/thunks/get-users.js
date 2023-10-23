import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersIfNotExist = createAsyncThunk(
  'users/getUsersIfNotExist',
  async () => (await fetch(`http://localhost:3001/api/users/`)).json(),
);
