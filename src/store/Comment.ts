import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { CommentType } from "../api/types";

interface CommentState {
  comments: CommentType[];
}

const initialState: CommentState = {
  comments: [] as any,
};

export const commentSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setAllComment: (state, action: PayloadAction<any>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<any>) => {
      state.comments.unshift(action.payload);
    },
  },
});

export const { setAllComment, addComment } = commentSlice.actions;

export const selectComment = (state: RootState) => state.comment.comments;

export default commentSlice.reducer;
