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
    /*addCar: (state, action: PayloadAction<PostType>) => {
      state.comments.unshift(action.payload);
    },
    commentCar: (state, action: PayloadAction<PostType>) => {
      const index = state.comments.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.comments[index] = action.payload;
    },*/
  },
});

export const { setAllComment } = commentSlice.actions;

export const selectComment = (state: RootState) => state.comment.comments;

export default commentSlice.reducer;
