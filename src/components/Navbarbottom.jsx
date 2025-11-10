import { useState } from "react";
import { Link } from "react-router-dom";


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
          <Link to="/" className="brand">
            PD Marketing Innovate
          </Link>
        </li>
      </ul>

      <div>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li
            className={`dropdown ${
              activeDropdown === "services" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("services")}
          >
            <span>บริการของเรา ▼</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/ads">โฆษณาออนไลน์</Link>
              </li>
              <li>
                <Link to="/branding">สร้างแบรนด์</Link>
              </li>
              <li>
                <Link to="/web">ออกแบบเว็บไซต์</Link>
              </li>
            </ul>
          </li>

          <li
            className={`dropdown ${activeDropdown === "works" ? "active" : ""}`}
            onClick={() => toggleDropdown("works")}
          >
            <span>ผลงานลูกค้า ▼</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/portfolio">รวมผลงาน</Link>
              </li>
              <li>
                <Link to="/case-study">กรณีศึกษา</Link>
              </li>
            </ul>
          </li>

          <li
            className={`dropdown ${activeDropdown === "tools" ? "active" : ""}`}
            onClick={() => toggleDropdown("tools")}
          >
            <span>เครื่องมือการตลาด ▼</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/ai-tools">AI Tools</Link>
              </li>
              <li>
                <Link to="/seo-tools">SEO Tools</Link>
              </li>
            </ul>
          </li>

          <li
            className={`dropdown ${
              activeDropdown === "advice" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("advice")}
          >
            <span>คำแนะนำธุรกิจ ▼</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/articles">บทความธุรกิจ</Link>
              </li>
              <li>
                <Link to="/tips">เคล็ดลับการตลาด</Link>
              </li>
            </ul>
          </li>

          <li
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={() => toggleDropdown("about")}
          >
            <span>เกี่ยวกับเรา ▼</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/team">ทีมงาน</Link>
              </li>
              <li>
                <Link to="/mission">พันธกิจของเรา</Link>
              </li>
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
