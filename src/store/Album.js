import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  album: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAllalbum: (state, action) => {
      state.album = action.payload;
    },
  },
});

export const { setAllalbum } = albumSlice.actions;

export const selectAlbum = (state) => state.album.album;

export default albumSlice.reducer;
