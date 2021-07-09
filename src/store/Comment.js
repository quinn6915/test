import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  lastId: 0,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setAllComment: (state, action) => {
      state.comments = action.payload;
      state.lastId = action.payload[action.payload.length - 1].id;
    },
    addComment: (state, action) => {
      state.lastId++;

      action.payload.id = state.lastId;
      state.comments.push(action.payload);
    },
  },
});

export const { setAllComment, addComment, setLastId } = commentSlice.actions;

export const selectComment = (state) => state.comment.comments;

export default commentSlice.reducer;
