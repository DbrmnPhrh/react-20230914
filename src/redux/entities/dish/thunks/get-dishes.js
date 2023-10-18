import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async ({restaurantId}) => {
    const response = fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

    return (await response).json();
  },
  {
    /** Условие вызова thunk. Чтобы, например, если блюда были загружены ранее - не грузить их повторно */
    // condition: (_, { getState }) => !selectDishIds(getState())?.length,
  }
);