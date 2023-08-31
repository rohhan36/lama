import { createSlice } from "@reduxjs/toolkit";

const loginModalInitialState = {
  isLoginModalOpen: false,
};

const loginModalSlice = createSlice({
  name: "LoginModal",
  initialState: loginModalInitialState,
  reducers: {
    toggleLoginModal(state) {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
  },
});

export const loginModalActions = loginModalSlice.actions;
export default loginModalSlice;
