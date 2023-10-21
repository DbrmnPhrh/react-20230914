import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantsIfNotExist = createAsyncThunk(
  'restaurant/getRestaurantsIfNotExist',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants/')

    return await response.json();
  },
  {
    // condition: (restaurantId, { getState }) => {
    //   const state = getState();
    //   console.log('stateeeee:', state);
    // },
  }
);
