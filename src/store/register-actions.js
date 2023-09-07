import { registerActions } from './register-slice';

export const registerAccount = (param) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/registration',
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

      return data;
    };

    try {
      const registerData = await sendRequest();
      dispatch(
        registerActions.register({
          status: registerData?.status,
          message: registerData?.message,
          data: registerData?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch(registerActions.reset());
  };
};
