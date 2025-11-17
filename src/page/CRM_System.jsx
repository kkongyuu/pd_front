import { useEffect } from "react";
import CRM_System_content from "../components/CRM_System/CRM_System_content";
import Contact from "../components/Contact";

function CRM_Systems() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <CRM_System_content />
      <Contact />
    </main>
  );
}

export default CRM_Systems;
