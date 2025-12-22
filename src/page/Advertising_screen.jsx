import { useEffect } from "react";
import Advertising from "../components/content/Advertising/Advertising.jsx";
import Contact from "../components/Contact";

function Advertising_screen() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Advertising />
      <Contact />
    </main>
  );
}

export default Advertising_screen;
