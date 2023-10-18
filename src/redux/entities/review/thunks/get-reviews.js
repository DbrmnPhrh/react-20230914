import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)

    return (await response).json();
  }
);
