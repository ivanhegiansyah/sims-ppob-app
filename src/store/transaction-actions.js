import { transactionActions } from './transaction-slice';
import Cookies from 'js-cookie';

export const getBalance = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/balance',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + Cookies.get('token'),
          },
        }
      );

      const data = await response.json();

      console.log(data, 'response banner');

      return data;
    };

    try {
      const transactionBalanceData = await fetchData();
      dispatch(
        transactionActions.balance({
          statusBalance: transactionBalanceData?.status,
          messageBalance: transactionBalanceData?.message,
          dataBalance: transactionBalanceData?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHistory = (offset, limit) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://take-home-test-api.nutech-integrasi.app/transaction/history?offset=${offset}&limit=${limit}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + Cookies.get('token'),
          },
        }
      );

      const data = await response.json();

      console.log(data, 'response services');

      return data;
    };

    try {
      const transactionHistoryData = await fetchData();
      dispatch(
        transactionActions.history({
          statusHistory: transactionHistoryData?.status,
          messageHistory: transactionHistoryData?.message,
          dataHistory: transactionHistoryData?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch(transactionActions.reset());
  };
};
