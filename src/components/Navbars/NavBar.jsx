// ์NavBar.jsx
import { useState } from "react";
import "./Css/navbar.css";

import NavBarbottom from "./Navbarbottom";
import NavBarTop from "./Navbartop";
import Banner from "../Banners";

function NavBar() {
  return (
    <nav className="nav">
      <Banner />
      <NavBarTop />
      <NavBarbottom />
    </nav>
  );
}
export default NavBar;
