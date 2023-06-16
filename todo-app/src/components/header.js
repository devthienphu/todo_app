import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";

const Header = () => {
  
  const active =()=>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('-translate-x-full');
  }

 
  return (
    <>
      {/* destop */}
      <div className="fixed top-0 left-0 bg-gray-100 z-20 sidebar h-screen w-72 gap-y-4 flex flex-col p-4 rounded-xl items-center border shadow shadow-xl
                    overflow-hidden transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0
      ">
        {/* logo */}
        {/* <img src={logo} alt="logo" className="w-32 pt-4"></img> */}

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
            <p className="font-semibold">Phu</p>
            <p className="text-gray-600 italic">Phu</p>
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

       {/* moblie menu */}
        
       <div className="bg-white flex z-10 justify-between md:hidden fixed top-0 right-0 left-0 rounded-b-xl shadow shadow-lg">
        <img src={logo} alt="logo" className="w-32 p-3"></img>

         <button className="moblie-menu-btn p-4 focus:outline-none focus:bg-gray-50" onClick={()=>{active()}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
         </button>
        </div>
    </>
  );
};

export default Header;
