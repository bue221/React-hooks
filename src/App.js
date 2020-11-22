import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Caracteres from "./components/Caracter";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onClick = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode && "App"}>
      <Header darkMode={darkMode} onClick={onClick} />
      <Caracteres darkMode={darkMode} />
    </div>
  );
};

export default App;
