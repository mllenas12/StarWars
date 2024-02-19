const Header = () => {
  return (
    <div className="flex bg-black bg-no-repeat bg-center ">
      <div className="w-1/5"></div>
      <div className="w-3/5 py-4">
        <img
          src="/src/assets/star_wars_logo.png"
          alt="star wars logo"
          className="h-14 md:h-20 lg:h-24 mx-auto"
        />
      </div>
      <div className="w-1/5 text-neutral-500 flex text-[6px] md:text-[10px] lg:text-lg ">
        <button>LOG IN</button>
        <h5 className="my-auto px-2">//</h5>
        <button className="pr-2">SIGNUP</button>
      </div>
    </div>
  );
};

export default Header;
