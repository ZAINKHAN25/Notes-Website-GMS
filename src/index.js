import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";
import SignUpPage from "./pages/SignUp.jsx";
import ClassAndSubjectPage from "./pages/ClassAndSubject.jsx";
import NoteImgPage from "./pages/NoteImg.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/classAndSubject/:id",
    element: <ClassAndSubjectPage />,
  },
  {
    path: "/note/:id",
    element: <NoteImgPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
