import React, { useState } from "react";
import dark from "./imgs/moon (1).svg";

function DarkLight() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262626";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#e3f2fd";
    }
  };

  return (
    <div>
      <img src={dark} alt="dark" onClick={toggleMode} />
    </div>
  );
}

export default DarkLight;
