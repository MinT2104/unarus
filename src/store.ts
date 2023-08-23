import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import persistedReducer from "./redux/rootReducer/rootReducer";
import walletConnectionReducer from "./redux/slices/walletConnectionSlice";
import selectTokenReducer from "./redux/slices/selectTokenSlice";

const store = configureStore({
  reducer: {
    save: persistedReducer,
    walletConnect: walletConnectionReducer,
    selectToken: selectTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
