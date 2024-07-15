import React from "react";
import axiosInstance from "../../../services/axiosInstance";
import { useUser } from "../context/userContext";
import { setAccessToken } from "../../../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import { useState, useEffect } from "react";
import CreateForm from "../CreateForm/CreateForm";
import "./PrivatCabin.css";

function PrivatCabin() {
  const { user, setUser } = useUser();

  const [onlyUserCards, setOnlyUserCards] = useState([]);

  const getAllUserCards = async () => {
    const data = await axiosInstance.get(`/travel/onlyUsers`);
    console.log(data);
  };

  useEffect(() => {
    getAllUserCards();
  }, []);

  return (
    <div className="main">
      {user ? (
        <>
          <CreateForm></CreateForm>
          <section>
            <p>Редактор ваших карточек</p>
          </section>
        </>
      ) : (
        <>
          <Auth></Auth>
        </>
      )}
    </div>
  );
}

export default PrivatCabin;
