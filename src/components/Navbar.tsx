const Navbar = () => {
  return (
    <>
      <div className="border-t border-gray-700"></div>
      <nav className="bg-black text-neutral-500">
        <div className="flex justify-center items-center px-4 ">
          <button className="px-4 py-2 text-[8px] lg:text-sm hover:text-white border-x border-gray-700 hover:border-b hover:border-b-blue-500">
            HOME
          </button>
          <button className="px-4 py-2 text-[8px] lg:text-sm hover:text-white border-r border-gray-700 hover:border-b hover:border-b-blue-500">
            STARSHIPS
          </button>
        </div>
      </nav>
      <div className="border-t border-gray-700"></div>
    </>
  );
};

export default Navbar;
