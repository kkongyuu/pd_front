import React from 'react'
import './Css/VideoPackage.css';

const VideoPackage = () => {
  return (
    <div className="video-package-container">
      <iframe
        src="https://drive.google.com/file/d/1EhxUT1vXS4Wutha18pnGNxFN3eTCrFgO/preview"
        title="Video from Google Drive"
        allow="autoplay"
        className="video-package-iframe"
      ></iframe>
    </div>
  )
}

export default VideoPackage
