import React from "react";
import { FcLibrary } from "react-icons/fc";
import { useSelector } from "react-redux";
import { getDarkMode } from "./headerSlice";
import { useDispatch } from "react-redux";
import { switchDarkMode } from "./headerSlice";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const darkMode = useSelector(getDarkMode);
  const dispatch = useDispatch();

  // console.log(darkMode)

  return (
    <>
      <Link to={`/`}>
        <h1 className="header">
          <span
            data-testid="secondEl"
            style={{
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FcLibrary data-testid="thirdEl"></FcLibrary>
          </span>
          Neverland Music Library
        </h1>
      </Link>
      <button
        className={darkMode ? "dark-mode-button-dark" : "dark-mode-button"}
        onClick={() => dispatch(switchDarkMode())}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </>
  );
}

export default Header;
