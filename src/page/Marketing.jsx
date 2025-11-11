import { useEffect } from "react";
import Preface from "../components/marketings/preface.jsx";

function Marketing() {
  useEffect(() => {
    // เลื่อนไปที่ top ของหน้าเมื่อ component โหลด
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ถ้าอยากเลื่อนแบบ smooth
    });
  }, []);
  return (
    <main>
      <Preface />
    </main>
  );
}

export default Marketing;
