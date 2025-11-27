import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Css/floatingMenuCss.css";
import Line from "../assets/img/floating/Line.png"; //900x473
import Call from "../assets/img/floating/call.jpg"; //980x980
import weChat from "../assets/img/floating/weChat.png"; //800x800
import Email from "../assets/img/floating/Email.webp"; // 980x980

function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const menuItems = [
    {
      image: Call,
      label: "Call: 098-923-2424",
      action: () => (window.location.href = "tel:0989232424"),
      showLabel: true,
    },
    {
      image: Line,
      label: "Line Official",
      action: () => window.open("https://lin.ee/N9FS2N9O", "_blank"),
      showLabel: true,
    },
    {
      image: weChat,
      label: "WeChat: pd.marketinginnovate",
      action: () => alert("WeChat clicked!"),
      showLabel: true,
    },
    {
      image: Email,
      label: "Email: pd.marketinginnovate@gmail.com",
      action: () =>
        (window.location.href = "mailto:pd.marketinginnovate@gmail.com"),
      showLabel: true,
    },
  ];

  return (
    <div className="floating-menu">
      {open &&
        menuItems.map((item, index) => (
          <div
            key={index}
            className="fab-wrapper"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.showLabel && (
              <span className="fab-tooltip">{item.label}</span>
            )}
            <button className="fab-sub" onClick={item.action}>
              <img src={item.image} alt={item.label} className="fab-icon-img" />
            </button>
          </div>
        ))}
      <button className="fab" onClick={toggleMenu}>
        <FaBars size={20} />
      </button>
    </div>
  );
}

export default FloatingMenu;
