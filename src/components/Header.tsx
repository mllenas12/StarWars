const Header = () => {
  return (
    <div className="flex bg-black bg-no-repeat bg-center ">
      <div className="w-1/5 md:my-auto">
        <div className="hidden md:flex md:gap-2 md:m-2 px-4 ">
          <img
            className="md:w-4 lg:w-6"
            src="/src/assets/tk-logo.svg"
            alt="tiktok-logo"
          />
          <img
            className="w-4 lg:w-6"
            src="/src/assets/ig-logo.svg"
            alt="instagram-logo"
          />
          <img
            className="w-4 h-4 lg:w-6 lg:h-6 my-auto"
            src="/src/assets/x-logo.webp"
            alt="x-logo"
          />
          <img
            className="w-4 lg:w-6"
            src="/src/assets/fb-logo.svg"
            alt="facebook-logo"
          />
          <img
            className="w-4 lg:w-6"
            src="/src/assets/yb-logo.svg"
            alt="youtube-logo"
          />
        </div>
      </div>
      <div className="w-3/5 py-4">
        <img
          src="/src/assets/star_wars_logo.png"
          alt="star wars logo"
          className="h-14 md:h-20 lg:h-24 mx-auto"
        />
      </div>
      <div className="w-1/5 text-neutral-500 flex flex-col md:flex-row gap-1 md:pr-4 my-auto text-[6px] md:text-[10px] lg:text-lg">
        <button className="flex md:my-auto gap-1 mx-auto">
          <img
            src="/src/assets/login.svg"
            alt="login logo"
            className="w-4 lg:w-6"
          />
          <div className="my-auto">LOG IN</div>
        </button>
        <button className=" flex md:my-auto gap-1 mx-auto">
          <img
            src="/src/assets/signin.svg"
            alt="sign in logo"
            className="w-4 lg:w-6"
          />
          <div className="my-auto">SIGN IN</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
