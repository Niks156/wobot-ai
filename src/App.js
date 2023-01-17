import React from "react";
import Formcard from "./components/Formcard";
import "./App.css";

export default function App() {
  return (
    <div className="main-container">
      <div className="logo">
        <img
          src={require("./img/logo.png")}
          alt="wobot"
          height={36.02}
          width={160}
        />
      </div>
      <div className="form-container flex">
        <div className="left-container"></div>
        <div className="form">
          <Formcard />
        </div>
        <div className="right-container"></div>
      </div>
      <div className="footer-container flex">
        <span>Terms of use |</span>
        {' '}
        <span>Privacy policy</span>
      </div>
    </div>
  );
}