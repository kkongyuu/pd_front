import { useState } from "react"
import { Link } from "react-router-dom"

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <ul className="nav-left">
        <li>
          <label className="theme-switch">
            <input type="checkbox" id="toggle-mode" onChange={() => {
              document.body.classList.toggle('light-mode')
            }} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
      <ul className="nav-center">
        <li><Link to="/" className="brand">PD Marketing</Link></li>
      </ul>

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <ul className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/package">แพ็คเกจ</Link></li>
        <li><Link to="/current">ผลงาน</Link></li>
        <li><Link to="/contact" className="cta">ติดต่อ</Link></li>
      </ul>
    </nav>
  )
}
export default NavBar