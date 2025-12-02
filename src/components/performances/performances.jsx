import React from "react";
import "./css/perforCss.css";
// 1. Import all images
import yuencare from "../../assets/img/performances/yuencare.jpg";
import uniquecare from "../../assets/img/performances/uniquecare.jpg";
import healthyshop from "../../assets/img/performances/healthyshop.jpg";
import luxu from "../../assets/img/performances/luxu.jpg";
import dreamlab from "../../assets/img/performances/dreamlab.jpg";
import misswellness from "../../assets/img/performances/misswellness.jpg";
import ledream from "../../assets/img/performances/ledream.jpg";

// 2. Create an array of the imported image variables
const performancesData = [
  yuencare,
  uniquecare,
  healthyshop,
  luxu,
  dreamlab,
  misswellness,
  ledream,
];

const Performances = () => {
  return (
    <div className="containner-performance">
      <h1>ผลงานของเรา</h1>
      <div className="performance-grid">
        {performancesData.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Performance Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Performances;
