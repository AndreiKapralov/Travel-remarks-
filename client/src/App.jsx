import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [form, setForm] = useState([]);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  console.log(user);

  const getData = async () => {
    const res = await axios.get("api/travel");
    setForm(res.data);
  };

  const authUser = async (event) => {
    event.preventDefault();
    const res = await axios.post("api/auth/registration", user);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Site</h1>
      <h2>Зарегестрируйся</h2>
      <form
        onSubmit={(event) => {
          authUser(event);
        }}
      >
        <input
          type="text"
          placeholder="name"
          onChange={(event) => {
            setUser((prev) => ({ ...prev, name: event.target.value }));
          }}
        ></input>
        <input
          type="text"
          placeholder="surname"
          onChange={(event) => {
            setUser((prev) => ({ ...prev, surname: event.target.value }));
          }}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setUser((prev) => ({ ...prev, email: event.target.value }));
          }}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setUser((prev) => ({ ...prev, password: event.target.value }));
          }}
        ></input>
        <button type="submit">отправить</button>
      </form>
    </>
  );
}

export default App;
