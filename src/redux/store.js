import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { usersReducer } from './users/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
