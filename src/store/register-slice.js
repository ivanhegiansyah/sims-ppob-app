import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  message: '',
  data: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    register(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.data = action.payload.data;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
