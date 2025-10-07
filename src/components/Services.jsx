const services = [
  {
    icon: "🤝",
    title: "CRM",
    desc: "ระบบบริหารจัดการความสัมพันธ์ลูกค้า ช่วยเก็บข้อมูล ติดตามการขาย ทำการตลาด และบริการหลังการขาย เพื่อสร้างความพึงพอใจและเพิ่มยอดขายให้ธุรกิจอย่างมีประสิทธิภาพ "
  },
  {
    icon: "🧑‍💼",
    title: "Consult",
    desc: "ให้คำปรึกษาด้านการตลาดแบบมืออาชีพ ช่วยวางกลยุทธ์ วางแผนการตลาด และเพิ่มโอกาสการขายให้ธุรกิจของคุณ สร้างผลลัพธ์ที่ชัดเจนและยั่งยืนในทุกแคมเปญ"
  },
  {
    icon: "💻",
    title: "Website",
    desc: "ออกแบบและพัฒนาเว็บไซต์ที่สวยงาม ใช้งานง่าย รองรับทุกอุปกรณ์ ช่วยสร้างภาพลักษณ์ที่น่าเชื่อถือและดึงดูดลูกค้า พร้อมปรับแต่งให้ตรงตามความต้องการของธุรกิจคุณ "
  },
  {
    icon: "🎬",
    title: "Video Production",
    desc: "บริการผลิตภาพนิ่ง และ VDO Content เต็มรูปแบบโดยทีมงานมืออาชีพ ตั้งแต่เริ่มต้นจนจบครบทุกกระบวนการ Create ผลงานหลากหลายแนว หลากหลายสไตล์ เพื่อให้ผลงาน และบริการของคุณเข้าถึงกลุ่มเป้าหมายได้อย่างชัดเจน และสื่อสารเรื่องราวสู่อินไซต์ที่แท้จริงของจุด"
  },
  {
    icon: "🌱",
    title: "Seeding Marketing",
    desc: "บริการ Seeding Marketing ช่วยสร้างการรับรู้และความน่าเชื่อถือบนโลกออนไลน์ วางข้อความเชิงบวกลงบนแพลตฟอร์มที่เหมาะสม เพื่อให้แบรนด์ของคุณเข้าถึงกลุ่มเป้าหมาย "
  },
  {
    icon: "🔍",
    title: "SEO",
    desc: "บริการ SEO ช่วยให้เว็บไซต์ของคุณติดอันดับการค้นหาบน Google เพิ่มการเข้าถึงกลุ่มเป้าหมาย สร้างทราฟฟิกคุณภาพ และต่อยอดเป็นโอกาสในการขายอย่างยั่งยืน "
  },
  
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-content">
        <h2>บริการของเรา</h2>
        <div className="services-grid">
          {services.map((item, idx) => (
            <div className="service-box" key={idx}>
              <div className="service-title">
                <span className="service-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="section-image">
        <img src="https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139398.jpg?strip=info&w=800"
          alt="บริการ" />
      </div> */}
    </section>
  )
}
export default Services