import { useEffect } from "react";
import Preface from "../components/content/Digital_marketings/preface.jsx";
import Contact from "../components/Contact";

function Marketing() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Preface />
      <Contact />
    </main>
  );
}

export default Marketing;
