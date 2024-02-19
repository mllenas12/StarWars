import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
};
