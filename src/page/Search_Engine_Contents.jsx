import { useEffect } from "react";
import Preface from "../components/content/Search_Engine/Search_Engine_content.jsx";
import Contact from "../components/Contact";

function Search_Engine_Optimization() {
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

export default Search_Engine_Optimization;
