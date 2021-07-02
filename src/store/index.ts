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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
