import { useState, useEffect } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import { getProfile } from '../../store/profile-actions';
import dummyAva from '../../assets/Profile-Photo.png';
import Cookies from 'js-cookie';

function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const [input, setInput] = useState({
    email: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Email',
    },
    firstName: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Nama depan',
    },
    lastName: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Nama belakang',
    },
  });

  useEffect(() => {
    setInput({
      email: {
        value: profileData?.email,
        isError: false,
        message: '',
        required: true,
        name: 'Email',
      },
      firstName: {
        value: profileData?.first_name,
        isError: false,
        message: '',
        required: true,
        name: 'Nama depan',
      },
      lastName: {
        value: profileData?.last_name,
        isError: false,
        message: '',
        required: true,
        name: 'Nama belakang',
      },
    });
  }, [profileData]);

  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: {
        ...input[name],
        isError:
          input[name]['required'] === true && value.trim().length === 0
            ? true
            : name === 'email' && !validateEmail.test(value)
            ? true
            : false,
        message:
          input[name]['required'] === true && value.trim().length === 0
            ? input[name]['name'] + ' wajib diisi'
            : name === 'email' && !validateEmail.test(value)
            ? 'Format email salah'
            : '',
        value,
      },
    }));
  };

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col mt-10 items-center text-center w-full">
          <div className="flex items-center justify-center font-semibold text-xl space-x-2">
            <img
              src={dummyAva}
              alt="avatar"
              className="rounded-full mb-2 w-28 h-28"
            />
          </div>
          <div className="font-semibold text-2xl">
            {profileData?.first_name} {profileData?.last_name}
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-[52em]"
          >
            <Input
              name={'email'}
              icon={'email'}
              type={'email'}
              value={input.email.value}
              onChange={handleInputChange}
              isError={input.email.isError}
              message={input.email.message}
              placeholder={'masukan email anda'}
              text={'Email'}
              label={true}
              disabled={true}
            />
            <Input
              name={'firstName'}
              icon={'name'}
              type={'text'}
              value={input.firstName.value}
              onChange={handleInputChange}
              isError={input.firstName.isError}
              message={input.firstName.message}
              placeholder={'nama depan'}
              text={'Nama Depan'}
              label={true}
              disabled={true}
            />
            <Input
              name={'lastName'}
              icon={'name'}
              type={'text'}
              value={input.lastName.value}
              onChange={handleInputChange}
              isError={input.lastName.isError}
              message={input.lastName.message}
              placeholder={'nama belakang'}
              text={'Nama Belakang'}
              label={true}
              disabled={true}
            />
            <Button
              text={'Edit Profil'}
              className={'bg-red-500 text-white hover:bg-red-600'}
            />
            <Button
              onClick={handleLogout}
              text={'Logout'}
              className={
                'bg-white text-red-500 outline-red-500 outline outline-1 hover:bg-red-600 hover:text-white'
              }
            />
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Account;
