import { useEffect } from "react";
import Contact from "../components/Contact";
import Content_Graphuics from "../components/Graphic/Graphics";

function Graphics() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Content_Graphuics />
      <Contact />
    </main>
  );
}

export default Graphics;
