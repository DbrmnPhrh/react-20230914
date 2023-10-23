import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const getDishesByRestaurantIfNotExist = createAsyncThunk(
  'dishes/getDishesByRestaurantIfNotExist',
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishIds(state);

      return restaurantMenu?.some((dishId) => !dishIds.includes(dishId));
    }
  }
);
