
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusBalance: null,
  messageBalance: '',
  dataBalance: [],
  statusHistory: null,
  messageHistory: '',
  dataHistory: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    balance(state, action) {
      state.statusBalance = action.payload.statusBalance;
      state.messageBalance = action.payload.messageBalance;
      state.dataBalance = action.payload.dataBalance;
    },
    history(state, action) {
      state.statusHistory = action.payload.statusHistory;
      state.messageHistory = action.payload.messageHistory;
      state.dataHistory = action.payload.dataHistory;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice;
