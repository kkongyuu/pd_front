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

      <ul >
        <li>
          <h2>Tel: 0989232424</h2>
        </li>
        <a
          href="https://lin.ee/WSgSvsl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ border: "none", textDecoration: "none" }}
        >
          <FaLine size={24} />
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

{
  /* <ul className={`nav-right ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/package">แพ็กเก็จ</Link>
        </li>
        <li>
          <Link to="/current">ผลงาน</Link>
        </li>
        <li>
          <Link to="/contact" className="cta">
            ติดต่อ
          </Link>
        </li>
      </ul> */
}

{
  /* <ul className="nav-center">
        <li>
          <Link to="/" className="brand">
            PD Marketing
          </Link>
        </li>
      </ul> */
}

{
  /* Hamburger button */
}
{
  /* <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button> */
}

// const [menuOpen, setMenuOpen] = useState(false);
