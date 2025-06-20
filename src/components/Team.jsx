const teamMembers = [
  { name: "คุณเอ", img: "https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139397.jpg?strip=info&w=800" },
  { name: "คุณบี", img: "https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139398.jpg?strip=info&w=800" },
  { name: "คุณซี", img: "https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139399.jpg?strip=info&w=800" },
  { name: "คุณดี", img: "https://pdmarketinginnovate.com/wp-content/uploads/2024/09/s__14139395-edited.jpg" },
  { name: "คุณเอ", img: "https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139397.jpg?strip=info&w=800" },
  { name: "คุณบี", img: "https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139398.jpg?strip=info&w=800" },
  { name: "คุณซี", img: "https://pdmarketinginnovate.com/wp-content/uploads/2022/10/s__14139399.jpg?strip=info&w=800" },
  { name: "คุณดี", img: "https://pdmarketinginnovate.com/wp-content/uploads/2024/09/s__14139395-edited.jpg" },
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
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Team