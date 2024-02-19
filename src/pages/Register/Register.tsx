import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/storeHooks";
import { auth } from "../../utils/Firebaseconfig";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../../features/userAuth/userSlice";
export const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
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
      const currentUser = await createUserWithEmailAndPassword(
        auth,
        user.userEmail,
        user.userPassword
      );
      await updateProfile(currentUser.user, {
        displayName: user.userName,
      });
      dispatch(
        login({
          userName: user.userName,
          userEmail: user.userEmail,
        })
      );
      navigate("/starships");
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
        className="flex flex-col bg-white rounded-3xl w-2/3 xl:w-1/3 mx-auto my-2 gap-2 p-8 md:px-20 text-black"
      >
        <h2 className="font-bold text-2xl">Create Your Account</h2>
        <p className="text-xs py-2">
          Star Wars is part of The Walt Disney Family of Companies. You'll be
          able to log into services and experiences using the same email and
          password.
        </p>
        <label htmlFor="userName" className="font-semibold md:text-xl">
          Name
        </label>
        <input
          type="text"
          name="userName"
          required
          onChange={handleChange}
          className="rounded w-full bg-slate-200  mx-auto mb-2 md:h-10 text-black"
        />
        <label htmlFor="userEmail" className="font-semibold md:text-xl">
          Email
        </label>
        <input
          type="email"
          name="userEmail"
          required
          onChange={handleChange}
          className="rounded w-full bg-slate-200  mx-auto mb-2 md:h-10 text-black"
        />
        <label htmlFor="userPassword" className="font-semibold md:text-xl">
          Password
        </label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          required
          onChange={handleChange}
          className="rounded w-full bg-slate-200  mx-auto mb-2 md:h-10"
        />
        {error && (
          <p className="text-red-800 text-center text-xs mt-2 font-semibold md:text-base">
            {error}
          </p>
        )}
        <p className="text-slate-400 text-xs text-center mt-2">
          Already have an account?{" "}
          <Link to={"/register"} className="text-black underline">
            Log in now
          </Link>
        </p>
        <button className="w-40 md:w-full text-sm font-semibold p-2 px-4 mx-auto my-2 border rounded-full bg-yellow-400  hover:border-yellow-400 hover:bg-white">
          Create Account
        </button>
      </form>
    </div>
  );
};
