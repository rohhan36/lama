import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createProjectSlice from "./createProjectSlice";
import uploadProjectSlice from "./uploadProjectSlice";
import loginModalSlice from "./loginModalSlice";
import currentProjectSlice from "./currentProjectSlice";
import currentTranscriptSlice from "./currentTranscriptSlice";

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "store",
  storage,
};

const reducers = combineReducers({
  createProject: createProjectSlice.reducer,
  uploadProject: uploadProjectSlice.reducer,
  loginModal: loginModalSlice.reducer,
  currentProject: currentProjectSlice.reducer,
  currentTranscript: currentTranscriptSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
