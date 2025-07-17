import React, { useEffect } from "react";
import darkModeIcon from "../assets/dark-mode.png";
import lightModeIcon from "../assets/light-mode.png";

const DarkLightToggle = () => {
  //on first mount we initialize the dark/light toggle button's img to match with the current theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.getElementById("DarkLightImg").src = lightModeIcon;
    } else {
      document.getElementById("DarkLightImg").src = darkModeIcon;
    }
  }, []);
  return (
    // defining the behavior of the toggle dark/light button
    <button
      onClick={() => {
        let currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
          document.documentElement.classList.remove("dark");
          document.getElementById("DarkLightImg").src = darkModeIcon;
          localStorage.setItem("theme", "light");

          //fixes incorrect styling on mobile
          document.documentElement.style.display = "flex";
          requestAnimationFrame(() => {
            document.documentElement.style.display = "";
          });
        } else {
          document.documentElement.classList.add("dark");
          document.getElementById("DarkLightImg").src = lightModeIcon;
          localStorage.setItem("theme", "dark");

          //fixes incorrect styling on mobile
          document.documentElement.style.display = "flex";
          requestAnimationFrame(() => {
            document.documentElement.style.display = "";
          });
        }
      }}
      className="toggleDarkLightBtn"
    >
      <img id="DarkLightImg" src={darkModeIcon} alt="Toggle dark/light mode" />
    </button>
  );
};

export default DarkLightToggle;
