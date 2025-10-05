import React from 'react'
import job1 from '../assets/img/01.jpg'
import job2 from '../assets/img/02.jpg'
import job3 from '../assets/img/03.jpg'
import job4 from '../assets/img/04.jpg'
import job5 from '../assets/img/05.jpg'
import job6 from '../assets/img/06.jpg'
import job7 from '../assets/img/07.jpg'
import job8 from '../assets/img/08.jpg'


const Currentjob = () => {
  return (
    <div className="job-grid">
      <h3>ผลงานที่ผ่านมาก</h3>
      {/* <img src={job1} alt="งาน 1" /> */}
      <img src={job2} alt="งาน 2" />
      <img src={job3} alt="งาน 3" />
      <img src={job4} alt="งาน 4" />
      <img src={job5} alt="งาน 5" />
      <img src={job6} alt="งาน 6" />
      <img src={job7} alt="งาน 7" />
      <img src={job8} alt="งาน 8" />
    </div>
  )
}


export default Currentjob
