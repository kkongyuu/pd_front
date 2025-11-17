import { useState, useEffect } from "react";
import "./Css/slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import marketing from "../assets/img/service/marketing.png";
import online from "../assets/img/service/online.png";
import graphic from "../assets/img/service/Graphic_Design.png";
import content from "../assets/img/service/content.jpg";
import social from "../assets/img/service/social_latest.jpg";
import seo from "../assets/img/service/seo.jpg";
import website from "../assets/img/service/website_latest.jpg";
import crm from "../assets/img/service/customer_service.png";

const services = [
  {
    img: marketing,
    text: "การตลาดออนไลน์ (Digital Marketing Strategy)",
    link: "/marketing",
  },
  {
    img: online,
    text: "โฆษณาออนไลน์ (Online Advertising)",
    link: "/advertising",
  },
  {
    img: graphic,
    text: "กราฟิกและออกแบบสื่อ (Graphic Design & Creative Content)",
    link: "/graphics",
  },
  { img: content, text: "Content Marketing", link: "/content_marketing" },
  { img: social, text: "Social Media Marketing", link: "/social_media" },
  { img: seo, text: "SEO", link: "/search_engine" },
  { img: website, text: "Website", link: "/website" },
  { img: crm, text: "ระบบบริหารลูกค้า (CRM System)", link: "/crm_systems" },
];

function Services() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedServices = [...services, ...services, ...services];
  const startIndex = services.length;

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

  const handleTransitionEnd = () => {
    if (slideIndex >= startIndex + services.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(startIndex);
      }, 50);
    } else if (slideIndex < startIndex) {
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(startIndex + services.length - 1);
      }, 50);
    }
  };

  return (
    <div className="services-section">
      <h2>บริการของเรา</h2>
      <div className="services-slider">
        <button onClick={prevSlide} className="slider-btn prev">
          <FaArrowLeft size={20} />
        </button>

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
              const match = service.text.match(/^(.*?)\s*\((.*?)\)$/);
              const thaiText = match ? match[1] : service.text;
              const engText = match ? match[2] : "";
              return (
                <div className="slide-item" key={idx}>
                  <div className="service-card">
                    {service.link ? (
                      <Link to={service.link} className="slider-link">
                        <img src={service.img} alt={service.text} />
                        <div className="service-title">
                          <div className="thai-text">{thaiText}</div>
                          {engText && <div className="eng-text">{engText}</div>}
                        </div>
                      </Link>
                    ) : (
                      <div className="slider-link disabled">
                        <img src={service.img} alt={service.text} />
                        <div className="service-title">
                          <div className="thai-text">{thaiText}</div>
                          {engText && <div className="eng-text">{engText}</div>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={nextSlide} className="slider-btn next">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Services;
