import { useMemo } from "react";
import "./Css/workingwith.css";
import uniquecare from "../../assets/img/we_work/uniquecare.png";
import assetelearning from "../../assets/img/we_work/assetelearning.png";
import healthyshop from "../../assets/img/we_work/360healthy.png";
import bizconnect from "../../assets/img/we_work/Bizconnect.png";
import careuhome from "../../assets/img/we_work/careuhome.png";
import dreamLAb from "../../assets/img/we_work/dreamLAb.png";
import rmed from "../../assets/img/we_work/Rmed.png";
import ghealth from "../../assets/img/we_work/Ghealth.png";
import ledream from "../../assets/img/we_work/ledream.png";
import medjob from "../../assets/img/we_work/medjob.png";
import pd from "../../assets/img/we_work/PD.png";
import ppdd from "../../assets/img/we_work/ppdd.png";
import prizemed from "../../assets/img/we_work/prizemed.png";
import youencare from "../../assets/img/we_work/youencare.png";

const company = [
  uniquecare,
  assetelearning,
  healthyshop,
  bizconnect,
  careuhome,
  dreamLAb,
  rmed,
  ghealth,
  ledream,
  medjob,
  pd,
  ppdd,
  prizemed,
  youencare,
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function WorkingWith() {
  // ใช้ useMemo เพื่อ shuffle แค่ครั้งเดียวตอน mount
  const shuffledRows = useMemo(() => {
    return [
      shuffleArray(company),
      shuffleArray(company),
      shuffleArray(company),
      shuffleArray(company),
    ];
  }, []);

  return (
    <div className="homeworking-container">
      <h2>WE WORK WITH</h2>
      <div className="homeworking-content">
        {shuffledRows.map((row, rowIdx) => (
          <div className="homeworking-slider" key={`row-${rowIdx}`}>
            <div
              className={`slider-track ${
                rowIdx % 2 === 0 ? "scroll-up" : "scroll-down"
              }`}
            >
              {row.map((imgSrc, idx) => (
                <img
                  key={`row${rowIdx}-img${idx}`}
                  src={imgSrc}
                  alt={`company-${idx}`}
                />
              ))}
              {row.map((imgSrc, idx) => (
                <img
                  key={`row${rowIdx}-img-duplicate${idx}`}
                  src={imgSrc}
                  alt={`company-${idx}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingWith;
