// NavBar.jsx
import { useState } from "react";
import { FaLine } from "react-icons/fa";

function NavBarTop() {
  const [language, setLanguage] = useState("TH");

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    console.log("Selected language:", lang);
    // ตรงนี้สามารถเพิ่ม logic เปลี่ยนเนื้อหาเว็บตามภาษา
  };

  return (
    <div className="nav-top">
      <ul className="nav-left">
        <li>
          <label className="theme-switch">
            <input
              type="checkbox"
              id="toggle-mode"
              onChange={() => {
                document.body.classList.toggle("light-mode");
              }}
            />
            <span className="slider"></span>
          </label>
        </li>
      </ul>

      <ul>
        <li>
          <p style={{ fontSize: "20px", fontWeight: "400" }}>
            Tel: 098-923-2424
          </p>
        </li>
        <a
          href="https://lin.ee/WSgSvsl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ border: "none", textDecoration: "none" }}
        >
          <FaLine size={30} />
        </a>
        <div className="containner-league">
          <h3
            onClick={() => handleChangeLanguage("TH")}
            style={{
              cursor: "pointer",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor:
                language === "TH" ? "var(--primary)" : "transparent",
            //   color: language === "TH" ? "#fff" : "#000",
            }}
          >
            ไทย
          </h3>
          <h3
            onClick={() => handleChangeLanguage("EN")}
            style={{
              cursor: "pointer",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor:
                language === "EN" ? "var(--primary)" : "transparent",
            //   color: language === "EN" ? "#fff" : "#000",
              marginLeft: "5px",
            }}
          >
            EN
          </h3>
        </div>
      </ul>
    </div>
  );
}

export default NavBarTop;

