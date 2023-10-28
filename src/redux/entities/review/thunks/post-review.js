import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantActions } from "../../restaurant";

export const postReview = createAsyncThunk(
  'reviews/postReview',
  async (params, { dispatch }) => {
    const {restaurantId, newReview} = params;
    console.log(params);
    const review = await fetch(
      `http://localhost:3001/api/review/${restaurantId}`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newReview),
      }
    ).json();

    dispatch(restaurantActions.addReview({restaurantId, reviewId: review.id}));

    return review;
  },
);
