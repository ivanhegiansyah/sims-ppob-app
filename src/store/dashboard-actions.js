import { dashboardActions } from './dashboard-slice';
import Cookies from 'js-cookie';

export const getBanner = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/banner',
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

      console.log(data, 'response banner');

      return data;
    };

    try {
      const dashboardBannerData = await fetchData();
      dispatch(
        dashboardActions.banner({
          statusBanner: dashboardBannerData?.status,
          messageBanner: dashboardBannerData?.message,
          dataBanner: dashboardBannerData?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const getServices = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        'https://take-home-test-api.nutech-integrasi.app/services',
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

      console.log(data, 'response services');

      return data;
    };

    try {
      const dashboardServicesData = await fetchData();
      dispatch(
        dashboardActions.services({
          statusServices: dashboardServicesData?.status,
          messageServices: dashboardServicesData?.message,
          dataServices: dashboardServicesData?.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch(dashboardActions.reset());
  };
};
