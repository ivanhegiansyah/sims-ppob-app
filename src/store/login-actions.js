import { loginActions } from './login-slice';
import Cookies from 'js-cookie';

export const signIn = (param) => {
  return async (dispatch) => {
    console.log(param, 'payload');

    const sendRequest = async () => {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(param),
        }
      );

      const data = await response.json();

      console.log(data, 'response');

      return data;
    };

    try {
      const loginData = await sendRequest();
      dispatch(
        loginActions.login({
          status: loginData?.status,
          message: loginData?.message,
          token: loginData?.data?.token,
        })
      );
      if (loginData?.status === 0) {
        Cookies.set('token', loginData?.data?.token, { expires: 7 });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch(loginActions.reset());
  };
};
