import { createSlice } from "@reduxjs/toolkit";
import { getAllTeachers } from "redux/teachers/teachersOperations";


const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTeachers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTeachers.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAllTeachers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
