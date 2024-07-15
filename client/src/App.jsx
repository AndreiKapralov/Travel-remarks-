import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import axiosInstance, { setAccessToken } from "../services/axiosInstance";
import { useEffect, useState } from "react";
import { useUser } from "./components/context/userContext";

import Header from "./components/Header/Header";

function App() {

  const { user, setUser } = useUser();

  console.log(user)

  const checkUser = async () => { 
    try {
      const { data } = await axiosInstance.get("/tokens/refresh");
      setUser(data.user);
      setAccessToken(data.accessToken);
    } catch (error) {
      console.error("Ошибка при обновлении токена:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export default App;
