import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainVideo from '../../components/MainVideo/MainVideo';
import Sidebar from '../../components/Sidebar/Sidebar';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import TaxtArea from '../../components/TextArea/TextArea';
import Comments from '../../components/Comments/Comments';
import './HomePage.scss';

const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';    
const API_KEY = '4fe3ee20-bb66-44f7-a6d5-eaf3775e37bd';

function HomePage() {
    const { videoId } = useParams();
    const [mainVideo, setMainVideo] = useState(null);
    const [sideVideos, setSideVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
                setSideVideos(response.data);
            } catch (err) {
                console.error('Error fetching videos:', err);
            }
        };
        fetchVideos();
    }, []);

    useEffect(() => {
        const fetchVideoDetails = async () => {
                try {
                    const response = await axios.get(`${API_URL}/videos/${videoId ? videoId : `84e96018-4022-434e-80bf-000ce4cd12b8`}?api_key=${API_KEY}`);
                    setMainVideo(response.data);
                } catch (err) {
                    console.error('Error fetching video details:', err);
                }
            
        };
        fetchVideoDetails();
    }, [videoId]);

    if (!mainVideo) {
        return <div>Loading...</div>;
    }
console.log(mainVideo)
    return (
        <div className="app">
            <VideoPlayer video={mainVideo} />
            <div className="view">
                <div className="app__content">
                    <MainVideo video={mainVideo} />
                    <TaxtArea />
                    <Comments comments={mainVideo.comments || []} />
                </div>
                <div className="app__details">
                    <Sidebar videos={sideVideos} currentVideoId={mainVideo.id} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
