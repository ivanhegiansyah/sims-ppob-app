
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusBanner: null,
  messageBanner: '',
  dataBanner: [],
  statusServices: null,
  messageServices: '',
  dataServices: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    banner(state, action) {
      state.statusBanner = action.payload.statusBanner;
      state.messageBanner = action.payload.messageBanner;
      state.dataBanner = action.payload.dataBanner;
    },
    services(state, action) {
      state.statusServices = action.payload.statusServices;
      state.messageServices = action.payload.messageServices;
      state.dataServices = action.payload.dataServices;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
