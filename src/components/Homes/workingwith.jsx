import "../Css/homecss/workingwith.css";
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

function WorkingWith() {
  return (
    <div className="homeworking-container">
      <h2>WE WORK WITH</h2>
      <div className="homeworking-content">
        {/* แถว 1 - เลื่อนขึ้น */}
        <div className="homeworking-slider">
          <div className="slider-track scroll-up">
            {company.map((imgSrc, idx) => (
              <img key={`up1-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
            {company.map((imgSrc, idx) => (
              <img key={`up1-duplicate-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
          </div>
        </div>

        {/* แถว 2 - เลื่อนลง */}
        <div className="homeworking-slider">
          <div className="slider-track scroll-down">
            {company.map((imgSrc, idx) => (
              <img key={`down1-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
            {company.map((imgSrc, idx) => (
              <img key={`down1-duplicate-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
          </div>
        </div>

        {/* แถว 3 - เลื่อนขึ้น */}
        <div className="homeworking-slider">
          <div className="slider-track scroll-up">
            {company.map((imgSrc, idx) => (
              <img key={`up2-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
            {company.map((imgSrc, idx) => (
              <img key={`up2-duplicate-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
          </div>
        </div>

        {/* แถว 4 - เลื่อนลง */}
        <div className="homeworking-slider">
          <div className="slider-track scroll-down">
            {company.map((imgSrc, idx) => (
              <img key={`down2-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
            {company.map((imgSrc, idx) => (
              <img key={`down2-duplicate-${idx}`} src={imgSrc} alt={`company-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingWith;