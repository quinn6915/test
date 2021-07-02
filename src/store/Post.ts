import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { PostType } from "../api/types";

interface PostState {
  posts: PostType[];
}

const initialState: PostState = {
  posts: [] as any,
};

export const postSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setAllPost: (state, action: PayloadAction<any>) => {
      state.posts = action.payload;
    },
    addCar: (state, action: PayloadAction<PostType>) => {
      state.posts.unshift(action.payload);
    },
    commentCar: (state, action: PayloadAction<PostType>) => {
      const index = state.posts.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.posts[index] = action.payload;
    },
  },
});

export const { setAllPost, addCar, commentCar } = postSlice.actions;

export const selectPost = (state: RootState) => state.post.posts;

export default postSlice.reducer;
