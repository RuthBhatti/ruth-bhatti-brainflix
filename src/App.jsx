import React, { useState } from 'react';
// import './styles/main.scss';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import Sidebar from './components/Sidebar/Sidebar';
import Comments from './components/Comments/Comments';
import videoDetails from './data/video-details.json';
import TaxtArea from './components/textarea/TaxtArea';

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
        <TaxtArea />
        <Comments comments={currentVideo.comments} />
      </div>
      <Sidebar videos={videoDetails} currentVideoId={currentVideo.id} onVideoSelect={handleVideoSelect} />
    </div>
  );
}

export default App;
