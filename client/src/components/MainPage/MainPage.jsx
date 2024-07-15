import React from "react";
import { useEffect, useState } from "react";
import axiosInstance from "../../../services/axiosInstance";
import { useUser } from "../context/userContext";
import { setAccessToken } from "../../../services/axiosInstance";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./MainPage.css";

function MainPage() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("api/travel");
    setForm(res.data);
  };

  return (
    <>
        <h1 className="title">
          Добро пожаловать на главную страницу
        </h1>
        <h2>Cписок интересных мест</h2>
        <div className="list">
          {form.map((card) => {
            return (
              <div key={card.id} className="card">
                <img className="image" src={card.photo}></img>
                <p>{card.description}</p>
                <p>{card.place}</p>
                <p>{card.location}</p>
              </div>
            );
          })}
        </div>
    </>
  );
}

export default MainPage;
