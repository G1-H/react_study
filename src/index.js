import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chapter_3/Library";
import Clock from "./chapter_4/Clock";
import CommentList from "./chapter_5/CommentList";
import NotificationList from "./chapter_6/NotificationList";
import Accommodate from "./chapter_7/Accommodate";
import ConfirmButton from "./chapter_8/ConfirmButton";
import LandingPage from "./chapter_9/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import SignUp from "./chapter_11/SingUp";
import Calculator from "./chapter_12/Caculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
