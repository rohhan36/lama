import { createSlice } from "@reduxjs/toolkit";

const createProjectInitialState = {
  isCreateProjectOpen: false,
};

const createProjectSlice = createSlice({
  name: "createProject",
  initialState: createProjectInitialState,
  reducers: {
    toggleCreateProject(state) {
      state.isCreateProjectOpen = !state.isCreateProjectOpen;
    },
  },
});

export const createProjectActions = createProjectSlice.actions;
export default createProjectSlice;
