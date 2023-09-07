import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import { useEffect, useState } from 'react';
import { getProfile } from '../../store/profile-actions';
import { getServices, getBanner } from '../../store/dashboard-actions';
import { getBalance } from '../../store/transaction-actions';
import dummyAva from '../../assets/Profile-Photo.png';
import { convertToRupiah } from '../../service';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Home() {
  const token = Cookies.get('token');
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const informationData = useSelector((state) => state.dashboard);
  const transactionData = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getBanner());
    dispatch(getServices());
    dispatch(getBalance());
  }, [dispatch]);
  
  const [showBalance, setShowBalance] = useState(false);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Layout>
        <div>
          <div className="flex w-full justify-center items-center mt-4">
            <div className="w-1/2">
              <div>
                <img
                  src={dummyAva}
                  alt="avatar"
                  className="rounded-full mb-2"
                />
                <div className="text-lg">Selamat datang,</div>
                <div className="font-semibold text-3xl">
                  {profileData?.first_name} {profileData?.last_name}
                </div>
              </div>
            </div>
            <div className="w-1/2 text-white">
              <div className="bg-red-500 p-4 rounded-xl space-y-4">
                <div>Saldo anda</div>
                {showBalance && (
                  <div className="font-semibold text-2xl">
                    {convertToRupiah(transactionData?.dataBalance.balance)}
                  </div>
                )}
                {!showBalance && (
                  <div className="font-semibold text-2xl">
                    Rp &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
                  </div>
                )}
                <div
                  className="flex items-center space-x-2 cursor-pointer w-[100px]"
                  onClick={() => setShowBalance(!showBalance)}
                >
                  <div className="text-sm">
                    {!showBalance ? 'Lihat saldo' : 'Tutup saldo'}
                  </div>
                  {showBalance ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-[15px] mt-12 justify-center flex-wrap">
            {informationData?.dataServices?.map((v, i) => {
              return (
                <div
                  key={i}
                  className="w-24 flex flex-col items-center text-center space-y-2 cursor-pointer"
                >
                  <img src={v.service_icon} alt="" className="w-16 h-16" />
                  <div className="text-sm">{v.service_name}</div>
                </div>
              );
            })}
          </div>
          <div className=" mt-12">
            <div className="font-semibold">Temukan promo menarik</div>
            <div className="flex justify-center item-center space-x-10 mt-4">
              {informationData?.dataBanner?.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="w-full flex items-center text-center space-y-2 cursor-pointer"
                  >
                    <img
                      src={v.banner_image}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
