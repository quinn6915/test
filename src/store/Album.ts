import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { AlbumType } from "../api/types";

// Define a type for the slice state
interface AlbumState {
  album: AlbumType[];
}

// Define the initial state using that type
const initialState: AlbumState = {
  album: [] as AlbumType[],
};

export const albumSlice = createSlice({
  name: "album",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllalbum: (state, action: PayloadAction<any>) => {
      state.album = action.payload;
    },
  },
});

export const { setAllalbum } = albumSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAlbum = (state: RootState) => state.album.album;

export default albumSlice.reducer;
