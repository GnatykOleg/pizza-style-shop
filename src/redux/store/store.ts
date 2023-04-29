import { configureStore } from "@reduxjs/toolkit";

import pizzasSlice from "../pizzas/pizzasSlice";

import persistStore from "redux-persist/es/persistStore";

import { persistReducer } from "redux-persist";

import { middlewareConfig, persistConfig } from "../persist/persist-config";

const persistedReducer = persistReducer(persistConfig, pizzasSlice);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfig),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
