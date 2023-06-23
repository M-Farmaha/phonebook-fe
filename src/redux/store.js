import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer, tokenReducer } from './slice';
import { contactsApi } from './contactsApi';
import { authApi } from './authApi';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const reducer = combineReducers({
  filter: filterReducer,
  token: tokenReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: 'token',
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
