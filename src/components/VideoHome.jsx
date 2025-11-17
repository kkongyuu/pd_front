import React, { useState } from 'react'
import './Css/VideoHome.css';
import pdVideo from '../assets/video/01.mp4';

const VideoHome = () => {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="video-home-container">
      <video
        className="video-home-iframe"
        src={pdVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={showControls} // ใช้ state ควบคุม
        onLoadedData={(e) => e.target.play()}
        onClick={() => setShowControls(true)} // แตะวิดีโอแล้วโชว์ controls
      />
    </div>
  );
};

export default VideoHome;
