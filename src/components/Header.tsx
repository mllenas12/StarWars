import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/storeHooks";
import { logout, selectUser } from "../features/userAuth/userSlice";

const Header = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex bg-black bg-no-repeat bg-center ">
      <div className="w-1/3 md:my-auto px-1">
        <div className="hidden md:flex justify-start pl-8">
          <a href="https://www.tiktok.com/@starwars" className="px-2 my-auto">
            <img
              className="md:w-4 lg:w-6"
              src="/src/assets/tk-logo.svg"
              alt="tiktok-logo"
            />
          </a>
          <a
            href="https://www.instagram.com/starwars/"
            className="px-2 my-auto"
          >
            <img
              className="w-4 lg:w-6"
              src="/src/assets/ig-logo.svg"
              alt="instagram-logo"
            />
          </a>
          <a href="https://twitter.com/starwars" className="px-2 my-auto">
            <img
              className="w-4 lg:w-6 my-auto"
              src="/src/assets/x-logo.webp"
              alt="x-logo"
            />
          </a>
          <a
            href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699"
            className="px-2 my-auto"
          >
            <img
              className="w-4 lg:w-6"
              src="/src/assets/fb-logo.svg"
              alt="facebook-logo"
            />
          </a>
          <a
            href="https://www.youtube.com/user/starwars"
            className="px-2 my-auto"
          >
            <img
              className="w-4 lg:w-6"
              src="/src/assets/yb-logo.svg"
              alt="youtube-logo"
            />
          </a>
          <div className="h-4 w-px mx-2 my-auto bg-neutral-400 text-transparent">
            .
          </div>
          <a href="https://www.starwarskids.com/" className="px-2 my-auto">
            <img
              className="w-8 lg:w-10"
              src="/src/assets/kids.svg"
              alt="youtube-logo"
            />
          </a>
        </div>
      </div>
      <div className="w-1/3 py-4">
        <Link to={"/"}>
          <img
            src="/src/assets/star_wars_logo.png"
            alt="star wars logo"
            className="h-14 md:h-24 lg:h-30 mx-auto"
          />
        </Link>
      </div>
      <div className="w-1/3 text-white my-auto ">
        {user.userEmail !== null ? (
          <div className="pr-8 flex flex-col ml-auto text-xs w-fit">
            <p className="py-1 text-end">Welcome {user.userName}!</p>
            <button
              className="flex py-1 ml-auto gap-1 hover:text-red-500"
              onClick={handleLogOut}
            >
              <img
                src="/src/assets/logout.svg"
                alt="login logo"
                className="w-4 lg:w-6 my-auto"
              />
              <div className="my-auto">LOG OUT</div>
            </button>
          </div>
        ) : (
          <div className="pr-8 flex flex-col md:flex-row md:justify-end gap-2 md:gap-6 text-xs">
            <Link
              to={"/login"}
              className="flex md:my-auto gap-1 md:gap-3 mx-auto md:mx-0 hover:text-yellow-500"
            >
              <img
                src="/src/assets/login.svg"
                alt="login logo"
                className="w-4 lg:w-6"
              />
              <div className="my-auto ">LOG IN</div>
            </Link>

            <Link
              to={"/register"}
              className=" flex md:my-auto gap-1 md:gap-3 mx-auto md:mx-0 hover:text-yellow-500"
            >
              <img
                src="/src/assets/signin.svg"
                alt="sign in logo"
                className="w-4 lg:w-6"
              />
              <div className="my-auto ">SIGN IN</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
