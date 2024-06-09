import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadVideo from './pages/VideoUploadPage/VideoUploadPage'; 
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


