import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import dish from './entities/dish';
import request from './entities/request';
import restaurant from './entities/restaurant';
import { loggerMiddleware } from './middlewares/logger';

const store = configureStore({
  reducer: {
    dish,
    restaurant,
    request,
    [api.reducerPath]: api.reducer,
  },
  /** Порядок middleware ВАЖЕН ! */
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware
  ],
});

export default store;
