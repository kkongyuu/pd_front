function NavBar() {
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
        <li><a href="#" className="brand">PD Marketing</a></li>
      </ul>
      <ul className="nav-right">
        <li><a href="#services">บริการ</a></li>
        <li><a href="#team">ทีมงาน</a></li>
        <li><a href="#contact" className="cta">ติดต่อ</a></li>
      </ul>
    </nav>
  )
}
export default NavBar