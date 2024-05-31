import { useState } from 'react';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import videoDetails from './data/video-details.json';

import './App.scss'

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <MainVideo video={currentVideo} />
      </div>
    </div>
  )
}

export default App
