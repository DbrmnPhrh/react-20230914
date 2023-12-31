const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];

export const selectRestaurantNameById = (state, id) => selectRestaurantById(state, id).name;

export const selectRestaurantMenuById = (state, id) => selectRestaurantById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) => selectRestaurantById(state, id).reviews;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantLoadingStatus = (state) => selectRestaurantModule(state).status
