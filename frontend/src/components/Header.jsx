import React from "react";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// import from Redux
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* header text */}
        <Link to="/">
          <h1 className="font-bold text-sm flex flex-wrap sm:text-xl">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        {/* header input */}
        <form className="flex items-start bg-slate-100 p-3 rounded-lg w-24 sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-500" />
        </form>
        {/* header links */}
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="avatar"
              />
            ) : (
              <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
