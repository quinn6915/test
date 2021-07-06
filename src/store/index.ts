import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "./Post";
import userReducer from "./User";
import commentReducer from "./Comment";
import albumReducer from "./Album";
import photoReducer from "./Photo";
import todoReducer from "./Todos";

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
    album: albumReducer,
    photo: photoReducer,
    todo: todoReducer,
  },
  middleware: [...getDefaultMiddleware({ immutableCheck: false })],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
