import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-neutral-500 text-sm lg:text-xl font-semibold flex justify-center gap-8 items-center border-b">
        <Link
          to={"/"}
          aria-label="Navigate to home page"
          className="px-4 py-2  hover:text-white focus:text-white  hover:border-b-2 hover:border-b-blue-500 focus:border-b-2 focus:border-b-blue-500"
        >
          HOME
        </Link>
        <Link
          to={"/starships"}
          aria-label="Explore the list of the Star Wars starships"
          className="px-4 py-2 hover:text-white hover:border-b-2 hover:border-b-blue-500 focus:border-b-2 focus:border-b-blue-500"
        >
          STARSHIPS
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
