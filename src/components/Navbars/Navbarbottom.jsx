import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo.png";
import "./Css/navbottom.css";

const Services = [
  { text: "การตลาดออนไลน์ (Digital Marketing Strategy)", Link: "/marketing" },
  { text: "โฆษณาออนไลน์ (Online Advertising)", Link: "/advertising" },
  { text: "SEO", Link: "/search_engine" },
  { text: "Social Media Marketing", Link: "/social_media" },
  {
    text: "กราฟิกและออกแบบสื่อ (Graphic Design & Creative Content)",
    Link: "/graphics",
  },
  { text: "Content Marketing", Link: "/content_marketing" },
  { text: "Website", Link: "/website" },
  { text: "CRM", Link: "/crm_systems" },
];

const Works = [{ text: "รวมผลงาน", Link: "/performance" }];

const tools = [
  { text: "Facebook Ads", Link: "" },
  { text: "Google Ads", Link: "" },
  { text: "SWOT Analysis", Link: "" },
  { text: "STP (Segmentation, Targeting, Positioning)", Link: "" },
  { text: "Marketing Mix (4Ps / 7Ps)", Link: "" },
  { text: "Content Marketing", Link: "" },
  { text: "CRM (Customer Relationship Management)", Link: "" },
];

const advice = [
  { text: "บทความธุรกิจ", Link: "" },
  { text: "เคล็ดลับการตลาด", Link: "" },
];

const about = [
  { text: "ทีมงาน", Link: "" },
  { text: "พันธกิจของเรา", Link: "" },
];

function NavBarbottom() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navWrapperRef = useRef(null);

  // ฟังก์ชันสลับการแสดง Dropdown เมนูย่อย
  const toggleDropdown = (e, menuName) => {
    e.stopPropagation(); // หยุดการส่งต่อ event ไปยังพื้นหลัง
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  // ฟังก์ชันปิด Sidebar ทั้งหมด
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // จัดการ Scroll พื้นหลังเมื่อเปิดเมนู
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // ตรวจจับการคลิกข้างนอกเพื่อปิดเมนู
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navWrapperRef.current &&
        !navWrapperRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // แก้ไขฟังก์ชันการ Render Logo
  const renderSectionlogo = () => {
    return (
      // เพิ่ม return ตรงนี้
      <ul className="nav-logo-section">
        <li>
          <img src={Logo} alt="Logo" className="icon-nav" />
        </li>
        <li>
          <Link to="/" className="brand" onClick={closeMenu}>
            PD Marketing Innovate
          </Link>
        </li>
      </ul>
    );
  };

  const renderSectionFooter = () => {
    return (
      <div className="footer-section">
        <div className="footer-containner">
          <div className="footer-left">
            <h2>ที่อยู่</h2>
            <p>
              2/19-21 โครงการเวร่า ถ.รามคำแหง แขวงราษฎร์พัฒนา เขตสะพานสูง
              กรุงเทพมหานคร 10240
            </p>
          </div>
          <div className="footer-right">
            <h2>ติดต่อ</h2>
            <p>
              <strong>Tel :</strong>{" "}
              <a
                href="tel:0989232424"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                098-9232424
              </a>
            </p>

            <p>
              <strong>Facebook :</strong>{" "}
              <a
                href="https://www.facebook.com/PDinnovates?locale=th_TH"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                PD Marketinginnovate
              </a>
            </p>

            <p>
              <strong>Email :</strong>{" "}
              <a
                href="mailto: Pdmarketinginnovate@gamil.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Pdmarketinginnovate@gamil.com
              </a>
            </p>

            <p>
              <strong>Line :</strong>{" "}
              <a
                href="https://lin.ee/Z0QkSgU"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                @pdmarketing
              </a>
            </p>
          </div>
        </div>
        <p>© 2024 PD Marketing Innovate. All rights reserved.</p>
      </div>
    );
  };

  return (
    <div className="nav-bottom" ref={navWrapperRef}>
      {/* Overlay พื้นหลังดำจางๆ */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {renderSectionlogo()}

      <div className="nav-menu-container">
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <div className="sider-header">{renderSectionlogo()}</div>
          {/* บริการของเรา */}

          <p className="sider-menu">Menu</p>
          <li
            className={`dropdown ${
              activeDropdown === "services" ? "active" : ""
            }`}
            onClick={(e) => toggleDropdown(e, "services")}
          >
            <span>บริการของเรา ▼</span>
            <ul className="dropdown-menu">
              {Services.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link} onClick={closeMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* ผลงานลูกค้า */}
          <li
            className={`dropdown ${activeDropdown === "works" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "works")}
          >
            <span>ผลงานลูกค้า ▼</span>
            <ul className="dropdown-menu">
              {Works.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link} onClick={closeMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* เครื่องมือการตลาด */}
          <li
            className={`dropdown ${activeDropdown === "tools" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "tools")}
          >
            <span>เครื่องมือการตลาด ▼</span>
            <ul className="dropdown-menu">
              {tools.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link} onClick={closeMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* คำแนะนำธุรกิจ */}
          <li
            className={`dropdown ${
              activeDropdown === "advice" ? "active" : ""
            }`}
            onClick={(e) => toggleDropdown(e, "advice")}
          >
            <span>คำแนะนำธุรกิจ ▼</span>
            <ul className="dropdown-menu">
              {advice.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link} onClick={closeMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* เกี่ยวกับเรา */}
          <li
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "about")}
          >
            <span>เกี่ยวกับเรา ▼</span>
            <ul className="dropdown-menu">
              {about.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link} onClick={closeMenu}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              ติดต่อเรา
            </Link>
          </li>

          {/* <div className="sider-footer">{renderSectionFooter()}</div> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBarbottom;
