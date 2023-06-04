import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from './users/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['folowwing'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
