import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
  'dishes/getRestaurants',
  async (restaurantId) => {
    const response = restaurantId
    ? fetch(`http://localhost:3001/api/restaurant/${restaurantId}`)
    : fetch(`http://localhost:3001/api/restaurants/`)

    return (await response).json();
  },
  {
    /** Условие вызова thunk. Чтобы, например, если блюда были загружены ранее - не грузить их повторно */
    condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);
