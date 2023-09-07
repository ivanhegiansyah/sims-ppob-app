import { useState } from 'react';
import illustrasiLogin from '../../assets/Illustrasi-Login.png';
import logo from '../../assets/Logo.png';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAccount, clearState } from '../../store/register-actions';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register);

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
    password: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Password',
    },
    confirmPassword: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Kofnrimasi password',
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErr, setShowErr] = useState(false);

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
            : name === 'password' && value.length < 8
            ? true
            : name === 'confirmPassword' && value.length < 8
            ? true
            : name === 'confirmPassword' && value !== input.password.value
            ? true
            : false,
        message:
          input[name]['required'] === true && value.trim().length === 0
            ? input[name]['name'] + ' wajib diisi'
            : name === 'email' && !validateEmail.test(value)
            ? 'Format email salah'
            : name === 'password' && value.length < 8
            ? 'Password minimal 8 karakter'
            : name === 'confirmPassword' && value.length < 8
            ? 'Password minimal 8 karakter'
            : name === 'confirmPassword' && value !== input.password.value
            ? 'Password tidak sesuai'
            : '',
        value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.email.isError &&
      !input.firstName.isError &&
      !input.lastName.isError &&
      !input.password.isError &&
      !input.confirmPassword.isError
    ) {
      dispatch(
        registerAccount({
          email: input.email.value,
          first_name: input.firstName.value,
          last_name: input.lastName.value,
          password: input.password.value,
        })
      );
      setShowErr(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center text-center min-h-screen">
        <div className="w-1/2 px-24">
          <div className="flex items-center justify-center font-semibold text-xl space-x-2">
            <img src={logo} alt="logo" />
            <div>SIMS PPOB</div>
          </div>
          <div className="font-semibold text-2xl my-8">
            Lengkapi data untuk <br /> membuat akun
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name={'email'}
              icon={'email'}
              type={'email'}
              value={input.email.value}
              onChange={handleInputChange}
              isError={input.email.isError}
              message={input.email.message}
              placeholder={'masukan email anda'}
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
            />
            <Input
              name={'password'}
              icon={'password'}
              type={!showPassword ? 'password' : 'text'}
              value={input.password.value}
              onChange={handleInputChange}
              isError={input.password.isError}
              message={input.password.message}
              show={showPassword}
              setShow={setShowPassword}
              placeholder={'password'}
            />
            <Input
              name={'confirmPassword'}
              icon={'password'}
              type={!showConfirmPassword ? 'password' : 'text'}
              value={input.confirmPassword.value}
              onChange={handleInputChange}
              isError={input.confirmPassword.isError}
              message={input.confirmPassword.message}
              show={showConfirmPassword}
              setShow={setShowConfirmPassword}
              placeholder={'konfirmasi password'}
            />
            <Button
              text={'Registrasi'}
              className={'bg-red-500 text-white hover:bg-red-600'}
            />
          </form>
          <div className="text-sm mt-6 text-gray-500">
            Sudah punya akun? login{' '}
            <span
              onClick={() => {
                navigate('/login');
              }}
              className="text-red-500 font-semibold cursor-pointer"
            >
              di sini
            </span>
          </div>
          {registerData?.status === 0 && !showErr && (
            <div
              className={`absolute left-10 bottom-10 bg-green-100 text-green-500 text-sm rounded text-left px-3 py-1 w-[48em] `}
            >
              {registerData?.message}
              <span
                onClick={() => {
                  setShowErr(true);
                  dispatch(clearState());
                }}
                className="absolute right-3 cursor-pointer"
              >
                x
              </span>
            </div>
          )}
          {registerData?.status === 102 && !showErr && (
            <div
              className={`absolute left-10 bottom-10 bg-red-100 text-red-500 text-sm rounded text-left px-3 py-1 w-[48em] `}
            >
              {registerData?.message}
              <span
                onClick={() => {
                  setShowErr(true);
                  dispatch(clearState());
                }}
                className="absolute right-3 cursor-pointer"
              >
                x
              </span>
            </div>
          )}
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-screen"
            src={illustrasiLogin}
            alt="illustrasi-login"
          />
        </div>
      </div>
    </>
  );
}

export default Register;
