import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600  to-pink-500 duration-1000 text-base font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-pink-500  hover:to-indigo-600 "
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600  to-pink-500 duration-1000 text-base font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-pink-500  hover:to-indigo-600 "
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600  to-pink-500 duration-1000 text-base font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-pink-500  hover:to-indigo-600 "
          to="/skill"
        >
          Skill
        </Link>
      </li>
      <li>
        <Link
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600  to-pink-500 duration-1000 text-base font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-pink-500  hover:to-indigo-600 "
          to="/project"
        >
          Project
        </Link>
      </li>
      <li>
        <Link
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600  to-pink-500 duration-1000 text-base font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-pink-500  hover:to-indigo-600 "
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600  to-pink-500 duration-1000 text-base font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-pink-500  hover:to-indigo-600 "
          to="/resume"
        >
          Resume
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed bg-opacity-90 z-30 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base "
          >
            {/* <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li> */}
            {navItems}
          </ul>
        </div>
        <a className="text-xl">samaul</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-base ">
          {/* <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li> */}
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <img
            src="https://lh3.googleusercontent.com/ogw/AGvuzYadiNflVgNrueD7PkfCAaqtrMscQH9q6vGgkKU_xg=s64-c-mo"
            alt=""
            className="rounded-full w-12 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
