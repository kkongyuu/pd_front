// import React from 'react'
import React, { useState } from 'react'
import Contact from '../components/Contact'
import '../page/Css/ContactPage.css'

const ContactPage = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    position: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        alert('ส่งข้อมูลเรียบร้อยแล้ว ✅')
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          company: '',
          position: '',
          message: '',
        })
      } else {
        alert('เกิดข้อผิดพลาดในการส่งข้อมูล ❌')
      }
    } catch (err) {
      console.error(err)
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์ ❌')
    }
  }
  return (
    <>
    <div className="contact-container">
        <h2>ติดต่อเรา</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>ชื่อ</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>นามสกุล</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>เบอร์โทรติดต่อ</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>อีเมล</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>ชื่อบริษัท</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>ตำแหน่ง</label>
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>อธิบายเกี่ยวกับธุรกิจ และ ความต้องการ</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit">ส่งข้อมูล</button>
      </form>
        
      
    </div>
    <Contact />
    </>
    
  )
}

export default ContactPage
