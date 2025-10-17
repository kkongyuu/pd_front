import React from 'react'
import package1 from '../assets/img/package/01.jpg'
import package2 from '../assets/img/package/02.jpg'
import package3 from '../assets/img/package/03.jpg'
import package4 from '../assets/img/package/04.jpg'
import package5 from '../assets/img/package/05.jpg'
import package6 from '../assets/img/package/06.jpg'
import package7 from '../assets/img/package/07.jpg'
import package8 from '../assets/img/package/08.jpg'
import package9 from '../assets/img/package/09.jpg'
import package10 from '../assets/img/package/10.jpg'
import package11 from '../assets/img/package/11.jpg'
import package12 from '../assets/img/package/12.jpg'
import package13 from '../assets/img/package/13.jpg'
import VideoPackage from '../components/VideoPackage'


const Package = () => {
  return (
    <>
    <VideoPackage/>
    <div className="package-grid">
      <img src={package1} alt="แพ็คเกจ 1" />
      <img src={package2} alt="แพ็คเกจ 2" />
      <img src={package3} alt="แพ็คเกจ 1" />
      <img src={package4} alt="แพ็คเกจ 2" />
      <img src={package5} alt="แพ็คเกจ 1" />
      <img src={package6} alt="แพ็คเกจ 2" />
      <img src={package7} alt="แพ็คเกจ 1" />
      <img src={package8} alt="แพ็คเกจ 2" />
      <img src={package9} alt="แพ็คเกจ 1" />
      <img src={package10} alt="แพ็คเกจ 2" />
      <img src={package11} alt="แพ็คเกจ 2" />
      <img src={package12} alt="แพ็คเกจ 2" />
      <img src={package13} alt="แพ็คเกจ 2" />
    </div>
    </>
    
  )
}

export default Package