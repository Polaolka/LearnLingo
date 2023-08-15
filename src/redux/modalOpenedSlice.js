import { createSlice } from '@reduxjs/toolkit';

// const initialState = false;
const initialState = {
  isRegisterModalOpened: false,
  isLoginModalOpened: false,
  isModalOpened: false,
};
const ModalOpenedSlice = createSlice({
  name: 'modalopened',
  initialState,
  reducers: {
    setRegisterModalOpened(state, action) {
      state.isRegisterModalOpened = action.payload;
      state.isModalOpened = action.payload;
    },
    setLoginModalOpened(state, action) {
      state.isLoginModalOpened = action.payload;
      state.isModalOpened = action.payload;
    },
    setModalOpened(state, action) {
      state.isRegisterModalOpened = action.payload;
      state.isLoginModalOpened = action.payload;
      state.isModalOpened = action.payload;
    }
  },
});

export const { setRegisterModalOpened, setLoginModalOpened, setModalOpened } = ModalOpenedSlice.actions;
export const modalOpenedReducer = ModalOpenedSlice.reducer;
