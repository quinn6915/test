import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setAllComment: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { setAllComment, addComment } = commentSlice.actions;

export const selectComment = (state) => state.comment.comments;

export default commentSlice.reducer;
