import { useEffect } from "react";
import Performances from "../components/content/performances/performances.jsx";
import Contact from "../components/Contact";

function Performance() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Performances />
      <Contact />
    </main>
  );
}

export default Performance;
