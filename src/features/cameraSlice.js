import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cameraImage: null,
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,

  reducers: {
    resetCameraImage: (state) => {
      state.cameraImage = null;
    },
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;
