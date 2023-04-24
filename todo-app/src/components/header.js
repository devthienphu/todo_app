import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../imgs/logo.svg";
import { getUser } from "../api/userApi";

const Header = ({ id }) => {
  // const userList= useContext(AddContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      setUser(await getUser(id));
    })();
  }, [id]);
  return (
    <>
      <div className="h-screen w-72 gap-y-4 flex flex-col p-4 rounded-xl items-center border shadow shadow-xl">
        {/* logo */}
        <img src={logo} alt="logo" className="w-32 pt-4"></img>

        {/* user */}
        <div className="flex flex-row gap-x-3 border-b-2 border-[#a18aff] pb-6 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="flex flex-col">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600 italic">@{user.username}</p>
          </div>
        </div>

        {/* option */}
        <Link
          to={"/"}
          className="flex flex-row gap-x-3 items-center hover:bg-gray-100 w-full pl-8 rounded-full font-semibold hover:font-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>

          <p className="">Logout</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
