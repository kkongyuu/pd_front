// NavBar.jsx
import { useState } from "react";
import { FaLine } from "react-icons/fa";
// import "../components/Css/navbar.css"

function NavBarTop() {
  const [language, setLanguage] = useState("TH");

  const handleChangeLanguage = (lang) => {
    console.log("ภาษาเดิมก่อนเปลี่ยนคือ:", language);
    console.log("กำลังเปลี่ยนเป็น:", lang);

    setLanguage(lang);

    try {
      const combo = document.querySelector(".goog-te-combo");
      if (!combo) return;

      // เก็บค่าเดิมก่อนเปลี่ยน
      const oldValue = combo.value === "" ? "TH" : combo.value;
      console.log("ค่า combo.value เดิม:", oldValue);

      // เปลี่ยนค่า
      if (lang === "EN") {
        combo.value = "";
      } else {
        console.log("reset กลับภาษา default (ภาษาไทยจริง)");
        combo.value = ""; // reset กลับภาษา default
      }

      // log ค่าใหม่
      const newValue = combo.value === "" ? "TH" : combo.value;
      console.log("ค่า combo.value ใหม่:", newValue);

      combo.dispatchEvent(new Event("change"));
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเปลี่ยนภาษา:", error);
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
