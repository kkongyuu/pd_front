import { useState } from "react";
import "./Css/slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import marketing from "../assets/img/service/marketing.png";
import online from "../assets/img/service/online.png";
import graphic from "../assets/img/service/Graphic_Design.png";
import content from "../assets/img/service/content.jpg";
import social from "../assets/img/service/social.jpg";
import seo from "../assets/img/service/seo.jpg";
import website from "../assets/img/service/website.jpg";
import crm from "../assets/img/service/customer_service.png";

const services = [
  { img: marketing, text: "การตลาดออนไลน์ (Digital Marketing Strategy)" },
  { img: online, text: "โฆษณาออนไลน์ (Online Advertising)" },
  {
    img: graphic,
    text: "กราฟิกและออกแบบสื่อ (Graphic Design & Creative Content)",
  },
  { img: content, text: "Content Marketing" },
  { img: social, text: "Social Media Marketing" },
  { img: seo, text: "SEO" },
  { img: website, text: "Website" },
  { img: crm, text: "ระบบบริหารลูกค้า (CRM System)" },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  // สร้าง array ที่มีการทำซ้ำเพื่อให้เกิด infinite loop effect
  const extendedServices = [...services, ...services, ...services];
  const startIndex = services.length; // เริ่มที่ชุดกลาง

  const [slideIndex, setSlideIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const prevSlide = () => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setSlideIndex((prev) => prev + 1);
  };

  // จัดการการวนกลับเมื่อถึงจุดสุดท้าย
  const handleTransitionEnd = () => {
    if (slideIndex >= startIndex + services.length) {
      setIsTransitioning(false);
      setSlideIndex(startIndex);
    } else if (slideIndex < startIndex) {
      setIsTransitioning(false);
      setSlideIndex(startIndex + services.length - 1);
    }
  };

  return (
    <section className="services-section">
      <h2>บริการของเรา</h2>
      <div className="services-slider">
        {/* Previous Button */}
        <button onClick={prevSlide} className="slider-btn prev">
          <FaArrowLeft size={20} color="var(--text)" />
        </button>

        {/* Slider Container */}
        <div className="slider-container">
          <div
            className="slider-images"
            style={{
              transform: `translateX(-${slideIndex * (100 / visibleCount)}%)`,
              transition: isTransitioning
                ? "transform 0.7s ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedServices.map((service, idx) => {
              // แยกข้อความไทยและอังกฤษ
              const match = service.text.match(/^(.*?)\s*\((.*?)\)$/);
              const thaiText = match ? match[1] : service.text;
              const engText = match ? match[2] : "";

              return (
                <div key={idx} className="slide-item">
                  <div className="service-card">
                    <img src={service.img} alt={service.text} />
                    <div className="service-title">
                      <div className="thai-text">{thaiText}</div>
                      {engText && <div className="eng-text">{engText}</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <button onClick={nextSlide} className="slider-btn next">
          <FaArrowRight size={20} color="var(--text)" />
        </button>
      </div>
    </section>
  );
}

export default Services;
