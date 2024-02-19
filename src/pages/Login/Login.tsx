import { auth } from "../../utils/Firebaseconfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/storeHooks";
import { login } from "../../features/userAuth/userSlice";
import { UserCredential } from "firebase/auth";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password).then(
        (currentUser: UserCredential) => {
          dispatch(
            login({
              userName: currentUser.user.displayName,
              userEmail: currentUser.user.email,
            })
          );
          navigate("/starships");
        }
      );
    } catch (error: any) {
      let errorCode = error.code
        .split("auth/")[1]
        .replaceAll("-", " ")
        .toUpperCase();
      setError(errorCode);
    }
  };

  return (
    <div className="bg-[url('/src/assets/bg-body.webp')] h-screen mb-14">
      <div className="flex p-4">
        <div className="w-1/5"></div>
        <div className="w-3/5 mt-6">
          <img
            src="/src/assets/star_wars_logo.png"
            alt="star wars logo"
            className="h-20 md:h-20 lg:h-24 mx-auto"
          />
        </div>
        <div className="w-1/5 flex justify-end mb-auto">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-slate-200 rounded-full p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white rounded-3xl w-2/3 xl:w-1/3 mx-auto gap-2 p-8 md:px-20 text-black"
      >
        <h2 className="font-bold text-3xl">Login</h2>
        <p className="text-xs py-2">
          Log into your Star Wars account to enjoy more content.
        </p>
        <label htmlFor="email" className="font-semibold md:text-xl">
          Enter your email
        </label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          className="rounded w-full bg-slate-200  mx-auto mb-2 md:h-10"
        />
        <label htmlFor="password" className="font-semibold md:text-xl">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
          className="rounded w-full bg-slate-200  mx-auto  md:h-10"
        />
        {error && (
          <p className="text-red-800 text-center text-xs mt-2 font-semibold md:text-base">
            {error}
          </p>
        )}
        <p className="text-slate-400 text-xs text-center mt-2">
          Don't have an account yet?{" "}
          <Link to={"/register"} className="text-black underline">
            Sign up now
          </Link>
        </p>
        <button className="w-40 md:w-full text-sm font-semibold p-2 px-4 mx-auto my-2 border rounded-full bg-yellow-400  hover:border-yellow-400 hover:bg-white">
          Login
        </button>
        <div className="text-slate-500 text-xs flex flex-col gap-3">
          <hr />
          <p className="font-semibold">
            Star Wars is part of The Walt Disney Family of Companies.
          </p>
          <p>
            This email and password lets you seamlessly log into services and
            experiences across The Walt Disney Family of Companies, such as
            ESPN, Walt Disney World, Marvel,{" "}
            <a
              href="https://mydisneyaccount.com/"
              className="text-black underline"
            >
              and more.
            </a>
          </p>
          <p>
            If you've used your email with one of our services, please use it
            here too.
          </p>
          <img src="/src/assets/logos-modal.png" alt="" />
        </div>
      </form>
    </div>
  );
};
