import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsIfNotExist = createAsyncThunk(
  'reviews/getReviewsIfNotExist',
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)

    return (await response).json();
  }
);
