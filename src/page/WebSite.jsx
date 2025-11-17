import { useEffect } from "react";
import Web_Development_content from "../components/web_development/web_development_content";
import Contact from "../components/Contact";

function WebSite() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Web_Development_content />
      <Contact />
    </main>
  );
}

export default WebSite;
