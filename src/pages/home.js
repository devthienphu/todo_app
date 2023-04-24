import { useContext } from "react";

import { AddContext } from "../App";
import logo from "../imgs/logo.svg";
import UserItem from "../components/userItem";
const Home = () => {
  const userList = useContext(AddContext);
  return (
    <div className="bg-gray-100 h-screen flex flex-col ">
      <img src={logo} className="max-w-[150px] mx-auto pt-32" alt="logo"></img>
      <p className="text-4xl font-bold text-emerald-600 text-center pb-6 pt-4">
        Todo app
      </p>
      <p className="text-center italic">Select your account profile</p>
      {/* User */}

      <div className="flex flex-row flex-wrap gap-3 py-8  px-32 justify-center overflow-hidden overflow-y-auto overflow-auto max-h-[500px] ">
        {userList.map((user, key) => (
          <UserItem user={user} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Home;
