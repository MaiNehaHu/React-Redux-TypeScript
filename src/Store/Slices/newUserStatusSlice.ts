import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isNewUser: boolean;
}

const initialState: UserState = {
  isNewUser: true, // Set initial state
};

const newUserStatusSlice = createSlice({
  name: "NewUserStatus",
  initialState,
  reducers: {
    newUserFlag(state, action: PayloadAction<boolean>) {
      state.isNewUser = action.payload;
      // Update the state based on the action payload
    },
  },
});

export default newUserStatusSlice.reducer;
export const { newUserFlag } = newUserStatusSlice.actions;
