import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesByRestaurantIfNotExist = createAsyncThunk(
  'dishes/getDishesByRestaurantIfNotExist',
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)

    return response.json();
  },
);
