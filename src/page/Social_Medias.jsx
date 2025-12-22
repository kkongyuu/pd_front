import { useEffect } from "react";
import Social_Media_content from "../components/content/Social_Media/Social_Media_content.jsx";
import Contact from "../components/Contact";

function Social_Medias() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Social_Media_content />
      <Contact />
    </main>
  );
}

export default Social_Medias;
