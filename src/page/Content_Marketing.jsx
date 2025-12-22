import { useEffect } from "react";
import Content_marketing from "../components/content/content_marketing/contents_marketing.jsx";
import Contact from "../components/Contact";

function Contents_Marketing() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Content_marketing />
      <Contact />
    </main>
  );
}

export default Contents_Marketing;
