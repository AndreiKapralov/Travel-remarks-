import React, { useState } from "react";
import axios from "axios";
import { setAccessToken } from "../../../services/axiosInstance";
import { useUser } from "../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";

import "./Registration.css";

function Registration() {
  const { user, setUser } = useUser();
  const [validateForm, setValidateForm] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const navigate = useNavigate();

  const [userForm, setUserForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const createNewUser = async (event) => {
    event.preventDefault();
    if (
      userForm.name === "" ||
      userForm.surname ===""||
      userForm.email ===""||
      userForm.password === ""
    ) {
      setValidateForm(true);
      return;
    }
    if (userForm.password.length < 5) {
      setValidatePassword(true);
      return;
    }
    try {
      const data = await axios.post("api/auth/registration", userForm);
      console.log(data);
      setUser(data.data.user);
      setAccessToken(data.data.accessToken);
      navigate("/privatCabin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <p>Форма регистрации</p>
      <form
        onSubmit={(event) => {
          createNewUser(event);
        }}
      >
        <input
          type="text"
          placeholder="name"
          onChange={(event) => {
            setUserForm((prev) => ({ ...prev, name: event.target.value }));
          }}
        ></input>
        <input
          type="text"
          placeholder="surname"
          onChange={(event) => {
            setUserForm((prev) => ({ ...prev, surname: event.target.value }));
          }}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setUserForm((prev) => ({ ...prev, email: event.target.value }));
          }}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setUserForm((prev) => ({ ...prev, password: event.target.value }));
          }}
        ></input>
        {validateForm && <p className="reg-error">Заполните все поля</p>}
        {validatePassword && (
          <p className="reg-error">Пароль должен быть не менее 5 символов</p>
        )}
        <button type="submit">зарегестрируйся</button>
      </form>
    </>
  );
}

export default Registration;
