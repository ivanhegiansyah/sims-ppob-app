import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  message: '',
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.token = action.payload.token;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
