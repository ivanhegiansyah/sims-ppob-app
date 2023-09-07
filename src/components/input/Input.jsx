import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa6';
import { FiEyeOff, FiEye } from 'react-icons/fi';
function Input({
  name,
  text,
  type,
  label = false,
  value,
  onChange,
  disabled = false,
  containerClassName,
  labelClassName,
  inputClassName,
  icon = '',
  isError,
  message,
  show,
  setShow,
  placeholder
}) {
  return (
    <>
      <div
        className={`relative flex flex-col gap-1 mt-5 ${containerClassName}`}
      >
        {label && (
          <label htmlFor={name} className={`pl-1 ${labelClassName}`}>
            {text}
          </label>
        )}
        {icon && (
          <div
            className={`pointer-events-none absolute top-3.5 left-3.5 ${
              value ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {icon === 'email' && (
              <MdAlternateEmail
                className={`${isError ? 'text-red-500' : ''}`}
              />
            )}
            {icon === 'name' && (
              <FaRegUser className={`${isError ? 'text-red-500' : ''}`} />
            )}
            {icon === 'password' && (
              <MdLockOutline className={`${isError ? 'text-red-500' : ''}`} />
            )}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`py-2 pr-2 pl-10 appearance-none rounded border focus:outline-none ${
            isError
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-400'
          } ${inputClassName}`}
        />
        {((type === 'password' && !show) || (type === 'text' && show)) && (
          <span
            onClick={() => setShow((state) => !state)}
            className={`absolute cursor-pointer top-3.5 right-3.5 ${
              value ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {!show ? <FiEyeOff /> : <FiEye />}
          </span>
        )}

        {isError && (
          <span className="text-xs text-red-500 text-right pr-1">{message}</span>
        )}
      </div>
    </>
  );
}

export default Input;
