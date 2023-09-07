import { useEffect, useState } from 'react';
import illustrasiLogin from '../../assets/Illustrasi-Login.png';
import logo from '../../assets/Logo.png';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, clearState } from '../../store/login-actions';
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const loginData = useSelector((state) => state.login);
  const [input, setInput] = useState({
    email: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Email',
    },
    password: {
      value: '',
      isError: false,
      message: '',
      required: true,
      name: 'Password',
    },
  });
  const [showPassword, setShowPassword] = useState(false);
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
            : false,
        message:
          input[name]['required'] === true && value.trim().length === 0
            ? input[name]['name'] + ' wajib diisi'
            : name === 'email' && !validateEmail.test(value)
            ? 'Format email salah'
            : name === 'password' && value.length < 8
            ? 'Password minimal 8 karakter'
            : '',
        value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email.isError && !input.password.isError) {
      dispatch(
        signIn({
          email: input.email.value,
          password: input.password.value,
        })
      );
      setShowErr(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <>
      <div className="flex justify-center items-center text-center min-h-screen relative">
        <div className="w-1/2 px-24">
          <div className="flex items-center justify-center font-semibold text-xl space-x-2">
            <img src={logo} alt="logo" />
            <div>SIMS PPOB</div>
          </div>
          <div className="font-semibold text-2xl my-8">
            Masuk atau buat akun <br /> untuk memulai
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
              name={'password'}
              icon={'password'}
              type={!showPassword ? 'password' : 'text'}
              value={input.password.value}
              onChange={handleInputChange}
              isError={input.password.isError}
              message={input.password.message}
              show={showPassword}
              setShow={setShowPassword}
              placeholder={'masukan password anda'}
            />
            <Button
              text={'Masuk'}
              className={'bg-red-500 text-white hover:bg-red-600'}
            />
          </form>
          <div className="text-sm mt-6 text-gray-500">
            Belum punya akun? registrasi{' '}
            <span
              onClick={() => {
                navigate('/register');
              }}
              className="text-red-500 font-semibold cursor-pointer"
            >
              di sini
            </span>
          </div>
          {loginData?.status === 103 && !showErr && (
            <div
              className={`absolute left-10 bottom-10 bg-red-100 text-red-500 text-sm rounded text-left px-3 py-1 w-[48em] `}
            >
              {loginData?.message}
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

export default Login;
