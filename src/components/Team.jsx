import num1 from '../assets/img/profile/06.jpg'
import num2 from '../assets/img/profile/01.jpg'
import num3 from '../assets/img/profile/07.jpg'
import num4 from '../assets/img/profile/03.jpg'
import num5 from '../assets/img/profile/02.jpg'
import num6 from '../assets/img/profile/09.jpg'
import num7 from '../assets/img/profile/04.jpg'
import num8 from '../assets/img/profile/08.jpg'
import num9 from '../assets/img/profile/10.jpg'
import num10 from '../assets/img/profile/05.jpg'
const teamMembers = [
  { name: "คุณเนตร แก้วปัญญา แซ่กอ", img: num1, position: "Manager Develop Ai" },
  { name: "คุณก้อง ธิติ ทรัพธนาธร", img: num2, position: "Manager Develop Ai" },
  { name: "คุณมาย อัจฉรา โคตรก่ำ", img: num3, position: "Manager Develop Ai" },
  { name: "คุณฐานิตา กิจศิริ", img: num4, position: "Manager Develop Ai" },
  { name: "คุณน๊อต นฤเบศปริญญานันทการ", img: num5, position: "Manager Develop Ai" },
  { name: "คุณส้มสุชาดา บุตรรม", img: num6, position: "Manager Develop Ai" },
  { name: "น้องเติ้ล ", img: num7, position: "Manager Develop Ai" },
  { name: "น้องสตางค์", img: num8, position: "Manager Develop Ai" },
  { name: "พี่เอิร์ธ ภานุพงศ์​ เศษวงศ์ ", img: num9, position: "Manager Develop Ai" },
  { name: "พี่ตัง เอกลักษณ์ กันยวม ", img: num10, position: "Manager Develop Ai" },
]

function Team() {
  return (
    <section id="team">
      <div className="section-content">
        <h2>ทีมงานของเรา</h2>
        <p>เราคือกลุ่มคนที่เชี่ยวชาญด้านความคิดสร้างสรรค์ เทคโนโลยี และกลยุทธ์ดิจิทัล</p>
      </div>
      <div className="team-scroll-wrapper">
        <div className="team-scroll">
          {teamMembers.map((member, idx) => (
            <div className="team-member" key={idx}>
              <img src={member.img} alt={member.name} />
              {/* <p>{member.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Team