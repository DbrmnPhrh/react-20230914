import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsIfNotExist = createAsyncThunk(
  'reviews/getReviewsIfNotExist',
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)

    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewsById(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return restaurantReviewIds?.some((reviewId) => !reviewIds.includes(reviewId));
    }
  }
);
