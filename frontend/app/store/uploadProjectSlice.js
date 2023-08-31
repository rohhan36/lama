import { createSlice } from "@reduxjs/toolkit";

const uploadProjectInitialState = {
  isUploadProjectOpen: false,
  icon: "",
  title: "",
};

const uploadProjectSlice = createSlice({
  name: "uploadProject",
  initialState: uploadProjectInitialState,
  reducers: {
    toggleUploadProject(state) {
      state.isUploadProjectOpen = !state.isUploadProjectOpen;
    },

    setTitle(state, actions) {
      state.title = actions.payload;
    },
  },
});

export const uploadProjectActions = uploadProjectSlice.actions;
export default uploadProjectSlice;
