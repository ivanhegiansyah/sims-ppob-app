import { configureStore } from '@reduxjs/toolkit';

import registerSlice from './register-slice';
import loginSlice from './login-slice';
import profileSlice from './profile-slice';
import dashboardSlice from './dashboard-slice';
import transactionSlice from './transaction-slice';

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    login: loginSlice.reducer,
    profile: profileSlice.reducer,
    dashboard: dashboardSlice.reducer,
    transaction: transactionSlice.reducer,
  },
});

export default store;
