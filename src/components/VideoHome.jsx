import React from 'react'
import './Css/VideoHome.css';
import pdVideo from '../assets/video/01.mp4';

const VideoHome = () => {
  return (
    <div className="video-home-container">
      <video
        className="video-home-iframe"
        src={pdVideo}
        controls
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};


export default VideoHome
