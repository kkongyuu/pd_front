import React, { useState } from 'react'
import './Css/VideoPackage.css';
import pdPackageVideo from '../assets/video/02.mp4';

const VideoPackage = () => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="video-package-container">
      <video
        className="video-package-iframe"
        src={pdPackageVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={showControls} // ใช้ state ควบคุม
        onLoadedData={(e) => e.target.play()}
        onClick={() => setShowControls(true)} // แตะวิดีโอแล้วโชว์ controls
      />
    </div>
  )
}

export default VideoPackage
