import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Post";
import userReducer from "./User";
import commentReducer from "./Comment";
import albumReducer from "./Album";
import photoReducer from "./Photo";

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
    album: albumReducer,
    photo: photoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
