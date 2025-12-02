import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo/logo.png";
// import "../components/Css/navbar.css";

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

const Works = [
  { text: "รวมผลงาน", Link: "/performance" },
  { text: "กรณีศึกษา", Link: "" },
];

const tools = [
  { text: "AI Tools", Link: "" },
  { text: "SEO Tools", Link: "" },
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

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <div className="nav-bottom">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul>
        <li>
          <img src={Logo} alt="Logo" className="icon-nav" />
        </li>
        <li>
          <Link to="/" className="brand">
            PD Marketing Innovate
          </Link>
        </li>
      </ul>

      <div>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {/* บริการของเรา */}
          <li
            className={`dropdown ${
              activeDropdown === "services" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("services")}
          >
            <span>บริการของเรา ▼</span>
            <ul className="dropdown-menu">
              {Services.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* ผลงานลูกค้า */}
          <li
            className={`dropdown ${activeDropdown === "works" ? "active" : ""}`}
            onClick={() => toggleDropdown("works")}
          >
            <span>ผลงานลูกค้า ▼</span>
            <ul className="dropdown-menu">
              {Works.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* เครื่องมือการตลาด */}
          <li
            className={`dropdown ${activeDropdown === "tools" ? "active" : ""}`}
            onClick={() => toggleDropdown("tools")}
          >
            <span>เครื่องมือการตลาด ▼</span>
            <ul className="dropdown-menu">
              {tools.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* คำแนะนำธุรกิจ */}
          <li
            className={`dropdown ${
              activeDropdown === "advice" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("advice")}
          >
            <span>คำแนะนำธุรกิจ ▼</span>
            <ul className="dropdown-menu">
              {advice.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* เกี่ยวกับเรา */}
          <li
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={() => toggleDropdown("about")}
          >
            <span>เกี่ยวกับเรา ▼</span>
            <ul className="dropdown-menu">
              {about.map((item, index) => (
                <li key={index}>
                  <Link to={item.Link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarbottom;
