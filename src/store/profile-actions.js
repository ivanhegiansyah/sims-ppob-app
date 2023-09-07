import { profileActions } from './profile-slice';
import Cookies from 'js-cookie';

export const getProfile = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/profile',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+ Cookies.get('token'),
          },
        }
      );

      const data = await response.json();

      console.log(data, 'response profile');

      return data;
    };

    try {
      const profileData = await fetchData();
      dispatch(
        profileActions.getProfile({
          status: profileData?.status,
          message: profileData?.message,
          data: profileData?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch(profileActions.reset());
  };
};
