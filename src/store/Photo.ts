import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { PhotoType } from "../api/types";

interface Photostate {
  photo: PhotoType[];
}

const initialState: Photostate = {
  photo: [] as PhotoType[],
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    setAllphoto: (state, action: PayloadAction<any>) => {
      state.photo = action.payload;
    },
  },
});

export const { setAllphoto } = photoSlice.actions;

export const selectphoto = (state: RootState) => state.photo.photo;

export default photoSlice.reducer;
