// NavBar.jsx
import { useState } from "react";
import { FaLine } from "react-icons/fa";
// import "../components/Css/navbar.css"
import { useNavigate } from "react-router-dom";

function NavBarTop() {
  const [language, setLanguage] = useState("TH");
  const navigate = useNavigate();

  const translateTo = (lang) => {
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
    }
  };

  const softReload = () => {
    navigate(0); // React Router reload UI แต่ไม่ reload tab
  };

  const resetTranslate = () => {
    // ลบ cookie
    document.cookie =
      "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    document.cookie = `googtrans=;domain=${window.location.hostname};path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;

    // Soft Reload เฉพาะหน้า React
    softReload();
  };

  const handleChangeLanguage = (lang) => {
    console.log("ภาษาเดิมก่อนเปลี่ยนคือ:", language);
    console.log("กำลังเปลี่ยนเป็น:", lang);

    setLanguage(lang);

    // สั่ง Google Translate
    if (lang === "EN") {
      translateTo("en"); // แปลเป็นอังกฤษ
    } else if (lang === "TH") {
      resetTranslate(); // ปิดการแปล
    }
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

      <ul
      //  className="nav-right"
      >
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

        {/* ปุ่มเลือกภาษา */}
        <div className="containner-league">
          <h3
            onClick={() => handleChangeLanguage("TH")}
            style={{
              cursor: "pointer",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor:
                language === "TH" ? "var(--primary)" : "transparent",
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
