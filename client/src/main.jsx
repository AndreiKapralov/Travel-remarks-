import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./components/context/userContext";
import App from "./App.jsx";
import MainPage from "./components/MainPage/MainPage";
import Auth from "./components/Auth/Auth";
import Registration from "./components/Registarition/Registration";
import PrivatCabin from "./components/PrivatCabin/PrivatCabin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <App></App>
      </UserProvider>
    ),
    children: [
      {
        path: "mainPage",
        element: <MainPage></MainPage>,
      },
      {
        path: "privatCabin",
        element: <PrivatCabin></PrivatCabin>,
      },
      {
        path: "authorization",
        element: <Auth></Auth>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
