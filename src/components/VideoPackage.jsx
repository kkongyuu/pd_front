import React from 'react'
import './Css/VideoPackage.css';
import pdPackageVideo from '../assets/video/02.mp4';

const VideoPackage = () => {
  return (
    <div className="video-package-container">
      <video
              className="video-package-iframe"
              src={pdPackageVideo}
              controls
              autoPlay
              muted
              loop
            />
    </div>
  )
}

export default VideoPackage
