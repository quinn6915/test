import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { AlbumType } from "../api/types";

interface AlbumState {
  album: AlbumType[];
}

const initialState: AlbumState = {
  album: [] as AlbumType[],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAllalbum: (state, action: PayloadAction<any>) => {
      state.album = action.payload;
    },
  },
});

export const { setAllalbum } = albumSlice.actions;

export const selectAlbum = (state: RootState) => state.album.album;

export default albumSlice.reducer;
