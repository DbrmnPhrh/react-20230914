import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurant = createAsyncThunk(
  'restaurant/getRestaurant',
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/restaurant/${restaurantId}`)

    return (await response).json();
  },
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);
