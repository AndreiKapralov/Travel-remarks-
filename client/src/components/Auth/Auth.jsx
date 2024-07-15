import axios from "axios";
import React from "react";
import { useState } from "react";
import { useUser } from "../context/userContext";
import { setAccessToken } from "../../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();
  const [authForm, setAuthForm] = useState({ email: "", password: "" });

  const { user, setUser } = useUser();

  const sendAuthForm = async (e) => {
    e.preventDefault();
    const data = await axios.post("/api/auth/login", authForm);
    if (data.status === 200) {
      console.log(user);
      setUser(data.data.user);
      setAccessToken(data.data.accessToken);
      navigate("/privatCabin");
    }
  };

  return (
    <div className="main">
      <h1>Вход в личный кабинет</h1>
      <form onSubmit={(e) => sendAuthForm(e)}>
        <input
          placeholder="email"
          onChange={(e) =>
            setAuthForm((prev) => ({ ...prev, email: e.target.value }))
          }
        ></input>
        <input
          placeholder="password"
          onChange={(e) =>
            setAuthForm((prev) => ({ ...prev, password: e.target.value }))
          }
        ></input>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Auth;
