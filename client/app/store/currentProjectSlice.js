import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  _id: "",
  createdAt: "",
  updatedAt: "",
  email: "",
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState: initialState,
  reducers: {
    setCurrentProject(state, action) {
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.email = action.payload.email;
    },
  },
});

export const currentProjectActions = currentProjectSlice.actions;
export default currentProjectSlice;
