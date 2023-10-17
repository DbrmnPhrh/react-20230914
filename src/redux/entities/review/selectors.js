const selectReviewModule = state => state.review;

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];

export const selectReviewTextById = (state, id) => selectReviewById(state, id).text;

export const selectReviewIds = state => selectReviewModule(state).ids;
