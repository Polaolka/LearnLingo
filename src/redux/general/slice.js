import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceType: null,
  modalOpened: false,
  modalClosing: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setDeviceType(state, action) {
      state.deviceType = action.payload;
    },
    toggleModal(state, action) {
      state.modalOpened = !state.modalOpened;
      state.modalClosing = false;
    },
    setModalOpened(state, action) {
      state.modalOpened = action.payload;
      state.modalClosing = false;
    },
    setModalClosing(state, action) {
      state.modalClosing = true;
    },
  },
});

export const {
  setDeviceType,
  toggleModal,
  setModalOpened,
  setModalClosing,
} = generalSlice.actions;
export const generalReducer = generalSlice.reducer;
