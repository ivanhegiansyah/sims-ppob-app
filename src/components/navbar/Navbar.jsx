import logo from '../../assets/Logo.png';
function Navbar() {
  return (
    <div className="flex justify-center w-full items-center bg-white px-24 py-0 border-b border-[#EBEBED]">
      <div className={`flex w-full py-2`}>
        <div className="flex items-center justify-center font-semibold space-x-2">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <div>SIMS PPOB</div>
        </div>
      </div>
      <div className={`flex relative justify-end items-center w-full py-2`}>
        <div className="flex space-x-10 md:flex">
          <div className="relative flex px-1 items-center"></div>
          <div className="flex relative items-center">
            <button
              className={`mr-0 h-[36px] font-medium`}
              // onClick={() => handleMenu()}
            >
              Top Up
            </button>
          </div>
          <div className="flex relative items-center">
            <button
              className={`mr-0 h-[36px] font-medium`}
              // onClick={() => handleMenu()}
            >
              Transaction
            </button>
          </div>
          <div className="flex relative items-center">
            <button
              className={`mr-0 h-[36px] font-medium`}
              // onClick={() => handleMenu()}
            >
              Akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
