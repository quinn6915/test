import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: [] ,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    setAllphoto: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { setAllphoto } = photoSlice.actions;

export const selectphoto = (state) => state.photo.photo;

export default photoSlice.reducer;
