import React, { useState } from 'react';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import Sidebar from './components/Sidebar/Sidebar';
import Comments from './components/Comments/Comments';
import videoDetails from './data/video-details.json';
import TaxtArea from './components/textarea/TaxtArea';
import './App.scss';

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  const handleVideoSelect = (id) => {
    const selectedVideo = videoDetails.find(video => video.id === id);
    setCurrentVideo(selectedVideo);
  };

  return (
    <div className="app">
      <Header />
      <div className='view'>
        <div className="app__content">
          <MainVideo video={currentVideo} />
          <TaxtArea />
          <Comments comments={currentVideo.comments} />
        </div>
        <div className="app__details">
          <Sidebar videos={videoDetails} currentVideoId={currentVideo.id} onVideoSelect={handleVideoSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;

