import { configureStore } from '@reduxjs/toolkit';
import dish from './entities/dish';
import restaurant from './entities/restaurant';
import restaurants from './entities/restaurants';
import review from './entities/review';
import user from './entities/user';
import { loggerMiddleware } from './middlewares/logger';

const store = configureStore({
  reducer: {
    dish,
    restaurant,
    restaurants,
    review,
    user,
  },
  /** Порядок middleware ВАЖЕН ! */
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware
  ],
});

export default store;
