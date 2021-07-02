import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { UserType } from "../api/types";

// Define a type for the slice state
interface UserState {
  user: string | null;
  users: UserType[];
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  users: [] as UserType[],
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
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

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
