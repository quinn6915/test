import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { UserType } from "../api/types";

interface UserState {
  user: string | null;
  users: UserType[];
}

const initialState: UserState = {
  user: null,
  users: [] as UserType[],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllUser: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    setUserConnected: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setAllUser, setUserConnected } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
