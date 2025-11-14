// ์NavBar.jsx
import { useState } from "react";
// import "../components/Css/navbar.css";s
import NavBarbottom from "./Navbarbottom";
import NavBarTop from "./Navbartop";

function NavBar() {
  return (
    <nav className="nav">
      <NavBarTop />
      <NavBarbottom />
    </nav>
  );
}
export default NavBar;
