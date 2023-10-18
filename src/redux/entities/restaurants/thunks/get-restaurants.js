import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async () => {
    const response = fetch('http://localhost:3001/api/restaurants/')

    return (await response).json();
  }
);
