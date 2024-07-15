import React from "react";
import axiosInstance from "../../../services/axiosInstance";
import { useUser } from "../context/userContext";

import { useState } from "react";


import "./CreateForm.css";

function CreateForm() {
  const { user, setUser } = useUser();

  const [travelCard, setTravelCard] = useState({
    userId: null,
    place: "",
    photo: "",
    description: "",
    location: "",
  });

  const sendNewTravelCard = async (e) => {
    e.preventDefault();
    const data = await axiosInstance.post("/travel", travelCard);
  };

  return (
    <section className="main">
      <div className="title">
        <h1 className="name">{user.name}</h1>
        <h2>Добро пожаловать в личный кабинет </h2>
      </div>
      <form className="createForm" onSubmit={(e) => sendNewTravelCard(e)}>
        <p>Форма создания новой карточки с ваших путишесвтий</p>
        <input
          type="text"
          placeholder="place"
          onChange={(event) => {
            setTravelCard((prev) => ({
              ...prev,
              place: event.target.value,
            }));
          }}
        ></input>
        <input
          type="text"
          placeholder="photo"
          onChange={(event) => {
            setTravelCard((prev) => ({
              ...prev,
              photo: event.target.value,
            }));
          }}
        ></input>
        <input
          type="text"
          placeholder="description"
          onChange={(event) => {
            setTravelCard((prev) => ({
              ...prev,
              description: event.target.value,
            }));
          }}
        ></input>
        <input
          type="text"
          placeholder="lacation"
          onChange={(e) => {
            setTravelCard((prev) => ({
              ...prev,
              location: e.target.value,
            }));
          }}
        ></input>
        <button type="submit" placeholder="">
          отправить
        </button>
      </form>
    </section>
  );
}

export default CreateForm;
