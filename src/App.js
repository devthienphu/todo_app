import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

import Home from "./pages/home";
import User from "./pages/user";
import { getUsers } from "./api/userApi";

export const AddContext = createContext();

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line
      let tmp = setUsers(await getUsers());
    })();
  }, []);

  return (
    <AddContext.Provider value={users}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </AddContext.Provider>
  );
}

export default App;
