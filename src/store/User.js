import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUser: (state, action) => {
      state.users = action.payload;
    },
    setUserConnected: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAllUser, setUserConnected } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
