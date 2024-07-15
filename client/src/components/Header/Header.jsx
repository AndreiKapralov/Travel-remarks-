import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../../services/axiosInstance";
import axios from "axios";

import "./Header.css";

function Header() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const onHandleLogOut = async () => {
    const { data } = await axios.get("api/auth/logout");
    if (data.message === "success") {
      setAccessToken(undefined);
      setUser(undefined);
      navigate("/authorization");
    }
  };

  return (
    <div className="general">
      {user ? (
        <>
          <Link className="link" to="mainPage">
            Главная страница
          </Link>
          <Link className="link" to="privatCabin">
            Личный кабинет
          </Link>
          <Link className="link" onClick={() => onHandleLogOut()}>
            Выход
          </Link>
        </>
      ) : (
        <>
          <Link className="link" to="mainPage">
            Главная страница
          </Link>
          <Link className="link" to="privatCabin">
            Личный кабинет
          </Link>
          <Link className="link" to="registration">
            Регистрация
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
