import Navbar from '../navbar/Navbar';

function Layout({ contentStyle, children }) {
  return (
    <>
      <div className="flex-row justify-center items-between lg:h-screen bg-white">
        <Navbar />
        <div className="flex relative w-full">
          <div className={contentStyle ? contentStyle : 'w-full px-24 py-4'}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
