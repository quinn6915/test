import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { PhotoType } from "../api/types";

// Define a type for the slice state
interface Photostate {
  photo: PhotoType[];
}

// Define the initial state using that type
const initialState: Photostate = {
  photo: [] as PhotoType[],
};

export const photoSlice = createSlice({
  name: "photo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllphoto: (state, action: PayloadAction<any>) => {
      state.photo = action.payload;
    },
  },
});

export const { setAllphoto } = photoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectphoto = (state: RootState) => state.photo.photo;

export default photoSlice.reducer;
