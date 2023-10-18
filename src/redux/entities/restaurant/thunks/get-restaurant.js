import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurant = createAsyncThunk(
  'restaurant/getRestaurant',
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/restaurant/${restaurantId}`)

    return (await response).json();
  },
  {
    /** Условие вызова thunk. Чтобы, например, если блюда были загружены ранее - не грузить их повторно */
    // condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);
