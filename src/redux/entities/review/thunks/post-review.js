import { createAsyncThunk } from "@reduxjs/toolkit";

export const postReview = createAsyncThunk(
  'reviews/postReview',
  async ({restaurantId, newReview}) => {
    console.log(restaurantId)
    console.log(newReview)
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

    console.log('newReview: ', review);
  },
);
