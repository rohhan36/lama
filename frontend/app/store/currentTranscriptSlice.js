import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  _id: "",
  projectId: "",
  updatedAt: "",
};

const currentTranscriptSlice = createSlice({
  name: "currentTranscript",
  initialState: initialState,
  reducers: {
    setCurrentTranscript(state, action) {
      state.name = action.payload.name;
      state._id = action.payload._id;
      state.description = action.payload.description;
      state.updatedAt = action.payload.updatedAt;
      state.projectId = action.payload.projectId;
    },
  },
});

export const currentTranscriptActions = currentTranscriptSlice.actions;
export default currentTranscriptSlice;
