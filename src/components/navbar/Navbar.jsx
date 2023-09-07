import logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className="flex justify-center w-full items-center bg-white px-24 py-0 border-b border-[#EBEBED]">
      <div className={`flex w-full py-2`}>
        <NavLink to="/">
          <div className="flex items-center justify-center font-semibold space-x-2">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <div>SIMS PPOB</div>
          </div>
        </NavLink>
      </div>
      <div className={`flex relative justify-end items-center w-full py-2`}>
        <div className="flex space-x-10 mt-2">
          <NavLink
            to="/#"
            className={({ isActive }) =>
              isActive ? 'font-medium h-[36px]' : 'font-medium h-[36px]'
            }
          >
            Top Up
          </NavLink>
          <NavLink
            to="/#"
            className={({ isActive }) =>
              isActive ? 'font-medium h-[36px]' : 'font-medium h-[36px]'
            }
          >
            Transaction
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? 'font-medium text-red-500 h-[36px]'
                : 'font-medium h-[36px]'
            }
          >
            Akun
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
