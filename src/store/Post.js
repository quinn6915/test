import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  posts: [],
};

export const postSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setAllPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setAllPost } = postSlice.actions;

export const selectPost = (state) => state.post.posts;

export default postSlice.reducer;
