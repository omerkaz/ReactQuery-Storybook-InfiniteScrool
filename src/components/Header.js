import React from "react";
import { FcLibrary } from "react-icons/fc";
import "./Header.css";

function Header() {
  return (
    <h1 className="header">
      <span
        data-testid="secondEl" style={{ marginTop: "5px", display: "flex", justifyContent: "center" }}
      >
        <FcLibrary data-testid="thirdEl"></FcLibrary>
      </span>
      Neverland Music Library
    </h1>
  );
}

export default Header;
