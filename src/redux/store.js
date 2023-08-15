import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {teachersReducer} from "./teachers/teachersSlice.js";
import { loadingReducer } from "./loader/slice";
import { authReducer } from "./auth/authSlice.js";
import { generalReducer } from "./general/slice";
import storage from "redux-persist/lib/storage";
import { modalOpenedReducer } from './modalOpenedSlice';
import { userReducer } from "./user/slice.js";

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    teachers: teachersReducer,
    loading: loadingReducer,
    // favorite: favoriteReduser,
    general: generalReducer,
    modal: modalOpenedReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
