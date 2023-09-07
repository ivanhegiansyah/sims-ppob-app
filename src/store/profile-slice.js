import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  message: '',
  data: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.data = action.payload.data;
    },
    updateData(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.data = action.payload.data;
    },
    updateImage(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.data = action.payload.data;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice;
