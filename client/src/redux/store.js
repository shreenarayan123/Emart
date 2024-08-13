
import cartReducer from "./cartReducer";
import wishReducer from "./wishReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// const stripe = require('stripe')('sk_test_51NPLloSJXyqCRIM1zb701tm2js8MZPa0tuCAATVQ1lQvb1HwxT5Iz8srRTgJbLYgyhWUGHFHJQQ2uAuSnLdgEdrV00naRiO31t');

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig,  wishReducer);
const persistedReducer2 = persistReducer(persistConfig,  cartReducer);

export const store = configureStore({
  reducer: {
    wish: persistedReducer,
    cart: persistedReducer2
    
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);