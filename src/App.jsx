import { useState } from 'react';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import videoDetails from './data/video-details.json';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss'


function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  const handleVideoSelect = (id) => {
    const selectedVideo = videoDetails.find(video => video.id === id);
    setCurrentVideo(selectedVideo);
  };

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <MainVideo video={currentVideo} />
        <Sidebar videos={videoDetails} currentVideoId={currentVideo.id} onVideoSelect={handleVideoSelect} />

      </div>
    </div>
  )
}

export default App
