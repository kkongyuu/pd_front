import React from 'react'
import './Css/VideoHome.css';

const VideoHome = () => {
  return (
    <div className="video-home-container">
      <iframe
        src="https://drive.google.com/file/d/1JejzRLbgZuXfzi5crG5veZ9TMRmK-XPd/preview"
        title="Video from Google Drive"
        allow="autoplay"
        className="video-home-iframe"
      ></iframe>
    </div>
  );
};


export default VideoHome
