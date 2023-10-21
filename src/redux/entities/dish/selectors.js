import { REQUEST_STATUS } from "../../../constants/statuses";

const selectDishModule = (state) => state.dish;

export const selectDishById = (state, id) => selectDishModule(state).entities[id];

export const selectDishNameById = (state, id) => selectDishById(state, id).name;

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishLoadingStatus = (state) => selectDishModule(state).status

export const selectIsDishesLoading = (state) => selectDishLoadingStatus(state) === REQUEST_STATUS.pending;

export const selectIsDishesLoadingFailed = (state) => selectDishLoadingStatus(state) === REQUEST_STATUS.failed;
